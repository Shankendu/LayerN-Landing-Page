import Heromp4 from "../assets/particle_mp4.mp4";
import Herowebm from "../assets/particle_webm.webm";
import Logo from "../assets/swap.png";
import { useState, useEffect } from "react";
import Preload from "./Preload";
import { Link } from "react-router-dom";


export default function Hero() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  function btnLoader(e) {
    e.preventDefault();
    let spinner = document.getElementById("loader").classList;
    let text = document.getElementById("btn-text").classList;
    spinner.add("flex");
    spinner.remove("hidden");
    text.add("hidden");
    setTimeout(() => {
      spinner.remove("flex");
      spinner.add("hidden");
      text.remove("hidden");
    }, 4000);
    window.location.href = "https://aggregator-kohl.vercel.app/"
  }

  function btnLoader2(e) {
    e.preventDefault();
    let spinner = document.getElementById("loader2").classList;
    let text = document.getElementById("btn-text2").classList;
    spinner.add("flex");
    spinner.remove("hidden");
    text.add("hidden");
    setTimeout(() => {
      spinner.remove("flex");
      spinner.add("hidden");
      text.remove("hidden");
    }, 4000);
  }

  return (
    <>
      {loading ? (
        <Preload />
      ) : (
        <section className="bg-gray-950/80 text-white relative">
          <video
            className="absolute h-full w-full object-cover -z-10"
            autoPlay
            muted
            loop
          >
            <source src={Heromp4} type="video/mp4" />
            <source src={Herowebm} type="video/webm" />
          </video>
          <ul className="absolute flex justify-between items-center w-full px-8 py-8">
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
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-green-200  bg-clip-text text-[5rem] text-transparent sm:text-5xl font-poppins font-black">
                LayerN
              </h1>
              <span className="sm:block pt-3 font-outline-2 text-transparent bg-clip-text text-3xl font-poppins font-black sm:text-5xl ">
                {" "}
                Powered By Celestia.{" "}
              </span>
              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-poppins font-medium">
               DEX Aggregator <span className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-green-200  bg-clip-text text-transparent ">based on Modular DA providing minimal fees,
                transaction speed & reduced blob sizes.</span>
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  className="flex justify-center items-center w-full rounded border border-purple-600 bg-purple-600 px-12 py-3 text-lg text-white hover:bg-transparent hover:text-white focus:outline-none active:text-opacity-75 sm:w-auto hover:transition-all hover:delay-100 font-poppins font-bold hover:duration-200"
                  onClick={(e) => {
                    btnLoader(e);
                  }}
                >
                  <span id="btn-text" className="">
                    Launch 0xSwap
                  </span>
                  <div id="loader" className="space-x-1 hidden w-full">
                    <div className="h-2 w-2 rounded-full bg-white animate-scaleUp "></div>
                    <div className="h-2 w-2 rounded-full bg-white animate-scaleUp animate-delay-75"></div>
                    <div className="h-2 w-2 rounded-full bg-white animate-scaleUp animate-delay-150"></div>
                  </div>
                </button>

                <button
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
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
