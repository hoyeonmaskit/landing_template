import React from 'react';
import Image from 'next/image';

const ProductSection: React.FC = () => {
  const products = [
    {
      title: "기본 플랜",
      description: "개인 및 소규모 팀을 위한 기본 기능",
      features: ["핵심 기능 이용", "1GB 스토리지", "이메일 지원", "2명 사용자"]
    },
    {
      title: "프로 플랜",
      description: "전문가와 성장하는 비즈니스를 위한 고급 기능",
      features: ["기본 플랜 모든 기능", "10GB 스토리지", "우선 지원", "10명 사용자"]
    },
    {
      title: "엔터프라이즈 플랜",
      description: "대규모 조직을 위한 맞춤형 솔루션",
      features: ["프로 플랜 모든 기능", "무제한 스토리지", "24/7 전담 지원", "무제한 사용자"]
    }
  ];

  return (
    <section id="product" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">제품 및 서비스</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            비즈니스 규모와 목표에 맞는 다양한 플랜을 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;