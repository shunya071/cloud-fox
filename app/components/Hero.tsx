// app/components/Header.tsx
"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative text-white h-screen flex items-center justify-center bg-image--hero overflow-hidden">
      {/* 背景に動くグラデーション */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-900 opacity-60"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center z-10">
        {/* タイトル */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Cloud Fox
          <br />
          地域密着型で課題を制作から解決する
        </motion.h1>

        {/* サブテキスト */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-blue-50 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          SEOに強く、集客につながるサイト制作を。<br />
          リニューアル、企画から運用までワンストップでサポートいたします。
        </motion.p>

        {/* ボタン */}
        <motion.div
          className="mt-12 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/works">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-blue-500 hover:bg-blue-600 hover:text-gray-100"
              >
                制作実績を見る
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-accent font-bold hover:bg-[#E67328] text-white">
                無料相談する <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
