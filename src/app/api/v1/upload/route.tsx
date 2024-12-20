import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
// import { ROOT_PATH } from '@/Utils/Constant'

// const UPLOAD_DIR = path.resolve(ROOT_PATH ?? "", "public/uploads");
// const UPLOAD_IMAGES_DIR = path.resolve(ROOT_PATH ?? "", "public/uploads/images");
// const UPLOAD_FILES_DIR = path.resolve(ROOT_PATH ?? "", "public/uploads/files");
// const UPLOAD_AUDIOS_DIR = path.resolve(ROOT_PATH ?? "", "public/uploads/audios");
// const UPLOAD_VEDIOS_DIR = path.resolve(ROOT_PATH ?? "", "public/uploads/videos");
const UPLOAD_DIR = path.resolve("public/uploads");
const UPLOAD_IMAGES_DIR = path.resolve("public/uploads/images");
const UPLOAD_FILES_DIR = path.resolve("public/uploads/files");
const UPLOAD_AUDIOS_DIR = path.resolve("public/uploads/audios");
const UPLOAD_VEDIOS_DIR = path.resolve("public/uploads/videos");

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const body = Object.fromEntries(formData);
  const file = (body.file as unknown as  {
    arrayBuffer(): WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer> | PromiseLike<WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>>;name:''
}) || null;

  if (file) {
    if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR);
    }
      const imageExtensions = ['.jpg','.jpeg','.png','.gif','.bmp','.tiff','.webp','.svg','.heif','.raw'];
      const Extention = file?.name?.slice(file?.name?.indexOf('.'), )
          if(imageExtensions.includes(Extention)){
              const buffer = Buffer.from(await file.arrayBuffer());
              if (!fs.existsSync(UPLOAD_IMAGES_DIR)) {
                fs.mkdirSync(UPLOAD_IMAGES_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_IMAGES_DIR, (body.file as File).name),
                buffer
              );
          }
          if(Extention === '.pdf'){
            const buffer = Buffer.from(await file.arrayBuffer());
              if (!fs.existsSync(UPLOAD_FILES_DIR)) {
                fs.mkdirSync(UPLOAD_FILES_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_FILES_DIR, (body.file as File).name),
                buffer
              );
          }
          if(Extention === '.mp3' || Extention === '.wav' || Extention === '.ogg' || Extention === '.flac'){
            const buffer = Buffer.from(await file.arrayBuffer());
              if (!fs.existsSync(UPLOAD_AUDIOS_DIR)) {
                fs.mkdirSync(UPLOAD_AUDIOS_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_AUDIOS_DIR, (body.file as File).name),
                buffer
              );
          }
          if(Extention === '.mp4' || Extention === '.avi' || Extention === '.mov' || Extention === '.flv'){
            const buffer = Buffer.from(await file.arrayBuffer());
              if (!fs.existsSync(UPLOAD_VEDIOS_DIR)) {
                fs.mkdirSync(UPLOAD_VEDIOS_DIR);
            }
            fs.writeFileSync(
                path.resolve(UPLOAD_VEDIOS_DIR, (body.file as File).name),
                buffer
              );
          }

  } else {
    return NextResponse.json({
      success: false,
    });
  }

  return NextResponse.json({
    success: true,
    name: (body.file as File).name,
  });
};