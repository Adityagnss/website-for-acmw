import React, { useEffect, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getImagePath } from '../utils/paths';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  github: string;
  linkedin: string;
}

const Team: React.FC = () => {
  // Sample data - Replace with your actual team members data
  const coreTeam: TeamMember[] = [
    {
      id: 1,
      name: "Angelin",
      position: "Chair",
      image: "Angelin J G.png",
      github: "https://github.com/aj7764",
      linkedin: "https://www.linkedin.com/in/angelin-j-g-55ba10222/"
    },

    {
      id: 2,
      name: "Risa Pandey",
      position: "Vice Chair",
      image: "Risa Pandey.jpeg",
      github: "https://github.com/rp2273",
      linkedin: "https://linkedin.com/in/johndoe"
    },

    {
      id: 3,
      name: "GADEY ADITYA",
      position: "Secretary",
      image: "Aditya.jpeg",
      github: "https://github.com/Adityagnss",
      linkedin: "https://www.linkedin.com/in/adityagnss/"
    },

    {
      id: 4,
      name: "Roshni Banerjee",
      position: "Treasurer",
      image: "Roshni Banerjee.jpeg",
      github: "https://github.com/RoshniBanerjee",
      linkedin: "https://linkedin.com/in/johndoe"
    },

    {
      id: 5,
      name: "Meghavi Rathod",
      position: "Membership Chair",
      image: "Meghavi Rathod .jpeg",
      github: "https://github.com/RA2112704010012",
      linkedin: "https://www.linkedin.com/in/meghavi-rathod-a82755286/"
    },

    {
      id: 6,
      name: "Sathwika Badigi",
      position: "Webmaster",
      image: "Sathwika Badigi.png",
      github: "https://github.com/RA2112704010032",
      linkedin: "https://www.linkedin.com/in/sathwika-badigi-151a03220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },


    // Add more core team members
  ];

  const leads: TeamMember[] = [
    {
      id: 1,
      name: "GADEY ADITYA",
      position: "Technical Lead",
      image: "Aditya.jpeg",
      github: "https://github.com/Adityagnss",
      linkedin: "https://www.linkedin.com/in/adityagnss/"
    },

    {
      id: 2,
      name: "K Sri Vyshnavi",
      position: "Technical Co-Lead",
      image: "vyshnavi.png",
      github: "https://github.com/vyshu1605",
      linkedin: "https://www.linkedin.com/in/sri-vyshnavi-kolisetty-41a202267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      id: 3,
      name: "Narem Mounish Reddy",
      position: "Corporate Lead",
      image: "profile-pic.png",
      github: "https://github.com/mounish27",
      linkedin: "https://www.linkedin.com/in/narem-mounish-reddy"
    },

    {
      id: 4,
      name: "Sunkesula Thaniya",
      position: "Corporate Co-Lead",
      image: "thaniya.png",
      github: "https://github.com/mounish27",
      linkedin: "https://www.linkedin.com/in/narem-mounish-reddy"
    },

    {
      id: 5,
      name: "Sasikiran.B",
      position: "Events Lead",
      image: "sasi.png",
      github: "https://github.com/SasikiranBandaru",
      linkedin: "https://www.linkedin.com/in/sasi-kiran-9b9306291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      id: 6,
      name: "Keerthi varsha",
      position: "Events Co-Lead",
      image: "keerthi.png",
      github: "https://github.com/keerthiRA2211003011598",
      linkedin: "https://www.linkedin.com/in/keerthi-varsha-0450122a3/"
    },

    {
      id: 7,
      name: "Jaswanth Rabbagunda",
      position: "Creatives Lead",
      image: "jashu.jpeg",
      github: "https://github.com/Jaswanth-rabbagunda",
      linkedin: "https://www.linkedin.com/in/jaswanth-rabbagunda-54670a29a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    // Add more leads
  ];

  const boardMembers: TeamMember[] = [

    {
      id: 1,
      name: "Drisana Saikia",
      position: "Board Member",
      image: "DrisanaSaikia.jpeg",
      github: "https://github.com/drisana95",
      linkedin: "https://www.linkedin.com/in/drisana-saikia-0a6818273/"
    },

    {
      id: 2,
      name: "K.Jaswanth Reddy",
      position: "Board Member",
      image: "Jaswanth .jpeg",
      github: "https://github.com/JaswanthReddy5",
      linkedin: "https://www.linkedin.com/in/jaswant-reddy-502b682b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },

    {
      id: 3,
      name: "Sriram Nagendra",
      position: "Board Member",
      image: "Nagendra.jpeg",
      github: "https://github.com/Nagendrasriram",
      linkedin: "www.linkedin.com/in/nagendrasriram103"
    },

    {
      id: 4,
      name: "Karthick S",
      position: "Board Member",
      image: "karthick.png",
      github: "https://github.com/Kar2027",
      linkedin: "www.linkedin.com/in/karthick-subburaj-a50998219"
    },

    {
      id: 5,
      name: "Karthikeya Doppalapudi",
      position: "Board Member",
      image: "karthik.jpeg",
      github: "https://github.com/karthikeyadoppalapudi",
      linkedin: "https://www.linkedin.com/in/karthikeya-doppalapudi/"
    },
    // Add more board members
  ];

  const TeamSlider: React.FC<{ members: TeamMember[] }> = ({ members }) => (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="py-12 px-4 md:px-10"
    >
      {members.map((member) => (
        <SwiperSlide key={member.id}>
          <div className="bg-white rounded-xl shadow-xl p-6 text-center transform transition-transform duration-300 hover:scale-105">
            <img
              src={getImagePath(member.image)}
              alt={member.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 hover:border-blue-600"
            />
            <h4 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h4>
            <p className="text-blue-600 font-medium mb-4">{member.position}</p>
            <div className="flex justify-center space-x-6">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="relative min-h-screen pb-32">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),rgba(255,0,255,0)_50%)]"></div>
      </div>

      {/* Team Content */}
      <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="mt-24 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-center mb-16">
            <span className="block animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <div className="mb-16">
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-12 text-white">
              Core Team
            </h3>
            <TeamSlider members={coreTeam} />
          </div>
          <div className="mb-16">
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-12 text-white">
              Leads
            </h3>
            <TeamSlider members={leads} />
          </div>
          <div>
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-12 text-white">
              Board Members
            </h3>
            <TeamSlider members={boardMembers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
