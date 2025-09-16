"use client";

import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PhoneMockup from "./PhoneMockup";

export function ProfileSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="profile" className="bg-[#1E73BE] py-16 sm:py-20">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
      >
        {/* Left / Text */}
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            私について
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-lg text-white text-center md:text-left leading-relaxed">
            お客様のビジネスの成長をサポートする<br className="md:hidden"/>web開発を専門としています。<br />
            webサイトを0から構築する場合でも、<br className="md:hidden"/>既存webサイトをリニューアルする場合でも<br />
            お客様のニーズに合わせた最高品質、<br className="md:hidden"/>高性能のソリューションをご提供いたします。
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8 items-center">
            <Button size="lg" className="bg-accent text-white font-bold hover:bg-[#E67328] w-full sm:w-auto">
              制作実績を見る
            </Button>
            <Button size="lg" className="bg-blue-500 text-white font-bold hover:bg-blue-600 w-full sm:w-auto">
              無料相談する
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 text-center mt-12 sm:mt-16">
            <div className="text-white">
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                +{inView && <CountUp end={12} duration={2} />}
              </h3>
              <p className="border border-white rounded-md inline-block my-4 sm:my-4 px-3 py-1 sm:px-4 sm:py-2 text-base">
                構築数
              </p>
              <p className="text-xs sm:text-sm">これまで中小企業をはじめとするクライアント様へ10以上の開発してきました。</p>
            </div>
            <div className="text-white">
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                {inView && <CountUp end={101} duration={2} />}%
              </h3>
              <p className="border border-white rounded-md inline-block my-4 sm:my-4 px-3 py-1 sm:px-4 sm:py-2 text-base">
                満足度
              </p>
              <p className="text-xs sm:text-sm">工数の削減や細かいご提案をさせていただいてることが満足度につながっています。</p>
            </div>
            <div className="text-white col-span-1 sm:col-span-2">
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold">
                +{inView && <CountUp end={999} duration={8} />}
              </h3>
              <p className="border border-white rounded-md inline-block my-4 sm:my-4 px-3 py-1 sm:px-4 sm:py-2 text-base">
                コーヒーカップ数
              </p>
              <p className="text-xs sm:text-sm">This one is pretty much self explanatory</p>
            </div>
          </div>
        </motion.div>

        {/* Right / Phone */}
        <motion.div
          className="col-span-2 flex justify-center md:justify-end mt-8 md:mt-0 mx-auto"
          initial={{ opacity: 0, scale: 0.8, rotateY: -45, rotateX: 10, y: 50 }}
          animate={inView ? { opacity: 1, scale: 1, rotateY: 0, rotateX: 0, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
