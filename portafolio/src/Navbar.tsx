import Avatar from "@mui/material/Avatar";
import photo from "./img/photo.jpg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className=" py-8 bg-[#31706F]  shadow-lg opacity-85 ">
        <div className="absolute right-2 top-2 ">
          <Avatar className="" src={photo} sx={{ width: 70, height: 70 }} />
        </div>

        <div className="text-center mb-2">
          <ul>
            <Link
              to="/"
              className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]"
            >
              Home
            </Link>

            <Link
              to="Projects"
              className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]"
            >
              Projects
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
