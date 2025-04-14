import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "💡",
      title: "직관적인 사용자 경험",
      description: "누구나 쉽게 사용할 수 있는 인터페이스로 복잡한 작업도 간단하게 처리하세요."
    },
    {
      icon: "🚀",
      title: "빠른 성능",
      description: "최적화된 알고리즘으로 어떤 작업도 빠르게 처리합니다."
    },
    {
      icon: "🔒",
      title: "강력한 보안",
      description: "최신 보안 기술로 사용자의 데이터를 안전하게 보호합니다."
    },
    {
      icon: "📊",
      title: "데이터 분석",
      description: "실시간 데이터 분석으로 비즈니스 인사이트를 얻을 수 있습니다."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">주요 기능</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리의 서비스는 비즈니스 성장을 위한 다양한 기능을 제공합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;