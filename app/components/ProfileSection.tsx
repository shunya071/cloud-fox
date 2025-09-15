"use client";

import { Button } from "@/components/ui/button";

export function ProfileSection() {
  return (
    <section id="profile" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="プロフィール写真"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Profile Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            制作者プロフィール
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            岐阜を拠点にWeb制作を行っております、森 隼也と申します。
            フロントエンドエンジニアとして培った経験を活かし、
            エンドクライアント様の「成果につながるサイト制作」をモットーに活動しています。
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            ただ作るだけでなく、事業の成長を見据えた提案・設計を大切にしています。
            特にSEOや運用効率を意識し、公開後も長く使えるWebサイトをご提供いたします。
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              無料相談する
            </Button>
          </div>
        </div>
      </div>
    </section>

  )
}