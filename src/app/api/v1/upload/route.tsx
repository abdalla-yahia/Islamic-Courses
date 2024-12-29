// import { NextRequest, NextResponse } from "next/server";
// import path from "path";
// import fs from "fs";

// const UPLOAD_DIR = path.resolve("./public/uploads");
// const UPLOAD_IMAGES_DIR = path.resolve("./public/uploads/images");
// const UPLOAD_FILES_DIR = path.resolve("./public/uploads/files");
// const UPLOAD_AUDIOS_DIR = path.resolve("./public/uploads/audios");
// const UPLOAD_VEDIOS_DIR = path.resolve("./public/uploads/videos");

// export const POST = async (req: NextRequest) => {
//   const formData = await req.formData();
//   const body = Object.fromEntries(formData);
//   const file = (body.file as File) || null;

//   if (file) {
//     if (!fs.existsSync(UPLOAD_DIR)) {
//         fs.mkdirSync(UPLOAD_DIR);
//     }
//       const imageExtensions = ['.jpg','.jpeg','.png','.gif','.bmp','.tiff','.webp','.svg','.heif','.raw'];
//       const Extention = (file as File)?.name?.slice((file as File)?.name?.indexOf('.'), )
//           if(imageExtensions.includes(Extention)){
//               const buffer = Buffer.from(await (file as File).arrayBuffer());
//               if (!fs.existsSync(UPLOAD_IMAGES_DIR)) {
//                 fs.mkdirSync(UPLOAD_IMAGES_DIR);
//             }
//             fs.writeFileSync(
//                 path.resolve(UPLOAD_IMAGES_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getDate()+Extention),
//                 buffer
//               );
//           }
//           if(Extention === '.pdf'){
//             const buffer = Buffer.from(await (file as File).arrayBuffer());
//               if (!fs.existsSync(UPLOAD_FILES_DIR)) {
//                 fs.mkdirSync(UPLOAD_FILES_DIR);
//             }
//             fs.writeFileSync(
//                 path.resolve(UPLOAD_FILES_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+Extention),
//                 buffer
//               );
//           }
//           if(Extention === '.mp3' || Extention === '.wav' || Extention === '.ogg' || Extention === '.flac'){
//             const buffer = Buffer.from(await (file as File).arrayBuffer());
//               if (!fs.existsSync(UPLOAD_AUDIOS_DIR)) {
//                 fs.mkdirSync(UPLOAD_AUDIOS_DIR);
//             }
//             fs.writeFileSync(
//                 path.resolve(UPLOAD_AUDIOS_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+Extention),
//                 buffer
//               );
//           }
//           if(Extention === '.mp4' || Extention === '.avi' || Extention === '.mov' || Extention === '.flv'){
//             const buffer = Buffer.from(await (file as File).arrayBuffer());
//               if (!fs.existsSync(UPLOAD_VEDIOS_DIR)) {
//                 fs.mkdirSync(UPLOAD_VEDIOS_DIR);
//             }
//             fs.writeFileSync(
//                 path.resolve(UPLOAD_VEDIOS_DIR, (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+Extention),
//                 buffer
//               );
//           }

//   } else {
//     return NextResponse.json({
//       success: false,
//       file: file,
//     });
//   }

//   return NextResponse.json({
//     success: true,
//     name: (body.file as File).name.slice(0,(file as File)?.name?.indexOf('.'))+new Date().getTime()+(body.file as File).name.slice((file as File)?.name?.indexOf('.'),),
//   });
// };

//Deploay To Fire base
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { NextApiRequest, NextApiResponse } from 'next';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import formidable from 'formidable';
import fs from 'fs';

const firebaseConfig = {
  apiKey: "AIzaSyD1lFXOEcP-g9c1C8fhxfYVtIjgJ8A8Kt4",
  authDomain: "islamic-courses-4bbc8.firebaseapp.com",
  projectId: "islamic-courses-4bbc8",
  storageBucket: "islamic-courses-4bbc8.firebasestorage.app",
  messagingSenderId: "733002547901",
  appId: "1:733002547901:web:4548c9494e3c81e4b8add4",
  measurementId: "G-K2JV3H0Q4F"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const file = Array.isArray(files.file) ? files.file[0] : files.file;
      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      const fileBuffer = fs.readFileSync(file.filepath);
      const imageExtensions = ['.jpg','.jpeg','.png','.gif','.bmp','.tiff','.webp','.svg','.heif','.raw'];
            const Extention = (file as unknown as File)?.name?.slice((file as unknown as File)?.name?.indexOf('.'), )
      if(imageExtensions.includes(Extention)){
      const storageRef = ref(storage, `uploads/images/${file.originalFilename}`);
      const snapshot = await uploadBytes(storageRef, fileBuffer);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      res.status(200).json({ message: 'File uploaded successfully', downloadURL });
    }
    if(Extention === '.pdf'){
      const storageRef = ref(storage, `uploads/files/${file.originalFilename}`);
      const snapshot = await uploadBytes(storageRef, fileBuffer);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      res.status(200).json({ message: 'File uploaded successfully', downloadURL });
    }
      if(Extention === '.mp3' || Extention === '.wav' || Extention === '.ogg' || Extention === '.flac'){
  const storageRef = ref(storage, `uploads/Audios/${file.originalFilename}`);
      const snapshot = await uploadBytes(storageRef, fileBuffer);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      res.status(200).json({ message: 'File uploaded successfully', downloadURL });
    }
    if(Extention === '.mp4' || Extention === '.avi' || Extention === '.mov' || Extention === '.flv'){
  const storageRef = ref(storage, `uploads/Videos/${file.originalFilename}`);
      const snapshot = await uploadBytes(storageRef, fileBuffer);
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      res.status(200).json({ message: 'File uploaded successfully', downloadURL });
    }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;