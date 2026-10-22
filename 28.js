// Monster Hunter Stories episode files use a leading zero for season two.
addSeriesEpisodeRange(
  28,
  1,
  48,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/monsterhunter/${localEpisode}.mp4`,
  episode => `الموسم الأول - الحلقة ${String(episode).padStart(2, '0')}`
);
addSeriesEpisodeRange(
  28,
  49,
  27,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/monsterhunter/0${localEpisode}.mp4`,
  episode => `الموسم الثاني - الحلقة ${String(episode - 48).padStart(2, '0')}`
);
