import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">브랜드명</h3>
            <p className="text-gray-400">
              비즈니스 성장을 위한 최고의 솔루션을 제공합니다.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">제품</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">기능</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">요금제</Link></li>
              <li><Link href="/enterprise" className="text-gray-400 hover:text-white transition-colors">엔터프라이즈</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white transition-colors">파트너</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">회사</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">소개</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">블로그</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">채용</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">연락처</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">지원</h4>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">문서</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">고객지원</Link></li>
              <li><Link href="/status" className="text-gray-400 hover:text-white transition-colors">시스템 상태</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 브랜드명. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">이용약관</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">쿠키 정책</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;