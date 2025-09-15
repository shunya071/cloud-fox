// app/components/Header.tsx
"use client"


export function ServiceSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Web制作の流れ
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          初めての方も安心。ヒアリングから納品まで、明確なステップで進行します。
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-900">
              1. ヒアリング
            </h3>
            <p className="mt-2 text-gray-700">
              現状の課題や目的を詳しく伺い、最適なサイトの方向性を一緒に考えます。
            </p>
          </div>
          {/* Step 2 */}
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-900">
              2. デザイン・設計
            </h3>
            <p className="mt-2 text-gray-700">
              ユーザー目線とSEOを意識した設計を行い、信頼感のあるデザインをご提案します。
            </p>
          </div>
          {/* Step 3 */}
          <div className="p-6 rounded-2xl shadow-lg bg-gray-50">
            <h3 className="text-xl font-semibold text-blue-900">
              3. 開発・公開
            </h3>
            <p className="mt-2 text-gray-700">
              最新の技術で開発し、公開後の運用や改善も継続的にサポートいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
