import React from 'react';
import Link from 'next/link';

const AssessmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            Discover Your Prakriti (Body Constitution)
          </h1>
          
          <div className="space-y-6">
            {/* Flow Steps */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
              {[
                { step: 1, title: "Introduction" },
                { step: 2, title: "User Info" },
                { step: 3, title: "Assessment" },
                { step: 4, title: "Results" },
                { step: 5, title: "Report" },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      {item.step}
                    </div>
                    <span className="text-sm mt-2">{item.title}</span>
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block w-12 h-[2px] bg-gray-200 mx-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Introduction Content */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                Welcome to Your Ayurvedic Journey
              </h2>
              <p className="text-gray-600 mb-6">
                Discover your unique mind-body constitution through our comprehensive Prakriti assessment. 
                This ancient Ayurvedic science will help you understand your natural tendencies and receive 
                personalized recommendations for optimal health and wellness.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-green-800 mb-4">What to Expect:</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-700">
                  <li>A detailed 36-question assessment</li>
                  <li>Analysis of your physical and mental characteristics</li>
                  <li>Identification of your dominant doshas</li>
                  <li>Personalized lifestyle and wellness recommendations</li>
                  <li>Downloadable detailed report</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-center">
                <Link href="/assessment/user-info" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
                  Begin Your Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;