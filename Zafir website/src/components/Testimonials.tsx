
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Math Student",
      content: "Guru matched me with a tutor who completely transformed my understanding of calculus. The matching process was so easy, and I found someone who explained concepts in a way that finally made sense to me.",
      avatar: "S",
      bgColor: "bg-blue-500"
    },
    {
      name: "Michael Chen",
      role: "Physics Tutor",
      content: "As a tutor, I love how Guru connects me with students who truly match my teaching style. The platform handles all the administrative tasks so I can focus on what I do best - teaching physics.",
      avatar: "M",
      bgColor: "bg-purple-500"
    },
    {
      name: "Emma Rodriguez",
      role: "Parent",
      content: "I found a Spanish tutor for my daughter through Guru, and the results have been amazing. The matching system really works - they found someone who connected with her learning style perfectly.",
      avatar: "E",
      bgColor: "bg-green-500"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-guru-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what students and tutors 
            are saying about their experience with Guru.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-custom p-8 md:p-10 relative">
            <svg
              className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-guru-blue/20"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84088 12.86 3.05992 12.5533 2.42332 11.94C1.81229 11.3266 1.50677 10.4467 1.50677 9.3C1.50677 8.2333 1.75551 7.2833 2.253 6.45C2.77605 5.59 3.43213 4.83 4.22126 4.17L6.15342 5.85C5.69517 6.2333 5.31229 6.6167 5.00477 7C4.69725 7.3833 4.4004 7.8167 4.10425 8.3C4.42374 8.1167 4.81514 8.0333 5.27894 8.05C5.82817 8.05 6.29325 8.2167 6.67415 8.55C7.05505 8.8833 7.24549 9.3233 7.24549 9.87C7.24549 10.09 7.21728 10.3 7.16087 10.5C7.10446 10.6733 7.39762 10.3 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0675 12.86 10.2865 12.5533 9.64991 11.94C9.03888 11.3266 8.73336 10.4467 8.73336 9.3C8.73336 8.2333 8.9821 7.2833 9.47959 6.45C10.0026 5.59 10.6587 4.83 11.4478 4.17L13.38 5.85C12.9217 6.2333 12.5388 6.6167 12.2313 7C11.9238 7.3833 11.6269 7.8167 11.3308 8.3C11.6503 8.1167 12.0417 8.0333 12.5055 8.05C13.0547 8.05 13.5198 8.2167 13.9007 8.55C14.2816 8.8833 14.472 9.3233 14.472 9.87C14.472 10.09 14.4438 10.3 14.3874 10.5C14.331 10.6733 14.6242 10.3 14.6242 10.3Z"
                fill="currentColor"
              />
            </svg>

            <div>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {testimonials[currentIndex].content}
              </p>

              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${testimonials[currentIndex].bgColor} flex items-center justify-center text-white text-xl font-bold mr-4`}>
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentIndex ? "bg-guru-blue" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
