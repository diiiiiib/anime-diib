// Episode data for series 15.
(() => {
  addSeriesEpisodeRange(
    15,
    1,
    13,
    localEpisode => 'https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/' + encodeURIComponent('\u0631\u064a \u0632\u064a\u0631\u0648 \u0627\u0644\u062d\u0644\u0642\u0629 ' + localEpisode + ' \u0645\u062f\u0628\u0644\u062c\u0629.mp4')
  );
  addSeriesEpisodeRange(
    15,
    15,
    25,
    localEpisode => 'https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/' + encodeURIComponent('\u0631\u064a \u0632\u064a\u0631\u0648 \u0627\u0644\u0645\u0648\u0633\u0645 \u0627\u0644\u062b\u0627\u0646\u064a \u0627\u0644\u062d\u0644\u0642\u0629 ' + localEpisode + '.mp4'),
    episode => `\u0627\u0644\u0645\u0648\u0633\u0645 \u0627\u0644\u062b\u0627\u0646\u064a - \u0627\u0644\u062d\u0644\u0642\u0629 ${String(episode - 14).padStart(2, '0')}`
  );
  addSeriesEpisodeRange(
    15,
    40,
    16,
    localEpisode => 'https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/' + encodeURIComponent('\u0631\u064a \u0632\u064a\u0631\u0648 \u0627\u0644\u0645\u0648\u0633\u0645 \u0627\u0644\u062b\u0627\u0644\u062b \u0627\u0644\u062d\u0644\u0642\u0629 ' + localEpisode + '.mp4'),
    episode => `\u0627\u0644\u0645\u0648\u0633\u0645 \u0627\u0644\u062b\u0627\u0644\u062b - \u0627\u0644\u062d\u0644\u0642\u0629 ${String(episode - 39).padStart(2, '0')}`
  );
})();
