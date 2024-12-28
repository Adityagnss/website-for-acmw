import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FormData {
  associationName: string;
  email: string;
  about: string;
}

const JoinUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    associationName: '',
    email: '',
    about: ''
  });

  const faqs: FAQItem[] = [
    {
      question: "When does the recruitment season start?",
      answer: "Recruitment season for ACM-W chapters typically starts at the beginning of the academic year or semester. It varies by university, but announcements are usually made through emails, posters, or social media. Keep an eye out for official updates from your ACM-W chapter."
    },
    {
      question: "What is the procedure for recruitment?",
      answer: "Recruitment usually involves: Filling out an application form. Participating in an interview or evaluation process, which might include technical questions, group discussions, or demonstrating leadership and teamwork skills,Attending an orientation or introductory session about the chapter’s goals and activities."
    },
    {
      question: "Is this recruitment only for Women?",
      answer: "No, ACM-W encourages diversity and inclusion. While it primarily focuses on supporting women in computing, membership and participation are open to everyone, regardless of gender."
    },
    {
      question: "Do we have to pay for ACM Membership to join the community?",
      answer: "ACM membership is optional but recommended. You can still participate in most of our activities without being an ACM member."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:Acmw.students@srmist.edu.in?subject=Collaboration Request from ${formData.associationName}&body=Association Name: ${formData.associationName}%0D%0AEmail: ${formData.email}%0D%0AAbout: ${formData.about}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative min-h-screen pb-32">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),rgba(255,0,255,0)_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Recruitment Section */}
          <section className="mb-16">
            <h2 className="mt-24 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-center mb-8">
              <span className="block animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Recruitment for SRM Students
              </span>
            </h2>
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl mb-8 text-center">
              <p className="text-white text-lg">
                Recruitments are closed right now. But, we hope to see you the next time we open. You
                may go through the FAQs for further info.
              </p>
            </div>

            {/* FAQs */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left text-white font-semibold flex justify-between items-center"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    {faq.question}
                    <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 py-4 text-gray-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Outreach Program Section */}
          <section>
            <h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-center mb-8">
              <span className="block animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Outreach Program
              </span>
            </h2>
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl mb-8 text-center">
              <p className="text-white text-lg mb-6">
                We welcome other ACM chapters, college associations, NGO's, etc to hold global events with us! 
                No matter what your background or major is, we would love to have you at our events and activities!
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">Want to collab?</h3>
              <p className="text-gray-200">Fill this form and we will reach out to you!</p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-black/20 backdrop-blur-sm p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <label htmlFor="associationName" className="block text-white font-medium mb-2">
                    Your Association's name
                  </label>
                  <input
                    type="text"
                    id="associationName"
                    className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-gray-600 focus:border-violet-400 focus:outline-none"
                    value={formData.associationName}
                    onChange={(e) => setFormData({ ...formData, associationName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-gray-600 focus:border-violet-400 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="about" className="block text-white font-medium mb-2">
                    Tell us a bit about yourself
                  </label>
                  <textarea
                    id="about"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-gray-600 focus:border-violet-400 focus:outline-none"
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-violet-600 hover:to-blue-600 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
