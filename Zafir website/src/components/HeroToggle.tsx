import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen } from "lucide-react";

export default function HeroToggle() {
  const location = useLocation();
  const isTutorPage = location.pathname === '/tutor';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-gradient">
              Guru
            </span>
          </Link>
          
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <Link to="/">
              <Button 
                variant={!isTutorPage ? "default" : "ghost"}
                className={`flex items-center gap-2 ${!isTutorPage ? 'bg-white shadow-sm' : ''}`}
              >
                <GraduationCap className="h-4 w-4" />
                Find Tutors
              </Button>
            </Link>
            <Link to="/tutor">
              <Button 
                variant={isTutorPage ? "default" : "ghost"}
                className={`flex items-center gap-2 ${isTutorPage ? 'bg-white shadow-sm' : ''}`}
              >
                <BookOpen className="h-4 w-4" />
                Become a Tutor
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm">
              Sign in
            </Button>
            <Button className="bg-gradient text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 