"use client";

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const ResultsContent = () => {
  const searchParams = useSearchParams();
  const resultsParam = searchParams.get('results');
  
  // Parse the results from URL parameters
  const results = resultsParam ? JSON.parse(resultsParam) : {
    vata: 33,
    pitta: 33,
    kapha: 34
  };

  // Determine primary and secondary doshas
  const sortedDoshas = Object.entries(results)
    .sort(([, a], [, b]): number => (b as number) - (a as number))
    .map(([dosha]) => dosha.charAt(0).toUpperCase() + dosha.slice(1));

  const constitution = {
    primaryDosha: sortedDoshas[0],
    secondaryDosha: sortedDoshas[1],
    constitution: results
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            Your Prakriti Analysis
          </h1>

          {/* Progress Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            {[
              { step: 1, title: "Introduction", completed: true },
              { step: 2, title: "User Info", completed: true },
              { step: 3, title: "Assessment", completed: true },
              { step: 4, title: "Results", active: true },
              { step: 5, title: "Report" },
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.completed ? 'bg-green-500 text-white' : 
                    item.active ? 'bg-green-600 text-white' : 'bg-gray-200'
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

          {/* Results Content */}
          <div className="max-w-2xl mx-auto">
            {/* Primary Constitution */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Your Primary Constitution
              </h2>
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-bold text-green-700">
                  {constitution.primaryDosha}-{constitution.secondaryDosha}
                </span>
                <span className="text-gray-600">
                  Dominant Doshas
                </span>
              </div>
              
              {/* Dosha Distribution */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Pitta</span>
                    <span className="text-sm font-medium text-gray-700">{results.pitta}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-orange-500 h-2.5 rounded-full"
                      style={{ width: `${results.pitta}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Vata</span>
                    <span className="text-sm font-medium text-gray-700">{results.vata}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${results.vata}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Kapha</span>
                    <span className="text-sm font-medium text-gray-700">{results.kapha}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full"
                      style={{ width: `${results.kapha}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Characteristics Summary */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Key Characteristics
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Physical Traits</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Medium, athletic build</li>
                    <li>Sharp features and penetrating gaze</li>
                    <li>Warm body temperature</li>
                    <li>Strong digestion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Mental Traits</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Quick and decisive</li>
                    <li>Natural leadership qualities</li>
                    <li>Strong intellect</li>
                    <li>Goal-oriented</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Next Steps
              </h3>
              <p className="text-gray-700 mb-6">
                Get your personalized lifestyle recommendations and a detailed report 
                based on your unique constitution. Learn how to maintain balance and 
                optimize your health through diet, exercise, and daily routines.
              </p>
              <div className="flex justify-center">
                <Link
                  href={{
                    pathname: '/assessment/report',
                    query: { results: JSON.stringify(results) }
                  }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  View Detailed Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading fallback component
const LoadingResults = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResultsPage = () => {
  return (
    <Suspense fallback={<LoadingResults />}>
      <ResultsContent />
    </Suspense>
  );
};

export default ResultsPage;