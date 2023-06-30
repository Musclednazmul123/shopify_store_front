import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      id: 2,
      question: 'Question 2',
      answer: 'Answer 2',
    },
    // Add more question-answer pairs as needed
  ];

  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);

  const toggleQuestion = (questionId: number) => {
    if (questionId === expandedQuestionId) {
      setExpandedQuestionId(null);
    } else {
      setExpandedQuestionId(questionId);
    }
  };

  return (
    <div className="flex max-w-[1280px] p-5 gap-10 mx-auto my-20">
      <div className="w-1/3">
        <Image
          src="https://cdn.shopify.com/s/files/1/0707/5302/6343/files/image_29.png"
          alt="Image Description"
          width={200}
          height={150}
        />
      </div>
      <div className="w-2/3 p-5 bg-gray-200 rounded-lg">
        <div>
            <h2>Faq</h2>
            <p>Fell free to ask more questions</p>
        </div>
        <div className='bg-white p-5 rounded-lg mt-4'>
            {faqData.map((faq) => (
            <div className="mb-4" key={faq.id}>
                <div className="cursor-pointer flex justify-between w-full" onClick={() => toggleQuestion(faq.id)}>
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <ChevronDownIcon
                    className={`ml-2 h-6 w-6 transition-transform duration-300 ${
                    faq.id === expandedQuestionId ? 'transform rotate-[0deg]' : 'transform rotate-[-90deg]'
                    }`}
                />
                </div>
                {faq.id === expandedQuestionId && (
                <div className="overflow-hidden transition-all duration-300">
                    <p>{faq.answer}</p>
                </div>
                )}
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
