import Image from 'next/image'
import {
Card,
CardHeader,
CardBody,
Typography,
CardFooter,
Tooltip,
Button
} from "@material-tailwind/react";
import gamePediaGIF from '../../public/img/gamepedia.gif'
import { IKVideo, IKImage, IKContext } from 'imagekitio-react';

import CodeIcon from '@mui/icons-material/Code';
import MonitorIcon from '@mui/icons-material/Monitor';
 

export default function Project() {
  const videoUrl = "https://ik.imagekit.io/oxmgwogqf/"
  return (
    <div id="project" className="text-4xl pt-10">
      <h1 className="mb-5 font-semibold">Project</h1>
      <div className=" flex flex-col gap-5 mx-auto justify-evenly items-center md:flex-row">
        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center hover:text-red-800"
        >
          <IKVideo
            className=" w-full h-full absolute object-cover"
            loop={true}
            autoPlay={true}
            muted={true}
            urlEndpoint={videoUrl}
            path="nursery_dashboard.mov"
          ></IKVideo>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative md:px-12 ">
            <Typography
              variant="h2"
              color="white"
              className="mb-2 font-medium leading-[1.5]"
            >
              Nursery Dashboard
            </Typography>
            <Typography variant="h5" className="mb-2 text-gray-300 text-sm">
              a dashboard for hospital nursery unit, complete with filter
              feature and date range <br />
              Tech: NextJS, React, Tailwind, Formik, Node js BE, PostgreSQL,
              Sequelize ORM,
            </Typography>
            <div className="flex justify-center gap-7">
              <a
                className="flex items-center gap-3 !mx-0"
                href="https://github.com/farhanaryasukma/child-birth-filter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="white"
                  className="flex items-center gap-3 w-30 h-12 !mx-0"
                >
                  <CodeIcon
                    color="primary"
                    fontSize="large"
                    className="h-5 w-5"
                  />{" "}
                  Repo
                </Button>
              </a>
              <a
                className="flex items-center gap-3 !mx-0"
                href="https://child-birth-filter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  color="white"
                  className="flex items-center gap-3 !mx-0 w-30 h-12">
                  <MonitorIcon
                    color="primary"
                    fontSize="large"
                    className="h-5 w-5"
                  />{" "}
                  Live Demo
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center hover:text-red-800"
        >
          <Image
            src={gamePediaGIF}
            alt=""
            srcset=""
            className="w-full h-full absolute object-cover"
          />
          {/* <IKContext urlEndpoint={videoUrl}>
            <IKVideo
              className="w-full h-full absolute object-cover"
              path="game_pedia.mov"
              loop
              autoPlay
            />
          </IKContext> */}
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none "
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative md:px-12 ">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              GamePedia
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-300 text-sm">
              <p>
                A browser game platform. Complete with authn and authz{" "}
                {"(JWT), "} and media handling. <br />
                Tech: NextJS, React, Redux with toolkit, Bootstrap, Node with
                Express, PostgreSQL, Sequelize ORM, Bcrypt
              </p>
            </Typography>
            <div className="flex justify-center gap-7 pt-2">
              <a
                className="flex items-center gap-3 !mx-0"
                href="https://gitlab.com/binar-platinum-team-2/challenge-chapter-11-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  color="white"
                  className="flex items-center gap-3 w-30 h-12 !mx-0">
                  <CodeIcon
                    color="primary"
                    fontSize="large"
                    className="h-5 w-5"
                  />{" "}
                  Repo
                </Button>
              </a>
              <a
                className="flex items-center gap-3 !mx-0"
                href="https://fsw-binar-team2.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  color="white"
                  className="flex items-center gap-3 !mx-0 w-30 h-12">
                  <MonitorIcon
                    color="primary"
                    fontSize="large"
                    className="h-5 w-5"
                  />{" "}
                  Live Demo
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>
        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center hover:text-red-800"
        >
          <IKImage
            className=" w-full h-full absolute object-cover"
            urlEndpoint={videoUrl}
            path="portfolio_website.png"
          />
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none "
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative md:px-12 ">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              This Portfolio Website
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400 text-sm">
              A Passion Project. somehow the video background isn't working when
              I add mute parameter <br />
              Tech: Next JS, React, Tailwind CSS, Material-Tailwind.
            </Typography>
            <div className="flex justify-center gap-7 pt-2">
              <a
                className="flex items-center gap-3 !mx-0"
                href="https://github.com/farhanaryasukma/nextjs-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="white"
                  className="flex items-center gap-3 w-30 h-12 !mx-0">
                  <CodeIcon
                    color="primary"
                    fontSize="large"
                    className="h-5 w-5"
                  />{" "}
                  Repo
                </Button>
              </a>
              <a
                className="flex items-center gap-3 !mx-0"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="white"

                  className="flex items-center gap-3 !mx-0 w-30 h-12"
                  disabled
                >
                  <MonitorIcon
                    color="primary"
                    fontSize="large"
                    className="h-5 w-5"
                  />{" "}
                  You're in the project
                </Button>
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

// hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out