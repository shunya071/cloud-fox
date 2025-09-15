"use client";

import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import PhoneMockup from "./PhoneMockup";

export function ProfileSection() {
  return (
    <section id="profile" className="bg-[#1E73BE] py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
        <div className="col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            私について
          </h2>
          <p className="mt-6 text-lg text-white text-center leading-relaxed">
            お客様のビジネスの成長をサポートするweb開発を専門としています。<br />
            webサイトを0から構築する場合でも、既存webサイトをリニューアルする場合でも<br />
            お客様のニーズに合わせた最高品質、高性能のソリューションをご提供いたします。
          </p>
          <div className="mt-8 mx-auto flex justify-center gap-8 items-center">
            <Button size="lg" className="bg-accent text-white font-bold hover:bg-[#E67328]">
              制作実績を見る
            </Button>
            <Button size="lg" className="bg-blue-500 text-white font-bold hover:bg-blue-600">
              無料相談する
            </Button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-2 p-4 text-center mt-20">
            <div className="text-white">
              <h3 className="text-8xl font-bold">+<CountUp end={12} className="text-8xl font-bold" /></h3>
              <p className="border border-white rounded-md inline-block my-4 px-4 py-2">構築数</p>
              <p className="">これまで中小企業をはじめとするクライアント様へ12以上の開発してきました。</p>
            </div>
            <div className="text-white">
              <h3 className="text-8xl font-bold"><CountUp end={101} className="text-8xl font-bold" />%</h3>
              <p className="border border-white rounded-md inline-block my-4 px-4 py-2">満足度</p>
              <p className="">工数の削減や細かいご提案をさせていただいてることが満足度につながっています。</p>
            </div>
            <div className="text-white col-span-2">
              <h3 className="text-8xl font-bold">+<CountUp end={999} className="text-8xl font-bold" /></h3>
              <p className="border border-white rounded-md inline-block my-4 px-4 py-2">コーヒーカップ数</p>
              <p className="">This one is pretty much self explanatory</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}