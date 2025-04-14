import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-gray-600 italic mb-4">"{quote}"</div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-600">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "이 서비스를 도입한 이후 작업 효율성이 50% 이상 향상되었습니다. 정말 추천합니다!",
      author: "김민준",
      role: "CEO",
      company: "테크노바"
    },
    {
      quote: "사용하기 쉽고 고객 지원도 훌륭합니다. 우리 팀의 필수 도구가 되었습니다.",
      author: "이지원",
      role: "마케팅 매니저",
      company: "그로스하이브"
    },
    {
      quote: "데이터 분석 기능이 특히 인상적입니다. 정확한 인사이트를 얻을 수 있어요.",
      author: "박서연",
      role: "데이터 애널리스트",
      company: "데이터랩스"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 후기</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            우리 서비스를 사용한 고객들의 생생한 이야기를 들어보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;