import ProjectList from "../components/ProjectList";

export default function ProjectSection() {
  return (
    <div className="mx-5 md:mx-10 lg:mx-auto max-w-screen-xl">
      <h1 className="text-2xl font-bold">My Project :</h1>
      <br />
      <ProjectList />
      <br />
    </div>
  );
}
