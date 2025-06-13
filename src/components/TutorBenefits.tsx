const TutorBenefits = () => {
  const benefits = [
    {
      title: "Set Your Own Rates",
      description: "You decide how much to charge based on your expertise, experience, and subject area."
    },
    {
      title: "Flexible Schedule",
      description: "Choose when you want to teach and manage your availability through our platform."
    },
    {
      title: "Build Your Reputation",
      description: "Gain positive reviews and ratings to attract more students and increase your rates."
    },
    {
      title: "Teaching Resources",
      description: "Access our library of teaching materials and tools to enhance your sessions."
    },
    {
      title: "Secure Payments",
      description: "Get paid promptly through our secure payment system with transparent fees."
    },
    {
      title: "Professional Growth",
      description: "Join our community of educators and participate in professional development opportunities."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Tutors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guru provides you with the platform, tools, and student connections
            you need to build a successful tutoring business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-custom hover:shadow-lg transition-shadow border-t-4 border-orange-500"
            >
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-4xl font-bold mb-2">$35+</h4>
              <p>Average Hourly Rate</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold mb-2">10+</h4>
              <p>Hours Weekly Average</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold mb-2">95%</h4>
              <p>Tutor Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorBenefits;
