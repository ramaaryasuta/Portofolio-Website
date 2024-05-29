import ProjectList from "../components/ProjectList";

export default function ProjectSection() {
  return (
    <div className="mx-10 md:mx-20 lg:mx-auto max-w-screen-xl">
      <h1 id="project" className="text-2xl font-bold">My Project :</h1>
      <br />
      <ProjectList />
      <br />
    </div>
  );
}
