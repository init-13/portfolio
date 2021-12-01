import { Link } from "react-scroll";

import React from "react";
import Memoji from "../images/personal/Memoji.png";
// import Button from "./Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar section */}
      <nav className="home__section--nav">
        <ul className="home__section--nav-ul">
          <li>
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="intro" smooth={true} spy={true}>
              Intro
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} spy={true}>
              Projects
            </Link>
          </li>
          {/* <li>
            <Link to="contact" smooth={true} spy={true}>
              Say Hello
            </Link>
          </li> */}
        </ul>
        <div className="home__section--version">
          <img src={Memoji} alt="Memoji Nitin" className="memoji" />
        </div>
        <div className="home__section--social">
          <ul className="home__section--social-ul">
            <li>
              <a href="https://github.com/init-13" target="blank">
                <svg
                  fill="#5E658D"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="30px"
                  height="30px"
                >
                  <path
                    fillRule="evenodd"
                    d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/init13/" target="blank">
                <svg
                  fill="#5E658D"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="30px"
                  height="30px"
                >
                  {" "}
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/GoodKnitten" target="blank">
                <svg
                  fill="#5E658D"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                >
                  <path d="M 24 4.300781 C 23.101563 4.699219 22.199219 5 21.199219 5.101563 C 22.199219 4.5 23 3.5 23.398438 2.398438 C 22.398438 3 21.398438 3.398438 20.300781 3.601563 C 19.300781 2.601563 18 2 16.601563 2 C 13.898438 2 11.699219 4.199219 11.699219 6.898438 C 11.699219 7.300781 11.699219 7.699219 11.800781 8 C 7.699219 7.800781 4.101563 5.898438 1.699219 2.898438 C 1.199219 3.601563 1 4.5 1 5.398438 C 1 7.101563 1.898438 8.601563 3.199219 9.5 C 2.398438 9.398438 1.601563 9.199219 1 8.898438 C 1 8.898438 1 8.898438 1 9 C 1 11.398438 2.699219 13.398438 4.898438 13.800781 C 4.5 13.898438 4.101563 14 3.601563 14 C 3.300781 14 3 14 2.699219 13.898438 C 3.300781 15.898438 5.101563 17.300781 7.300781 17.300781 C 5.601563 18.601563 3.5 19.398438 1.199219 19.398438 C 0.800781 19.398438 0.398438 19.398438 0 19.300781 C 2.199219 20.699219 4.800781 21.5 7.5 21.5 C 16.601563 21.5 21.5 14 21.5 7.5 C 21.5 7.300781 21.5 7.101563 21.5 6.898438 C 22.5 6.199219 23.300781 5.300781 24 4.300781" />
                </svg>
              </a>
            </li>
            <li>
              <a href="Resume.pdf" target="blank">
                <svg 
                  fill="#5E658D"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 48 48"  
                  width="30px" 
                  height="30px" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                >
                  <path d="M16.5,5C10.16639,5,5,10.16639,5,16.5L5,31.5C5,37.832757,10.166209,43,16.5,43L31.5,43C37.832938,43,43,37.832938,43,31.5L43,16.5C43,10.166209,37.832757,5,31.5,5L16.5,5ZM16.5,8L31.5,8C36.211243,8,40,11.787791,40,16.5L40,31.5C40,36.211062,36.211062,40,31.5,40L16.5,40C11.787791,40,8,36.211243,8,31.5L8,16.5C8,11.78761,11.78761,8,16.5,8Z" transform="matrix(1 0 0 1 -0.077022 0)" fill="rgb(94,101,141)" stroke="none" stroke-width="1"/><line id="ev15EcePijW3" x1="-11.861361" y1="0" x2="11.861361" y2="0" transform="matrix(1 0 0 1 23.922978 16.5)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><line id="ev15EcePijW4" x1="-4.619191" y1="0" x2="4.619191" y2="0" transform="matrix(1 0 0 1 16.680808 31.5)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><line id="ev15EcePijW5" x1="-4.619191" y1="0" x2="4.619191" y2="0" transform="matrix(1 0 0 1 16.680808 24)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><line id="ev15EcePijW6" x1="-5.89217" y1="0" x2="5.89217" y2="0" transform="matrix(1 0 0 1 29.89217 24)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><line id="ev15EcePijW7" x1="-5.930681" y1="0" x2="5.930681" y2="0" transform="matrix(1 0 0 1 29.853659 31.5)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><line id="ev15EcePijW8" x1="-4.619191" y1="0" x2="4.619191" y2="0" transform="matrix(1 0 0 1 16.680808 31.5)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><line id="ev15EcePijW9" x1="-2.4" y1="0" x2="2.4" y2="0" transform="matrix(1 0 0 1 29.853659 16.5)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><line id="ev15EcePijW10" x1="0" y1="-16" x2="0" y2="16" transform="matrix(1 0 0 1 21.299999 24)" fill="none" stroke="rgb(63,87,135)" stroke-width="0.48"/><ellipse id="ev15EcePijW11" rx="2.400001" ry="2.400001" transform="matrix(1 0 0 1 17.05366 12.9)" fill="rgb(94,101,141)" stroke="none" stroke-width="0"/></svg>
              </a>
            </li>

            {/* <li>
              <Button className="btn-dark">Resume</Button>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
