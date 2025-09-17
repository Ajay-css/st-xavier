import React from "react";
import SplitText from "./SplitText";
import hm from "../assets/st-xaviers-hm.jpeg";
import CircularGallery from "./CircularGallery";
import { administrators } from "../assets/administrators/assets.js";
import ElectricBorder from "./ElectricBorder";
import testi1 from "../assets/administrators/testi-1.jpg"
import vid from "../assets/SXHSS-video.m4v"

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen text-center px-4" id="home">
        <div className="max-w-4xl">
          <SplitText
            text="St.Xavier's Higher Secondary School"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            tag="h1"
          />

          <p className="mt-6 text-lg text-gray-300">
            146 Years of Experience In Education And Discipline
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-cyan-500 text-white font-medium rounded-xl shadow-lg hover:bg-cyan-600 transition">
              Learn More
            </button>
            <button className="px-6 py-3 bg-white text-cyan-600 font-medium rounded-xl shadow-lg hover:bg-gray-200 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Headmaster Message */}
      <div className="px-5 align-center">
        <h1 className="text-3xl py-5 mb-5 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg">
          Headmaster's Message
        </h1>
        <div className="flex justify-evenly flex-col sm:flex-row">
          <img
            src={hm}
            alt="Headmaster"
            className="w-full mb-5 sm:w-[250px] sm:mb-0 rounded-lg shadow-md"
          />
          <p className="w-full sm:w-[50%] tracking-wide leading-relaxed text-gray-300">
            Parents and students enter our school with lot of hopes, dreams and
            aspirations. The school provides a right platform to enhance
            intellectual, spiritual, social and psychological skills with a well
            structured pedagogy catering to the needs of the hour. Strenuous
            efforts are taken to instil value based education in order to bring
            out good citizens who would grow with the concern for others in the
            society. Every budding artist who enters our campus is given varied
            experience in order to make himself a trendsetter in the fast
            growing and challenge-filled world. Lets join hands in this mission
            of educating and nurturing the young minds in the right path.
            <span className="absolute top-[160%] font-semibold hidden sm:block">
              - Fr. S. Joseph Kennedy S.J.
            </span>
          </p>
        </div>
      </div>

      {/* Club Activities */}
      <h1 className="text-3xl pt-[30px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg">
        Club Activities
      </h1>
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>

      {/* Our Administrators */}
      <h1 className="text-3xl pt-[30px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-lg" id="about">
        Our Administrators
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-6 py-10">
        {administrators.map((admin, idx) => (
          <ElectricBorder
            key={idx}
            color="#7df9ff"
            speed={1}
            chaos={0.5}
            thickness={2}
            className="w-full"
            style={{ borderRadius: 16 }}
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={admin.image}
                alt={admin.name}
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">
                  {admin.name}
                </h2>
                <p className="text-gray-400 text-sm">{admin.subName}</p>
              </div>
            </div>
          </ElectricBorder>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-10">
          Testimonials
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
          {/* Left Side: Image + Description */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <img
              src={testi1}
              alt="Student"
              className="w-64 h-64 object-cover rounded-xl shadow-lg"
            />
            <p className="text-gray-300 leading-relaxed mt-4">
              "St.Xavier's Higher Secondary School has been a transformative
              experience for me. The teachers are incredibly supportive, and
              the environment encourages both learning and personal growth."
            </p>
            <span className="text-cyan-400 font-semibold mt-2">
              - DR. THILLAI VALLAL.SU
            </span>
          </div>

          {/* Right Side: Video */}
          <div className="flex-1 w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg">
            <video
              src={vid}
              controls
              autoPlay
              loop
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;