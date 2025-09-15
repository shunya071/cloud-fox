"use client";

import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-[#1E73BE] text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          あなたのビジネスを次のステージへ
        </h2>
        <p className="text-lg md:text-xl mb-10 text-blue-100 leading-relaxed">
          集客や信頼構築に強いWebサイトを、岐阜・愛知エリアでお届けします。<br /> 
          まずはお気軽にご相談ください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-[#1E73BE] font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all"
        >
          お問い合わせはこちら
        </Link>
      </div>
    </section>
  );
}
