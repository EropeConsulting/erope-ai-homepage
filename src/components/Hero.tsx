"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4 backdrop-blur-sm">
            <span>Beyond Consulting, Towards Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
            AI 컨설턴트와 함께하는 <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              기업 회복 전략
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Erope.AI는 전문 컨설턴트의 암묵지와 AI 기술을 결합하여 중소기업, 공공기관, 스타트업의 전략 수립과 정보화 컨설팅을 고도화합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#services" className={`${buttonVariants({ variant: "default", size: "lg" })} w-full sm:w-auto text-base group`}>
              서비스 알아보기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className={`${buttonVariants({ variant: "outline", size: "lg" })} w-full sm:w-auto text-base`}>
              문의하기
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
}
