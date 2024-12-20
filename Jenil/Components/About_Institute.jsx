"use client";
import React, { useEffect, useRef } from "react";
// import Initialheader from "./Initialheader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About_Institute = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert(); // Clean up animations on component unmount
  }, []);

  return (
    <>
      {/* <Initialheader /> */}
      <div className="absolute -z-10 top-0 w-full h-screen bg-black">
        <div
          className="absolute -z-10 top-0 w-full h-screen bg-black"
          style={{
            backgroundImage: "url(/college.jpg)",
            backgroundPosition: "10% 20%",
            backgroundSize: "cover",
            opacity: 0.5,
          }}></div>
      </div>
      <div
        className="w-full h-screen py-10 flex flex-col  justify-center  p-4 md:p-8"
        ref={headerRef}>
        <p className="program-heading text-[#fefeff] font-bold self-center text-3xl md:text-6xl z-10 mb-2 md:mb-5">
          Institute
        </p>
        <div className="underline-bar w-6/12 md:w-2/12 rounded-xl h-1 md:h-1 bg-yellow-300 self-center mb-10"></div>
        <div
          className="w-full  bg-gradient-to-br from-[#4b511f] to-[#001a3f] border-2 border-white md:w-10/12 bg-opacity-80 shadow-lg rounded-xl self-center flex flex-col-reverse md:flex-row overflow-hidden"
          ref={contentRef}>
          <div className="w-full md:w-1/2  p-4 md:p-6 text-white flex flex-col justify-center">
            <p className="mb-1 text-yellow-300 font-bold">
              About the Institute
            </p>
            <article className="text-[11px] text-white md:text-base leading-relaxed space-y-4 indent-3">
              <p>
                <strong>
                  Indian Institute of Information Technology Vadodara (IIITV)
                </strong>{" "}
                is established by the Ministry of Education (MoE), Government of
                India under Public Private Partnership (PPP) as Institute of
                National Importance. The institute aims to develop new knowledge
                in information technology and provide manpower of global
                standards for the information technology industry. The project
                partners are the Government of India, Government of Gujarat,
                Gujarat Energy Research and Management Institute, Gujarat State
                Fertilizers and Chemicals Ltd, and Tata Consultancy Services.
                Established in 2013, IIIT V is currently operating from its
                temporary premises at Government Engineering College
                (Gandhinagar) until the new campus in Vadodara, Gujarat, is
                operational. The Government of Gujarat has supported the
                Institute by providing 62.5 acres of land at Dumad, Vadodara,
                and an Academic Block at GEC, Gandhinagar.
              </p>
            </article>
          </div>
          <div
            className="w-full h-32 md:h-auto md:w-1/2 bg-teal-800"
            style={{
              backgroundImage: "url(/institute.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>
        </div>
      </div>
    </>
  );
};

export default About_Institute;
