// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://khaled-mansour.vercel.app',
  generateRobotsTxt: true,
  outDir: 'public',
  sitemapSize: 7000,

  // توليد كل الروابط يدوي
  additionalPaths: async () => {
    const urls = [
      '/', 
      '/about', 
      '/contact', 
      '/moshaf', 
      '/booksound',

      // Users Dashboard
      '/users/dashboard/articles',
      '/users/dashboard/sections',
      '/users/dashboard/subjects',
      '/users/dashboard/assinments',
      '/users/dashboard/exams',
      '/users/dashboard/profile',

      // Admins Dashboard
      '/admins/dashboard/articles',
      '/admins/dashboard/sections',
      '/admins/dashboard/subjects',
      '/admins/dashboard/assinments',
      '/admins/dashboard/exams',
      '/admins/dashboard/profile',
      '/admins/dashboard/add-article',
      '/admins/dashboard/assinments-results',
      '/admins/dashboard/exams-results',
      '/admins/dashboard/groups',

      // Teachers Dashboard
      '/teachers/dashboard/articles',
      '/teachers/dashboard/sections',
      '/teachers/dashboard/subjects',
      '/teachers/dashboard/assinments',
      '/teachers/dashboard/exams',
      '/teachers/dashboard/profile',
      '/teachers/dashboard/add-article',
      '/teachers/dashboard/assinments-results',
      '/teachers/dashboard/exams-results',
      '/teachers/dashboard/groups',
      '/teachers/dashboard/add-assinment',
      '/teachers/dashboard/add-exam',
      '/teachers/dashboard/add-lesson',

      // Admin-Teacher Dashboard
      '/admin-teacher/dashboard/articles',
      '/admin-teacher/dashboard/sections',
      '/admin-teacher/dashboard/subjects',
      '/admin-teacher/dashboard/assinments',
      '/admin-teacher/dashboard/exams',
      '/admin-teacher/dashboard/profile',
      '/admin-teacher/dashboard/add-article',
      '/admin-teacher/dashboard/assinments-results',
      '/admin-teacher/dashboard/exams-results',
      '/admin-teacher/dashboard/groups',
      '/admin-teacher/dashboard/add-assinment',
      '/admin-teacher/dashboard/add-exam',
      '/admin-teacher/dashboard/add-lesson',
      '/admin-teacher/dashboard/add-group',
      '/admin-teacher/dashboard/admins',
      '/admin-teacher/dashboard/teachers',

      // Managers Dashboard
      '/managers/dashboard/articles',
      '/managers/dashboard/sections',
      '/managers/dashboard/subjects',
      '/managers/dashboard/assinments',
      '/managers/dashboard/exams',
      '/managers/dashboard/profile',
      '/managers/dashboard/add-article',
      '/managers/dashboard/assinments-results',
      '/managers/dashboard/exams-results',
      '/managers/dashboard/groups',
      '/managers/dashboard/add-assinment',
      '/managers/dashboard/add-exam',
      '/managers/dashboard/add-lesson',
      '/managers/dashboard/add-group',
      '/managers/dashboard/admins',
      '/managers/dashboard/teachers',
      '/managers/dashboard/admins-teachers',
      '/managers/dashboard/students',

      // Owner Dashboard
      '/owner/dashboard/articles',
      '/owner/dashboard/sections',
      '/owner/dashboard/subjects',
      '/owner/dashboard/assinments',
      '/owner/dashboard/exams',
      '/owner/dashboard/profile',
      '/owner/dashboard/add-article',
      '/owner/dashboard/assinments-results',
      '/owner/dashboard/exams-results',
      '/owner/dashboard/groups',
      '/owner/dashboard/add-assinment',
      '/owner/dashboard/add-exam',
      '/owner/dashboard/add-lesson',
      '/owner/dashboard/add-group',
      '/owner/dashboard/admins',
      '/owner/dashboard/teachers',
      '/owner/dashboard/admins-teachers',
      '/owner/dashboard/students',
      '/owner/dashboard/codes',
      '/owner/dashboard/managers',
      '/owner/dashboard/news',
    ];

    return urls.map((url) => ({
      loc: url,
      lastmod: new Date().toISOString(),
      changefreq: url === '/' ? 'daily' : 'weekly',
      priority: url === '/' ? 1.0 : url === '/about' || url === '/contact' ? 0.6 : 0.5,
    }));
  },
};
