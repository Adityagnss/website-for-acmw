import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface UpcomingEventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({
  title,
  date,
  time,
  location,
  description,
  image,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-md">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-blue-900/80" />
      </div>
      <div className="relative p-8">
        <div className="inline-block px-4 py-1 bg-violet-600 rounded-full text-sm font-semibold text-white mb-4">
          Next Event
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center text-gray-200">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-200">
            <Clock className="w-5 h-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-200">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-200 mb-6 max-w-2xl">{description}</p>
        <button className="px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors duration-300">
          Register Now
        </button>
        <p className="text-gray-200 mt-4">Event will be live soon!</p>
      </div>
    </div>
  );
};

export default UpcomingEvent;