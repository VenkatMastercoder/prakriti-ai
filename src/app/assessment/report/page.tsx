"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PdfDownloadButton } from '@/components/PdfReport';

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  gender: string;
  location: string;
}

const ReportPage = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    // Get user info from localStorage
    const storedUserInfo = localStorage.getItem('prakriti_user_info');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  // Updated recommendations to match exactly with the image
  const recommendations = {
    diet: [
      "Favor cooling foods like cucumber, mint, and coconut",
      "Avoid excessive spicy, sour, and salty foods",
      "Include sweet, bitter, and astringent tastes",
      "Best meal times: 8am, 12pm, and 6pm"
    ],
    lifestyle: [
      "Practice meditation and deep breathing",
      "Engage in moderate exercise during cooler hours",
      "Maintain regular sleep schedule (10pm - 6am)",
      "Take breaks during intense work periods"
    ],
    exercise: [
      "Swimming and water activities",
      "Morning walks in nature",
      "Yoga with cooling poses",
      "Moderate intensity workouts"
    ],
    herbs: [
      "Aloe vera for cooling",
      "Brahmi for mental balance",
      "Amalaki for immunity",
      "Shatavari for nurturing"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            Your Personalized Wellness Report
          </h1>

          {/* Progress Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            {[
              { step: 1, title: "Introduction", completed: true },
              { step: 2, title: "User Info", completed: true },
              { step: 3, title: "Assessment", completed: true },
              { step: 4, title: "Results", completed: true },
              { step: 5, title: "Report", active: true },
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

          {/* Report Content */}
          <div className="max-w-3xl mx-auto">
            {/* User Information Section */}
            {userInfo && (
              <div className="bg-green-50 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-green-800 mb-4">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{userInfo.firstName} {userInfo.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Age</p>
                    <p className="font-medium">{userInfo.age} years</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Gender</p>
                    <p className="font-medium">{userInfo.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-medium">{userInfo.location}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Introduction */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600">
                Based on your Pitta-Vata constitution, we've prepared a comprehensive set of 
                recommendations to help you maintain balance and optimize your health. Following 
                these guidelines will help you manage your dominant doshas and create harmony 
                in your mind and body.
              </p>
            </div>

            {/* Recommendations Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Diet */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">🍽️</span>
                  <h2 className="text-xl font-semibold text-green-800">
                    Dietary Guidelines
                  </h2>
                </div>
                <ul className="space-y-3">
                  {recommendations.diet.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lifestyle */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">⚡</span>
                  <h2 className="text-xl font-semibold text-green-800">
                    Lifestyle Practices
                  </h2>
                </div>
                <ul className="space-y-3">
                  {recommendations.lifestyle.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exercise */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">🏃‍♂️</span>
                  <h2 className="text-xl font-semibold text-green-800">
                    Exercise Recommendations
                  </h2>
                </div>
                <ul className="space-y-3">
                  {recommendations.exercise.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Herbs */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-2">🌿</span>
                  <h2 className="text-xl font-semibold text-green-800">
                    Beneficial Herbs
                  </h2>
                </div>
                <ul className="space-y-3">
                  {recommendations.herbs.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                Download Your Complete Report
              </h3>
              <p className="text-gray-600 mb-6">
                Get a detailed PDF version of your constitution analysis and personalized 
                recommendations to reference anytime.
              </p>
              <button 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                {userInfo && <PdfDownloadButton userInfo={userInfo} recommendations={recommendations} />}
              </button>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Link
                href="/assessment/results"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Back to Results
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Start New Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage; 