"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const coreValues = [
    { title: "전문성", desc: "수많은 정보화전략컨설팅(ISP/ISMP) 수행 경험" },
    { title: "AI 기술력", desc: "자체 개발 자동컨설팅 엔진(ACE) 보유" },
    { title: "3V Partnership", desc: "고객과 함께 가치를 창출하는 동반자" },
    { title: "미래지향", desc: "Mobility, AI, 빅데이터 등 R&D 선도" },
  ];

  return (
    <section id="about" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              디지털 혁신의 <br />
              새로운 패러다임을 제시합니다.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Erope.AI는 전통적인 컨설팅의 한계를 넘어, AI 기반의 자동화된 컨설팅 엔진(ACE)을 통해 더 빠르고 정확한 전략적 인사이트를 제공합니다. 
              우리의 목표는 기술을 통해 비즈니스의 잠재력을 극대화하는 것입니다.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary/20 to-blue-900/20 border border-primary/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              {/* Abstract Representation */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border-[1px] border-primary/30 flex items-center justify-center before:absolute before:inset-4 before:rounded-full before:border-[1px] before:border-primary/20 before:animate-[spin_10s_linear_infinite]">
                <div className="w-24 h-24 bg-primary/20 rounded-full blur-xl absolute" />
                <span className="text-3xl font-bold text-white z-10">Erope<span className="text-primary">.AI</span></span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
