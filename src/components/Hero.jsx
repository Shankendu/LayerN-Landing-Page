import Heromp4 from "../assets/particle_mp4.mp4";
import Heromp42 from "../assets/Video2.mp4";
import Herowebm from "../assets/particle_webm.webm";
import Herowebm2 from "../assets/video2.webm";
import Logo from "../assets/swap.png";
import { useState, useEffect, useRef } from "react";
import Preload from "./Preload";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import gsap from "gsap";

export default function Hero() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  // }, []);

  function btnLoader() {
    // let spinner = document.getElementById("loader").classList;
    // let text = document.getElementById("btn-text").classList;
    // spinner.add("flex");
    // spinner.remove("hidden");
    // text.add("hidden");
    // setTimeout(() => {
    //   spinner.remove("flex");
    //   spinner.add("hidden");
    //   text.remove("hidden");
    // }, 4000);
    // window.location.href = "https://aggregator-kohl.vercel.app/"
    let mainBtn = document.getElementById("drop").classList;
    mainBtn.toggle("invisible");

    const tl2 = gsap.timeline({ paused: true, reversed: true });
    tl2.from("#drop", {
      translateY: "100",
      duration: 0.3,
    });
    if (tl2.reversed()) {
      tl2.play();
    } else {
      tl2.reverse(this);
    }
  }

  // function btnLoader2(e) {
  //   e.preventDefault();
  //   let spinner = document.getElementById("loader2").classList;
  //   let text = document.getElementById("btn-text2").classList;
  //   spinner.add("flex");
  //   spinner.remove("hidden");
  //   text.add("hidden");
  //   setTimeout(() => {
  //     spinner.remove("flex");
  //     spinner.add("hidden");
  //     text.remove("hidden");
  //   }, 4000);
  // }
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#preload", {
        yPercent: "0",
        duration: 3.2,
      })
        .to("#preload", {
          yPercent: "-100",
          duration: 1,
          borderRadius: "50%",
          backgroundColor: "rgb(147 51 234)",
          ease: "power4.inOut",
        })
        .from(["#top-items", "#name", "#text-1", "#text-2", "#btn"], {
          opacity: 0,
          y: "30",
          stagger: 0.1,
          ease: "power4.inOut",
        });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  function mouseMove(e) {
    let magneto = document.getElementById("btn");
    let magnetoText = document.getElementById("btn-text");
    let boundBox = magneto?.getBoundingClientRect();
    let magnetoTextStrength = 20;

    const newX = (e?.clientX - boundBox?.left) / magneto?.offsetWidth - 0.5;
    const newY = (e?.clientY - boundBox?.top) / magneto?.offsetHeight - 0.5;

    gsap.to(magneto, {
      duration: 1,
      x: newX ,
      y: newY,
      ease: "power4.out",
    });

    gsap.to(magnetoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: "power4.out",
    });
  }
  function mouseleave() {
    let magneto = document.getElementById("btn");
    let magnetoText = document.getElementById("btn-text");
    gsap.to(magneto, {
      ease: "elastic.out",
      duration: 1,
      x: 0,
      y: 0,
    });
    gsap.to(magnetoText, {
      ease: "elastic.out",
      duration: 1,
      x: 0,
      y: 0,
    });
  }
  return (
    <>
      <div className="relative" ref={heroRef}>
        <Preload id="preload" className=" absolute z-20" />
        <section className="bg-black/80 text-white select-none absolute h-screen w-full z-10">
          <video
            className=" h-full w-full object-cover -z-10"
            autoPlay
            muted
            loop
          >
            <source src={Heromp42} type="video/mp4" />
            <source src={Herowebm2} type="video/webm" />
          </video>
          <ul
            id="top-items"
            className="absolute flex justify-between items-center top-0 right-0 w-full px-8 py-8 z-10"
          >
            <li className="text-xl font-poppins font-black">DEX</li>
            <Link to="/">
              <img
                className="h-12 hover:animate-spin"
                src={Logo}
                alt="swap logo"
              />
            </Link>
            <li className="text-xl font-poppins font-black">ABOUT</li>
          </ul>
          <div className="mx-auto w-screen px-4 py-32 lg:flex h-screen lg:items-center top-0 right-0 bg-black/80 absolute">
            <div className="mx-auto h-full max-w-3xl text-center">
              <h1
                id="name"
                className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-green-200  bg-clip-text text-2xl text-transparent sm:text-[5rem] font-poppins font-black py-10"
              >
                Layers<span>N</span>
              </h1>
              <span
                id="text-1"
                className="sm:block pt-3 font-outline-2 text-transparent bg-clip-text text-3xl font-poppins font-black sm:text-5xl "
              >
                {" "}
                Powered By Celestia.{" "}
              </span>
              <p
                id="text-2"
                className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-poppins font-medium"
              >
                DEX Aggregator{" "}
                <span className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-green-200  bg-clip-text text-transparent ">
                  based on Modular DA providing minimal fees, transaction speed
                  & reduced blob sizes.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  id="btn"
                  className="flex justify-center shadow-md items-center rounded border border-purple-600 bg-transparent px-12 py-3 text-lg text-white hover:bg-purple-600 focus:outline-none active:text-opacity-75 sm:w-auto hover:transition-all hover:delay-100 font-poppins font-bold hover:duration-200"
                  onClick={(e) => {
                    btnLoader(e);
                  }}
                  onMouseMove={mouseMove}
                  onMouseLeave={mouseleave}
                >
                  <span id="btn-text" className="">
                    Launch Dapp
                  </span>
                  <div id="loader" className="space-x-1 hidden w-auto">
                    <div className="h-2 w-2 rounded-full leading-7 bg-white animate-scaleUp "></div>
                    <div className="h-2 w-2 rounded-full leading-7 bg-white animate-scaleUp animate-delay-75"></div>
                    <div className="h-2 w-2 rounded-full leading-7 bg-white animate-scaleUp animate-delay-150"></div>
                  </div>
                </button>

                {/* <button
                  className="block w-full rounded border border-green-200 px-12 py-3 text-lg font-bold font-poppins text-white hover:text-black hover:bg-green-200 focus:outline-none sm:w-auto hover:transition-all hover:delay-100 hover:duration-200"
                  onClick={(e) => {
                    btnLoader2(e);
                  }}
                >
                  <div className="flex flex-col">
                    <span id="btn-text2">Launch zk-client</span>
                    <span id="btn-text2">(coming soon)</span>
                  </div>
                  <div id="loader2" className="space-x-1 hidden w-full">
                    <div className="h-2 w-2 rounded-full bg-white animate-scaleUp "></div>
                    <div className="h-2 w-2 rounded-full bg-white animate-scaleUp animate-delay-75"></div>
                    <div className="h-2 w-2 rounded-full bg-white animate-scaleUp animate-delay-150"></div>
                  </div>
                </button> */}
              </div>
              <Dropdown
                id="drop"
                className="mx-auto left-0 invisible transition-all ease-in-out"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
