import { useState } from 'react';
import AnimatedHowItWorks from '../components/AnimatedHowItWorks';
import AnimatedHowItWorksStudent from '../components/AnimatedHowItWorksStudent';
import OneStopSolution from '../components/OneStopSolution';
import Header from '../components/Header';

export default function HomePage() {
  const [viewType, setViewType] = useState<'tutor' | 'student'>('tutor');

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* View Toggle */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setViewType('tutor')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                viewType === 'tutor'
                  ? 'bg-gradient text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              I'm a Tutor
            </button>
            <button
              onClick={() => setViewType('student')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                viewType === 'student'
                  ? 'bg-gradient text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              I'm a Student
            </button>
          </div>
        </div>

        {/* How It Works Section */}
        {viewType === 'tutor' ? (
          <AnimatedHowItWorks />
        ) : (
          <AnimatedHowItWorksStudent />
        )}
        
        {/* One Stop Solution Section */}
        <OneStopSolution />
      </main>
    </>
  );
} 