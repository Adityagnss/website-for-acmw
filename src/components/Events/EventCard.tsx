import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  description,
  image,
}) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;