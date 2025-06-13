import { Check } from "lucide-react";
import tutorPlatform from "@/assets/images/Tutor Dashboard.png";

const TutorHowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Sign up and create your detailed tutor profile highlighting your education, expertise, and teaching experience."
    },
    {
      number: "2",
      title: "Get Matched",
      description: "Our AI algorithm matches you with students who need your specific expertise and teaching style."
    },
    {
      number: "3",
      title: "Teach & Earn",
      description: "Schedule sessions, teach through our platform, and receive secure payments for your time and knowledge."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 bg-guru-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Tutoring with Guru Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform connects you directly with students who need your specific expertise,
            allowing you to focus on teaching while we handle the logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-custom hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-custom p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient opacity-10 rounded-lg blur-xl"></div>
              <img 
                src={tutorPlatform}
                alt="Tutor working online" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Tutor Platform</h3>
              <p className="text-gray-600 mb-6">
                Guru provides tutors with all the tools they need to succeed, from scheduling and 
                payment processing to student management and teaching resources.
              </p>
              <ul className="space-y-3">
                {[
                  "Built-in scheduling and availability management",
                  "Secure payment processing with quick transfers",
                  "Student reviews and rating system",
                  "Online teaching tools and resources",
                  "Marketing support to build your profile"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-guru-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorHowItWorks;
