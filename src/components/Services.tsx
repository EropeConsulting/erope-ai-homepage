"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Cpu, Network, Database, Car, TrendingUp, Handshake } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "ACE (AI Automated Consulting Engine)",
      description: "AI를 활용해 컨설팅 프로세스를 자동화하여 비용을 절감하고 정확도를 높이는 혁신적인 솔루션.",
      icon: <Cpu className="w-10 h-10 text-primary" />,
    },
    {
      title: "ISP / ISMP 컨설팅",
      description: "기업의 비전과 목표 달성을 위한 최적의 정보화 전략 계획 및 마스터플랜 수립.",
      icon: <Network className="w-10 h-10 text-primary" />,
    },
    {
      title: "AI·빅데이터 R&D 과제 컨설팅",
      description: "최신 AI 모델 및 빅데이터 분석 기술을 적용한 연구개발 과제 기획 및 수행 지원.",
      icon: <Database className="w-10 h-10 text-primary" />,
    },
    {
      title: "Mobility R&D 컨설팅",
      description: "자율주행, 스마트 모빌리티 등 차세대 이동수단과 관련된 기술 전략 및 비즈니스 모델 개발.",
      icon: <Car className="w-10 h-10 text-primary" />,
    },
    {
      title: "경영진단",
      description: "데이터 기반의 객관적인 조직 및 비즈니스 프로세스 진단을 통해 개선 방안 도출.",
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
    },
    {
      title: "3V Partnership",
      description: "Vision, Value, Velocity를 핵심으로 하는 파트너십을 통해 동반 성장을 견인.",
      icon: <Handshake className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              성공을 위한 맞춤형 컨설팅
            </h3>
            <p className="text-muted-foreground mt-4">
              AI 기술과 깊이 있는 산업 전문성을 결합하여 차별화된 가치를 제공합니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full bg-background/50 border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="mb-4 bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
