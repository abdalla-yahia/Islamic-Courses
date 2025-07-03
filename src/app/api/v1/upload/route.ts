import { NextRequest, NextResponse } from "next/server";
import { put } from '@vercel/blob';
import path from "path";
import fs from "fs";

const UPLOAD_DIR = path.resolve("./public/uploads");
const UPLOAD_IMAGES_DIR = path.resolve("./public/uploads/images");
const UPLOAD_FILES_DIR = path.resolve("./public/uploads/files");
const UPLOAD_AUDIOS_DIR = path.resolve("./public/uploads/audios");
const UPLOAD_VEDIOS_DIR = path.resolve("./public/uploads/videos");

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get('filename');
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as File) || null;

    if (!filename) {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
  }

  // ⚠️ The below code is for App Router Route Handlers only
  if (!req.body) {
    return NextResponse.json({ error: 'Request body is required' }, { status: 400 });
  }
  const blob = await put(filename, req.body, {
    access: 'public',
  });

  if (file) {
    if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR);
    }
      const imageExtensions = ['.jpg','.jpeg','.png','.gif','.bmp','.tiff','.webp','.svg','.heif','.raw'];
      const Extention = (file as File)?.name?.slice((file as File)?.name?.indexOf('.'), )
          if(imageExtensions.includes(Extention)){
              const buffer = Buffer.from(await (file as File).arrayBuffer());
              if (!fs.existsSync(UPLOAD_IMAGES_DIR)) {
                fs.mkdirSync(UPLOAD_IMAGES_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_IMAGES_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getDate()+Extention),
                buffer
              );
          }
          if(Extention === '.pdf'){
            const buffer = Buffer.from(await (file as File).arrayBuffer());
              if (!fs.existsSync(UPLOAD_FILES_DIR)) {
                fs.mkdirSync(UPLOAD_FILES_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_FILES_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+Extention),
                buffer
              );
          }
          if(Extention === '.mp3' || Extention === '.wav' || Extention === '.ogg' || Extention === '.flac'){
            const buffer = Buffer.from(await (file as File).arrayBuffer());
              if (!fs.existsSync(UPLOAD_AUDIOS_DIR)) {
                fs.mkdirSync(UPLOAD_AUDIOS_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_AUDIOS_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+Extention),
                buffer
              );
          }
          if(Extention === '.mp4' || Extention === '.avi' || Extention === '.mov' || Extention === '.flv'){
            const buffer = Buffer.from(await (file as File).arrayBuffer());
              if (!fs.existsSync(UPLOAD_VEDIOS_DIR)) {
                fs.mkdirSync(UPLOAD_VEDIOS_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_VEDIOS_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+Extention),
                buffer
              );
          }

  } else {
    return NextResponse.json({
      success: false,
      file: file,
    });
  }

  // return NextResponse.json({
  //   success: true,
  //   name: (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+(body.file as File).name.slice((file as File)?.name?.indexOf('.'),),
  // });
  return NextResponse.json(blob);
};

// import { put } from '@vercel/blob';
// import { NextResponse } from 'next/server';

// export async function POST(request: Request): Promise<NextResponse> {
//   const { searchParams } = new URL(request.url);
//   const filename = searchParams.get('filename');

//   if (!filename) {
//     return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
//   }

//   // ⚠️ The below code is for App Router Route Handlers only
//   if (!request.body) {
//     return NextResponse.json({ error: 'Request body is required' }, { status: 400 });
//   }
//   const blob = await put(filename, request.body, {
//     access: 'public',
//   });

  // Here's the code for Pages API Routes:
  // const blob = await put(filename, request, {
  //   access: 'public',
  // });

//   return NextResponse.json(blob);
// }

// The next lines are required for Pages API Routes only
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

