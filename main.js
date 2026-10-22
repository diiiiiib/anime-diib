// ANIME_DIIB - ملف جافاسكريبت الرئيسي
const appState = {
  theme: localStorage.getItem('animeTheme') || (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

const pageName = document.body.dataset.page || '';
let homeCatalogItems = [];
let homeLatestItems = [];

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

  const searchToggle = document.querySelector('[data-toggle-search]');
  const searchContainer = searchInput.closest('.topbar-search');
  const topbarContent = searchInput.closest('.topbar-content');

  searchToggle?.addEventListener('click', () => {
    const isOpen = searchToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      searchInput.hidden = true;
      searchInput.setAttribute('aria-hidden', 'true');
      searchToggle.setAttribute('aria-expanded', 'false');
      searchToggle.setAttribute('aria-label', 'فتح البحث');
      searchContainer?.classList.remove('is-open');
      topbarContent?.classList.remove('is-search-open');
      searchToggle.focus();
      return;
    }

    searchInput.hidden = false;
    searchInput.setAttribute('aria-hidden', 'false');
    searchToggle.setAttribute('aria-expanded', 'true');
    searchToggle.setAttribute('aria-label', 'إغلاق البحث');
    searchContainer?.classList.add('is-open');
    topbarContent?.classList.add('is-search-open');
    searchInput.focus();
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    filterCards(query);
  });

  searchInput.addEventListener('keydown', event => {
    if (event.key === 'Escape' && searchToggle?.getAttribute('aria-expanded') === 'true') {
      searchToggle.click();
    }
  });
}

function filterCards(query) {
  if (pageName === 'index' && homeCatalogItems.length) {
    const discover = document.getElementById('home-discover');
    const latestSection = document.getElementById('latest-anime-container')?.closest('.home-section');
    const seriesSection = document.getElementById('series-container')?.closest('.home-section');
    const moviesSection = document.getElementById('movies-container')?.closest('.home-section');
    const title = document.getElementById('home-latest-title');
    const caption = title?.querySelector('.section-caption');
    const viewAll = title?.querySelector('.view-all');
    const resultsContainer = document.getElementById('latest-anime-container');

    if (query) {
      if (discover) discover.hidden = true;
      if (seriesSection) seriesSection.hidden = true;
      if (moviesSection) moviesSection.hidden = true;
      if (title?.firstChild) title.firstChild.nodeValue = 'نتائج البحث';
      if (caption) caption.hidden = true;
      if (viewAll) viewAll.hidden = true;

      const matches = homeCatalogItems.filter(item => {
        const keywords = `${item.title} ${item.description} ${item.genre.join(' ')} ${item.type}`.toLowerCase();
        return keywords.includes(query);
      });
      if (matches.length) {
        renderCards(resultsContainer, matches);
      } else if (resultsContainer) {
        resultsContainer.innerHTML = '';
        const emptyState = document.createElement('p');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'لا توجد أنميات تطابق بحثك.';
        resultsContainer.appendChild(emptyState);
      }
      return;
    }

    if (discover) discover.hidden = false;
    if (seriesSection) seriesSection.hidden = false;
    if (moviesSection) moviesSection.hidden = false;
    if (title?.firstChild) title.firstChild.nodeValue = 'أحدث الإضافات';
    if (caption) caption.hidden = false;
    if (viewAll) viewAll.hidden = false;
    renderCards(resultsContainer, homeLatestItems);
  }

  const cards = Array.from(document.querySelectorAll('.anime-card, .chat-card'));
  cards.forEach(card => {
    const keywords = card.dataset.keywords || '';
    card.style.display = !query || keywords.includes(query) ? '' : 'none';
  });
}

function getAnimeById(id) {
  const key = String(id);
  return animes.find(item => String(item.id) === key) ||
    (typeof movies !== 'undefined' && movies.find(item => String(item.id) === key));
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

function renderHomeCarousel(items) {
  const track = document.getElementById('home-carousel-track');
  const dots = document.getElementById('home-carousel-dots');
  if (!track || !dots) return;

  const featured = items
    .filter(item => item.cover || item.background)
    .sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0))
    .slice(0, 12);
  if (!featured.length) return;

  let activeIndex = 0;
  let autoplayTimer;
  let scrollFrame;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = featured.map(anime => {
    const card = renderCard(anime);
    card.classList.add('home-carousel-card');
    const image = card.querySelector('.anime-card-image');
    image.dataset.src = resolveAssetSrc(anime.background || anime.cover);
    return card;
  });

  function setActiveIndex(index) {
    activeIndex = index;
    dots.querySelectorAll('button').forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  function showSlide(index, behavior = 'smooth') {
    const nextIndex = (index + cards.length) % cards.length;
    setActiveIndex(nextIndex);
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = cards[0].getBoundingClientRect().width + gap;
    const direction = getComputedStyle(track).direction;
    track.scrollTo({
      left: (direction === 'rtl' ? -1 : 1) * nextIndex * step,
      behavior: reducedMotion ? 'auto' : behavior
    });
  }

  track.replaceChildren(...cards);
  dots.replaceChildren();
  featured.forEach((anime, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'home-carousel-dot';
    dot.setAttribute('aria-label', `عرض ${anime.title}`);
    dot.addEventListener('click', () => {
      showSlide(index);
      restartAutoplay();
    });
    dots.appendChild(dot);
  });

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
  }

  function startAutoplay() {
    stopAutoplay();
    if (!reducedMotion && cards.length > 1) {
      autoplayTimer = window.setInterval(() => showSlide(activeIndex + 1), 4200);
    }
  }

  function restartAutoplay() {
    startAutoplay();
  }

  const carousel = track.closest('.home-discover');
  track.addEventListener('scroll', () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(() => {
      scrollFrame = undefined;
      const viewport = track.getBoundingClientRect();
      const inlineStart = getComputedStyle(track).direction === 'rtl' ? viewport.right : viewport.left;
      const closestIndex = cards.reduce((closest, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().right - inlineStart);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
      setActiveIndex(closestIndex);
    });
  }, { passive: true });
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) startAutoplay();
  });

  initImageObserver();
  initHoverPrefetch();
  showSlide(0, 'auto');
  startAutoplay();
}

function renderHomePage() {
  const allItems = [...animes, ...(typeof movies !== 'undefined' ? movies : [])];
  homeCatalogItems = allItems;
  const latest = pickFeaturedItems(
    allItems.sort((a, b) => Number(b.year || 0) - Number(a.year || 0)),
    8
  );
  homeLatestItems = latest;

  const seriesItems = pickFeaturedItems(
    [...animes].filter(item => item.type === 'series')
  );

  const movieItems = pickFeaturedItems(
    typeof movies !== 'undefined' ? [...movies] : [...animes].filter(item => item.type === 'movie')
  );

  renderHomeCarousel(allItems);
  renderCards(document.getElementById('latest-anime-container'), latest);
  renderCards(document.getElementById('series-container'), seriesItems);
  renderCards(document.getElementById('movies-container'), movieItems);
}

function renderCategoryPage(type, title) {
  const container = document.getElementById('category-container');
  const pageTitle = document.getElementById('page-title');
  if (!container) return;
  if (pageTitle) pageTitle.textContent = title;
  const items = (type === 'movie' && typeof movies !== 'undefined' ? movies : animes)
    .filter(item => item.type === type)
    .sort((a, b) => Number(Boolean(b.cover || b.background)) - Number(Boolean(a.cover || a.background)));
  renderCards(container, items);
}

async function renderDetailsPage() {
  const params = new URLSearchParams(window.location.search);
  const animeId = params.get('id');
  const anime = getAnimeById(animeId);
  if (!anime) {
    showError('عذراً، لم نتمكن من العثور على هذا الأنمي.');
    return;
  }

  let animeWithEpisodes;
  try {
    animeWithEpisodes = await getAnimeWithEpisodes(animeId);
  } catch (error) {
    console.error('Failed to load anime episode data:', error);
    showError('تعذر تحميل حلقات هذا الأنمي. يرجى المحاولة مرة أخرى.');
    return;
  }

  document.title = `${anime.title} - تفاصيل - ANIME_DIIB`;
  loadImageWithFallback(document.getElementById('anime-background'), anime.background || anime.cover);
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
  if (animeWithEpisodes.episodes.length === 0) {
    episodesContainer.textContent = 'لا تتوفر حلقات لهذا المسلسل حاليًا.';
    return;
  }

  animeWithEpisodes.episodes.forEach(episode => {
    const link = document.createElement('a');
    link.className = 'episode-card';
    link.href = `watch.html?id=${anime.id}&ep=${episode.number}`;
    link.innerHTML = `\n      <div class="episode-number">${episode.number}</div>\n      <div class="episode-title">${episode.title}</div>\n    `;
    episodesContainer.appendChild(link);
  });
}

async function renderWatchPage() {
  const params = new URLSearchParams(window.location.search);
  const animeId = params.get('id');
  const episodeNumber = params.get('ep');
  const anime = getAnimeById(animeId);

  if (!anime) {
    showError('عذراً، لم نتمكن من العثور على هذه الحلقة.');
    return;
  }

  let animeWithEpisodes;
  try {
    animeWithEpisodes = await getAnimeWithEpisodes(animeId);
  } catch (error) {
    console.error('Failed to load anime episode data:', error);
    showError('تعذر تحميل حلقات هذا الأنمي. يرجى المحاولة مرة أخرى.');
    return;
  }
  const episode = getEpisode(animeId, episodeNumber) ||
    animeWithEpisodes.episodes.find(ep => Number(ep.number) === Number(episodeNumber));

  if (!episode) {
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
  animeWithEpisodes.episodes.forEach(ep => {
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
    case 'details':
      renderDetailsPage();
      break;
    case 'watch':
      renderWatchPage();
      break;
    case 'notifications':
      // Notifications page handled through inline scripts
      break;
    case 'settings':
    case 'app':
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
