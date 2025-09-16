"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

export function PricingSection() {
  const planVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: custom * 0.3, type: "spring", stiffness: 120, damping: 15 },
    }),
  };

  const plans = [
    {
      title: "スタートプラン",
      desc: "小規模サイト・LPに最適",
      price: "¥150,000〜",
      items: ["ヒアリング / 設計", "デザイン制作（1案）", "5ページまで対応", "基本SEO設定"],
      highlight: false,
    },
    {
      title: "ビジネスプラン",
      desc: "中小企業サイトに最適",
      price: "¥300,000〜",
      items: ["ヒアリング / 設計", "デザイン制作（2案）", "10ページまで対応", "SEO最適化", "スマホ最適化"],
      highlight: true,
    },
    {
      title: "プレミアムプラン",
      desc: "本格的なサイト運用に最適",
      price: "¥500,000〜",
      items: ["ヒアリング / 設計", "デザイン制作（複数案）", "ページ数制限なし", "高度なSEO施策", "運用・改善サポート"],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          料金プラン
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          目的やご予算に合わせて柔軟に<br className="md:hidden"/>対応いたします。
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={planVariants}
              className={`flex flex-col justify-between p-8 rounded-2xl border-2 shadow-sm transition ${
                plan.highlight
                  ? "border-blue-500 shadow-md bg-white relative"
                  : "border-gray-200 bg-gray-50 hover:shadow-md"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
                  人気No.1
                </div>
              )}
              <div>
                <h3 className="text-2xl font-semibold text-blue-900">{plan.title}</h3>
                <p className="mt-2 text-gray-600">{plan.desc}</p>
                <p className="mt-6 text-4xl font-bold text-blue-600">{plan.price}</p>
                <ul className="mt-6 space-y-2 text-gray-700 text-left">
                  {plan.items.map((item, idx) => (
                    <li key={idx}>✔︎ {item}</li>
                  ))}
                </ul>
              </div>
              <Button size="lg" className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white">
                このプランで相談する
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Button size="lg" className="bg-accent hover:bg-[#E67328] text-white">
            その他のオプションを見る
          </Button>
        </div>
      </div>
    </section>
  );
}
