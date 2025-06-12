import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import signUpImage from '../assets/images/tutor_signup.png';
import verifiedImage from '../assets/images/get_verified.png';
import studentDashboard from '../assets/images/student_dashboard.png';
import tutorDashboard from '../assets/images/tutor_dashboard.png';

const steps = [
  {
    title: "Sign Up",
    description: "Create your tutor profile in minutes. Add your qualifications, teaching experience, and subjects you specialize in.",
    image: signUpImage
  },
  {
    title: "Get Verified",
    description: "Our team reviews your credentials to ensure high-quality standards. Most applications are verified within 24 hours.",
    image: verifiedImage
  },
  {
    title: "Start Looking for Your Next Student",
    description: "Browse through student requests that match your expertise. Our smart matching system helps find the perfect fit.",
    image: tutorDashboard
  },
  {
    title: "Chat with Parents/Students",
    description: "Connect directly with students or parents to understand their needs and discuss how you can help them succeed.",
    image: studentDashboard
  },
  {
    title: "Share Your Knowledge!",
    description: "Start teaching and making a difference in students' lives while earning competitive rates on your own schedule.",
    image: tutorDashboard
  }
];

export default function AnimatedHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [canScroll, setCanScroll] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollAccumulator = useRef(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const isTransitioning = useRef(false);
  const nextSectionRef = useRef<HTMLElement | null>(null);

  // Observer for when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setCanScroll(false);
          scrollAccumulator.current = 0;
          // Find the next section when this section comes into view
          nextSectionRef.current = document.querySelector('[data-one-stop-solution]');
        }
      },
      {
        threshold: 0.4
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    if (!isInView) return;

    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }

      // Allow scrolling up when at first step
      if (activeStep === 0 && e.deltaY < 0) {
        setCanScroll(true);
        return;
      }

      // Allow scrolling down to next section at last step
      if (activeStep === steps.length - 1 && e.deltaY > 0) {
        setCanScroll(true);
        if (nextSectionRef.current) {
          nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // Prevent default scroll during step transitions
      if (!canScroll) {
        e.preventDefault();

        // Accumulate scroll delta
        scrollAccumulator.current += e.deltaY;

        // Define threshold for step change
        const threshold = 50;

        if (Math.abs(scrollAccumulator.current) >= threshold) {
          const direction = scrollAccumulator.current > 0 ? 'down' : 'up';
          setScrollDirection(direction);

          setActiveStep(prev => {
            const next = direction === 'down' ? prev + 1 : prev - 1;
            const bounded = Math.max(0, Math.min(next, steps.length - 1));

            // Reset accumulator after step change
            scrollAccumulator.current = 0;

            // Set transitioning flag
            isTransitioning.current = true;
            setTimeout(() => {
              isTransitioning.current = false;
            }, 500);

            return bounded;
          });
        }
      }
    };

    // Add wheel event listener to window to ensure we catch all scroll events
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isInView, canScroll, activeStep]);

  const slideVariants = {
    enter: (direction: 'up' | 'down') => ({
      y: direction === 'down' ? 60 : -60,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: 'up' | 'down') => ({
      y: direction === 'down' ? -60 : 60,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const transition = {
    y: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.3 },
    scale: { duration: 0.3 },
  };

  return (
    <section 
      ref={sectionRef}
      data-how-it-works
      className={`relative bg-gray-50 min-h-screen ${
        isInView && !canScroll ? 'fixed inset-0 w-full' : ''
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 h-screen flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Join our community of expert tutors in just a few simple steps
          </p>
        </div>

        <div className="flex-1 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Device Frame */}
          <div className="h-[min(500px,60vh)] lg:h-auto">
            <div className="relative h-full flex items-center">
              <div className="absolute inset-0 bg-gradient rounded-2xl opacity-20 blur-xl -m-4"></div>
              {/* Device Frame */}
              <div className="relative w-full max-w-[800px] mx-auto bg-[#1A1A1A] rounded-[2.5rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1A1A1A] rounded-b-xl"></div>
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <AnimatePresence mode="wait" custom={scrollDirection}>
                    <motion.img 
                      key={activeStep}
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      className="w-full h-auto"
                      custom={scrollDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={transition}
                    />
                  </AnimatePresence>
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="relative h-[min(300px,40vh)] lg:h-auto flex items-center">
            <AnimatePresence mode="wait" custom={scrollDirection}>
              {steps.map((step, index) => (
                index === activeStep && (
                  <motion.div
                    key={index}
                    custom={scrollDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={transition}
                    className="absolute w-full"
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="bg-gradient w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{step.title}</h3>
                        <p className="text-gray-600 text-base md:text-lg">{step.description}</p>
                      </div>
                    </div>

                    {/* Mobile image - only shown on smaller screens */}
                    <div className="mt-6 lg:hidden">
                      <div className="relative bg-[#1A1A1A] rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-3 shadow-2xl">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-6 bg-[#1A1A1A] rounded-b-xl"></div>
                        <div className="bg-white rounded-[1.8rem] md:rounded-[2rem] overflow-hidden">
                          <motion.img 
                            src={step.image}
                            alt={step.title}
                            className="w-full h-auto"
                            custom={scrollDirection}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={transition}
                          />
                        </div>
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeStep ? 'bg-gradient w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Spacer div to maintain scroll position */}
      {isInView && !canScroll && (
        <div style={{ height: '100vh' }} aria-hidden="true" />
      )}
    </section>
  );
} 