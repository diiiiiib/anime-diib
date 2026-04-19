// ANIME_DIIB - ملف جافاسكريبت الرئيسي
const appState = {
  theme: localStorage.getItem('animeTheme') || (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

const APP_SUPABASE_URL = 'https://gzedyzcvmghyjvgdfict.supabase.co';
const APP_SUPABASE_ANON_KEY = 'sb_publishable_oOftEW-b7QHB_9myt88qoA_GfLMyWoU';
const supabaseClient = typeof supabase !== 'undefined'
  ? supabase.createClient(APP_SUPABASE_URL, APP_SUPABASE_ANON_KEY)
  : null;

// التأكد من أن supabaseClient متاح
if (!supabaseClient) {
  console.warn('Supabase client not available. Make sure supabase.js is loaded before main.js');
}

const pageName = document.body.dataset.page || '';

function initTheme() {
  applyTheme(appState.theme);
  const button = document.querySelector('.theme-toggle');
  if (!button) return;
  button.addEventListener('click', () => {
    appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
    applyTheme(appState.theme);
    localStorage.setItem('animeTheme', appState.theme);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const icon = document.querySelector('.theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

function initBottomNav() {
  const currentPage = pageName || 'index';
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('href').includes(currentPage));
  });
}

function initBackToTop() {
  const button = document.getElementById('back-to-top');
  if (!button) return;

  window.addEventListener('scroll', () => {
    button.classList.toggle('visible', window.scrollY > 320);
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    filterCards(query);
  });
}

function filterCards(query) {
  const cards = Array.from(document.querySelectorAll('.anime-card, .chat-card'));
  cards.forEach(card => {
    const keywords = card.dataset.keywords || '';
    card.style.display = !query || keywords.includes(query) ? '' : 'none';
  });
}

function getLoggedInUser() {
  const savedUser = localStorage.getItem('userData');
  return savedUser ? JSON.parse(savedUser) : null;
}

async function fetchProfileList() {
  if (!supabaseClient) {
    return [];
  }
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('id,username,avatar_url')
    .order('username', { ascending: true });
  if (error) {
    console.error('Error fetching profiles:', error);
    return [];
  }
  return data || [];
}

async function fetchRecentConversations() {
  if (!supabaseClient) {
    return [];
  }

  const currentUser = getLoggedInUser();
  if (!currentUser) {
    return [];
  }

  try {
    // خطوة 1: التحقق من وجود أي رسائل في قاعدة البيانات
    const { data: allMessagesCount, error: countError } = await supabaseClient
      .from('messages')
      .select('id');
    
    if (countError) {
      console.error('Error counting messages:', countError);
    }

    // خطوة 2: جلب الرسائل الخاصة
    // الرسائل الخاصة: receiver_id != null (سواء room كان null أو أي قيمة غير 'public')
    const { data: allMessages, error } = await supabaseClient
      .from('messages')
      .select('content, created_at, sender_id, receiver_id, room')
      .not('receiver_id', 'is', null) // جلب جميع الرسائل التي لها receiver محدد (خاصة)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching conversations:', error);
      return [];
    }

    // خطوة 3: تصفية الرسائل لاستبعاد الرسائل العامة وتلك التي تشمل المستخدم الحالي
    const userMessages = allMessages
      .filter(msg => msg.room !== 'public') // استبعد الرسائل العامة
      .filter(msg => 
        msg.sender_id === currentUser.supabaseId || 
        msg.receiver_id === currentUser.supabaseId
      );

    // خطوة 4: تجميع المحادثات حسب المستخدم الآخر
    const conversationsMap = new Map();
    const userIdsToFetch = new Set();

    userMessages.forEach(msg => {
      const otherUserId = msg.sender_id === currentUser.supabaseId ? msg.receiver_id : msg.sender_id;
      if (!otherUserId) return;

      userIdsToFetch.add(otherUserId);

      if (!conversationsMap.has(otherUserId)) {
        conversationsMap.set(otherUserId, {
          userId: otherUserId,
          lastMessage: msg.content,
          lastMessageTime: msg.created_at,
          username: 'Loading...',
          avatar_url: 'user.png'
        });
      }
    });

    // خطوة 5: جلب بيانات المستخدمين
    if (userIdsToFetch.size > 0) {
      const { data: users, error: usersError } = await supabaseClient
        .from('profiles')
        .select('id, username, avatar_url')
        .in('id', Array.from(userIdsToFetch));

      if (!usersError && users) {
        users.forEach(user => {
          if (conversationsMap.has(user.id)) {
            const conversation = conversationsMap.get(user.id);
            conversation.username = user.username || 'User';
            conversation.avatar_url = user.avatar_url || 'user.png';
          }
        });
      } else {
        console.warn('Failed to fetch user profiles');
      }
    }

    // خطوة 6: تحويل إلى مصفوفة وترتيب
    const result = Array.from(conversationsMap.values())
      .sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime));

    return result;

  } catch (error) {
    console.error('Error in fetchRecentConversations:', error);
    return [];
  }
}

async function checkMessagesTable() {
  if (!supabaseClient) {
    return false;
  }

  try {
    const { data, error } = await supabaseClient
      .from('messages')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Messages table check failed:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Error checking messages table:', error);
    return false;
  }
}



async function renderChatPage() {
  const friendsContainer = document.getElementById('chat-friends');
  const conversationsContainer = document.getElementById('chat-conversations');
  if (!friendsContainer || !conversationsContainer) return;



  const currentUser = getLoggedInUser();
  const profiles = await fetchProfileList();
  const otherProfiles = profiles.filter(profile => currentUser?.supabaseId !== profile.id);

  // التحقق من وجود جدول messages
  const tableExists = await checkMessagesTable();
  if (!tableExists) {
    conversationsContainer.innerHTML = '<p class="empty-state" style="color: red;">Error: Messages table not found.</p>';
    return;
  }

  if (!currentUser && !profiles.length) {
    friendsContainer.innerHTML = '<p class="empty-state">Please login to view friends.</p>';
    conversationsContainer.innerHTML = '<p class="empty-state">Conversations will appear here after login.</p>';
    return;
  }

  if (!otherProfiles.length) {
    friendsContainer.innerHTML = '<p class="empty-state">لا توجد حسابات أخرى مسجلة حتى الآن.</p>';
  } else {
    friendsContainer.innerHTML = otherProfiles.map(profile => `
      <div class="chat-card" data-keywords="${profile.username.toLowerCase()}">
        <div class="chat-card-inner">
          <img class="chat-avatar" src="${resolveAssetSrc(profile.avatar_url)}" alt="${profile.username}" />
          <div class="chat-card-info">
            <h3>${profile.username}</h3>
            <p>حساب مستخدم · آخر تواجد غير متوفر</p>
          </div>
        </div>
        <a class="action-btn" href="chatroom.html?user=${profile.id}">مراسلة</a>
      </div>
    `).join('');
  }

  // الحصول على المحادثات الحقيقية
  const recentConversations = await fetchRecentConversations();

  if (!recentConversations.length) {
    conversationsContainer.innerHTML = `
      <div class="empty-state">
        <p>❌ No conversations yet.</p>
        <p style="font-size: 14px; color: #666; margin-top: 10px;">
          Start a conversation with a friend from the list on the right.
        </p>
      </div>
    `;
  } else {
    conversationsContainer.innerHTML = recentConversations.map(conversation => {
      const timeAgo = getTimeAgo(new Date(conversation.lastMessageTime));
      return `
        <a href="chatroom.html?user=${conversation.userId}" class="chat-card" data-keywords="${conversation.username.toLowerCase()}">
          <div class="chat-card-inner">
            <img class="chat-avatar" src="${resolveAssetSrc(conversation.avatar_url)}" alt="${conversation.username}" />
            <div class="chat-card-info">
              <h3>${conversation.username}</h3>
              <p>${conversation.lastMessage}</p>
            </div>
          </div>
          <span class="chat-conversation-time">${timeAgo}</span>
        </a>
      `;
    }).join('');
  }
}

async function getChatUserById(id) {
  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('id,username,avatar_url')
    .eq('id', id)
    .maybeSingle();
  if (error) {
    console.error('Supabase getChatUserById error:', error);
    return null;
  }
  return data;
}

async function renderChatRoomPage() {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('user');

  const roomTitle = document.getElementById('chatroom-title');
  const roomType = document.getElementById('chatroom-type');
  const roomDesc = document.getElementById('chatroom-description');
  const chatMessages = document.getElementById('chat-messages');
  if (!roomTitle || !roomType || !roomDesc || !chatMessages) return;

  const user = userId ? await getChatUserById(userId) : null;
  const isPrivate = Boolean(user);

  roomTitle.textContent = isPrivate ? `المحادثة مع ${user.username}` : 'الدردشة العامة';
  roomType.textContent = isPrivate ? 'محادثة خاصة' : 'غرفة عامة';
  roomDesc.textContent = isPrivate ? `تواصل مباشرة مع ${user.username}.` : 'شارك رسالة مع الجميع في الغرفة العامة.';

  // تحميل الرسائل من Supabase
  await loadMessages(isPrivate ? userId : null);
}

async function loadMessages(userId) {
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;

  const currentUser = getLoggedInUser();
  if (!supabaseClient || !currentUser) {
    // عرض رسائل تجريبية إذا لم يكن هناك Supabase أو مستخدم
    const messages = userId ? [
      { sender: 'other', name: 'المستخدم', text: 'مرحباً! كيف حالك اليوم؟', time: 'الآن' },
      { sender: 'user', text: 'أهلاً! أنا بخير، شكراً لك.', time: 'قبل دقيقة' },
      { sender: 'other', name: 'المستخدم', text: 'هل شاهدت الحلقة الأخيرة؟', time: 'قبل 3 دقائق' }
    ] : [
      { sender: 'other', name: 'مريم', text: 'أهلاً بالجميع! هل شاهدتم الحلقة الأخيرة؟', time: 'الآن' },
      { sender: 'user', text: 'نعم، القصة كانت رائعة جداً.', time: 'قبل دقيقة' },
      { sender: 'other', name: 'علي', text: 'أنا متحمس للموسم القادم.', time: 'قبل 5 دقائق' }
    ];

    chatMessages.innerHTML = messages.map(msg => `
      <div class="chat-message-item ${msg.sender === 'user' ? 'user' : ''}">
        <div class="chat-message-bubble">
          ${msg.sender === 'other' ? `<div class="chat-message-name">${msg.name}</div>` : ''}
          <p>${msg.text}</p>
          <span class="chat-message-time">${msg.time}</span>
        </div>
      </div>
    `).join('');
    return;
  }

  try {
    let query = supabaseClient
      .from('messages')
      .select(`
        content,
        sender_id,
        receiver_id,
        room,
        created_at,
        profiles!messages_sender_id_fkey(username)
      `)
      .order('created_at', { ascending: true });

    if (userId) {
      // محادثة خاصة
      query = query.or(`and(sender_id.eq.${currentUser.supabaseId},receiver_id.eq.${userId}),and(sender_id.eq.${userId},receiver_id.eq.${currentUser.supabaseId})`);
      console.log('Private chat query for users:', currentUser.supabaseId, 'and', userId);
    } else {
      // غرفة عامة - تأكد من جلب الرسائل العامة فقط
      query = query.eq('room', 'public').is('receiver_id', null);
      console.log('Public room query - only room=public AND receiver_id=null messages');
    }

    const { data: messages, error } = await query;

    if (error) {
      console.error('Error loading messages:', error);
      showToast('حدث خطأ في تحميل الرسائل.');
      return;
    }

    console.log('Loaded messages:', messages);

    console.log('Loaded messages:', messages?.length || 0);
    if (messages && messages.length > 0) {
      messages.forEach((msg, index) => {
        console.log(`Loaded message ${index + 1}: room=${msg.room}, sender=${msg.sender_id}, receiver=${msg.receiver_id}, content="${msg.content}"`);
      });
    }

    if (!messages || messages.length === 0) {
      chatMessages.innerHTML = '<div class="empty-state">لا توجد رسائل حتى الآن. ابدأ المحادثة!</div>';
      return;
    }

    chatMessages.innerHTML = messages.map(msg => {
      const isUser = msg.sender_id === currentUser.supabaseId;
      const time = new Date(msg.created_at).toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
      return `
        <div class="chat-message-item ${isUser ? 'user' : ''}">
          <div class="chat-message-bubble">
            ${!isUser ? `<div class="chat-message-name">${msg.profiles?.username || 'مستخدم'}</div>` : ''}
            <p>${msg.content}</p>
            <span class="chat-message-time">${time}</span>
          </div>
        </div>
      `;
    }).join('');

    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (error) {
    console.error('Error in loadMessages:', error);
    showToast('حدث خطأ في تحميل الرسائل.');
  }
}

async function handleSendMessage() {
  const input = document.getElementById('chat-message-input');
  const chatMessages = document.getElementById('chat-messages');
  if (!input || !chatMessages) return;
  const text = input.value.trim();
  if (!text) return;

  const currentUser = getLoggedInUser();
  if (!currentUser) {
    showToast('Please login first to send messages.');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const userId = params.get('user');
  const room = params.get('room');

  // Display message locally first
  const messageItem = document.createElement('div');
  messageItem.className = 'chat-message-item user';
  messageItem.innerHTML = `
    <div class="chat-message-bubble">
      <p>${text}</p>
      <span class="chat-message-time">Sending...</span>
    </div>
  `;

  chatMessages.appendChild(messageItem);
  input.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Save to Supabase
  try {
    if (!supabaseClient) {
      messageItem.querySelector('.chat-message-time').textContent = 'Connection error';
      messageItem.classList.add('error');
      return;
    }

    const messageData = {
      sender_id: currentUser.supabaseId,
      receiver_id: userId || null,
      room: room || null,
      content: text,
      created_at: new Date().toISOString()
    };

    // Ensure public messages have receiver_id = null
    if (room === 'public') {
      messageData.receiver_id = null;
    }

    const { data: insertedData, error } = await supabaseClient
      .from('messages')
      .insert([messageData])
      .select();

    if (error) {
      console.error('Error inserting message:', error);
      messageItem.querySelector('.chat-message-time').textContent = 'Failed to send';
      messageItem.classList.add('error');
      showToast('Failed to send message: ' + (error.message || 'unknown error'));
    } else {
      messageItem.querySelector('.chat-message-time').textContent = 'Now';
    }
  } catch (error) {
    console.error('Error in handleSendMessage:', error);
    messageItem.querySelector('.chat-message-time').textContent = 'Error';
    messageItem.classList.add('error');
    showToast('Error: ' + error.message);
  }
}

function getAnimeById(id) {
  return animes.find(item => Number(item.id) === Number(id)) || (typeof movies !== 'undefined' && movies.find(item => Number(item.id) === Number(id)));
}

function resolveAssetSrc(src) {
  if (!src || String(src).trim().toLowerCase() === 'undefined') {
    return fallbackImage;
  }
  return String(src).trim();
}

const fallbackImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22400%22%20height%3D%22600%22%20viewBox%3D%220%200%20400%20600%22%3E%3Crect%20width%3D%22400%22%20height%3D%22600%22%20fill%3D%22%23111727%22/%3E%3Ctext%20x%3D%2220%22%20y%3D%22320%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20font-size%3D%2236%22%20fill%3D%22%23ffffff%22%3EANIME%3C/text%3E%3C/svg%3E';

function getEpisode(animeId, episodeNumber) {
  const anime = getAnimeById(animeId);
  if (!anime || !anime.episodes) return null;
  return anime.episodes.find(ep => Number(ep.number) === Number(episodeNumber));
}

function loadImageWithFallback(img, src) {
  if (!img) return;
  const finalSrc = resolveAssetSrc(src);
  img.onerror = () => {
    img.onerror = null;
    img.src = fallbackImage;
  };
  img.src = finalSrc;
}

function renderCard(anime) {
  const link = document.createElement('a');
  link.href = `details.html?id=${anime.id}`;
  link.className = 'anime-card';
  link.dataset.keywords = `${anime.title} ${anime.description} ${anime.genre.join(' ')} ${anime.type}`.toLowerCase();
  link.setAttribute('aria-label', `${anime.title} - عرض التفاصيل`);
  link.dataset.prefetch = true;

  const image = document.createElement('img');
  image.className = 'anime-card-image';
  image.alt = anime.title;
  image.loading = 'lazy';
  image.src = fallbackImage;
  image.dataset.src = resolveAssetSrc(anime.cover || anime.background);
  image.onerror = () => {
    image.onerror = null;
    image.src = fallbackImage;
  };

  const content = document.createElement('div');
  content.className = 'anime-card-content';

  const title = document.createElement('h3');
  title.className = 'anime-card-title';
  title.textContent = anime.title;

  const meta = document.createElement('div');
  meta.className = 'anime-card-meta';
  meta.innerHTML = `
    <span>${anime.year}</span>
    <span class="anime-card-rating"><i class="fas fa-star"></i> ${anime.rating}</span>
  `;

  content.append(title, meta);
  link.append(image, content);

  return link;
}

function renderCards(container, items) {
  container.innerHTML = '';
  if (!items.length) {
    container.innerHTML = '<div class="loading"><div class="spinner"></div></div>';
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach(anime => {
    fragment.appendChild(renderCard(anime));
  });
  container.appendChild(fragment);
  initImageObserver();
  initHoverPrefetch();
}

function initImageObserver() {
  const lazyImages = Array.from(document.querySelectorAll('img[data-src]'));
  if (!lazyImages.length) return;

  function loadImage(image) {
    const src = resolveAssetSrc(image.dataset.src);
    image.src = src;
    image.removeAttribute('data-src');
    image.closest('.anime-card')?.classList.add('visible');
  }

  // For home page, load all images immediately to avoid CORS issues
  if (pageName === 'index' || pageName === '') {
    lazyImages.forEach(loadImage);
    return;
  }

  if (!('IntersectionObserver' in window)) {
    lazyImages.forEach(loadImage);
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const image = entry.target;
      loadImage(image);
      observer.unobserve(image);
    });
  }, {
    rootMargin: '140px',
    threshold: 0.1
  });

  lazyImages.forEach(image => observer.observe(image));
}

function initHoverPrefetch() {
  document.querySelectorAll('a[data-prefetch]').forEach(link => {
    link.addEventListener('mouseenter', () => {
      const href = link.href;
      if (!document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      }
    }, { once: true });
  });
}

function pickFeaturedItems(items, limit = 8) {
  const withImage = items
    .filter(item => item.cover || item.background)
    .sort((a, b) => Number(b.year || 0) - Number(a.year || 0));

  const withoutImage = items
    .filter(item => !(item.cover || item.background))
    .sort((a, b) => Number(b.year || 0) - Number(a.year || 0));

  return [...withImage, ...withoutImage].slice(0, limit);
}

function renderHomePage() {
  const latest = pickFeaturedItems([...animes].sort((a, b) => Number(b.year || 0) - Number(a.year || 0)));

  const seriesItems = pickFeaturedItems(
    [...animes].filter(item => item.type === 'series')
  );

  const movieItems = pickFeaturedItems(
    typeof movies !== 'undefined' ? [...movies] : [...animes].filter(item => item.type === 'movie')
  );

  renderCards(document.getElementById('latest-anime-container'), latest);
  renderCards(document.getElementById('series-container'), seriesItems);
  renderCards(document.getElementById('movies-container'), movieItems);
}

function renderCategoryPage(type, title) {
  const container = document.getElementById('category-container');
  const pageTitle = document.getElementById('page-title');
  if (!container || !pageTitle) return;
  pageTitle.textContent = title;
  const items = (type === 'movie' && typeof movies !== 'undefined' ? movies : animes)
    .filter(item => item.type === type)
    .sort((a, b) => Number(Boolean(b.cover || b.background)) - Number(Boolean(a.cover || a.background)));
  renderCards(container, items);
}

function renderDetailsPage() {
  const params = new URLSearchParams(window.location.search);
  const animeId = params.get('id');
  const anime = getAnimeById(animeId);
  if (!anime) {
    showError('عذراً، لم نتمكن من العثور على هذا الأنمي.');
    return;
  }

  document.title = `${anime.title} - تفاصيل - ANIME_DIIB`;
  loadImageWithFallback(document.getElementById('anime-background'), anime.background || anime.cover);
  loadImageWithFallback(document.getElementById('anime-cover'), anime.cover || anime.background);
  document.getElementById('anime-title').textContent = anime.title;
  document.getElementById('anime-year').textContent = anime.year;
  document.getElementById('anime-type').textContent = anime.type === 'movie' ? 'فيلم' : 'مسلسل';
  document.getElementById('anime-rating').innerHTML = `<i class="fas fa-star"></i> ${anime.rating}`;
  document.getElementById('anime-description').textContent = anime.description;

  const genres = document.getElementById('anime-genres');
  genres.innerHTML = '';
  anime.genre.forEach(tag => {
    const badge = document.createElement('span');
    badge.className = 'genre-tag';
    badge.textContent = tag;
    genres.appendChild(badge);
  });

  const episodesContainer = document.getElementById('episodes-container');
  episodesContainer.innerHTML = '';
  anime.episodes.forEach(episode => {
    const link = document.createElement('a');
    link.className = 'episode-card';
    link.href = `watch.html?id=${anime.id}&ep=${episode.number}`;
    link.innerHTML = `\n      <div class="episode-number">${episode.number}</div>\n      <div class="episode-title">${episode.title}</div>\n    `;
    episodesContainer.appendChild(link);
  });
}

function renderWatchPage() {
  const params = new URLSearchParams(window.location.search);
  const animeId = params.get('id');
  const episodeNumber = params.get('ep');
  const anime = getAnimeById(animeId);
  const episode = getEpisode(animeId, episodeNumber);

  if (!anime || !episode) {
    showError('عذراً، لم نتمكن من العثور على هذه الحلقة.');
    return;
  }

  document.title = `${anime.title} - الحلقة ${episode.number} - ANIME_DIIB`;
  const player = document.getElementById('video-player');
  if (player) {
    if (episode.video) {
      player.src = episode.video;
      player.load();
      player.play().catch(() => {});
    } else {
      player.removeAttribute('src');
    }
  }

  document.getElementById('episode-title').textContent = `${anime.title} - الحلقة ${episode.number}: ${episode.title}`;

  const episodesList = document.getElementById('episodes-list');
  episodesList.innerHTML = '';
  anime.episodes.forEach(ep => {
    const link = document.createElement('a');
    link.className = 'episode-item';
    link.href = `watch.html?id=${anime.id}&ep=${ep.number}`;
    if (String(ep.number) === String(episode.number)) {
      link.classList.add('active');
    }
    link.innerHTML = `\n      <span class="episode-number">${ep.number}</span>\n      <span class="episode-title">${ep.title}</span>\n    `;
    episodesList.appendChild(link);
  });

  setupShareButtons(anime, episode);
}

function setupShareButtons(anime, episode) {
  const shareTitle = `${anime.title} - الحلقة ${episode.number}: ${episode.title}`;
  const shareUrl = window.location.href;

  document.getElementById('share-facebook')?.addEventListener('click', () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  });

  document.getElementById('share-twitter')?.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  });

  document.getElementById('share-whatsapp')?.addEventListener('click', () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`, '_blank');
  });

  document.getElementById('share-copy')?.addEventListener('click', async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(shareUrl);
      const originalText = button.textContent;
      button.textContent = 'تم النسخ!';
      setTimeout(() => { button.textContent = originalText; }, 2000);
    } catch {
      showToast('تعذر نسخ الرابط.');
    }
  });
}

function showError(message) {
  const container = document.querySelector('.container');
  if (!container) return;
  container.innerHTML = `\n    <div class="error-message">\n      <h2>حدث خطأ</h2>\n      <p>${message}</p>\n      <a href="index.html" class="action-btn">العودة للرئيسية</a>\n    </div>\n  `;
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'action-btn';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '100px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.zIndex = '1100';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function renderAccountPage() {
  // Account page is handled through inline scripts in account.html
}

function initPage() {
  initTheme();
  initBottomNav();
  initBackToTop();
  initSearch();

  switch (pageName) {
    case 'anime':
      renderCategoryPage('series', 'المسلسلات');
      break;
    case 'movie':
      renderCategoryPage('movie', 'الأفلام');
      break;
    case 'chat':
      renderChatPage();
      break;
    case 'chatroom':
      renderChatRoomPage();
      break;
    case 'details':
      renderDetailsPage();
      break;
    case 'watch':
      renderWatchPage();
      break;
    case 'account':
      renderAccountPage();
      break;
    case 'notifications':
      // Notifications page handled through inline scripts
      break;
    default:
      renderHomePage();
  }
}

function getTimeAgo(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return 'الآن';
  if (diffInSeconds < 3600) return `منذ ${Math.floor(diffInSeconds / 60)} دقيقة`;
  if (diffInSeconds < 86400) return `منذ ${Math.floor(diffInSeconds / 3600)} ساعة`;
  if (diffInSeconds < 604800) return `منذ ${Math.floor(diffInSeconds / 86400)} يوم`;

  return date.toLocaleDateString('ar-SA', { month: 'short', day: 'numeric' });
}

document.addEventListener('DOMContentLoaded', initPage);
