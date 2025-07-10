import React from "react";
import './App.css'
import './index.css'
import ParticlesBackground from "./ParticlesBackground";
import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";


function App() {
  return (
    <div>
      
      
      <div className="main flex">
        <div className="first">
            <h2 className="text-[10rem] ml-[0.5em] mt-[0.5em] mb-[0px] ">Yokosoo !</h2>
            <h3 className="text-7xl ml-[1.55em] mb-[0] font-thin">I'm <span>Sandy</span> aka <span>Santhosh</span></h3>
            <h3 className="text-4xl ml-[3.15em] mb-[0] font-light">a beginner full-stack web developer</h3>
        </div>
        <div className="second ">
          <img src="./src/assets/pfp.jpg" className="w-75 h-75 rounded-[50%] mt-[40%] ml-[100%]"></img>
        </div>
      </div>
      <div className="flex justify-end gap-4 mr-[15em] mt-[1em] mb-0">
        <p><a href="#about">About me</a></p>
        <p><a href="#skill">Skill</a></p>
        <p><a href="#projects">Projects</a></p>
      </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        {/*Fourth Division*/}
        <div className="mainfour ">
          <h2 className="text-[2.5rem] ml-[2.8em] mt-[0.5em] mb-[0px]"id="about">In Brief</h2>
          <h4 className="text-2xl font-medium ml-[4.66em] mr-[4.5em] backdrop-blur-[3px]">I specialize in <span className="text-4xl">HTML, CSS, JavaScript</span>, and modern frameworks like <span className="text-4xl">React</span> and <span className="text-4xl">Tailwind CSS</span>. I enjoy turning delutional ideas into real, working websites that look great and perform well on any device. I'm constantly learning and improving my skills to stay up-to-date with the latest web technologies. My <span className="text-4xl">goal</span> is to become an <span className="text-4xl">Entrepreneur</span>.When I'm not coding, you'll find me Trubbling with VideoGames, Music nd Anime.</h4>
        </div>
        <br />
        {/*Third Division*/}
        <div className="maintri">
          <h2 className="text-[2.5rem] ml-[2.8em] mt-[0.5em] mb-[0px]" id="skill">I'm proficient in</h2>
          <div className="units flex justify-center mt-[1em]">
            <h3 className="text-4xl ml-[3.15em] mb-[0] font-light border-1 border-solid border-white rounded-lg p-2 hover:bg-[grey] backdrop-blur-[5px]"><FaHtml5 className="inline-block"></FaHtml5>HTML</h3>
            <h3 className="text-4xl ml-[3.15em] mb-[0] font-light border-1 border-solid border-white rounded-lg p-2 hover:bg-[grey] backdrop-blur-[5px]"><FaCss3Alt className="inline-block"></FaCss3Alt>CSS</h3>
            <h3 className="text-4xl ml-[3.15em] mb-[0] font-light border-1 border-solid border-white rounded-lg p-2 hover:bg-[grey] backdrop-blur-[5px]"><FaJsSquare className="inline-block"></FaJsSquare> JavaScript</h3>
            <h3 className="text-4xl ml-[3.15em] mb-[0] font-light border-1 border-solid border-white rounded-lg p-2 hover:bg-[grey] backdrop-blur-[5px]"><FaReact className="inline-block"></FaReact> React</h3>
            <h3 className="text-4xl ml-[3.15em] mb-[0] font-light border-1 border-solid border-white rounded-lg p-2 hover:bg-[grey] backdrop-blur-[5px]"><RiTailwindCssFill  className="inline-block"></RiTailwindCssFill > TailwindCSS</h3>
          </div>
        </div>
      <br />
      <br />
      <br />

        {/*Second Division*/}
      <div className="mainsec flex backdrop-blur-[3px]">
        <div className="ffirst w-[70%]">
        <h2 className="text-[2.5rem] ml-[2.8em] mt-[0.5em] mb-[0px]" id="projects">Built</h2><br />
        <h3 className="work text-4xl ml-[3.1em] mb-[0]"><span className="text-5xl font-normal">QR Generator</span> <br />
          <h4 className="text-2xl font-medium">" A simple QR Code Gernerator web application built using HTML, CSS nd JavaScript along with QR-Code library "</h4>
          <br /> 
          <a className="hover:text-[#7b7b7b]" href="https://qr-gen-iota.vercel.app"><IoLogoVercel className="inline-block"></IoLogoVercel> <span className="text-xl">vercel.app</span></a>
          <br />
          <a className="hover:text-[#7b7b7b]" href="https://github.com/martinezsandy/QR-Gen"><FaGithub className="inline-block"></FaGithub> <span className="text-xl">martinezsandy/QR-Gen</span></a>
          </h3>

          <br />

          <h3 className="work text-4xl ml-[3.1em] mb-[0]"><span className="text-5xl">Doppler Dork</span> <br />
          <h4 className="text-2xl font-medium">" A weather web application built using HTML, CSS nd JavaScript along with OpenWeathermap API which gives you the temperature, description, pressure, humidity, airpollution info nd sunrise, sunset time "</h4>
          <br />
          <a className="hover:text-[#7b7b7b]" href="https://doppler-dork.vercel.app/"><IoLogoVercel className="inline-block"></IoLogoVercel> <span className="text-xl">vercel.app</span></a>
          <br />
          <a className="hover:text-[#7b7b7b]" href="https://github.com/martinezsandy/DOPPLER-DORK"><FaGithub className="inline-block"></FaGithub> <span className="text-xl">martinezsandy/DOPPLER-DORK</span></a>
          </h3>
        </div>
          <br />
        <div className="fsecond mt-8 ">
          <h2 className="Contact text-3xl ml-[3em] mb-3.5">Ping Me</h2>
          <h3 className="work text-3xl ml-[3.05em] mb-[0]"><br />
          <a className="hover:text-[#7b7b7b]" href="https://github.com/martinezsandy"><FaGithub className="inline-block"></FaGithub> martinezsandy</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]"href="https://www.linkedin.com/in/martinezzsandy"><FaLinkedin className="inline-block"></FaLinkedin> Santhosh Ramesh</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]" href="mailto:immartinezsandy@gmail.com"><IoMail className="inline-block"></IoMail> immartinezsandy@gmail.com</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]" href="https://www.instagram.com/igimsndy?igsh=MXM0Mzl4cXZlOW95cg=="><FaInstagram className="inline-block"></FaInstagram> igimsndy</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]"href="discord://-/users/1229043201315311667"><FaDiscord className="inline-block"></FaDiscord> moondeiti</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]"href="https://wa.me/9944799368"><FaWhatsapp className="inline-block"></FaWhatsapp> Sandy</a>
          </h3>
        </div>

      </div>


      <ParticlesBackground />
    </div>
  );
}

export default App;

