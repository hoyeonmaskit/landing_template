"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-blue-600">브랜드명</span>
          </Link>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
            기능
          </Link>
          <Link href="#product" className="text-gray-600 hover:text-blue-600 transition-colors">
            제품
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
            후기
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* CTA 버튼 */}
        <div className="hidden md:block">
          <Link href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            시작하기
          </Link>
        </div>

        {/* 모바일 메뉴 토글 버튼 */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              기능
            </Link>
            <Link href="#product" className="text-gray-600 hover:text-blue-600 transition-colors">
              제품
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              후기
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-colors">
              시작하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;