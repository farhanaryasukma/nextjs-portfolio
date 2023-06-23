import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import YouTubeIcon from '@mui/icons-material/YouTube';
   
  export function CustomCard() {
    return (
      <Card className="max-w-xs m-auto rounded-lg">
        <CardHeader floated={false} className="rounded-full">
          <img src="/img/avatar.png" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Farhan Arya Sukma
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            Full Stack Developer
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="follow 😉">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <GitHubIcon color="primary" fontSize="large" />
            </Typography>
          </Tooltip>
          <Tooltip content="for more serious person 🤓">
            <Typography
              as="a"
              href="https://www.linkedin.com/in/farhan-arya/"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <LinkedInIcon color="primary" fontSize="large"/>
            </Typography>
          </Tooltip>
          <Tooltip content="Subs :)?">
            <Typography
              as="a"
              href="https://www.youtube.com/channel/UCoA0Nxbuy3jR7HQBqBGdoTA"
              variant="lead"
              color="purple"
              textGradient
            >
              <YouTubeIcon color="primary" fontSize="large"/>
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    );
  }