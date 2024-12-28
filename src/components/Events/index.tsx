import React from 'react';
import UpcomingEvent from './UpcomingEvent';
import EventCard from './EventCard';

const Events: React.FC = () => {
  const upcomingEvent = {
    title: "Women in Tech Summit 2025",
    date: "March 8, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual Event",
    description: "Join us for a day of inspiring talks, workshops, and networking opportunities with leading women in technology.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000"
  };

  const pastEvents = [
    {
      title: "MAKEATHON 2024",
      date: "october 23 & 24, 2024",
      time: "9:00 PM - 4:00 PM",
      location: "Offline Event",
      description: "ACM-W SRM Makeathon: A Journey of Innovation and Excellence!",
      image: "/images/makeathon.jpeg"
    },
    {
      title: "CODEQUEST 2024",
      date: "August 30, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "FAB LAB",
      description: "Event on their coding skills, solve challenging problems, and connect with fellow tech enthusiasts all over the campus.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500"
    }
    
  ];

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
          <h2 className="mt-24 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-center mb-16">
            <span className="block animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Our Events
            </span>
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-12 text-white">
              Upcoming Events
            </h3>
            <UpcomingEvent {...upcomingEvent} />
          </div>

          <div>
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-12 text-white">
              Past Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;