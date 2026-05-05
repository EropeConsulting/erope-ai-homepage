"use client";

import { motion } from "framer-motion";
import { Mic, MessageCircle, Send, Cpu, ExternalLink } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const aiServices = [
  {
    title: "음성 비서",
    description: "텍스트를 음성으로 변환하는 gTTS 기능과 음성 파일을 텍스트로 변환하는 OpenAI Whisper API 기반의 AI 음성 비서 체험 서비스입니다.",
    link: "https://voicebot-5gjwzofimfazqubiku7fgp.streamlit.app/",
    buttonText: "음성 비서 체험하기",
    icon: <Mic className="w-8 h-8 text-primary" />
  },
  {
    title: "카카오톡 채널",
    description: "카카오톡 채널을 통해 Erope.AI의 AI 컨설팅, 피터 드러커 기반 경영 인사이트, 서비스 안내를 편리하게 받아볼 수 있습니다.",
    link: "https://pf.kakao.com/_ynNCG/chat",
    buttonText: "카카오톡으로 상담하기",
    icon: <MessageCircle className="w-8 h-8 text-primary" />
  },
  {
    title: "텔레그램 AI 챗봇",
    description: "텔레그램에서 언제든지 AI 챗봇을 통해 피터 드러커 기반의 경영·전략 인사이트와 AI 컨설팅 정보를 확인할 수 있습니다.",
    link: "https://t.me/EropeConsulting_bot",
    buttonText: "텔레그램 챗봇 열기",
    icon: <Send className="w-8 h-8 text-primary" />
  },
  {
    title: "EdgeAI",
    description: "AI 컨설턴트 피터 드러커를 연구하며 함께 새로운 도전을 설계하고, AI 기반 마케팅 전략 컨설팅을 체험할 수 있는 서비스입니다.",
    link: "https://chatbot-tjzoer67d97fvgnux9xgic.streamlit.app/",
    buttonText: "EdgeAI 체험하기",
    icon: <Cpu className="w-8 h-8 text-primary" />
  }
];

export function AiServices() {
  return (
    <section id="ai-services" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Experience</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              AI 서비스 체험
            </h3>
            <p className="text-muted-foreground mt-4">
              Erope.AI가 제공하는 다양한 AI 기반 서비스와 챗봇을 직접 체험해 보세요.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card shadow-sm border border-border/50 rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6 bg-primary/5 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
              <p className="text-sm text-muted-foreground flex-grow mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                href={service.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${buttonVariants({ variant: "outline" })} w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors`}
              >
                {service.buttonText}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
