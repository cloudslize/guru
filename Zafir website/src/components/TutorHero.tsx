import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import tutorDashboard from "@/assets/images/tutor_dashboard.png";

export default function TutorHero() {
  const location = useLocation();
  const isTutorPage = location.pathname === '/tutor';

  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI4MCIgc3Ryb2tlPSIjZmI5MjNjMTAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="container mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex p-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 shadow-sm">
              <Link to="/">
                <Button 
                  variant="ghost"
                  className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                    !isTutorPage 
                      ? 'bg-gradient text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span className="font-medium">I'm a Student</span>
                  </div>
                </Button>
              </Link>
              <Link to="/tutor">
                <Button 
                  variant="ghost"
                  className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                    isTutorPage 
                      ? 'bg-gradient text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-medium">I'm a Tutor</span>
                  </div>
                </Button>
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Share Your <span className="text-gradient">Knowledge</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Start tutoring today. Set your own schedule, choose your subjects, and earn while helping students succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient text-white hover:opacity-90">
                Start Teaching
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Requirements
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto md:mx-0">
              <div>
                <div className="text-2xl font-bold text-orange-500">$45/hr</div>
                <div className="text-sm text-gray-600">Avg. Earnings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-600">Payment Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">24hr</div>
                <div className="text-sm text-gray-600">Fast Approval</div>
              </div>
            </div>
          </div>

          {/* Animated Platform Preview */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient rounded-2xl opacity-20 blur-xl -m-4"></div>
            {/* Device Frame */}
            <div className="relative bg-[#1A1A1A] rounded-[2.5rem] p-3 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
              {/* Device Status Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1A1A1A] rounded-b-xl"></div>
              {/* Screen Content */}
              <div className="bg-white rounded-[2rem] overflow-hidden">
                <img 
                  src={tutorDashboard}
                  alt="Tutor Dashboard Preview"
                  className="w-full h-auto"
                />
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Floating notification - now outside the device frame */}
            <div className="absolute -right-8 -bottom-8 bg-white p-3 rounded-lg shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">$</div>
                <div>
                  <p className="text-sm font-semibold">New Booking!</p>
                  <p className="text-xs text-gray-500">Math Tutoring • 1hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
