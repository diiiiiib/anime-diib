// Confirmed Conan episodes: con1-con522, part 11 episodes 523-573 and 575-581,
// and dubbed episodes 1101-1215.
addSeriesEpisodeRange(
  34,
  1,
  522,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/conan/con${localEpisode}.mp4`
);
addSeriesEpisodeRange(
  34,
  523,
  51,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/conan/${encodeURIComponent(`المحقق كونان الجزء 11 الحلقة ${localEpisode + 522} مدبلجة.mp4`)}`
);
addSeriesEpisodeRange(
  34,
  575,
  7,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/conan/${encodeURIComponent(`المحقق كونان الجزء 11 الحلقة ${localEpisode + 574} مدبلجة.mp4`)}`
);
addSeriesEpisodeRange(
  34,
  1101,
  115,
  localEpisode => `https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/conan/${encodeURIComponent(`المحقق كونان الحلقة ${localEpisode + 1100} مدبلجة.mp4`)}`
);
