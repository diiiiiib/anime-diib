// ANIME_DIIB - ملف جافاسكريبت الرئيسي
const appState = {
  theme: localStorage.getItem('animeTheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

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
  const cards = document.querySelectorAll('.anime-card');
  cards.forEach(card => {
    const keywords = card.dataset.keywords || '';
    card.style.display = !query || keywords.includes(query) ? '' : 'none';
  });
}

function getAnimeById(id) {
  return animes.find(item => Number(item.id) === Number(id));
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
    [...animes].filter(item => item.type === 'movie')
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
  const items = [...animes]
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

  document.getElementById('back-button')?.addEventListener('click', () => window.history.back());
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
    case 'details':
      renderDetailsPage();
      break;
    case 'watch':
      renderWatchPage();
      break;
    case 'account':
      renderAccountPage();
      break;
    default:
      renderHomePage();
  }
}

document.addEventListener('DOMContentLoaded', initPage);
