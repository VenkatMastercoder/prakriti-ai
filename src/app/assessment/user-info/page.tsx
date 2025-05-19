"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Define the validation schema
const userInfoSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(1, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be at least 18 years old').max(120, 'Invalid age'),
  gender: z.string().min(1, 'Please select your gender').refine(
    (value) => ['male', 'female', 'other', 'prefer-not-to-say'].includes(value),
    { message: 'Please select a valid gender option' }
  ),
  location: z.string().min(2, 'Please enter your location'),
});

// TypeScript type for the form data
type UserInfoFormData = z.infer<typeof userInfoSchema>;

const UserInfoPage = () => {
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoFormData>({
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit = (data: UserInfoFormData) => {
    // Store the user info in localStorage
    localStorage.setItem('prakriti_user_info', JSON.stringify(data));
    // Navigate to questions page
    router.push('/assessment/questions');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
            Tell Us About Yourself
          </h1>

          {/* Progress Steps */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            {[
              { step: 1, title: "Introduction", completed: true },
              { step: 2, title: "User Info", active: true },
              { step: 3, title: "Assessment" },
              { step: 4, title: "Results" },
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

          {/* User Information Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  {...register('firstName')}
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName')}
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  {...register('age', { valueAsNumber: true })}
                  min="18"
                  max="120"
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.age && (
                  <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  {...register('gender')}
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
                {errors.gender && (
                  <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  {...register('location')}
                  placeholder="City, Country"
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 h-12 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Back
              </Link>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 h-12 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Continue to Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage; 