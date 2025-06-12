
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient rounded-2xl overflow-hidden shadow-custom">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your Perfect Match?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Whether you're looking to learn or to teach, Guru connects you with the 
                right person for your educational journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-guru-blue hover:bg-white/90 text-lg py-6 px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20 text-lg py-6 px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Students working together" 
                className="object-cover h-full w-full"
              />
              <div className="absolute inset-0 bg-guru-blue/30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
