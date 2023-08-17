"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user";
import { PiCoinVerticalDuotone } from "react-icons/pi";

export default function Nav() {
  let [isDark, setDark] = useState(false);
  let [drop, setDrop] = useState(false);
  let { user } = useContext(UserContext);
  let handleTheme = () => {
    let html: any = document.querySelector(":root");
    if (isDark) {
      html.className = "light";
      localStorage.setItem("isDark", `false`);
    } else {
      html.className = "dark";
      localStorage.setItem("isDark", `true`);
    }
    setDark((prv) => !prv);
  };
  let [Scroll, setScroll] = useState(0);
  //window events
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  // get the theme from localstorage
  useEffect(() => {
    let html: any = document.querySelector(":root");
    if (localStorage.getItem("isDark") !== undefined) {
      if (localStorage.getItem("isDark") === "true") {
        setDark(true);
        html.className = "dark";
      } else if (localStorage.getItem("isDark") === "false") {
        setDark(false);
        html.className = "light";
      }
    }
  }, []);
  //event scroll
  const handleScroll = () => {
    let el = document.querySelector(".content-table");
    let af = document.querySelector(".full-post");
    if (!af || !el) return;
    if (af?.getBoundingClientRect().y * 2 <= window.scrollY) {
      el.classList.add("scrolled");
    } else {
      el.classList.remove("scrolled");
    }
  };
  let r = useRouter();

  return (
    <>
      <div className="observer-element h-2 md:h-4"></div>
      <nav
        className={`sticky-nav max-w-7xl mx-auto m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-8 py-8 bg-opacity-60 px-4 ${
          Scroll == 0 ? "" : "scrolling"
        }`}
        id="sticky-nav"
      >
        <div className="flex items-center flex-row justify-start">
          <Link aria-label="logo" href="/">
            <div>
              <svg
                className="logo text-night dark:text-day"
                width="30"
                height="30"
                viewBox="0 0 150 150"
              >
                <g
                  id="Group_10"
                  data-name="Group 10"
                  transform="translate(-489.981 -204.981)"
                >
                  <g
                    id="Group_9"
                    data-name="Group 9"
                    transform="translate(489.632 204.632)"
                  >
                    <g
                      id="Rectangle_7"
                      data-name="Rectangle 7"
                      transform="translate(0.349 0.349)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="7"
                    >
                      <rect width="150" height="150" stroke="none"></rect>
                      <rect
                        x="3.5"
                        y="3.5"
                        width="143"
                        height="143"
                        fill="none"
                      ></rect>
                    </g>
                  </g>
                  <g
                    id="Untitled-2_1_"
                    data-name="Untitled-2 (1)"
                    transform="translate(474.081 577.981)"
                  >
                    <path
                      id="Path_51"
                      data-name="Path 51"
                      d="M31-352.727v5.273l8.128-2.129c4.451-1.161,13.3-3.532,19.69-5.225l11.611-3.145H50.739L31-358Z"
                      transform="translate(-0.052)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M77.75-355.478c-4.79,1.306-17.175,4.644-27.576,7.4l-18.868,5.031-.145,5.709c-.1,5.225-.048,5.612.726,5.37,1.209-.387,24.867-6.918,49.008-13.546,19.206-5.273,32.462-8.563,44.509-11.127l5.564-1.161H86.458Z"
                      transform="translate(-0.116 -0.103)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_53"
                      data-name="Path 53"
                      d="M143.28-356.226c-7.815,1.113-27.758,5.37-39.408,8.37C92.414-344.905,86.517-343.26,51.04-333L31-327.247v4.693a22.727,22.727,0,0,0,.24,4.741c.144,0,9.493-3.048,20.759-6.821,50.962-16.933,72.392-22.351,91.09-23.028l7.767-.29V-357l-1.534.048C148.458-356.9,145.725-356.613,143.28-356.226Z"
                      transform="translate(-0.052 -0.516)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_54"
                      data-name="Path 54"
                      d="M131.2-330.394a206.192,206.192,0,0,0-25.122,4.838c-14.766,3.725-26.9,7.644-58.969,19.013-8.677,3.1-15.869,5.612-15.965,5.612A21.407,21.407,0,0,0,31-297.255c0,2.758.144,3.628.575,3.435.336-.145,6.568-2.806,13.807-5.9,30.4-13.062,47.846-18.965,62.8-21.287,13.951-2.129,28.621-1.161,39.5,2.661,1.582.532,2.924.968,3.02.968.048,0,.144-2.9.144-6.483V-330.3l-2.205-.339A119.8,119.8,0,0,0,131.2-330.394Z"
                      transform="translate(-0.052 -14.011)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_55"
                      data-name="Path 55"
                      d="M105.5-305.337c-16.684,1.887-34.183,8.079-68.078,24.044l-6.232,2.9-.144,2.516-.144,2.467,1.582-.968c4.267-2.612,13.28-7.547,18.889-10.4,20.615-10.45,36.772-14.272,52.449-12.482,11.938,1.4,27.711,6,42.573,12.53l4.411,1.984v-15.772l-7.287-2.467a84.326,84.326,0,0,0-19.321-4.451A96.685,96.685,0,0,0,105.5-305.337Z"
                      transform="translate(0 -27.195)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_56"
                      data-name="Path 56"
                      d="M80.956-281.328C68.491-279.635,55.4-274.313,38.575-264.1c-7.431,4.5-7.575,4.6-7.575,6.241a3.829,3.829,0,0,0,.192,1.645c.144,0,2.589-1.548,5.417-3.387,9.253-6.1,19.225-10.4,28.43-12.192,5.465-1.064,17.451-.677,24.93.726,15.917,3.1,35.813,9.676,56.955,18.916l3.931,1.693V-264.4l-2.253-1.016a259.783,259.783,0,0,0-35.381-12.82C102-281.183,89.058-282.441,80.956-281.328Z"
                      transform="translate(-0.052 -39.762)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_57"
                      data-name="Path 57"
                      d="M64.643-253.668c-.384.1-2.349.435-4.315.726-7.671,1.258-17.93,5.709-25.649,11.03l-3.356,2.322-.144,4.451a27.82,27.82,0,0,0,.1,4.451,36.709,36.709,0,0,0,3.739-2.371,60,60,0,0,1,21-9.047c6.137-1.355,20.231-1.258,28.046.242,15.293,2.854,32.409,8.37,56.236,18.142,5.609,2.274,10.307,4.161,10.4,4.161a32.861,32.861,0,0,0,.24-5.709v-5.709l-8.965-3.725c-23.635-9.724-40.894-15.288-56-18.045C82.094-253.426,66.465-254.152,64.643-253.668Z"
                      transform="translate(-0.135 -54.327)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_58"
                      data-name="Path 58"
                      d="M64.751-223.092c-10.835.774-20.759,4.5-30.971,11.708L31-209.449v7.16a52.321,52.321,0,0,0,.24,7.208,51.053,51.053,0,0,0,4.938-3.387c12.609-9.1,23.635-13.691,36.292-15.046,17.163-1.838,40.367,4.161,71.29,18.432l7.1,3.29v-7.983l-10.643-4.4C104.159-219.125,83.3-224.35,64.751-223.092Z"
                      transform="translate(-0.052 -70.238)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_59"
                      data-name="Path 59"
                      d="M71.99-195.191c-11.41,2.032-25.409,8.95-38.21,18.916L31-174.146v7.5a55.733,55.733,0,0,0,.24,7.45c.144,0,4.075-2.564,8.725-5.709,21.766-14.659,36.2-21.093,51.2-22.835,14.143-1.693,32.313,2.854,52.592,13.111,3.644,1.838,6.712,3.338,6.856,3.338.527,0,.192-3.822-.336-4.209-1.774-1.113-15.006-7.16-21.238-9.676C116.193-190.4,106.653-193.3,97.016-195,90.16-196.159,77.983-196.255,71.99-195.191Z"
                      transform="translate(-0.052 -84.608)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_60"
                      data-name="Path 60"
                      d="M95.34-172.272C80.815-170,65.187-162.645,41.17-146.825l-7.67,5.031,11.793.145,11.745.1,5.992-3.387a261.2,261.2,0,0,1,23.921-12c13.662-5.66,22.866-7.837,32.837-7.886,10.4-.048,19.75,2.322,30.057,7.6l2.4,1.209-.192-1.113c-.1-.919-1.438-1.79-7.095-4.6C126.212-171.208,110.057-174.643,95.34-172.272Z"
                      transform="translate(-1.342 -96.448)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_61"
                      data-name="Path 61"
                      d="M157.333-149.291c-12.772,1.6-25.351,5.951-43.783,15.143L104.6-129.7l14.078.145,14.078.1,7.4-2.9a143.536,143.536,0,0,1,23.028-7.112c5.709-1.113,19.352-1.161,23.754-.048l3,.726v-2.08c0-1.935-.145-2.177-1.79-3.048a73.516,73.516,0,0,0-13.933-4.6A62.381,62.381,0,0,0,157.333-149.291Z"
                      transform="translate(-39.137 -108.544)"
                      fill="#fff"
                    ></path>
                    <path
                      id="Path_62"
                      data-name="Path 62"
                      d="M211.029-122a136.912,136.912,0,0,0-18.868,5.273l-2.661.968h22.158l22.158.048-.145-3.241-.145-3.29-1.935-.339C227.768-123.258,216.254-122.919,211.029-122Z"
                      transform="translate(-82.964 -122.289)"
                      fill="#fff"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex">
          <div className="px-2 flex gap-2 items-center justify-start">
            {user.points}
            <PiCoinVerticalDuotone />
          </div>
          <div className="relative inline-block ">
            <button
              className="relative z-10 block hover:bg-[#f5f5f5] dark:hover:bg-[#222] p-2 border-transparent rounded-md bg-transparent focus:bg-[#f5f5f5] dark:focus:bg-[#222]"
              onClick={() => setDrop(!drop)}
            >
              <svg
                fill="none"
                stroke="currentColor"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            <div
              className={`absolute right-0 z-30 w-48 mt-1 origin-top-right bg-day rounded-md shadow-lg p-2 dark:bg-[#191919] ${
                drop ? "block" : "hidden"
              }`}
            >
              <Link
                href="/progress"
                className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
              >
                progress
              </Link>
              <Link
                href="/rewards"
                className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
              >
                rewards
              </Link>
              <button
                className="px-4 rounded-lg py-2 text-gray-700 dark:text-gray-200 text-sm capitalize transition-colors duration-300 transform hover:bg-[#f5f5f5] dark:hover:bg-[#222] dark:hover:text-white w-full flex justify-between items-center"
                onClick={handleTheme}
              >
                toggel theme
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
