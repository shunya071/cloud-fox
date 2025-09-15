// app/components/Header.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* ロゴ */}
        <Link href="/" className="text-3xl font-bold text-primary">
          {/* <Image 
            src="/logo.png"
            alt="ロゴ"
            width={200}
            height={200}
            className="w-full h-20"
          /> */}
          <span className="text-[#ec661a]">Cloud</span> <span className="text-[#206db2]">Fox</span>
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="#features" className="hover:text-primary">
            機能
          </Link>
          <Link href="#pricing" className="hover:text-primary">
            価格
          </Link>
          <Link href="#faq" className="hover:text-primary">
            FAQ
          </Link>
          <Link href="#contact" className="hover:text-primary">
            お問い合わせ
          </Link>
        </nav>

        {/* CTA */}
        <Button asChild className="bg-accent font-bold hover:bg-[#E67328] text-white">
          <Link href="#contact">無料相談する</Link>
        </Button>
      </div>
    </header>
  )
}
