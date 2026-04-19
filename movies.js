// ملف البيانات الخاص بالأفلام
// يحتوي على جميع معلومات الأفلام

const movies = [
  {
    id: 21,
    title: "القلعة اللانهاية",
    type: "movie",
    cover: "https://pbs.twimg.com/media/GwT6K7QXoAAIIl6.jpg",
    background: "https://pbs.twimg.com/media/GwT6K7QXoAAIIl6.jpg",
    description: "فيلم قاتل الشياطين: القلعة اللانهاية هو فيلم أنمي يروي قصة تانجيرو كامادو وأصدقائه في معركة ضد الشياطين في قلعة مظلمة.",
    genre: ["أكشن", "رعب", "مغامرة"],
    rating: "9.1",
    year: "2020",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/knyic.mp4" }
    ]
  },
  {
    id: 22,
    title: "المهمة الاخيرة",
    type: "movie",
    cover: "https://www.arabic-toons.com/images/anime/film_36804.jpg",
    background: "https://www.arabic-toons.com/images/anime/film_36804.jpg",
    description: "الفيلم يتناول قصة أنمي Hunter x Hunter في مغامرة مثيرة تدور حول المهمة الأخيرة التي يُطلب من مجموعة من الأبطال أن ينفذوا.",
    genre: ["رومانسي", "دراما", "خيال"],
    rating: "8.9",
    year: "2013",
    episodes: [
      {
        number: 1,
        title: "الفيلم الكامل",
        video: "https://archive.org/download/hhtlm/hhtlm.mp4"}
    ]
  },
  {
    id: 23,
    title: "Phantom rouge",
    type: "movie",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVVvFTZLn3GNxD5SVCGyaQsQbs9_EuLFnrgqb_zORGyKXICYGMHTyF7dehVAczych1GbPDA&s=10",
    background: "https://play-lh.googleusercontent.com/dHOka0wr3nfS5Hk_WnyX5bULld33K_-q90V5HHK1E7KHdHL_rvjcbQXRdSfJorZBAauu=w240-h480-rw",
    description: "فيلم Phantom Rouge هو فيلم أنمي يروي قصة مثيرة تدور حول شخصية غون فريكس، الذي يواجه تحديات جديدة في عالم الصيادين. يتناول الفيلم مغامرات غون وصديقه كيلوا زولديك أثناء مواجهتهما لأعداء جدد واكتشاف أسرار جديدة في عالم الصيادين.",
    genre: ["مغامرة", "خيال", "عائلي"],
    rating: "9.3",
    year: "2013",
    episodes: [
      {
        number: 1,
        title: "الفيلم الكامل",
        video: "https://archive.org/download/hxh1_20251109/hxh1.mp4"}
    ]
  },
  {
    id: 24,
    title: "قطار اللانهاية",
    type: "movie",
    cover: "https://upload.wikimedia.org/wikipedia/ar/thumb/0/01/%D9%82%D8%A7%D8%AA%D9%84_%D8%A7%D9%84%D8%B4%D9%8A%D8%A7%D8%B7%D9%8A%D9%86_%D8%A7%D9%84%D9%81%D9%8A%D9%84%D9%85_%D9%82%D8%B7%D8%A7%D8%B1_%D8%A7%D9%84%D9%84%D8%A7%D9%86%D9%87%D8%A7%D9%8A%D8%A9.jpg/250px-%D9%82%D8%A7%D8%AA%D9%84_%D8%A7%D9%84%D8%B4%D9%8A%D8%A7%D8%B7%D9%8A%D9%86_%D8%A7%D9%84%D9%81%D9%8A%D9%84%D9%85_%D9%82%D8%B7%D8%A7%D8%B1_%D8%A7%D9%84%D9%84%D8%A7%D9%86%D9%87%D8%A7%D9%8A%D8%A9.jpg",
    background: "https://upload.wikimedia.org/wikipedia/ar/thumb/0/01/%D9%82%D8%A7%D8%AA%D9%84_%D8%A7%D9%84%D8%B4%D9%8A%D8%A7%D8%B7%D9%8A%D9%86_%D8%A7%D9%84%D9%81%D9%8A%D9%84%D9%85_%D9%82%D8%B7%D8%A7%D8%B1_%D8%A7%D9%84%D9%84%D8%A7%D9%86%D9%87%D8%A7%D9%8A%D8%A9.jpg/250px-%D9%82%D8%A7%D8%AA%D9%84_%D8%A7%D9%84%D8%B4%D9%8A%D8%A7%D8%B7%D9%8A%D9%86_%D8%A7%D9%84%D9%81%D9%8A%D9%84%D9%85_%D9%82%D8%B7%D8%A7%D8%B1_%D8%A7%D9%84%D9%84%D8%A7%D9%86%D9%87%D8%A7%D9%8A%D8%A9.jpg",
    description: "فيلم قاتل الشياطين: قطار اللانهاية هو فيلم أنمي يروي قصة تانجيرو كامادو وأصدقائه في معركة على متن قطار ملعون.",
    genre: ["أكشن", "رعب", "مغامرة"],
    rating: "9.0",
    year: "2020",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/dsit_20251015/dsit.mp4" }
    ]
  },
  {
    id: 25,
    title: "هجوم العمالقة",
    type: "movie",
    cover: "https://upload.wikimedia.org/wikipedia/ar/2/27/%D9%87%D8%AC%D9%88%D9%85_%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9_%28%D9%81%D9%8A%D9%84%D9%85%29_%D9%85%D9%84%D8%B5%D9%82.jpeg",
    background: "https://upload.wikimedia.org/wikipedia/ar/2/27/%D9%87%D8%AC%D9%88%D9%85_%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9_%28%D9%81%D9%8A%D9%84%D9%85%29_%D9%85%D9%84%D8%B5%D9%82.jpeg",
    description: "فيلم هجوم العمالقة يروي قصة الصراع ضد العمالقة الذين يهددون البشرية.",
    genre: ["أكشن", "رعب", "مغامرة"],
    rating: "8.5",
    year: "2013",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/films/%D9%87%D8%AC%D9%88%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D9%82%D8%A9.mp4" }
    ]
  },
  {
    id: 26,
    title: "رحلة الى أغارثا",
    type: "movie",
    cover: "https://images.justwatch.com/poster/73412707/s718/children-who-chase-lost-voices.jpg",
    background: "https://images.justwatch.com/poster/73412707/s718/children-who-chase-lost-voices.jpg",
    description: "فيلم رحلة الى أغارثا يروي مغامرة مثيرة في عالم خيالي.",
    genre: ["مغامرة", "خيال", "دراما"],
    rating: "7.8",
    year: "2020",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/lis_20251129/lis.mp4" }
    ]
  },
  {
    id: 27,
    title: "ماكيا : الزهرة الموعودة",
    type: "movie",
    cover: "https://upload.wikimedia.org/wikipedia/ar/a/a8/SayoAsa_Theatrical_Release_Poster.jpg",
    background: "https://upload.wikimedia.org/wikipedia/ar/a/a8/SayoAsa_Theatrical_Release_Poster.jpg",
    description: "فيلم ماكيا: الزهرة الموعودة يروي قصة رومانسية ومغامرة.",
    genre: ["رومانسي", "مغامرة", "خيال"],
    rating: "8.0",
    year: "2018",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/wtpfb/wtpfb.mp4" }
    ]
  },
  {
    id: 28,
    title: "شبح الصيف",
    type: "movie",
    cover: "https://m.media-amazon.com/images/M/MV5BZTBhNTkxOWEtYjlmNy00ODI4LWE1MWQtZDU3M2E3ZGRmMDkwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    background: "https://m.media-amazon.com/images/M/MV5BZTBhNTkxOWEtYjlmNy00ODI4LWE1MWQtZDU3M2E3ZGRmMDkwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "فيلم شبح الصيف يروي قصة رعب وتشويق في فصل الصيف.",
    genre: ["رعب", "تشويق", "دراما"],
    rating: "7.5",
    year: "2021",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/sg_20251115/sg.mp4" }
    ]
  },
  {
    id: 29,
    title: "دراغون بول سوبر برولي",
    type: "movie",
    cover: "https://upload.wikimedia.org/wikipedia/ar/1/13/DB_THE_MOVIE_NO._20.jpg",
    background: "https://upload.wikimedia.org/wikipedia/ar/1/13/DB_THE_MOVIE_NO._20.jpg",
    description: "فيلم دراغون بول سوبر برولي يروي قصة برولي القوي في عالم دراغون بول.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "8.2",
    year: "2018",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/dbs/dbsb.mp4" }
    ]
  },
  {
    id: 30,
    title: "كونان في مواجهة كايتو",
    type: "movie",
    cover: "https://a.storyblok.com/f/178900/960x1358/a5804edf13/detective-conan-vs-kaito-kid-teaser-visual-2.jpg/m/filters:quality(95)format(webp)",
    background: "https://a.storyblok.com/f/178900/960x1358/a5804edf13/detective-conan-vs-kaito-kid-teaser-visual-2.jpg/m/filters:quality(95)format(webp)",
    description: "فيلم كونان في مواجهة كايتو يروي مغامرة كونان ضد اللص كايتو.",
    genre: ["أكشن", "مغامرة", "تشويق"],
    rating: "8.1",
    year: "2021",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/conan/con%20kait.mp4" }
    ]
  },
  {
    id: 31,
    title: "ناروتو جزيرة هلال القمر",
    type: "movie",
    cover: "https://upload.wikimedia.org/wikipedia/ar/9/98/Naruto_3rd_Movie_Cover.jpg",
    background: "https://upload.wikimedia.org/wikipedia/ar/9/98/Naruto_3rd_Movie_Cover.jpg",
    description: "فيلم ناروتو جزيرة هلال القمر يروي مغامرة ناروتو في جزيرة هلال القمر.",
    genre: ["أكشن", "مغامرة", "خيال"],
    rating: "7.9",
    year: "2006",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/naruto/mov3.mp4" }
    ]
  },
  {
    id: 32,
    title: "تائهان في فضاء الحب",
    type: "movie",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHL1kg5AeZqxWE8oWyDajeJ5Egp6Dup3udcg&s",
    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHL1kg5AeZqxWE8oWyDajeJ5Egp6Dup3udcg&s",
    description: "فيلم تائهان في فضاء الحب يروي قصة رومانسية في الفضاء.",
    genre: ["رومانسي", "خيال علمي", "دراما"],
    rating: "7.6",
    year: "2020",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/lis_20251129/lis.mp4" }
    ]
  },
  {
    id: 33,
    title: "المخطوفة",
    type: "movie",
    cover: "https://upload.wikimedia.org/wikipedia/ar/d/db/Spirited_Away_Japanese_poster.png",
    background: "https://upload.wikimedia.org/wikipedia/ar/d/db/Spirited_Away_Japanese_poster.png",
    description: "فيلم المخطوفة يروي قصة تشويق وإثارة حول خطف.",
    genre: ["تشويق", "دراما", "إثارة"],
    rating: "7.7",
    year: "2022",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/sa_20251101/Sa.mp4" }
    ]
  },
  {
    id: 34,
    title: "الرحلة",
    type: "movie",
    cover: "https://upload.wikimedia.org/wikipedia/ar/2/28/%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A9_%28%D9%81%D9%8A%D9%84%D9%85_2021%29.jpg",
    background: "https://upload.wikimedia.org/wikipedia/ar/2/28/%D8%A7%D9%84%D8%B1%D8%AD%D9%84%D8%A9_%28%D9%81%D9%8A%D9%84%D9%85_2021%29.jpg",
    description: "فيلم الرحلة يروي قصة مغامرة مثيرة.",
    genre: ["مغامرة", "دراما", "خيال"],
    rating: "7.8",
    year: "2023",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/tj_20251019/tj.mp4" }
    ]
  },
  {
    id: 35,
    title: "اسمك",
    type: "movie",
    cover: "https://m.media-amazon.com/images/I/71YoxjSxCEL._SL1500_.jpg",
    background: "https://m.media-amazon.com/images/I/71YoxjSxCEL._SL1500_.jpg",
    description: "فيلم اسمك يروي قصة رومانسية وخيالية.",
    genre: ["رومانسي", "خيال", "دراما"],
    rating: "8.4",
    year: "2016",
    episodes: [
      { number: 1, title: "الفيلم الكامل", video: "https://archive.org/download/knnw_20251021/knnw.mp4" }
    ]
  },
];


// دالة للحصول على فيلم بواسطة المعرف
function getMovieById(id) {
  return movies.find(movie => movie.id === parseInt(id));
}

// دالة للحصول على جميع الأفلام
function getMovies() {
  return movies;
}

// دالة للبحث عن فيلم بالاسم
function searchMovies(query) {
  const lowerQuery = query.toLowerCase();
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(lowerQuery)
  );
}

// تصدير المتغيرات والدوال
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { movies, getMovieById, getMovies, searchMovies };
}