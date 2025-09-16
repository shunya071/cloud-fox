"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export function PortfolioSection() {
  const workVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: custom * 0.2, type: "spring", stiffness: 120 },
    }),
  };

  const works = [
    {
      title: "サービスサイト制作",
      desc: "信頼感を重視したデザインで企業価値を高めるサイトを構築。",
      img: "/works/work-item1.png",
      alt: "制作実績1",
    },
    {
      title: "口コミ・検索サイト制作",
      desc: "コンバージョン率を意識した構成でお問い合わせ増加を実現。",
      img: "/works/work-item2.png",
      alt: "制作実績2",
    },
    {
      title: "ポータルサイト制作",
      desc: "若手人材に刺さるビジュアル設計で応募数を大幅に改善。",
      img: "/works/work-item3.png",
      alt: "制作実績3",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          制作実績
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          様々な業種・規模の企業様にご依頼いただいています。
          実績の一部をご紹介します。
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition"
              custom={i} // delay用にインデックスを渡す
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={workVariants}
            >
              <Image
                src={work.img}
                alt={work.alt}
                width={400}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-blue-900">{work.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{work.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-12">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            他の実績も見る
          </Button>
        </div> */}
      </div>
    </section>
  );
}
