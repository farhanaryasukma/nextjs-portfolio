import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Tooltip,
  Button
} from '@material-tailwind/react';
import gamePediaGIF from '../../public/img/gamepedia.gif';
import { IKVideo, IKImage } from 'imagekitio-react';
import CodeIcon from '@mui/icons-material/Code';
import MonitorIcon from '@mui/icons-material/Monitor';

const Project = () => {
  const getRandomDelay = () => {
    return Math.floor(Math.random() * 51) * 10;
  };

  const renderButton = (text, icon, href) => {
    return (
      <a
        className="flex items-center gap-3 !mx-0"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          color="white"
          className="flex items-center gap-3 w-30 h-12 !mx-0"
        >
          {icon}
          {text}
        </Button>
      </a>
    );
  };

  const renderCard = (title, description, gifPath, repoLink, liveDemoLink) => {
    return (
      <Card
        shadow={false}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        className="relative grid h-[30rem] w-full max-w-[20rem] items-end justify-center overflow-hidden text-center md:w-[1000px]"
      >
        <Image
          src={gifPath}
          width={100}
          height={100}
          alt=""
          srcSet=""
          className="w-full h-full absolute object-cover"
        />
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
            className="p-2 mb-6 font-medium leading-[1.5]"
          >
            {title}
          </Typography>
          <Typography variant="h5" className="ma mb-4 text-gray-300 text-sm">
            {description}
          </Typography>
          <div className="flex justify-center gap-7 pt-2">
            {repoLink &&
              renderButton(
                "Repo",
                <CodeIcon
                  color="primary"
                  fontSize="large"
                  className="h-5 w-5"
                />,
                repoLink
              )}
            {liveDemoLink &&
              renderButton(
                "Live Demo",
                <MonitorIcon
                  color="primary"
                  fontSize="large"
                  className="h-5 w-5"
                />,
                liveDemoLink
              )}
          </div>
        </CardBody>
      </Card>
    );
  };

  

  return (
    <div id="project" className="text-4xl pt-10">
      <h1
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        className="mb-5 font-semibold"
      >
        Project
      </h1>
      <div className="flex flex-col gap-5 mx-auto justify-evenly items-center md:flex-row">
        {renderCard(
          "Nursery Dashboard",
          "A dashboard for hospital nursery unit, complete with filter feature and date range.",
          "/img/nursery_dashboard.gif",
          "https://github.com/farhanaryasukma/child-birth-filter",
          "https://child-birth-filter.vercel.app/"
        )}
        {renderCard(
          "GamePedia",
          "A browser game platform. Complete with authentication and authorization (JWT) and media handling.",
          "/img/gamepedia.gif",
          "https://gitlab.com/binar-platinum-team-2/challenge-chapter-11-fe",
          "https://fsw-binar-team2.netlify.app/"
        )}
        {renderCard(
          "Portfolio Website",
          "A passion project showcasing my portfolio. Tech stack includes Next.js, React, Tailwind CSS, and Material-Tailwind.",
          "/img/portfolio_website.gif",
          "https://github.com/farhanaryasukma/nextjs-portfolio",
          ""
        )}
      </div>
    </div>
  );
};

export default Project;
