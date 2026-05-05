import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#020611] py-12 border-t border-border">
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
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Erope.AI. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Social Links can go here */}
        </div>
      </div>
    </footer>
  );
}
