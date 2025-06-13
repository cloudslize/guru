
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Sign up and create your detailed profile highlighting your needs as a student or expertise as a tutor."
    },
    {
      number: "2",
      title: "Smart Matching",
      description: "Our AI algorithm matches students with tutors based on subject, learning style, availability, and goals."
    },
    {
      number: "3",
      title: "Connect & Learn",
      description: "Schedule sessions, communicate through our platform, and start your learning journey."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 bg-guru-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Guru Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform makes finding the perfect tutor as easy as swiping right. 
            Get matched with qualified tutors based on your specific needs.
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
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Matching Algorithm</h3>
              <p className="text-gray-600 mb-6">
                Like LinkedIn for education, we connect students with tutors using a sophisticated 
                algorithm that takes into account multiple factors to ensure the perfect match.
              </p>
              <ul className="space-y-3">
                {[
                  "Subject expertise and specialization",
                  "Teaching and learning styles compatibility",
                  "Schedule availability and flexibility",
                  "Educational goals and expectations",
                  "Personality traits and communication preferences"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="mr-2 h-5 w-5 text-guru-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient opacity-10 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Matching algorithm visualization" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
