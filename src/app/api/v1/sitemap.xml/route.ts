import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
  // إعداد رابط الموقع الأساسي
  const hostname = 'https://khaled-mansour.vercel.app';

  // إنشاء تيار Sitemap
  const smStream = new SitemapStream({ hostname });

  // قائمة الروابط الثابتة والديناميكية
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/moshaf', changefreq: 'weekly', priority: 0.9 },
    { url: '/booksound', changefreq: 'weekly', priority: 0.9 },
    // users/dashboard
    { url: '/users/dashboard/articles', changefreq: 'weekly', priority: 0.7 },
    { url: '/users/dashboard/sections', changefreq: 'weekly', priority: 0.7 },
    { url: '/users/dashboard/subjects', changefreq: 'weekly', priority: 0.7 },
    { url: '/users/dashboard/assinments', changefreq: 'weekly', priority: 0.7 },
    { url: '/users/dashboard/exams', changefreq: 'weekly', priority: 0.7 },
    { url: '/users/dashboard/profile', changefreq: 'monthly', priority: 0.6 },
    // admins/dashboard
    { url: '/admins/dashboard/articles', changefreq: 'weekly', priority: 0.7 },
    { url: '/admins/dashboard/sections', changefreq: 'weekly', priority: 0.7 },
    { url: '/admins/dashboard/subjects', changefreq: 'weekly', priority: 0.7 },
    { url: '/admins/dashboard/assinments', changefreq: 'weekly', priority: 0.7 },
    { url: '/admins/dashboard/exams', changefreq: 'weekly', priority: 0.7 },
    { url: '/admins/dashboard/profile', changefreq: 'monthly', priority: 0.6 },
    { url: '/admins/dashboard/add-article', changefreq: 'monthly', priority: 0.6 },
    { url: '/admins/dashboard/assinments-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/admins/dashboard/exams-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/admins/dashboard/groups', changefreq: 'weekly', priority: 0.7 },
    // teachers/dashboard
    { url: '/teachers/dashboard/articles', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/sections', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/subjects', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/assinments', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/exams', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/profile', changefreq: 'monthly', priority: 0.6 },
    { url: '/teachers/dashboard/add-article', changefreq: 'monthly', priority: 0.6 },
    { url: '/teachers/dashboard/assinments-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/exams-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/groups', changefreq: 'weekly', priority: 0.7 },
    { url: '/teachers/dashboard/add-assinment', changefreq: 'monthly', priority: 0.6 },
    { url: '/teachers/dashboard/add-exam', changefreq: 'monthly', priority: 0.6 },
    { url: '/teachers/dashboard/add-lesson', changefreq: 'monthly', priority: 0.6 },
    // admin-teacher/dashboard
    { url: '/admin-teacher/dashboard/articles', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/sections', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/subjects', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/assinments', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/exams', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/profile', changefreq: 'monthly', priority: 0.6 },
    { url: '/admin-teacher/dashboard/add-article', changefreq: 'monthly', priority: 0.6 },
    { url: '/admin-teacher/dashboard/assinments-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/exams-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/groups', changefreq: 'weekly', priority: 0.7 },
    { url: '/admin-teacher/dashboard/add-assinment', changefreq: 'monthly', priority: 0.6 },
    { url: '/admin-teacher/dashboard/add-exam', changefreq: 'monthly', priority: 0.6 },
    { url: '/admin-teacher/dashboard/add-lesson', changefreq: 'monthly', priority: 0.6 },
    { url: '/admin-teacher/dashboard/add-group', changefreq: 'monthly', priority: 0.6 },
    { url: '/admin-teacher/dashboard/admins', changefreq: 'monthly', priority: 0.6 },
    { url: '/admin-teacher/dashboard/teachers', changefreq: 'monthly', priority: 0.6 },
    // managers/dashboard
    { url: '/managers/dashboard/articles', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/sections', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/subjects', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/assinments', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/exams', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/profile', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/add-article', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/assinments-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/exams-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/groups', changefreq: 'weekly', priority: 0.7 },
    { url: '/managers/dashboard/add-assinment', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/add-exam', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/add-lesson', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/add-group', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/admins', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/teachers', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/admins-teachers', changefreq: 'monthly', priority: 0.6 },
    { url: '/managers/dashboard/students', changefreq: 'monthly', priority: 0.6 },
    // owner/dashboard
    { url: '/owner/dashboard/articles', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/sections', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/subjects', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/assinments', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/exams', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/profile', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/add-article', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/assinments-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/exams-results', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/groups', changefreq: 'weekly', priority: 0.7 },
    { url: '/owner/dashboard/add-assinment', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/add-exam', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/add-lesson', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/add-group', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/admins', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/teachers', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/admins-teachers', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/students', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/codes', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/managers', changefreq: 'monthly', priority: 0.6 },
    { url: '/owner/dashboard/news', changefreq: 'weekly', priority: 0.7 },
  ];

  // تحويل الروابط إلى تيار
  const stream = Readable.from(links.map(link => link));
  stream.pipe(smStream);

  // تحويل التيار إلى XML
  const xmlBuffer = await streamToPromise(smStream);
  const xml = xmlBuffer.toString();

  // إرجاع استجابة XML
  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}