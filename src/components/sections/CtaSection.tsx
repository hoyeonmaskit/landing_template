import React from 'react';
import Link from 'next/link';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 시작하세요</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          더 나은 비즈니스 성과를 위한 첫 걸음을 내딛으세요. 
          14일 무료 체험으로 서비스의 모든 기능을 경험해보세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            무료 체험 시작하기
          </Link>
          <Link href="/demo" className="border border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
            데모 요청하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;