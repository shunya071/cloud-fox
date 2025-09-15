"use client";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function PhoneMockup() {
  const router = useRouter();

  return (
    <div className="relative w-[320px] h-[640px] bg-[#1E73BE] text-white rounded-4xl border-6 border-black shadow-2xl overflow-y-scroll overflow-x-hidden flex flex-col scrollbar-hide">
      <div className="absolute top-0 left-[130px] w-[60px] bg-black text-sm rounded-full mx-auto mt-4 text-center">　　</div>
      {/* Header */}
      <div className="flex justify-between p-4 mt-4 text-white">
        <h2 className="font-bold">Personal File</h2>
        <button>☰</button>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
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
          <h3 className="font-bold mb-2 text-lg">Our Stack</h3>
          <Swiper modules={[Autoplay]} spaceBetween={10} slidesPerView={3.5} loop={true} autoplay={{delay: 100, disableOnInteraction: false,}} className="w-full max-w-xs">
            <SwiperSlide>
              <Image
                src="/profile/html.png"
                alt="スキルセットアイコン HTML"
                width={400}
                height={400}
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/profile/css.png"
                alt="スキルセットアイコン CSS"
                width={400}
                height={400}
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/profile/js.png"
                alt="スキルセットアイコン JavaScript"
                width={400}
                height={400}
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/profile/php.png"
                alt="スキルセットアイコン PHP"
                width={400}
                height={400}
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/profile/next.png"
                alt="スキルセットアイコン Next.js"
                width={400}
                height={400}
                className=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/profile/react.png"
                alt="スキルセットアイコン React"
                width={400}
                height={400}
                className=""
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Career */}
        <div className="py-4 px-2 text-sm">
          <h3 className="font-bold mb-2 text-lg">Career</h3>
          <ul className="space-y-1">
            <dl className="flex gap-2">
              <dt>2020.4-</dt>
              <dd>新卒で美容室に就職。</dd>
            </dl>
            <dl className="flex gap-2">
              <dt>2020.6-</dt>
              <dd>コロナで仕事がなくマークアップ学習開始。</dd>
            </dl>
            <dl className="flex gap-2">
              <dt>2021.10-</dt>
              <dd>美容室を退職してSES企業に就職。</dd>
            </dl>
            <dl className="flex gap-2">
              <dt>2023.12-</dt>
              <dd>SEの仕事はさせてもらえず工場勤務、退職。</dd>
            </dl>
            <dl className="flex gap-2">
              <dt>2024.1-</dt>
              <dd>自社ECサイト運営会社に就職。</dd>
            </dl>
            <dl className="flex gap-2">
              <dt>2025.5-</dt>
              <dd>社内外問わず多くのサービス、サイトの構築を経験。</dd>
            </dl>
            <dl className="flex gap-2">
              <dt>2025.8-</dt>
              <dd>大好きな岐阜を盛り上げたい想いから本サービスを立ち上げる。</dd>
            </dl>
          </ul>
        </div>
      </div>
    </div >
  );
}
