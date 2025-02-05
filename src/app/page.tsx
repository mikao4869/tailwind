import Image from "next/image";


export default function Home() {
  return (
   <>
    <div className="max-w-64 h-20 bg-blue-400 rounded-xl m-60 mt-10">
      <div className="bg-[url('https://your-image-url.com/image.png')] bg-cover bg-center"></div>
      <span className="font-mono text-base ml-16 mb-8-7 text-yellow-50">ChitChat</span>
      <p className="text-xs text-gray-300 ml-16">You have a new message!</p>
    </div>

   </>
  );
}
