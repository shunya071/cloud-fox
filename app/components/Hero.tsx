// app/components/Header.tsx
"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className = "relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          エンドクライアントの課題を解決する
          <br />
          信頼のWeb制作サービス
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl">
          SEOに強く、成果につながるサイト制作を。企画から運用までワンストップでサポートいたします。
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            無料相談する <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-900"
          >
            制作実績を見る
          </Button>
        </div>
      </div>
    </section>
  )
}
