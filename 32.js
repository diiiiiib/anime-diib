// Episode data for Link Click.
addSeriesEpisodeRange(
  32,
  1,
  11,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/linkclick/${localEpisode}.mp4`,
  episode => `الموسم الأول - الحلقة ${String(episode).padStart(2, '0')}`
);
addSeriesEpisodeRange(
  32,
  12,
  12,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/linkclick/0${localEpisode}.mp4`,
  episode => `الموسم الثاني - الحلقة ${String(episode - 11).padStart(2, '0')}`
);
