const performanceUtils = {
  initLazyImages() {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.loading = 'lazy';
    });
  },

  initVideoOptimizations() {
    const video = document.querySelector('video');
    if (!video) return;
    video.playsInline = true;
    video.setAttribute('preload', 'metadata');
    video.controlsList = 'nodownload nofullscreen noremoteplayback';
  },

  initMobileOptimizations() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      document.documentElement.classList.add('mobile');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  performanceUtils.initLazyImages();
  performanceUtils.initMobileOptimizations();
});
