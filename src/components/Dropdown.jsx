/* eslint-disable react/prop-types */
export default function Dropdown(props) {
  return (
    <>
      <div>
        <div
          id={`${props.id}`}
          className={`${props.className} relative end-0 z-10 mt-2 w-56 rounded-md bg-gray-600/20 backdrop-opacity-40 backdrop-blur-sm shadow-lg shadow-black/30`}
        >
          <div className="p-2">
            <a
              href="https://aggregator-kohl.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg px-4 hover:translate-y-1 py-2 text-sm hover:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-green-200 transition-transform ease-in-out duration-150 text-white font-poppins font-medium"
              role="menuitem"
            >
              Launch 0xSwap
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 hover:translate-y-1 py-2 text-sm hover:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-green-200 transition-transform ease-in-out duration-150 text-white font-poppins font-medium"
              role="menuitem"
            >
              Launch zk-client
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
