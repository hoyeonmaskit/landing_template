'use client';

// /src/components/sections/BetaSignupSection.tsx
import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import BetaSignupForm from '@/components/forms/BetaSignupForm';

const BetaSignupSection: React.FC = () => {
  return (
    <section id="beta-signup" className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="베타 파트너 신청"
          subtitle="큐리스 스페이스의 베타 파트너가 되어 예약 관리를 혁신하세요"
        />
        
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              2025년 6월까지 베타 파트너로 참여하시는 분들에게는 <span className="font-semibold text-indigo-600">3개월 무료 이용권</span>과
              <span className="font-semibold text-indigo-600"> 전용 컨설팅</span>을 제공해 드립니다.
            </p>
          </div>
          
          <BetaSignupForm />
        </div>
      </Container>
    </section>
  );
};

export default BetaSignupSection;
