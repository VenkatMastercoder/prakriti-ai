"use client"
import React from 'react';
import Link from 'next/link';

// TypeScript interfaces
interface Option {
  text: string;
  value: 'yes' | 'somewhat' | 'no';
  doshaType: 'vata' | 'pitta' | 'kapha';
}

interface Characteristic {
  text: string;
  doshaType: 'vata' | 'pitta' | 'kapha';
}

interface Question {
  id: number;
  category: string;
  question: string;
  characteristics: Characteristic[];
}

type Answer = {
  value: 'yes' | 'somewhat' | 'no';
  doshaType: 'vata' | 'pitta' | 'kapha';
};

interface Answers {
  [key: string]: Answer; // key will be questionId-characteristicIndex
}

// Vedic assessment questions
const questions: Question[] = [
  {
    id: 1,
    category: "Mind & Body Response",
    question: "How do you typically feel about the changes in weather, especially cold, heat, or humidity?",
    characteristics: [
      { text: "Discomfort in cold, dry, windy weather", doshaType: "vata" },
      { text: "Discomfort in hot, humid weather", doshaType: "pitta" },
      { text: "Discomfort in cold, damp weather", doshaType: "kapha" }
    ]
  },
  {
    id: 2,
    category: "Response Pattern",
    question: "How do you describe your response mechanism over the course of your life?",
    characteristics: [
      { text: "Instinctive and quick", doshaType: "vata" },
      { text: "Calculated and sure", doshaType: "pitta" },
      { text: "Slow but lasting", doshaType: "kapha" }
    ]
  },
  {
    id: 3,
    category: "Energy & Endurance",
    question: "How would you describe your stamina and energy levels?",
    characteristics: [
      { text: "Sudden burst of energy but easily burn out", doshaType: "vata" },
      { text: "Good when focused, tend to over exertion", doshaType: "pitta" },
      { text: "Slow to start, but long lasting endurance", doshaType: "kapha" }
    ]
  },
  {
    id: 4,
    category: "Stress Reaction",
    question: "How do you typically handle stress or challenging situations?",
    characteristics: [
      { text: "Anxiety, restlessness, difficulty concentrating", doshaType: "vata" },
      { text: "Irritability, impatience, a need to control", doshaType: "pitta" },
      { text: "Withdrawal, lethargy, avoidance", doshaType: "kapha" }
    ]
  },
  {
    id: 5,
    category: "Emotional Pattern",
    question: "What emotional characteristics do you most identify with?",
    characteristics: [
      { text: "Creativity, enthusiasm, flexibility", doshaType: "vata" },
      { text: "Courage, clarity, determination", doshaType: "pitta" },
      { text: "Patience, loyalty, compassion", doshaType: "kapha" }
    ]
  }
];

const QuestionsPage = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answers>({});

  const handleAnswer = (questionId: number, characteristicIndex: number, value: 'yes' | 'somewhat' | 'no', doshaType: 'vata' | 'pitta' | 'kapha') => {
    const answerKey = `${questionId}-${characteristicIndex}`;
    setAnswers(prev => ({
      ...prev,
      [answerKey]: { value, doshaType }
    }));
  };

  const isQuestionComplete = (questionId: number) => {
    return questions[questionId].characteristics.every((_, index) => {
      const answerKey = `${questionId + 1}-${index}`;
      return answers[answerKey];
    });
  };

  const calculateResults = () => {
    const doshaScores = {
      vata: 0,
      pitta: 0,
      kapha: 0
    };

    Object.entries(answers).forEach(([_, answer]) => {
      const score = answer.value === 'yes' ? 2 : answer.value === 'somewhat' ? 1 : 0;
      doshaScores[answer.doshaType] += score;
    });

    const total = Object.values(doshaScores).reduce((sum, score) => sum + score, 0);
    
    return {
      vata: Math.round((doshaScores.vata / total) * 100),
      pitta: Math.round((doshaScores.pitta / total) * 100),
      kapha: Math.round((doshaScores.kapha / total) * 100)
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4 font-serif">
              Discover Your Prakriti
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Answer thoughtfully to understand your unique mind-body constitution
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 px-4">
            {[
              { step: 1, title: "Introduction", completed: true },
              { step: 2, title: "User Info", completed: true },
              { step: 3, title: "Assessment", active: true },
              { step: 4, title: "Results" },
              { step: 5, title: "Report" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center w-full md:w-auto">
                <div className="flex flex-col items-center flex-1 md:flex-auto">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      item.completed ? 'bg-green-500 text-white scale-110' : 
                      item.active ? 'bg-green-600 text-white scale-110 ring-4 ring-green-100' : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {item.completed ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-lg font-semibold">{item.step}</span>
                    )}
                  </div>
                  <span className="text-sm mt-2 font-medium text-gray-600">{item.title}</span>
                </div>
                {index < 4 && (
                  <div className="hidden md:block w-24 h-[2px] bg-gray-200 mx-2">
                    <div 
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ 
                        width: item.completed ? '100%' : item.active ? '50%' : '0%' 
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="relative w-full h-2 bg-gray-100 rounded-full mb-12 overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-500 ease-out rounded-full"
              style={{ 
                width: `${((currentQuestion + (isQuestionComplete(currentQuestion) ? 1 : 0)) / questions.length) * 100}%` 
              }}
            />
          </div>

          {/* Question Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300">
              {/* Question Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-4 py-1 rounded-full">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-gray-500 bg-gray-50 px-4 py-1 rounded-full">
                    {questions[currentQuestion].category}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              {/* Matrix Style Options */}
              <div className="overflow-hidden rounded-xl border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-4 px-6 text-gray-600 font-medium w-1/2">Characteristics</th>
                      {['Yes', 'Somewhat', 'No'].map((header) => (
                        <th key={header} className="text-center py-4 px-4 text-gray-600 font-medium">
                          <span className="block text-sm mb-1">{header}</span>
                          <span className="block text-xs text-gray-400">
                            {header === 'Yes' ? '(Strongly Agree)' : 
                             header === 'Somewhat' ? '(Partially Agree)' : 
                             '(Disagree)'}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {questions[currentQuestion].characteristics.map((characteristic, index) => {
                      const answerKey = `${questions[currentQuestion].id}-${index}`;
                      const currentAnswer = answers[answerKey]?.value;
                      
                      return (
                        <tr key={index} className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors duration-150">
                          <td className="py-6 px-6 text-gray-700">{characteristic.text}</td>
                          {['yes', 'somewhat', 'no'].map((value) => (
                            <td key={value} className="text-center py-6 px-4">
                              <button
                                onClick={() => handleAnswer(questions[currentQuestion].id, index, value as 'yes' | 'somewhat' | 'no', characteristic.doshaType)}
                                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 transform hover:scale-110 ${
                                  currentAnswer === value
                                    ? 'border-green-500 bg-green-500 shadow-lg shadow-green-100'
                                    : 'border-gray-200 hover:border-green-200'
                                }`}
                                aria-label={value}
                              >
                                {currentAnswer === value && (
                                  <svg className="w-4 h-4 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-12">
                <button
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                  className={`px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                    currentQuestion === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                
                {currentQuestion < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                    disabled={!isQuestionComplete(currentQuestion)}
                    className={`px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                      !isQuestionComplete(currentQuestion)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-100'
                    }`}
                  >
                    Next
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={{
                      pathname: '/assessment/results',
                      query: { results: JSON.stringify(calculateResults()) }
                    }}
                    className={`px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 ${
                      !isQuestionComplete(currentQuestion)
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
                        : 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-100'
                    }`}
                  >
                    View Results
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;