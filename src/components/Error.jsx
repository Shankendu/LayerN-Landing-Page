import { useRouteError } from "react-router-dom";

export default function Error() {
    const err = useRouteError()
  return (
    <>
      <div className="grid h-screen place-content-center bg-white px-4">
        <h1 className="uppercase tracking-widest text-gray-500">
          {err.status} | {err.statusText}
        </h1>
      </div>
    </>
  );
}
