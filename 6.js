// Episode data for series 6.
(() => {
  addSeriesEpisodeRange(6, 1, 26, localEpisode => 'https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/' + (localEpisode === 7 ? '07' : localEpisode) + '.mp4');
  addSeriesEpisodeRange(6, 27, 11, localEpisode => 'https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/0' + localEpisode + '.mp4');
  addSeriesEpisodeRange(6, 38, 10, (localEpisode) => 'https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/00' + localEpisode + '.mp4');
  addSeriesEpisodeRange(6, 48, 1, (localEpisode) => 'https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/0001.mp4');
})();
