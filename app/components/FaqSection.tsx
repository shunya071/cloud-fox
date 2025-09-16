"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          よくある質問
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          初めてご依頼いただく方から<br className="md:hidden"/>よくいただくご質問をまとめました。
        </p>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Q1 */}
            <AccordionItem
              value="item-1"
              className="border border-transparent rounded-md data-[state=open]:border-[#1E73BE] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-white bg-[#1E73BE] data-[state=open]:rounded-b-none pl-8 py-6 rounded-md hover:bg-[#155a96] hover:shadow-md transition-all hover:no-underline">
                制作期間はどのくらいかかりますか？
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed p-8">
                一般的な5〜10ページ程度のコーポレートサイトであれば、
                ヒアリングから公開まで1.5〜2ヶ月程度を目安としています。
                規模や内容により前後いたします。
              </AccordionContent>
            </AccordionItem>

            {/* Q2 */}
            <AccordionItem
              value="item-2"
              className="border border-transparent rounded-md data-[state=open]:border-[#1E73BE] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-white bg-[#1E73BE] data-[state=open]:rounded-b-none pl-8 py-6 rounded-md hover:bg-[#155a96] hover:shadow-md transition-all hover:no-underline">
                SEO対策は含まれていますか？
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed p-8">
                はい、基本的なSEO対策（内部構造、meta設定、モバイル最適化）は標準対応しております。
                さらに強化したい場合はオプションでご相談いただけます。
              </AccordionContent>
            </AccordionItem>

            {/* Q3 */}
            <AccordionItem
              value="item-3"
              className="border border-transparent rounded-md data-[state=open]:border-[#1E73BE] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-white bg-[#1E73BE] data-[state=open]:rounded-b-none pl-8 py-6 rounded-md hover:bg-[#155a96] hover:shadow-md transition-all hover:no-underline">
                修正はどの程度まで可能ですか？
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed p-8">
                基本プランには2回までの修正対応を含んでおります。
                それ以上の場合も柔軟にご相談可能ですのでご安心ください。
              </AccordionContent>
            </AccordionItem>

            {/* Q4 */}
            <AccordionItem
              value="item-4"
              className="border border-transparent rounded-md data-[state=open]:border-[#1E73BE] transition-colors"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-white bg-[#1E73BE] data-[state=open]:rounded-b-none pl-8 py-6 rounded-md hover:bg-[#155a96] hover:shadow-md transition-all hover:no-underline">
                公開後の運用サポートはありますか？
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed p-8">
                はい。公開後の更新や改善についてもご希望に応じてサポートいたします。
                継続的な運用プランもご用意しております。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}