"use client";

import { motion } from "framer-motion";
import { Building2, Users, Rocket, Landmark } from "lucide-react";

export function Clients() {
  const targets = [
    { name: "중소기업 (SMEs)", icon: <Building2 className="w-8 h-8" /> },
    { name: "공공기관", icon: <Landmark className="w-8 h-8" /> },
    { name: "스타트업", icon: <Rocket className="w-8 h-8" /> },
    { name: "독립 컨설턴트 및 파트너사", icon: <Users className="w-8 h-8" /> },
  ];

  return (
    <section id="clients" className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Target Clients</h2>
            <h3 className="text-3xl font-bold text-foreground mb-4">함께 성장할<br/>파트너를 찾습니다</h3>
            <p className="text-muted-foreground">
              다양한 규모와 산업군에 맞는 맞춤형 컨설팅 솔루션을 제공하여, 실질적인 비즈니스 성과를 창출합니다.
            </p>
          </motion.div>
          
          <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
            {targets.map((target, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-card shadow-sm border border-border/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-muted transition-colors group"
              >
                <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
                  {target.icon}
                </div>
                <h4 className="font-semibold text-foreground">{target.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
