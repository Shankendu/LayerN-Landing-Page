/* eslint-disable react/prop-types */
export default function Preload(props) {
  return (
<div id={`${props.id}`} className={`${props.className} bg-black w-screen h-screen flex justify-center items-center transition-opacity duration-300 ease-in-out`}>
      <svg viewBox="0 0 400 160">
        <text x='50%' y='50%' dy=".35rem"  textAnchor="middle" className=" animate-stroke text-5xl font-poppins font-black stroke-1 stroke-white text-blue-200">
            LayerN
        </text>
      </svg>
    </div>
  );
}
