import Link from "next/link";

export function Footer() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 blur-[100px] z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">AI 컨설팅의 시작, <br className="md:hidden" />지금 바로 전문가와 상의하세요</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Erope.AI의 자동컨설팅 엔진과 전문가 그룹이 성공적인 디지털 전환을 이끌어 드립니다.</p>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            프로젝트 문의하기
          </a>
        </div>
      </section>
      <footer className="bg-primary py-12 border-t border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-4">
            <span className="text-2xl font-bold tracking-tighter text-white">
              Erope<span className="text-primary">.AI</span>
            </span>
          </Link>
          <p className="text-muted-foreground mb-6 max-w-sm">
            AI 기반 자동컨설팅 플랫폼 및 정보화전략컨설팅 전문기업.
            미래를 이끄는 혁신적인 IT 전략을 제시합니다.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>ACE (AI Consulting Engine)</li>
            <li>ISP / ISMP 컨설팅</li>
            <li>AI·빅데이터 R&D 컨설팅</li>
            <li>Mobility R&D 컨설팅</li>
            <li>경영진단 및 3V Partnership</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>이메일: erope3v@gmail.com</li>
            <li>전화번호: 010-6440-8182</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Erope.AI. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Social Links can go here */}
        </div>
      </div>
      </footer>
    </>
  );
}
