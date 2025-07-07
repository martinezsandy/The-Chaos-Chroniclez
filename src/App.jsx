import React from "react";
import './App.css'
import './index.css'
import ParticlesBackground from "./ParticlesBackground";
import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

function App() {
  return (
    <div>
      <h1 className="text-3xl mt-4 ml-4 text-normal">The Chaos Chroniclez</h1>
      <div className="main flex">
        <div className="first">
            <h2 className="text-[10rem] ml-[0.5em] mt-[0.5em] mb-[0px]">Yokosoo !</h2>
            <h3 className="text-7xl ml-[1.55em] mb-[0]">I'm <span>Sandy</span> aka <span>Santhosh</span></h3>
            <h3 className="text-4xl ml-[3.15em] mb-[0]">a beginner full-stack web developer</h3>
        </div>
        <div className="second ">
          <img src="./src/assets/pfp.webp" className="w-75 h-75 rounded-[50%] mt-[40%] ml-[100%]"></img>
        </div>
      </div>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="mainsec flex ">
        <div className="ffirst w-[70%]">
        <h2 className="text-[2.5rem] ml-[2.8em] mt-[0.5em] mb-[0px]">Built</h2><br />
        <h3 className="work text-4xl ml-[3.1em] mb-[0]"><span className="text-5xl font-normal">QR Generator</span> <br />
          <h4 className="text-2xl font-medium">" A simple QR Code Gernerator web application built using HTML, CSS nd JavaScript along with QR-Code library "</h4>
          <br /> 
          <a className="hover:text-[#7b7b7b]" href="https://qr-gen-iota.vercel.app"><IoLogoVercel /> <span className="text-xl">vercel.app</span></a>
          <a className="hover:text-[#7b7b7b]" href="https://github.com/martinezsandy/QR-Gen"><FaGithub /> <span className="text-xl">martinezsandy/QR-Gen</span></a>
          </h3>

          <br />

          <h3 className="work text-4xl ml-[3.1em] mb-[0]"><span className="text-5xl">Doppler Dork</span> <br />
          <h4 className="text-2xl font-medium">" A weather web application built using HTML, CSS nd JavaScript along with OpenWeathermap API which gives you the temperature, description, pressure, humidity, airpollution info nd sunrise, sunset time "</h4>
          <br />
          <a className="hover:text-[#7b7b7b]" href="https://doppler-dork.vercel.app/"><IoLogoVercel /> <span className="text-xl">vercel.app</span></a>
          <br />
          <a className="hover:text-[#7b7b7b]" href="https://github.com/martinezsandy/DOPPLER-DORK"><FaGithub /> <span className="text-xl">martinezsandy/DOPPLER-DORK</span></a>
          </h3>
        </div>
          <br />
        <div className="fsecond mt-8 ">
          <h2 className="Contact text-3xl ml-[3em] mb-3.5">Ping Me</h2>
          <h3 className="work text-3xl ml-[3.05em] mb-[0]">
          <a className="hover:text-[#7b7b7b]" href="https://github.com/martinezsandy"><FaGithub /> martinezsandy</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]" href="mailto:immartinezsandy@gmail.com"><IoMail /> immartinezsandy@gmail.com</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]"href="https://discord.gg/BqTTXhQ6"><FaDiscord /> " L O U N G E "</a>
          <br />
          <br />
          <a className="hover:text-[#7b7b7b]" href="https://www.instagram.com/igimsndy?igsh=MXM0Mzl4cXZlOW95cg=="><FaInstagram /> igimsndy</a>
          </h3>
        </div>

      </div>
      <ParticlesBackground />
    </div>
  );
}

export default App;