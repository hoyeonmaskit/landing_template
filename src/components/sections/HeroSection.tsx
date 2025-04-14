import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">혁신적인</span> 솔루션으로<br />
            비즈니스를 성장시키세요
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            최신 기술을 활용한 우리의 서비스로 비즈니스 성장과 효율성을 극대화하세요.
            지금 바로 시작하고 차이를 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="bg-blue-600 text-white text-center px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
              무료로 시작하기
            </Link>
            <Link href="#demo" className="border border-gray-300 text-gray-700 text-center px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors">
              데모 보기
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg h-80 md:h-96">
            {/* 실제 이미지로 교체 필요 */}
            <div className="absolute inset-0 bg-blue-200 rounded-lg opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              이미지 영역 (추후 실제 이미지로 교체)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;