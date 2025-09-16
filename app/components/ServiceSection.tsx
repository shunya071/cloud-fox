"use client"

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export function ServiceSection() {
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: custom * 0.3, type: "spring", stiffness: 120 },
    }),
  };

  const steps = [
    {
      title: "ヒアリング",
      img: "/service/hearing_item.png",
      desc: "現状の課題や目的を詳しく伺い、最適なサイトの方向性を一緒に考えます。",
    },
    {
      title: "デザイン・設計",
      img: "/service/mockup_item.png",
      desc: "ユーザー目線とSEOを意識した設計を行い、信頼感のあるデザインをご提案します。",
    },
    {
      title: "開発・公開",
      img: "/service/creation_item.png",
      desc: "最新の技術で開発し、公開後の運用や改善も継続的にサポートいたします。",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Web制作の流れ
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          初めての方も安心。ヒアリングから納品まで、明確なステップで進行します。
        </motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-gray-50"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stepVariants}
            >
              <h3 className="text-2xl text-center font-semibold text-blue-900">
                {step.title}
              </h3>
              <Image
                src={step.img}
                alt={step.title}
                width={300}
                height={250}
                className="mx-auto my-4"
              />
              <p className="mt-2 text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
