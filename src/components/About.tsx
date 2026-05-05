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
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
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
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 lg:pl-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl border border-border shadow-sm p-8">
              <h3 className="text-xl font-bold text-foreground mb-8">Consulting Process</h3>
              <div className="space-y-8 pl-4 border-l-2 border-primary/20">
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 bg-background border-2 border-primary w-4 h-4 rounded-full"></div>
                  <h4 className="font-bold text-primary">1. 현황 분석 및 경영진단</h4>
                  <p className="text-sm text-muted-foreground mt-1">기업의 비즈니스 구조와 핵심 문제점을 객관적으로 파악합니다.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 bg-background border-2 border-secondary w-4 h-4 rounded-full"></div>
                  <h4 className="font-bold text-foreground">2. 정보화전략(ISP/ISMP) 수립</h4>
                  <p className="text-sm text-muted-foreground mt-1">성공적인 디지털 전환을 위한 최적의 로드맵과 마스터플랜을 설계합니다.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 bg-background border-2 border-accent w-4 h-4 rounded-full"></div>
                  <h4 className="font-bold text-foreground">3. 자동화 컨설팅(ACE) 적용</h4>
                  <p className="text-sm text-muted-foreground mt-1">Erope.AI만의 지식그래프와 AI 엔진을 통해 고도화된 인사이트를 제공합니다.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[25px] top-1 bg-background border-2 border-primary w-4 h-4 rounded-full"></div>
                  <h4 className="font-bold text-foreground">4. 성과 극대화 및 파트너십</h4>
                  <p className="text-sm text-muted-foreground mt-1">3V 파트너십을 기반으로 지속 가능한 비즈니스 밸류를 창출합니다.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
