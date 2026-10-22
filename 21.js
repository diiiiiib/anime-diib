// Kai season one: episodes 1-56 use plain numbers; 57-96 use the dbk prefix.
addSeriesEpisodeRange(
  21,
  1,
  56,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/dbk/${localEpisode}.mp4`,
  episode => `الموسم الأول - الحلقة ${String(episode).padStart(2, '0')}`
);
addSeriesEpisodeRange(
  21,
  57,
  40,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/dbk/dbk${localEpisode + 56}.mp4`,
  episode => `الموسم الأول - الحلقة ${String(episode).padStart(2, '0')}`
);
// Kai season two: filenames are dbk01.mp4 through dbk054.mp4.
addSeriesEpisodeRange(
  21,
  97,
  54,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/dbk/dbk0${localEpisode}.mp4`,
  episode => `الموسم الثاني - الحلقة ${String(episode - 96).padStart(2, '0')}`
);
