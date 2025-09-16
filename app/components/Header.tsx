"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { href: "#features", label: "機能" },
    { href: "#pricing", label: "価格" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "お問い合わせ" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* ロゴ */}
        <Link href="/" className="text-3xl font-bold">
          <span className="text-[#ec661a]">Cloud</span>{" "}
          <span className="text-[#206db2]">Fox</span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative group">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </nav>

        {/* PC CTA */}
        <div className="hidden md:block">
          <Button asChild className="bg-accent font-bold hover:bg-[#E67328] text-white shadow-lg hover:shadow-xl transition">
            <Link href="#contact">無料相談する</Link>
          </Button>
        </div>

        {/* モバイル ハンバーガー */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 w-6 h-6 flex flex-col justify-between items-center"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-3" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-700 transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <nav className="flex flex-col gap-4 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 font-medium py-2"
              onClick={() => setMenuOpen(false)} // 遷移時に閉じる
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-accent font-bold hover:bg-[#E67328] text-white w-full mt-2">
            <Link href="#contact">無料相談する</Link>
          </Button>
        </nav>
      </motion.div>
    </header>
  )
}
