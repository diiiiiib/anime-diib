// Lightweight series catalog. Episode lists are loaded only on details/watch pages.
const animes = [
{
    id: 2,
    title: "دراغون بول",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1887/92364.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1887/92364.jpg",
    description: "يتابع الجزء الأول مغامرات سون غوكو منذ طفولته ورحلته في البحث عن كرات التنين.",
    genre: ["أكشن", "مغامرة", "كوميديا"],
    rating: "8.0",
    year: "1986"
  },
{
    id: 3,
    title: "دراغون بول زد",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1277/142022.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1277/142022.jpg",
    description: "تستكمل السلسلة مغامرات غوكو وأصدقائه.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "8.2",
    year: "1989"
  },
{
    id: 4,
    title: "دراغون بول سوبر",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/7/74606.jpg",
    background: "https://cdn.myanimelist.net/images/anime/7/74606.jpg",
    description: "تواصل السلسلة مغامرات غوكو وأصدقائه بعد أحداث دراغون بول زد.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "7.4",
    year: "2015"
  },
{
    id: 5,
    title: "ناروتو",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    background: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    description: "يتابع الأنمي مغامرات ناروتو أوزوماكي، النينجا الشاب الذي يحلم بأن يصبح الهوكاغي ويحظى باعتراف أهل قريته.",
    genre: ["أكشن", "مغامرة", "كوميديا"],
    rating: "8.3",
    year: "2002"
  },
{
    id: 6,
    title: "قاتل الشياطين",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    description: "تدور القصة حول الفتى تانجيرو كامادو الذي يعيش حياة هادئة مع عائلته في الجبال. تتغير حياته بشكل مأساوي عندما تهاجم عائلته من قبل الشياطين، وتتحول أخته الصغيرة إلى شيطان. ينطلق تانجيرو في رحلة للبحث عن علاج لأخته والانتقام من الشياطين الذين قتلوا عائلته.",
    genre: ["أكشن", "مغامرة", "دراما"],
    rating: "9.0",
    year: "2019"
  },
{
    id: 7,
    title: "وان بيس",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    background: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    description: "تدور قصة الأنمي حول مونكي دي لوفي، صبي صغير يأكل ثمرة الشيطان ويحصل على قدرة مطاطية. يحلم لوفي بأن يصبح ملك القراصنة، ويخرج في رحلة للبحث عن الكنز الأسطوري \"ون بيس\".",
    genre: ["أكشن", "مغامرة", "كوميديا"],
    rating: "9.2",
    year: "1999"
  },
{
    id: 8,
    title: "هنتر اكس هنتر",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    description: "تدور قصة الأنمي حول صبي صغير يدعى غون فريكس، الذي يكتشف أن والده، الذي كان يعتقد أنه ميت، هو صياد محترف. قرر غون أن يصبح صيادًا أيضًا للعثور على والده ومعرفة المزيد عن عالم الصيادين.",
    genre: ["أكشن", "غموض", "مغامرات", "دراما"],
    rating: "9.5",
    year: "2011"
  },
{
    id: 9,
    title: "أكاديمية بطلي",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    background: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    description: "تدور القصة حول إيزوكو ميدوريا، صبي يولد بدون قوة خارقة في عالم حيث 80% من البشر يمتلكون قوى خارقة. يحلم إيزوكو بأن يصبح بطلاً مثل بطله المفضل \"أول مايت\".",
    genre: ["أكشن", "كوميديا", "خيال علمي"],
    rating: "9.1",
    year: "2016"
  },
{
    id: 10,
    title: "دكتور ستون",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1711/110614.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1934/109109.jpg",
    description: "تدور القصة حول سينكو إيشيغامي، عبقري في العلوم، الذي يوقظ كل البشرية من سبات استمر لـ 3700 عام بعد أن تحولت إلى حجر بسبب ضوء غامض. يسعى سينكو لإعادة بناء الحضارة باستخدام العلم.",
    genre: ["أكشن", "مغامرة", "خيال علمي"],
    rating: "8.9",
    year: "2019"
  },
{
    id: 11,
    title: "جوجوتسو كايسن",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1610/128064.jpg",
    description: "تدور القصة حول يوجي إيتادوري، طالب ثانوي يمتلك قوة جسدية خارقة. يبتلع يوجي إصبع شيطان مملوكة ليحصل على قوى سحرية، ويصبح عضواً في منظمة جوجوتسو كايسن لمحاربة الشياطين.",
    genre: ["أكشن", "رعب", "خيال"],
    rating: "9.1",
    year: "2020"
  },
{
    id: 12,
    title: "عائلة الجاسوس",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1111/121262.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1901/122037.jpg",
    description: "تدور القصة حول جاسوس يجب عليه إنشاء عائلة مزيفة لإنجاز مهمة سرية. يتزوج من امرأة قاتلة محترفة وينتبل طفلة قادرة على قراءة الأفكار.",
    genre: ["كوميديا", "أكشن", "عائلي"],
    rating: "9.1",
    year: "2022"
  },
{
    id: 13,
    title: "أنا وأنت مختلفان",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1140/154457.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1766/148275.jpg",
    description: "تدور القصة حول طالبين في المدرسة الثانوية، أحدهما شاب هادئ والآخر فتاة مشاغبة، يجدان نفسيهما في علاقة غير متوقعة.",
    genre: ["رومانسي", "دراما", "كوميديا"],
    rating: "8.5",
    year: "2026"
  },
{
    id: 14,
    title: "مونت كريستو",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/10/31264.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1792/98855.jpg",
    description: "تدور القصة حول ألبرت دي مورسيرف، شاب فرنسي يصادف كونت مونت كريستو الغامض، ويكتشف قصة مأساوية من الماضي.",
    genre: ["دراما", "غموض", "تاريخي"],
    rating: "8.7",
    year: "2004"
  },
{
    id: 15,
    title: "ري زيرو",
    type: "series",
    cover: "https://a.storyblok.com/f/178900/4700x6500/53d5978c9a/re-zero-starting-life-in-another-world-season-4-commemorative-illustration.jpg/m/filters:quality(95)format(webp)",
    background: "https://a.storyblok.com/f/178900/4700x6500/53d5978c9a/re-zero-starting-life-in-another-world-season-4-commemorative-illustration.jpg/m/filters:quality(95)format(webp)",
    description: "تدور القصة حول شاب يُدعى سوبارو ناتسوكي، يجد نفسه في عالم غريب بعد أن تم استدعاؤه بطريقة غير متوقعة. يكتشف أنه يمتلك القدرة على العودة بالزمن بعد وفاته، ويستخدم هذه القدرة لمحاولة حماية الأشخاص الذين يحبهم والتغلب على التحديات التي تواجهه.",
    genre: ["رومانسي", "دراما", "اكشن"],
    rating: "9.1",
    year: "2026"
  },
{
    id: 16,
    title: "ون بيس (نسخة واقعية)",
    type: "series",
    cover: "https://upload.wikimedia.org/wikipedia/ar/7/7e/%D9%85%D9%84%D8%B5%D9%82_%D9%85%D8%B3%D9%84%D8%B3%D9%84_%D9%88%D9%86_%D8%A8%D9%8A%D8%B3-2023.jpeg",
    background: "https://upload.wikimedia.org/wikipedia/ar/7/7e/%D9%85%D9%84%D8%B5%D9%82_%D9%85%D8%B3%D9%84%D8%B3%D9%84_%D9%88%D9%86_%D8%A8%D9%8A%D8%B3-2023.jpeg",
    description: "نسخة واقعية من ون بيس تعرض مغامرات لوفي وطاقمه في بحثهم عن الكنز الأسطوري.",
    genre: ["أكشن", "مغامرة", "فانتازيا"],
    rating: "8.0",
    year: "2023"
  },
{
    id: 17,
    title: "أفاتار : مسخر الهواء الأخير",
    type: "series",
    cover: "https://images.justwatch.com/poster/318249140/s332/season-2.jpg",
    background: "https://images.justwatch.com/poster/318249140/s332/season-2.jpg",
    description: "اشتقاق واقعي من أفاتار: مسخر الهواء الأخير يتابع قصة آنغ وأصدقائه في مواجهة أمة النار.",
    genre: ["مغامرة", "خيال", "دراما"],
    rating: "8.2",
    year: "2024"
  },
{
    id: 18,
    title: "كاوبوي بيبوب",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
    background: "https://m.media-amazon.com/images/M/MV5BNzZkZDZhMWQtNzgyZi00NGQxLWE0ZWEtMWQ1OWNlMTNiNDJjXkEyXkFqcGc@._V1_.jpg",
    description: "مسلسل واقعي يقتبس سلسلة Cowboy Bebop ويتابع طاقم صيادي الجوائز في مغامرات فضائية خطيرة.",
    genre: ["أكشن", "خيال علمي", "مغامرة"],
    rating: "8.1",
    year: "2021"
  },
{
    id: 19,
    title: "السيف والرقعة الحاسمة",
    type: "series",
    cover: "https://cdn.spacetoongo.com/%D8%A7%D9%84%D8%B3%D9%8A%D9%81%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%85%D8%A9/%D8%A7%D9%84%D8%B3%D9%8A%D9%81%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%85%D8%A9.jpg",
    background: "https://cdn.spacetoongo.com/%D8%A7%D9%84%D8%B3%D9%8A%D9%81%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%85%D8%A9/%D8%A7%D9%84%D8%B3%D9%8A%D9%81%20%D9%88%D8%A7%D9%84%D8%B1%D9%82%D8%B9%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%85%D8%A9.jpg",
    description: "مسلسل واقعي جديد بعنوان السيف والرقعة الحاسمة يقدم قصة قتالية مشوقة وعالم مليء بالتحديات.",
    genre: ["أكشن", "تشويق", "دراما"],
    rating: "8.3",
    year: "2025"
  },
{
    id: 20,
    title: "جنة الجحيم",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1457/111253.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1640/136285.jpg",
    description: "مسلسل جنة الجحيم يروي قصة مثيرة في عالم مليء بالتحديات والصراعات.",
    genre: ["أكشن", "دراما", "تشويق"],
    rating: "8.0",
    year: "2024"
  },
{
    id: 21,
    title: "دراغون بول كاي",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1102/133990.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1102/133990.jpg",
    description: "نسخة مُعاد تحريرها من دراغون بول زد تركز على أحداث المانغا بإيقاع أسرع.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "7.8",
    year: "2009"
  },
{
    id: 22,
    title: "دراغون بول دايما",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1723/145231.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1723/145231.jpg",
    description: "تبدأ مغامرة جديدة لغوكو وأصدقائه بعد تحوّلهم إلى أجساد أصغر.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "7.7",
    year: "2024"
  },
{
    id: 23,
    title: "بلو لوك",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1258/126929.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1258/126929.jpg",
    description: "يتنافس مهاجمو كرة قدم شباب في مشروع يهدف إلى صناعة المهاجم الأقوى في اليابان.",
    genre: ["رياضة", "دراما", "تشويق"],
    rating: "8.1",
    year: "2022"
  },
{
    id: 24,
    title: "بليتش",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    background: "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
    description: "يحصل إيتشيغو كوروساكي على قوى حاصد الأرواح ويخوض معارك لحماية البشر ومجتمع الأرواح.",
    genre: ["أكشن", "مغامرة", "خارق للطبيعة"],
    rating: "7.9",
    year: "2004"
  },
{
    id: 25,
    title: "دراغون كويست: مغامرة داي",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1499/109126.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1499/109126.jpg",
    description: "ينطلق داي وأصدقاؤه في مغامرة لمواجهة قوى الظلام وإنقاذ العالم.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "7.8",
    year: "2020"
  },
{
    id: 26,
    title: "ناروتو SD",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/13/36475.jpg",
    background: "https://cdn.myanimelist.net/images/anime/13/36475.jpg",
    description: "مغامرات كوميدية قصيرة لشخصيات ناروتو بأسلوب رسوم مبسط.",
    genre: ["كوميديا", "أكشن"],
    rating: "6.5",
    year: "2012"
  },
{
    id: 27,
    title: "تلك المرة التي تجسدت فيها كسلايم",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1069/123309.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1069/123309.jpg",
    description: "يبدأ موظف رحلة جديدة في عالم خيالي بعد أن يتجسد على هيئة سلايم.",
    genre: ["مغامرة", "خيال", "كوميديا"],
    rating: "8.1",
    year: "2018"
  },
{
    id: 28,
    title: "مونستر هنتر",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/7/76232.jpg",
    background: "https://cdn.myanimelist.net/images/anime/7/76232.jpg",
    description: "مغامرات في عالم يعيش فيه البشر إلى جانب الوحوش والتنانين.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "6.4",
    year: "2016"
  },
{
    id: 29,
    title: "حروب ساكورا",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1341/105735.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1341/105735.jpg",
    description: "تواجه فرقة مسرحية في طوكيو تهديدات غامضة بينما تحمي المدينة.",
    genre: ["أكشن", "خيال علمي", "دراما"],
    rating: "5.9",
    year: "2020"
  },
{
    id: 30,
    title: "سولو ليفلينغ",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1801/142390.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1801/142390.jpg",
    description: "يسعى أضعف الصيادين إلى النجاة، ثم يكتسب قدرة فريدة تتيح له التطور بلا حدود.",
    genre: ["أكشن", "خيال", "مغامرة"],
    rating: "8.2",
    year: "2024"
  },
{
    id: 31,
    title: "بوكيمون",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1787/140239.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1787/140239.jpg",
    description: "يسافر مدربون حول العالم لبناء صداقات مع البوكيمونات والتنافس في المعارك.",
    genre: ["مغامرة", "كوميديا", "خيال"],
    rating: "7.4",
    year: "1997"
  },
{
    id: 32,
    title: "لينك كليك",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1135/114867.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1135/114867.jpg",
    description: "يستخدم شياوشي وليو قدرتهما على دخول الصور لكشف أسرار الماضي ومساعدة الآخرين.",
    genre: ["غموض", "دراما", "خارق للطبيعة"],
    rating: "8.7",
    year: "2021"
  },
{
    id: 33,
    title: "ديجيمون أدفنتشر",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1471/99249.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1471/99249.jpg",
    description: "يُسحب أطفال إلى العالم الرقمي، حيث يخوضون مغامرات مع شركائهم من الديجيمون.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "7.8",
    year: "1999"
  },
{
    id: 34,
    title: "المحقق كونان",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    background: "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
    description: "يتابع المحقق كونان مغامرات شينيتشي كودو بعد أن يتحول إلى طفل، ويحل القضايا بهوية جديدة.",
    genre: ["غموض", "جريمة", "مغامرة"],
    rating: "8.2",
    year: "1996"
  },
{
    id: 35,
    title: "هوريميا",
    type: "series",
    cover: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
    background: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
    description: "تتقارب كيوكو هوري وإيزومي ميامورا بعد اكتشاف جوانب مختلفة من شخصيتيهما خارج أجواء المدرسة.",
    genre: ["رومانسي", "كوميديا"],
    rating: "8.2",
    year: "2021"
  }
];

const seriesEpisodes = Object.create(null);
const seriesEpisodeLoads = Object.create(null);
const seriesDataBaseUrl = typeof document !== 'undefined' && document.currentScript
  ? document.currentScript.src
  : '';

function addSeriesEpisodeRange(
  animeId,
  firstEpisode,
  count,
  getVideoUrl,
  getTitle = episode => `الحلقة ${String(episode).padStart(2, '0')}`
) {
  if (!seriesEpisodes[animeId]) seriesEpisodes[animeId] = [];

  for (let offset = 0; offset < count; offset++) {
    const episode = firstEpisode + offset;
    seriesEpisodes[animeId].push({
      number: episode,
      title: getTitle(episode),
      video: getVideoUrl(offset + 1, episode)
    });
  }
}

function loadSeriesEpisodes(id) {
  const key = String(id);
  if (Object.prototype.hasOwnProperty.call(seriesEpisodes, key)) {
    return Promise.resolve(seriesEpisodes[key]);
  }
  if (seriesEpisodeLoads[key]) return seriesEpisodeLoads[key];

  seriesEpisodeLoads[key] = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = new URL(`${encodeURIComponent(key)}.js`, seriesDataBaseUrl).href;
    script.onload = () => {
      script.remove();
      if (Object.prototype.hasOwnProperty.call(seriesEpisodes, key)) {
        resolve(seriesEpisodes[key]);
      } else {
        delete seriesEpisodeLoads[key];
        reject(new Error(`Episode data did not register for series ${key}`));
      }
    };
    script.onerror = () => {
      script.remove();
      delete seriesEpisodeLoads[key];
      reject(new Error(`Failed to load episode data for series ${key}`));
    };
    document.head.appendChild(script);
  });

  return seriesEpisodeLoads[key];
}

async function getAnimeWithEpisodes(id) {
  const anime = getAnimeById(id);
  if (!anime) return null;
  if (anime.type !== 'series') return anime;
  const episodes = await loadSeriesEpisodes(anime.id);
  return { ...anime, episodes };
}

function getAnimeById(id) {
  const key = String(id);
  return animes.find(anime => String(anime.id) === key) ||
    (typeof movies !== 'undefined' && movies.find(movie => String(movie.id) === key));
}

function getSeries() {
  return animes.filter(anime => anime.type === 'series');
}

function getMovies() {
  return [];
}

function searchAnime(query) {
  const lowerQuery = query.toLowerCase();
  return animes.filter(anime => anime.title.toLowerCase().includes(lowerQuery));
}

function searchSeries(query) {
  const lowerQuery = query.toLowerCase();
  return getSeries().filter(anime => anime.title.toLowerCase().includes(lowerQuery));
}

function searchMovies() {
  return [];
}

function getEpisode(animeId, episodeNumber) {
  const anime = getAnimeById(animeId);
  if (!anime || !seriesEpisodes[anime.id]) return null;
  return seriesEpisodes[anime.id].find(ep => ep.number === parseInt(episodeNumber, 10));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { animes, getAnimeById, getSeries, getMovies, searchAnime, searchSeries, searchMovies, getEpisode, loadSeriesEpisodes, getAnimeWithEpisodes };
}
