import { Button } from "@material-tailwind/react";
import CircularImg from "./CircularImage";

export default function HeroSection() {
  return (
    <div className="py-6 md:py-16 ">
      <div className="sm:col-span-1 md:hidden flex justify-center items-center mb-6">
        <CircularImg />
      </div>
      <div className="flex justify-center items-center mx-10">
        <div className="flex flex-col justify-center items-center md:mr-24 md:items-start">
          <h1 className="text-3xl font-bold">Software Engineer</h1>
          <p className="mt-4 text-lg">
            <div className="text-justify md:max-w-xl">
              Hello, I am
              <span className="text-blue-600"> Rama Aryasuta Weihan.</span>{" "}
              Fresh Graduate of Computer Engineering at Diponegoro University.
              Creative and have various leadership and organization experience.
              Excel at leadership, multimedia, mobile app development, web
              development, and embedded system with arduino. Have strong
              interest in technology especially in software and embedded system.
            </div>
          </p>
          <br />
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/rama-aryasuta-weihan/"
              target="_blank"
            >
              <img src="icons/linked.svg" alt="LinkedIn" className="w-7" />
            </a>
            <a href="https://www.instagram.com/ramaarya1/" target="instagram">
              <img src="icons/instagram.svg" alt="Instagram" className="w-7" />
            </a>
            <a href="https://github.com/ramaaryasuta" target="_blank">
              <img src="icons/github.svg" alt="Github" className="w-7" />
            </a>
          </div>
          <div className="mt-6">
            <a href="mailto:ramaaryasutaweihan@gmail.com">
              <Button variant="gradient">Contact Me</Button>
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center ml-44">
          <CircularImg />
        </div>
      </div>
    </div>
  );
}
