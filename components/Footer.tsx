import { FaLinkedin } from "react-icons/fa";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div
        className="h-[40rem] rounded-md bg-black flex flex-col items-center justify-center relative w-full"
        id="contacts"
      >
        <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 p-10">
          Contact Me!
        </h2>
        <div className="relative flex-col md:flex-row z-10 md:leading-tight text-center tracking-tight bg-clip-text text-transparent flex items-center gap-2 md:gap-8 ">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-yellow-500" />
              <a
                href="tel:+94769210170"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                +94769210170
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-yellow-500" />
              <a
                href="mailto:irushitharindi@gmail.com"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                irushitharindi@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <FaLinkedin className="h-5 w-5 text-yellow-500" />
              <a
                href="https://www.linkedin.com/in/irushisalwathura/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                Irushi Salwathura
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <AiFillInstagram className="h-5 w-5 text-yellow-500" />
              <a
                href="https://www.instagram.com/artbyirushi?igsh=NWxqbXZ2bjZ6NHE="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                @artbyirushi
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <AiFillInstagram className="h-5 w-5 text-yellow-500" />
              <a
                href="https://www.instagram.com/__irushi___?igsh=d2l0ZzBjeWhkZjky"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors"
              >
                @__irushi__
              </a>
            </div>
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
    </>
  );
};
export default Footer;
