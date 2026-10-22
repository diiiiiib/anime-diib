// Episode files are grouped by their distinct filename prefixes.
addSeriesEpisodeRange(
  27,
  1,
  25,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/slime/${localEpisode}.mp4`,
  episode => `الموسم الأول - الحلقة ${String(episode).padStart(2, '0')}`
);
addSeriesEpisodeRange(
  27,
  26,
  9,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/slime/${String(localEpisode).padStart(2, '0')}.mp4`,
  episode => `الموسم الثاني - الحلقة ${String(episode - 25).padStart(2, '0')}`
);
addSeriesEpisodeRange(
  27,
  35,
  24,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/slime/${String(localEpisode).padStart(3, '0')}.mp4`,
  episode => `الموسم الثالث - الحلقة ${String(episode - 34).padStart(2, '0')}`
);
