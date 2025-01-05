import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

export default function ProjectCard({ title, desc, img, tech, github }) {
  return (
    <Card className="max-w-[16rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img src={img} alt="ui/ux review check" />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="truncate">
          {title}
        </Typography>
        <Typography
          variant="md"
          color="gray"
          className="mt-2 font-light text-justify line-clamp-2"
        >
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-4">
          <Tooltip content={tech}>
            <Avatar
              size="sm"
              variant="circular"
              alt={tech}
              src={`icons/${tech}.svg`}
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <a href={github} target="_blank">
          <Button>Detail</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
