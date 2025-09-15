"use client";

import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          料金プラン
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          目的やご予算に合わせて柔軟に対応いたします。
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-md transition bg-gray-50">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900">
                スタートプラン
              </h3>
              <p className="mt-2 text-gray-600">小規模サイト・LPに最適</p>
              <p className="mt-6 text-4xl font-bold text-blue-600">¥150,000〜</p>
              <ul className="mt-6 space-y-2 text-gray-700 text-left">
                <li>✔︎ ヒアリング / 設計</li>
                <li>✔︎ デザイン制作（1案）</li>
                <li>✔︎ 5ページまで対応</li>
                <li>✔︎ 基本SEO設定</li>
              </ul>
            </div>
            {/* ボタン押したプランでお問い合わせのフォームがモーダルで表示 */}
            <Button size="lg" className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white">
              このプランで相談する
            </Button>
          </div>

          {/* Plan 2 */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border-2 border-blue-500 shadow-md bg-white relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
              人気No.1
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900">
                ビジネスプラン
              </h3>
              <p className="mt-2 text-gray-600">中小企業サイトに最適</p>
              <p className="mt-6 text-4xl font-bold text-blue-600">¥300,000〜</p>
              <ul className="mt-6 space-y-2 text-gray-700 text-left">
                <li>✔︎ ヒアリング / 設計</li>
                <li>✔︎ デザイン制作（2案）</li>
                <li>✔︎ 10ページまで対応</li>
                <li>✔︎ SEO最適化</li>
                <li>✔︎ スマホ最適化</li>
              </ul>
            </div>
            <Button size="lg" className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white">
              このプランで相談する
            </Button>
          </div>

          {/* Plan 3 */}
          <div className="flex flex-col justify-between p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-md transition bg-gray-50">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900">
                プレミアムプラン
              </h3>
              <p className="mt-2 text-gray-600">本格的なサイト運用に最適</p>
              <p className="mt-6 text-4xl font-bold text-blue-600">¥500,000〜</p>
              <ul className="mt-6 space-y-2 text-gray-700 text-left">
                <li>✔︎ ヒアリング / 設計</li>
                <li>✔︎ デザイン制作（複数案）</li>
                <li>✔︎ ページ数制限なし</li>
                <li>✔︎ 高度なSEO施策</li>
                <li>✔︎ 運用・改善サポート</li>
              </ul>
            </div>
            <Button size="lg" className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white">
              このプランで相談する
            </Button>
          </div>
        </div>
        <div className="mt-12">
          <Button size="lg" className="bg-accent hover:bg-[#E67328] text-white">
            その他のオプションを見る
          </Button>
        </div>
      </div>
    </section>

  )
}