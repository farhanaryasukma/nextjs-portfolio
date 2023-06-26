import {
Card,
CardHeader,
CardBody,
Typography,
CardFooter,
Tooltip,
Button
} from "@material-tailwind/react";

import CodeIcon from '@mui/icons-material/Code';
import MonitorIcon from '@mui/icons-material/Monitor';
 

export default function Project() {
  return (
    <div className="text-4xl pt-10">
      <h1 className="mb-5">Project</h1>
      <div className=" flex flex-col gap-5 mx-auto justify-evenly items-center md:flex-row">
      <Card
        shadow={false}
        className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center hover:text-red-800"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative md:px-12 ">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Hospital Labor table
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            a dashboard for hospital nursery unit, complete with filter feature
            and date range
          </Typography>
          <div className="flex justify-center gap-7 pt-2">
            <Button className="flex items-center gap-3 !mx-0">
              <CodeIcon color="primary" fontSize="large" className="h-5 w-5" />{" "}
              Repo
            </Button>
            <Button className="flex items-center gap-3 !mx-0">
              <MonitorIcon color="primary" fontSize="large" className="h-5 w-5" />{" "}
              Live Demo 
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center hover:text-red-800"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative md:px-12 ">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Hospital Labor table
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            a dashboard for hospital nursery unit, complete with filter feature
            and date range
          </Typography>
          <div className="flex justify-center gap-7 pt-2">
            <Button className="flex items-center gap-3 !mx-0">
              <CodeIcon color="primary" fontSize="large" className="h-5 w-5" />{" "}
              Repo
            </Button>
            <Button className="flex items-center gap-3 !mx-0">
              <MonitorIcon color="primary" fontSize="large" className="h-5 w-5" />{" "}
              Live Demo 
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center hover:text-red-800"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative md:px-12 ">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Hospital Labor table
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            a dashboard for hospital nursery unit, complete with filter feature
            and date range
          </Typography>
          <div className="flex justify-center gap-7 pt-2">
            <Button className="flex items-center gap-3 !mx-0">
              <CodeIcon color="primary" fontSize="large" className="h-5 w-5" />{" "}
              Repo
            </Button>
            <Button className="flex items-center gap-3 !mx-0">
              <MonitorIcon color="primary" fontSize="large" className="h-5 w-5" />{" "}
              Live Demo 
            </Button>
          </div>
        </CardBody>
      </Card>
      </div>
    </div>
  );
}

// hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out