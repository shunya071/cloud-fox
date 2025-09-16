"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PhoneMockup() {
  const router = useRouter();

  return (
    <div className="relative w-full max-w-[320px] mx-auto sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
      {/* 上部スピーカ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[6px] bg-black rounded-full z-10 mt-4"></div>

      {/* Phone本体 */}
      <div className="relative w-full aspect-[9/16] bg-[#1E73BE] text-white rounded-4xl border-4 border-black shadow-2xl overflow-y-scroll overflow-x-hidden flex flex-col scrollbar-hide">
        {/* Header */}
        <div className="flex justify-between p-4 mt-4 text-white">
          <h2 className="font-bold text-sm sm:text-base">Personal File</h2>
          <button className="text-sm sm:text-base">☰</button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center p-4">
          <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
            <Image
              src="/profile/profile_item.png"
              alt="私の基本情報"
              width={300}
              height={300}
              className="w-22 h-22 mx-auto"
            />
          </div>
          <p className="mt-2 font-semibold text-white text-lg">Shunya Mori, 26</p>
          <p className="text-lg text-gray-100 flex justify-center items-center gap-2 mt-[5px]">
            <svg width="20" height="20" viewBox="0 0 348 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M174 0C77.969 0 0.125 77.859 0.125 173.906C0.125 269.938 154.797 512 174 512C193.219 512 347.875 269.937 347.875 173.906C347.875 77.859 270.031 0 174 0ZM174 240.406C137.281 240.406 107.5 210.625 107.5 173.906C107.5 137.156 137.281 107.375 174 107.375C210.719 107.375 240.516 137.156 240.516 173.906C240.516 210.625 210.719 240.406 174 240.406Z" fill="#FFF" />
            </svg>
            Gifu
          </p>
        </div>
        <div className="relative bg-white text-gray-600">
          <svg className="mx-auto w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1E73BE" d="M0,32L60,64C120,96,240,160,360,181.3C480,203,600,181,720,149.3C840,117,960,75,1080,58.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
          <button
            onClick={() => router.push("/contact")}
            className="absolute top-[-1rem] right-[3rem] w-14 h-14 mt-2 bg-white border border-blue-500 text-white rounded-full shadow-lg"
          >
            <svg className="mx-auto" width="30" height="20" viewBox="0 0 512 376" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M496.563 0.828003H15.438C6.922 0.828003 0 7.75 0 16.281V46.672L256 218.219L512 46.656V16.281C512 7.75 505.078 0.828003 496.563 0.828003Z" fill="#1E73BE" />
              <path d="M0 110.016V313.407C0 347.532 27.641 375.173 61.781 375.173H450.219C484.36 375.173 512 347.532 512 313.407V110L256 281.563L0 110.016Z" fill="#1E73BE" />
            </svg>
          </button>
          {/* Our Stack */}
          <div className="p-4">
            <h3 className="font-bold mb-2 text-lg sm:text-base">Our Stack</h3>
            <div className="overflow-hidden relative w-full">
              <div className="flex animate-marquee">
                {["html", "css", "js", "php", "next", "react", "html", "css", "js", "php", "next", "react"].map((tech, i) => (
                  <Image key={i} src={`/profile/${tech}.png`} alt={tech} width={60} height={60} className="mx-2 sm:w-8 sm:h-8" />
                ))}
              </div>
            </div>
          </div>

          {/* Career */}
          <div className="py-4 px-2 text-sm sm:text-xs">
            <h3 className="font-bold mb-2 text-lg sm:text-base">Career</h3>
            <ul className="space-y-1">
              {[
                ["2020.4-", "新卒で美容室に就職。"],
                ["2020.6-", "コロナで仕事がなくマークアップ学習開始。"],
                ["2021.10-", "美容室を退職後、自動車生産工場に就職。"],
                ["2024.1-", "自社ECサイト運営会社に就職。"],
                ["2025.5-", "社内外問わず多くのサービス、サイトの構築を経験。"],
                ["2025.8-", "大好きな岐阜を盛り上げたい想いから本サービスを立ち上げる。"]
              ].map(([date, text], i) => (
                <dl key={i} className="flex gap-2">
                  <dt>{date}</dt>
                  <dd>{text}</dd>
                </dl>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
