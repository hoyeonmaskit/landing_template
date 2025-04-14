import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="500+" label="고객사" />
          <StatItem value="98%" label="만족도" />
          <StatItem value="24/7" label="고객 지원" />
          <StatItem value="10만+" label="사용자" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;