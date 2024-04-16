import { Button } from "@material-tailwind/react";
import CircularImg from "./CircularImage";

export default function HeroSection() {
  return (
    <div className="py-6 md:py-16">
      <div className="sm:col-span-1 md:hidden flex justify-center items-center mb-6">
        <CircularImg />
      </div>
      <div className="flex justify-center items-center mx-10">
        <div className="flex flex-col justify-center items-center md:mr-10 md:items-start">
          <h1 className="text-3xl font-bold">Hi There, I'm Rama</h1>
          <p className="mt-4 text-lg">
            Software Developer and Lifetime Learner
          </p>
          <div className="mt-6 ">
            <Button variant="outlined">About Me</Button>
            <Button variant="gradient" className="ml-4">
              My Resume
            </Button>
          </div>
        </div>
        <div className="hidden md:flex md:justify-center md:items-center ml-20">
          <CircularImg />
        </div>
      </div>
    </div>
  );
}
