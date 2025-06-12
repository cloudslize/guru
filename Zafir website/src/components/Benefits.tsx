const Benefits = () => {
  const studentBenefits = [
    {
      title: "Personalized Matches",
      description: "Find tutors that match your learning style, subject needs, and personality."
    },
    {
      title: "Verified Quality",
      description: "All tutors are vetted and reviewed by our community."
    },
    {
      title: "Flexible Scheduling",
      description: "Book sessions when it works for you, with instant availability updates."
    },
    {
      title: "Secure Payments",
      description: "Pay safely through our platform with money-back guarantee."
    }
  ];

  const tutorBenefits = [
    {
      title: "Qualified Students",
      description: "Connect with students who match your teaching style and expertise."
    },
    {
      title: "Build Your Profile",
      description: "Create a professional profile showcasing your skills and experience."
    },
    {
      title: "Set Your Rates",
      description: "You decide how much to charge for your expertise and time."
    },
    {
      title: "Manage Your Schedule",
      description: "Control your availability and accept bookings that work for you."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Guru</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides unique advantages for both students seeking knowledge 
            and tutors sharing their expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-custom p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold mb-6 text-guru-blue">For Students</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {studentBenefits.map((benefit, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-5 hover:border-guru-blue/30 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-custom p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold mb-6 text-orange-500">For Tutors</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {tutorBenefits.map((benefit, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-5 hover:border-orange-500/30 transition-colors">
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-4xl font-bold mb-2">1,000+</h4>
              <p>Active Users</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold mb-2">93%</h4>
              <p>Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold mb-2">20+</h4>
              <p>Subject Areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
