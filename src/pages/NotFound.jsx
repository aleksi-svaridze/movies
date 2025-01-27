import { HeadingLLight } from "../components/Typography";
import { Link, useLocation } from "react-router";

function NotFound() {
  const location = useLocation();
  console.log(location.pathname); // TODO: Need use .back() method
  return (
    <div className="px-4 md:px-6 lg:pl-0 lg:pr-9">
      <HeadingLLight text="Requested Page Not Exists" mb="mb-[25px]" />

      <div className="">
        <h2 className="text-2xl">
          You can{" "}
          <Link className="text-red" to={""}>
            {" "}
            Go Back{" "}
          </Link>{" "}
          or{" "}
          <Link className="text-red" to={"/"}>
            {" "}
            Home Page
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default NotFound;
