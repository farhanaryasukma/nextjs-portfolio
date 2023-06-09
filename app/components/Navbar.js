import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';



 
export function Example() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <a href="#top" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#skill" className="flex items-center">
          Skills
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#project" className="flex items-center">
          Project
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/files/farhan_arya_sukma_CV.pdf" className="flex items-center gap-1">
          <PictureAsPdfIcon /> CV
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
      <Navbar
        className="sticky bg-white border-none top-2 z-10 rounded-3xl py-2 w-11/12 mx-auto lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <a href="#top">
            <img
              className="cursor-pointer font w-20 my-[5px] stroke-current bg-transparent"
              src="/img/logo.svg"
              alt="nature image"
            />
          </a>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="outlined"
              size="sm"
              className="hidden lg:inline-block"
            >
              <a href="mailto:farhan.arya.sukma@gmail.com?subject=Work%20Request&body=Hello,%20I%20would%20like%20to%20contact%20you%20regarding...">
                <span>Mail me</span>
              </a>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className={"rounded-b-2xl drop-shadow-lg"} open={openNav}>
          {navList}
          <Button variant="outlined" size="sm" fullWidth className="mb-2">
            <a href="mailto:farhan.arya.sukma@gmail.com?subject=Custom%20Subject&body=Hello,%20I%20would%20like%20to%20contact%20you%20regarding...">
              <span>Mail me!</span>
            </a>
          </Button>
        </MobileNav>
      </Navbar>
    </>
  );
}