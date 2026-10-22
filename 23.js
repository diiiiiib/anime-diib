// Episode data for Blue Lock.
addSeriesEpisodeRange(
  23,
  1,
  24,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/bluelock/${localEpisode}.mp4`,
  episode => `الموسم الأول - الحلقة ${String(episode).padStart(2, '0')}`
);
addSeriesEpisodeRange(
  23,
  25,
  14,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/bluelock/0${localEpisode}.mp4`,
  episode => `الموسم الثاني - الحلقة ${String(episode - 24).padStart(2, '0')}`
);
