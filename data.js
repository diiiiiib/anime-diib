// ملف البيانات الرئيسي - يحتوي على جميع معلومات الأنميات
// يمكنك إضافة أنميات جديدة بسهولة عن طريق إضافة كائنات جديدة إلى مصفوفة animes

const animes = [


  {
    id: 6,
    title: "قاتل الشياطين",
    type: "series",
    cover: "https://shahid.mbc.net/mediaObject/7c08e983-4ce1-4c30-8d45-cfe3c5448073",
    background: "https://shahid.mbc.net/mediaObject/7c08e983-4ce1-4c30-8d45-cfe3c5448073",
    description: "تدور القصة حول الفتى تانجيرو كامادو الذي يعيش حياة هادئة مع عائلته في الجبال. تتغير حياته بشكل مأساوي عندما تهاجم عائلته من قبل الشياطين، وتتحول أخته الصغيرة إلى شيطان. ينطلق تانجيرو في رحلة للبحث عن علاج لأخته والانتقام من الشياطين الذين قتلوا عائلته.",
    genre: ["أكشن", "مغامرة", "دراما"],
    rating: "9.0",
    year: "2019",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/14.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/15.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/16.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/17.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/18.mp4" },
      { number: 19, title: "الحلقة التاسعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/19.mp4" },
      { number: 20, title: "الحلقة العشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/20.mp4" },
      { number: 21, title: "الحلقة الحادية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/21.mp4" },
      { number: 22, title: "الحلقة الثانية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/22.mp4" },
      { number: 23, title: "الحلقة الثالثة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/23.mp4" },
      { number: 24, title: "الحلقة الرابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/24.mp4" },
      { number: 25, title: "الحلقة الخامسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/25.mp4" },
      { number: 26, title: "الحلقة السادسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/26.mp4" },
      { number: 27, title: "الحلقة السابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/01.mp4" },
      { number: 28, title: "الحلقة الثامنة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/02.mp4" },
      { number: 29, title: "الحلقة التاسعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/03.mp4" },
      { number: 30, title: "الحلقة الثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/04.mp4" },
      { number: 31, title: "الحلقة الحادية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/05.mp4" },
      { number: 32, title: "الحلقة الثانية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/06.mp4" },
      { number: 33, title: "الحلقة الثالثة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/07.mp4" },
      { number: 34, title: "الحلقة الرابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/08.mp4" },
      { number: 35, title: "الحلقة الخامسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/09.mp4" },
      { number: 36, title: "الحلقة السادسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/10.mp4" },
      { number: 37, title: "الحلقة السابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/11.mp4" },
      { number: 38, title: "الحلقة الثامنة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/12.mp4" },
      { number: 39, title: "الحلقة التاسعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/13.mp4" },
      { number: 40, title: "الحلقة الأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/14.mp4" },
      { number: 41, title: "الحلقة الحادية والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/15.mp4" },
      { number: 42, title: "الحلقة الثانية والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/16.mp4" },
      { number: 43, title: "الحلقة الثالثة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/17.mp4" },
      { number: 44, title: "الحلقة الرابعة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/18.mp4" },
      { number: 45, title: "الحلقة الخامسة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/kimetsu/19.mp4" }    
      
      
    ]
  },
  {
    id: 7,
    title: "وان بيس",
    type: "series",
    cover: "https://upload.wikimedia.org/wikipedia/ar/thumb/f/f2/One_Piece_-_The_Movie.jpg/250px-One_Piece_-_The_Movie.jpg",
    background: "https://upload.wikimedia.org/wikipedia/ar/thumb/f/f2/One_Piece_-_The_Movie.jpg/250px-One_Piece_-_The_Movie.jpg",
    description: "تدور قصة الأنمي حول مونكي دي لوفي، صبي صغير يأكل ثمرة الشيطان ويحصل على قدرة مطاطية. يحلم لوفي بأن يصبح ملك القراصنة، ويخرج في رحلة للبحث عن الكنز الأسطوري \"ون بيس\".",
    genre: ["أكشن", "مغامرة", "كوميديا"],
    rating: "9.2",
    year: "1999",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/14.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/15.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/16.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/17.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/18.mp4" },
      { number: 19, title: "الحلقة التاسعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/19.mp4" },
      { number: 20, title: "الحلقة العشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/20.mp4" },
      { number: 21, title: "الحلقة الحادية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/21.mp4" },
      { number: 22, title: "الحلقة الثانية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/22.mp4" },
      { number: 23, title: "الحلقة الثالثة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/23.mp4" },
      { number: 24, title: "الحلقة الرابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/24.mp4" },
      { number: 25, title: "الحلقة الخامسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/25.mp4" },
      { number: 26, title: "الحلقة السادسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/26.mp4" },
      { number: 27, title: "الحلقة السابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/27.mp4" },
      { number: 28, title: "الحلقة الثامنة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/28.mp4" },
      { number: 29, title: "الحلقة التاسعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/29.mp4" },
      { number: 30, title: "الحلقة الثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/30.mp4" },
      { number: 31, title: "الحلقة الحادية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/31.mp4" },
      { number: 32, title: "الحلقة الثانية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/32.mp4" },
      { number: 33, title: "الحلقة الثالثة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/33.mp4" },
      { number: 34, title: "الحلقة الرابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/34.mp4" },
      { number: 35, title: "الحلقة الخامسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/35.mp4" },
      { number: 36, title: "الحلقة السادسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/36.mp4" },
      { number: 37, title: "الحلقة السابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/37.mp4" },
      { number: 38, title: "الحلقة الثامنة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/38.mp4" },
      { number: 39, title: "الحلقة التاسعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/39.mp4" },
      { number: 40, title: "الحلقة الأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/40.mp4" },
      { number: 41, title: "الحلقة الحادية والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/41.mp4" },
      { number: 42, title: "الحلقة الثانية والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/42.mp4" },
      { number: 43, title: "الحلقة الثالثة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/43.mp4" },
      { number: 44, title: "الحلقة الرابعة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/44.mp4" },
      { number: 45, title: "الحلقة الخامسة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/45.mp4" },
      { number: 46, title: "الحلقة السادسة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/46.mp4" },
      { number: 47, title: "الحلقة السابعة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/47.mp4" },
      { number: 48, title: "الحلقة الثامنة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/48.mp4" },
      { number: 49, title: "الحلقة التاسعة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/49.mp4" },
      { number: 50, title: "الحلقة الخمسون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/op/50.mp4" }
      
    ]
  },
  {
    id: 8,
    title: "هنتر اكس هنتر",
    type: "series",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoNOWhb_9ogKBGiNIusVJbYMvxMBFvZTetg&s",
    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoNOWhb_9ogKBGiNIusVJbYMvxMBFvZTetg&s",
    description: "تدور قصة الأنمي حول صبي صغير يدعى غون فريكس، الذي يكتشف أن والده، الذي كان يعتقد أنه ميت، هو صياد محترف. قرر غون أن يصبح صيادًا أيضًا للعثور على والده ومعرفة المزيد عن عالم الصيادين.",
    genre: ["أكشن", "غموض", "مغامرات", "دراما"],
    rating: "9.5",
    year: "2011",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/14.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/15.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/16.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/17.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/18.mp4" },
      { number: 19, title: "الحلقة التاسعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/19.mp4" },
      { number: 20, title: "الحلقة العشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/20.mp4" },
      { number: 21, title: "الحلقة الحادية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/21.mp4" },
      { number: 22, title: "الحلقة الثانية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/22.mp4" },
      { number: 23, title: "الحلقة الثالثة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/23.mp4" },
      { number: 24, title: "الحلقة الرابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/24.mp4" },
      { number: 25, title: "الحلقة الخامسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/25.mp4" },
      { number: 26, title: "الحلقة السادسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/26.mp4" },
      { number: 27, title: "الحلقة السابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/27.mp4" },
      { number: 28, title: "الحلقة الثامنة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/28.mp4" },
      { number: 29, title: "الحلقة التاسعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/29.mp4" },
      { number: 30, title: "الحلقة الثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/30.mp4" },
      { number: 31, title: "الحلقة الحادية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/31.mp4" },
      { number: 32, title: "الحلقة الثانية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/32.mp4" },
      { number: 33, title: "الحلقة الثالثة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/33.mp4" },
      { number: 34, title: "الحلقة الرابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/34.mp4" },
      { number: 35, title: "الحلقة الخامسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/35.mp4" },
      { number: 36, title: "الحلقة السادسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/36.mp4" },
      { number: 37, title: "الحلقة السابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/37.mp4" },
      { number: 38, title: "الحلقة الثامنة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/38.mp4" },
      { number: 39, title: "الحلقة التاسعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/39.mp4" },
      { number: 40, title: "الحلقة الأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/40.mp4" },
      { number: 41, title: "الحلقة الحادية والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/41.mp4" },
      { number: 42, title: "الحلقة الثانية والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/42.mp4" },
      { number: 43, title: "الحلقة الثالثة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/43.mp4" },
      { number: 44, title: "الحلقة الرابعة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/44.mp4" },
      { number: 45, title: "الحلقة الخامسة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/45.mp4" },
      { number: 46, title: "الحلقة السادسة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/46.mp4" },
      { number: 47, title: "الحلقة السابعة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/47.mp4" },
      { number: 48, title: "الحلقة التامنة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/48.mp4" },
      { number: 49, title: "الحلقة التاسعة والأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/49.mp4" },
      { number: 50, title: "الحلقة الخمسون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/hxh2011/50.mp4" }

      
    ]
  },
  {
    id: 9,
    title: "أكاديمية بطلي",
    type: "series",
    cover: "https://a.storyblok.com/f/178900/1064x1596/d057641427/my-hero-academia-season-7-key-art-tall.png/m/filters:quality(95)format(webp)",
    background: "https://a.storyblok.com/f/178900/1064x1596/d057641427/my-hero-academia-season-7-key-art-tall.png/m/filters:quality(95)format(webp)",
    description: "تدور القصة حول إيزوكو ميدوريا، صبي يولد بدون قوة خارقة في عالم حيث 80% من البشر يمتلكون قوى خارقة. يحلم إيزوكو بأن يصبح بطلاً مثل بطله المفضل \"أول مايت\".",
    genre: ["أكشن", "كوميديا", "خيال علمي"],
    rating: "9.1",
    year: "2016",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/01.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/02.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/03.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/04.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/05.mp4" },
      { number: 19, title: "الحلقة التاسعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/06.mp4" },
      { number: 20, title: "الحلقة العشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/07.mp4" },
      { number: 21, title: "الحلقة الحادية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/08.mp4" },
      { number: 22, title: "الحلقة الثانية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/09.mp4" },
      { number: 23, title: "الحلقة الثالثة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/010.mp4" },
      { number: 24, title: "الحلقة الرابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/011.mp4" },
      { number: 25, title: "الحلقة الخامسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/012.mp4" },
      { number: 26, title: "الحلقة السادسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/013.mp4" },
      { number: 27, title: "الحلقة السابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/014.mp4" },
      { number: 28, title: "الحلقة الثامنة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/015.mp4" },
      { number: 29, title: "الحلقة التاسعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/016.mp4" },
      { number: 30, title: "الحلقة الثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/017.mp4" },
      { number: 31, title: "الحلقة الحادية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/018.mp4" },
      { number: 32, title: "الحلقة الثانية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/019.mp4" },
      { number: 33, title: "الحلقة الثالثة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/020.mp4" },
      { number: 34, title: "الحلقة الرابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/021.mp4" },
      { number: 35, title: "الحلقة الخامسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/022.mp4" },
      { number: 36, title: "الحلقة السادسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/023.mp4" },
      { number: 37, title: "الحلقة السابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/024.mp4" },
      { number: 38, title: "الحلقة الثامنة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/025.mp4" },
      { number: 39, title: "الحلقة التاسعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/001.mp4" },
      { number: 40, title: "الحلقة الأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/002.mp4" },
      { number: 41, title: "الحلقة الحادية والاربعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/003.mp4" },
      { number: 42, title: "الحلقة الثانية والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/004.mp4" },
      { number: 43, title: "الحلقة الثالثة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/005.mp4" },
      { number: 44, title: "الحلقة الرابعة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/006.mp4" },
      { number: 45, title: "الحلقة الخامسة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/007.mp4" },
      { number: 46, title: "الحلقة السادسة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/008.mp4" },
      { number: 47, title: "الحلقة السابعة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/009.mp4" },
      { number: 48, title: "الحلقة الثامنة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0010.mp4" },
      { number: 49, title: "الحلقة التاسعة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0011.mp4" },
      { number: 50, title: "الحلقة الخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0012.mp4" },
      { number: 51, title: "الحلقة  الواحد والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0013.mp4" },
      { number: 52, title: "الحلقة الثانية والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0014.mp4" },
      { number: 53, title: "الحلقة الثالثة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0015.mp4" },
      { number: 54, title: "الحلقة الرابعة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0016.mp4" },
      { number: 55, title: "الحلقة الخامسة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0017.mp4" },
      { number: 56, title: "الحلقة السادسة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0018.mp4" },
      { number: 57, title: "الحلقة السابعة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0019.mp4" },
      { number: 58, title: "الحلقة الثامنة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0020.mp4" },
      { number: 59, title: "الحلقة التاسعة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0021.mp4" },
      { number: 60, title: "الحلقة الستون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0022.mp4" },
      { number: 61, title: "الحلقة الحادية والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0023.mp4" },
      { number: 62, title: "الحلقة الثانية والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0024.mp4" },
      { number: 63, title: "الحلقة الثالثة والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0025.mp4" },
      { number: 64, title: "الحلقة الرابعة والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0001.mp4" },
      { number: 65, title: "الحلقة الخامسة والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0002.mp4" },
      { number: 66, title: "الحلقة السادسة والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0003.mp4" },
      { number: 67, title: "الحلقة السابعة والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0004.mp4" },
      { number: 68, title: "الحلقة الثامنة والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0005.mp4" },
      { number: 69, title: "الحلقة التاسعة والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0006.mp4" },
      { number: 70, title: "الحلقة السبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0007.mp4" },
      { number: 71, title: "الحلقة الواحدة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0008.mp4" },
      { number: 72, title: "الحلقة الثانية والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/0009.mp4" },
      { number: 73, title: "الحلقة الثالثة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00010.mp4" },
      { number: 74, title: "الحلقة الرابعة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00011.mp4" },
      { number: 75, title: "الحلقة الخامسة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00012.mp4" },
      { number: 76, title: "الحلقة السادسة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00013.mp4" },
      { number: 77, title: "الحلقة السابعة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00014.mp4" },
      { number: 78, title: "الحلقة الثامنة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00015.mp4" },
      { number: 79, title: "الحلقة التاسعة والسبعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00016.mp4" },
      { number: 80, title: "الحلقة الثمانين", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00017.mp4" },
      { number: 81, title: "الحلقة الواحدة والثمانين", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00018.mp4" },
      { number: 82, title: "الحلقة الثانية والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00019.mp4" },
      { number: 83, title: "الحلقة التالثة والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00020.mp4" },
      { number: 84, title: "الحلقة الرابعة والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00021.mp4" },
      { number: 85, title: "الحلقة الخامسة والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00022.mp4" },
      { number: 86, title: "الحلقة السادسة والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00023.mp4" },
      { number: 87, title: "الحلقة السابعة والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00024.mp4" },
      { number: 88, title: "الحلقة الثامنة والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00025.mp4" },
      { number: 89, title: "الحلقة التاسعة والثمانون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00026.mp4" },
      { number: 90, title: "الحلقة التسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00001.mp4" },
      { number: 91, title: "الحلقة الواحدة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00002.mp4" },
      { number: 92, title: "الحلقة الثانية والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00003.mp4" },
      { number: 93, title: "الحلقة التالثة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00004.mp4" },
      { number: 94, title: "الحلقة الرابعة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00005.mp4" },
      { number: 95, title: "الحلقة الخامسة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00006.mp4" },
      { number: 96, title: "الحلقة السادسة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00007.mp4" },
      { number: 97, title: "الحلقة السابعة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00008.mp4" },
      { number: 98, title: "الحلقة الثامنة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/00009.mp4" },
      { number: 99, title: "الحلقة التاسعة والتسعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000010.mp4" },
      { number: 100, title: "الحلقة االمئة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000011.mp4" },
      { number: 101, title: "الحلقة المئة وواحد ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000012.mp4" },
      { number: 102, title: "الحلقة المئة واثنان  ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000013.mp4" },
      { number: 103, title: "الحلقة المئة وثلاثة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000014.mp4" },
      { number: 104, title: "الحلقة المئة واربعة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000015.mp4" },
      { number: 105, title: "الحلقة المئة وخمسة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000016.mp4" },
      { number: 106, title: "الحلقة المئة وستة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000017.mp4" },
      { number: 107, title: "الحلقة المئة والسبعة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000018.mp4" },
      { number: 108, title: "الحلقة المئة والثمانية ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000019.mp4" },
      { number: 109, title: "الحلقة المئة التاسعة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000020.mp4" },
      { number: 110, title: "الحلقة المئة وعشرة ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000021.mp4" },
      { number: 111, title: "111", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/myhero/000022.mp4" }











      ]
  },
  {
    id: 10,
    title: "دكتور ستون",
    type: "series",
    cover: "https://spacepowerfans.com/wp-content/uploads/2026/03/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%B3%D8%AA%D9%88%D9%86-%D9%85%D8%AF%D8%A8%D9%84%D8%AC-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-552x828.webp",
    background: "https://spacepowerfans.com/wp-content/uploads/2026/03/%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%B3%D8%AA%D9%88%D9%86-%D9%85%D8%AF%D8%A8%D9%84%D8%AC-%D8%A8%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-552x828.webp",
    description: "تدور القصة حول سينكو إيشيغامي، عبقري في العلوم، الذي يوقظ كل البشرية من سبات استمر لـ 3700 عام بعد أن تحولت إلى حجر بسبب ضوء غامض. يسعى سينكو لإعادة بناء الحضارة باستخدام العلم.",
    genre: ["أكشن", "مغامرة", "خيال علمي"],
    rating: "8.9",
    year: "2019",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://archive.org/download/drs3_20251020/drs1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://archive.org/download/drs3_20251020/drs2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://archive.org/download/drs3_20251020/drs3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://archive.org/download/drs3_20251020/drs4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://archive.org/download/drs3_20251020/drs5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://archive.org/download/drs3_20251020/drs6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://archive.org/download/drs3_20251020/drs7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://archive.org/download/drs3_20251020/drs8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://archive.org/download/drs3_20251020/drs9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://archive.org/download/drs3_20251020/drs10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://archive.org/download/drs3_20251020/drs11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://archive.org/download/drs3_20251020/drs12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://archive.org/download/drs3_20251020/drs13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://archive.org/download/drs3_20251020/drs14.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://archive.org/download/drs3_20251020/drs15.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://archive.org/download/drs3_20251020/drs16.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://archive.org/download/drs3_20251020/drs17.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://archive.org/download/drs3_20251020/drs18.mp4" },
      { number: 19, title: "الحلقة التاسعة عشرة", video: "https://archive.org/download/drs3_20251020/drs19.mp4" },
      { number: 20, title: "الحلقة العشرون", video: "https://archive.org/download/drs3_20251020/drs20.mp4" },
      { number: 21, title: "الحلقة الحادية والعشرون", video: "https://archive.org/download/drs3_20251020/drs21.mp4" },
      { number: 22, title: "الحلقة الثانية والعشرون", video: "https://archive.org/download/drs3_20251020/drs22.mp4" },
      { number: 23, title: "الحلقة الثالثة والعشرون", video: "https://archive.org/download/drs3_20251020/drs23.mp4" },
      { number: 24, title: "الحلقة الرابعة والعشرون", video: "https://archive.org/download/drs3_20251020/drs24.mp4" },
      { number: 25, title: "الحلقة الخامسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%201.mp4" },
      { number: 26, title: "الحلقة السادسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%202.mp4" },
      { number: 27, title: "الحلقة السابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%203.mp4" },
      { number: 28, title: "الحلقة الثامنة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%204.mp4" },
      { number: 29, title: "الحلقة التاسعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%205.mp4" },
      { number: 30, title: "الحلقة الثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%206.mp4" },  
      { number: 31, title: "الحلقة الحادية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%207.mp4" },
      { number: 32, title: "الحلقة الثانية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%208.mp4" },
      { number: 33, title: "الحلقة الثالثة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%209.mp4" },
      { number: 34, title: "الحلقة الرابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2010.mp4" },
      { number: 35, title: "الحلقة الخامسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2011.mp4" },
      { number: 36, title: "الحلقة السادسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%201.mp4" },
      { number: 37, title: "الحلقة السابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%202.mp4" },
      { number: 38, title: "الحلقة الثامنة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%203.mp4" },
      { number: 39, title: "الحلقة التاسعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%204.mp4" },
      { number: 40, title: "الحلقة الاربعون ", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%205.mp4" },
      { number: 41, title: "الحلقة السابعة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%206.mp4" },
      { number: 42, title: "الحلقة الثانية والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%207.mp4" },
      { number: 43, title: "الحلقة التالثة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%208.mp4" },
      { number: 44, title: "الحلقة الرابعة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%209.mp4" },
      { number: 45, title: "الحلقة الخامسة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2010.mp4" },
      { number: 46, title: "الحلقة السادسة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2011.mp4" },
      { number: 47, title: "الحلقة السابعة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2012.mp4" },
      { number: 48, title: "الحلقة الثامنة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2013.mp4" },
      { number: 49, title: "الحلقة التاسعة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2014.mp4" },
      { number: 50, title: "الحلقة الخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2015.mp4" },
      { number: 51, title: "الحلقة الواحدة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2016.mp4" },
      { number: 52, title: "الحلقة الثانية والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2017.mp4" },
      { number: 53, title: "الحلقة التالثة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2018.mp4" },
      { number: 54, title: "الحلقة الرابعة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2019.mp4" },
      { number: 55, title: "الحلقة الخامسة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2020.mp4" },
      { number: 56, title: "الحلقة السادسة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2021.mp4" },
      { number: 57, title: "الحلقة السابعة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2022.mp4" },
      { number: 58, title: "الحلقة الثامنة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2023.mp4" },
      { number: 59, title: "الحلقة التاسعة والخمسون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2024.mp4" },
      { number: 60, title: "الحلقة االستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2025.mp4" },
      { number: 61, title: "الحلقة الحادية والستون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/drs/%D8%AF%D9%83%D8%AA%D9%88%D8%B1%20%D8%B3%D8%AA%D9%88%D9%86%20%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85%20%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%2026.mp4" }






    ]
  },
  {
    id: 11,
    title: "جوجوتسو كايسن",
    type: "series",
    cover: "https://images.justwatch.com/poster/282612994/s332/season-3.jpg",
    background: "https://images.justwatch.com/poster/282612994/s332/season-3.jpg",
    description: "تدور القصة حول يوجي إيتادوري، طالب ثانوي يمتلك قوة جسدية خارقة. يبتلع يوجي إصبع شيطان مملوكة ليحصل على قوى سحرية، ويصبح عضواً في منظمة جوجوتسو كايسن لمحاربة الشياطين.",
    genre: ["أكشن", "رعب", "خيال"],
    rating: "9.1",
    year: "2020",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/14.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/15.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/16.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/17.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/jujutsu/18.mp4" }
    ]
  },
  {
    id: 12,
    title: "عائلة الجاسوس",
    type: "series",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgeB9XKCnPYR3Bx3kcBwGvx4wBW_fwaAMyQ&s",
    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgeB9XKCnPYR3Bx3kcBwGvx4wBW_fwaAMyQ&s",
    description: "تدور القصة حول جاسوس يجب عليه إنشاء عائلة مزيفة لإنجاز مهمة سرية. يتزوج من امرأة قاتلة محترفة وينتبل طفلة قادرة على قراءة الأفكار.",
    genre: ["كوميديا", "أكشن", "عائلي"],
    rating: "9.1",
    year: "2022",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/14.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/15.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/16.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/17.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/18.mp4" },
      { number: 19, title: "الحلقة التاسعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/19.mp4" },
      { number: 20, title: "الحلقة العشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/20.mp4" },
      { number: 21, title: "الحلقة الحادية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/21.mp4" },
      { number: 22, title: "الحلقة الثانية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/22.mp4" },
      { number: 23, title: "الحلقة الثالثة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/23.mp4" },
      { number: 24, title: "الحلقة الرابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/24.mp4" },
      { number: 25, title: "الحلقة الخامسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/25.mp4" },
      { number: 26, title: "الحلقة السادسة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/01.mp4" },
      { number: 27, title: "الحلقة السابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/02.mp4" },
      { number: 28, title: "الحلقة الثامنة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/03.mp4" },
      { number: 29, title: "الحلقة التاسعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/04.mp4" },
      { number: 30, title: "الحلقة الثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/05.mp4" },
      { number: 31, title: "الحلقة الحادية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/06.mp4" },
      { number: 32, title: "الحلقة الثانية والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/07.mp4" },
      { number: 33, title: "الحلقة الثالثة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/08.mp4" },
      { number: 34, title: "الحلقة الرابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/09.mp4" },
      { number: 35, title: "الحلقة الخامسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/010.mp4" },
      { number: 36, title: "الحلقة السادسة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/011.mp4" },
      { number: 37, title: "الحلقة السابعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/012.mp4" },
      { number: 38, title: "الحلقة الثامنة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/001.mp4" },
      { number: 39, title: "الحلقة التاسعة والثلاثون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/002.mp4" },
      { number: 40, title: "الحلقة الأربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/003.mp4" },
      { number: 41, title: "الحلقة الواحدة والاربعون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/spyfamily/004.mp4" }

      
    ]
  },
  {
    id: 13,
    title: "أنا وأنت مختلفان",
    type: "series",
    cover: "https://storage.moegirl.org.cn/moegirl/commons/1/1d/Seihantai_KV.jpg!/fw/280?v=20251031102037",
    background: "https://storage.moegirl.org.cn/moegirl/commons/1/1d/Seihantai_KV.jpg!/fw/280?v=20251031102037",
    description: "تدور القصة حول طالبين في المدرسة الثانوية، أحدهما شاب هادئ والآخر فتاة مشاغبة، يجدان نفسيهما في علاقة غير متوقعة.",
    genre: ["رومانسي", "دراما", "كوميديا"],
    rating: "8.5",
    year: "2026",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 7.mp4" },
      { number: 8, title: "الحلقة اليامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/opposites/نقيضان 10.mp4" }

      
    ]
  },
  {
    id: 14,
    title: "مونت كريستو",
    type: "series",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uyiuNxu1kHu5AfvG_X4Uo0XCGJzPWZi6wA&s",
    background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5uyiuNxu1kHu5AfvG_X4Uo0XCGJzPWZi6wA&s",
    description: "تدور القصة حول ألبرت دي مورسيرف، شاب فرنسي يصادف كونت مونت كريستو الغامض، ويكتشف قصة مأساوية من الماضي.",
    genre: ["دراما", "غموض", "تاريخي"],
    rating: "8.7",
    year: "2004",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/1.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/2.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/3.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/4.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/5.mp4" },
      { number: 6, title: "الحلقة السادسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/6.mp4" },
      { number: 7, title: "الحلقة السابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/7.mp4" },
      { number: 8, title: "الحلقة الثامنة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/8.mp4" },
      { number: 9, title: "الحلقة التاسعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/9.mp4" },
      { number: 10, title: "الحلقة العاشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/10.mp4" },
      { number: 11, title: "الحلقة الحادية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/11.mp4" },
      { number: 12, title: "الحلقة الثانية عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/12.mp4" },
      { number: 13, title: "الحلقة الثالثة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/13.mp4" },
      { number: 14, title: "الحلقة الرابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/14.mp4" },
      { number: 15, title: "الحلقة الخامسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/15.mp4" },
      { number: 16, title: "الحلقة السادسة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/16.mp4" },
      { number: 17, title: "الحلقة السابعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/17.mp4" },
      { number: 18, title: "الحلقة الثامنة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/18.mp4" },
      { number: 19, title: "الحلقة التاسعة عشرة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/19.mp4" },
      { number: 20, title: "الحلقة العشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/20.mp4" },
      { number: 21, title: "الحلقة الحادية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/21.mp4" },
      { number: 22, title: "الحلقة الثانية والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/22.mp4" },
      { number: 23, title: "الحلقة الثالثة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/23.mp4" },
      { number: 24, title: "الحلقة الرابعة والعشرون", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/mountcristo/24.mp4" }
      
    ]
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
    year: "2026",
    episodes: [
      { number: 1, title: "الحلقة الأولى", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/%D8%B1%D9%8A%20%D8%B2%D9%8A%D8%B1%D9%88%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%201%20%D9%85%D8%AF%D8%A8%D9%84%D8%AC%D8%A9.mp4" },
      { number: 2, title: "الحلقة الثانية", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/%D8%B1%D9%8A%20%D8%B2%D9%8A%D8%B1%D9%88%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%202%20%D9%85%D8%AF%D8%A8%D9%84%D8%AC%D8%A9.mp4" },
      { number: 3, title: "الحلقة الثالثة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/%D8%B1%D9%8A%20%D8%B2%D9%8A%D8%B1%D9%88%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%203%20%D9%85%D8%AF%D8%A8%D9%84%D8%AC%D8%A9.mp4" },
      { number: 4, title: "الحلقة الرابعة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/%D8%B1%D9%8A%20%D8%B2%D9%8A%D8%B1%D9%88%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%204%20%D9%85%D8%AF%D8%A8%D9%84%D8%AC%D8%A9.mp4" },
      { number: 5, title: "الحلقة الخامسة", video: "https://pub-b534f19ddae84293ae0e0fb360695fcf.r2.dev/rezero/%D8%B1%D9%8A%20%D8%B2%D9%8A%D8%B1%D9%88%20%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9%205%20%D9%85%D8%AF%D8%A8%D9%84%D8%AC%D8%A9.mp4" }
      
    ]
  },

  {
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
];

// دالة للحصول على أنمي بواسطة المعرف
function getAnimeById(id) {
  return animes.find(anime => anime.id === parseInt(id));
}

// دالة للحصول على جميع المسلسلات
function getSeries() {
  return animes.filter(anime => anime.type === 'series');
}

// دالة للحصول على جميع الأفلام
function getMovies() {
  return animes.filter(anime => anime.type === 'movie');
}

// دالة للبحث عن أنمي بالاسم
function searchAnime(query) {
  const lowerQuery = query.toLowerCase();
  return animes.filter(anime => 
    anime.title.toLowerCase().includes(lowerQuery)
  );
}

// دالة للبحث عن المسلسلات فقط
function searchSeries(query) {
  const lowerQuery = query.toLowerCase();
  return getSeries().filter(anime =>
    anime.title.toLowerCase().includes(lowerQuery)
  );
}

// دالة للبحث عن الأفلام فقط
function searchMovies(query) {
  const lowerQuery = query.toLowerCase();
  return getMovies().filter(anime =>
    anime.title.toLowerCase().includes(lowerQuery)
  );
}

// دالة للحصول على حلقة محددة من أنمي معين
function getEpisode(animeId, episodeNumber) {
  const anime = getAnimeById(animeId);
  if (!anime) return null;
  return anime.episodes.find(ep => ep.number === parseInt(episodeNumber));
}









