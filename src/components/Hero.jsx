import { Button } from "@material-tailwind/react";
import CircularImg from "./CircularImage";

export default function HeroSection() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {/* CircularImg on top for small screens */}
      <div className="sm:col-span-1 md:hidden">
        <CircularImg />
      </div>

      <div className="mx-auto max-w-screen-xl px-6 py-12">
        <h1 className="text-3xl font-bold">Hi There, I'm Rama</h1>
        <p className="mt-4 text-lg">
          I'm Software Developer and Lifetime Learner
        </p>
        <div className="mt-5">
          <Button variant="outlined">About Me</Button>
          <Button variant="gradient">My Resume</Button>
        </div>
      </div>
      <div className="hidden md:block">
        <CircularImg />
      </div>
    </div>
  );
}
