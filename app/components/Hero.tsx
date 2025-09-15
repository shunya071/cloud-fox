// app/components/Header.tsx
"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative text-white h-screen flex items-center bg-image--hero">
      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Cloud Fox
          <br />
          地域密着型で課題を制作から解決する
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-50 max-w-2xl">
          SEOに強く、集客につながるサイト制作を。<br />リニューアル、企画から運用までワンストップでサポートいたします。
        </p>
        <div className="mt-12 flex gap-4">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white bg-blue-500 hover:bg-blue-600 hover:text-geay-100"
          >
            制作実績を見る
          </Button>
          <Button size="lg" className="bg-accent font-bold hover:bg-[#E67328] text-white">
            無料相談する <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
