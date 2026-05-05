"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Supabase 데이터베이스에 저장
      const { error: supabaseError } = await supabase
        .from('inquiries')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            message: formData.message,
          }
        ]);

      if (supabaseError) {
        console.error("Supabase Error:", supabaseError);
        alert("문의 접수에 실패했습니다. 잠시 후 다시 시도해주세요.");
        setIsSubmitting(false);
        return;
      }

      // 2. 이메일로 알림 전송 (formsubmit.co 활용)
      const emailResponse = await fetch("https://formsubmit.co/ajax/erope3v@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          "이름": formData.name,
          "기업명": formData.company,
          "답변받을 이메일": formData.email,
          "문의 내용": formData.message,
          "_subject": `[Erope.AI 웹사이트 문의] ${formData.company || "소속없음"} - ${formData.name}님`,
          "_captcha": "false"
        })
      });

      if (emailResponse.ok) {
        alert("성공적으로 프로젝트 문의가 접수되었습니다! 담당자가 확인 후 연락드리겠습니다.");
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        console.error("Email API Error:", await emailResponse.text());
        alert("문의는 접수되었으나, 이메일 알림 전송에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              프로젝트 문의하기
            </h3>
            <p className="text-muted-foreground mt-4">
              AI 기반 정보화전략컨설팅의 도입, 지금 바로 전문가와 상의하세요.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="w-full lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">이메일</p>
                    <p className="text-white font-medium">erope3v@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">전화번호</p>
                    <p className="text-white font-medium">010-6440-8182</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/3 bg-background/50 p-8 rounded-2xl border border-border/50 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">이름 / 담당자명</label>
                  <Input 
                    id="name" 
                    placeholder="홍길동" 
                    className="bg-card" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white">기업명</label>
                  <Input 
                    id="company" 
                    placeholder="Erope.AI" 
                    className="bg-card" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">이메일 주소</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="example@domain.com" 
                  className="bg-card" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">문의 내용</label>
                <Textarea 
                  id="message" 
                  placeholder="컨설팅 문의, 협력 제안 등 자유롭게 작성해주세요." 
                  className="min-h-[150px] bg-card"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "전송 중..." : "메시지 보내기"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
