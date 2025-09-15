"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PortfolioSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          制作実績
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          様々な業種・規模の企業様にご依頼いただいています。
          実績の一部をご紹介します。
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Work 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
            <Image
              src="/works/work-item1.png"
              alt="制作実績1"
              width={400}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-blue-900">
                サービスサイト制作
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                信頼感を重視したデザインで企業価値を高めるサイトを構築。
              </p>
            </div>
          </div>

          {/* Work 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
            <Image
              src="/works/work-item2.png"
              alt="制作実績2"
              width={400}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-blue-900">
                口コミ・検索サイト制作
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                コンバージョン率を意識した構成でお問い合わせ増加を実現。
              </p>
            </div>
          </div>

          {/* Work 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
            <Image
              src="/works/work-item3.png"
              alt="制作実績3"
              width={400}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-blue-900">
                ポータルサイト制作
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                若手人材に刺さるビジュアル設計で応募数を大幅に改善。
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-12">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            他の実績も見る
          </Button>
        </div> */}
      </div>
    </section>
  )
}