import Avatar from "@mui/material/Avatar";
import photo from './img/photo.jpg'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className=" py-7 bg-[#31706F] text-center shadow-lg opacity-85 ">
      <ul>
         
          <Avatar src={photo} sx={{width:70, height:70}}/>

        {/* <a
          className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]"
          href="index.tsx"
        >
          Home
        </a> */}
        <Link to="/" className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]">Home</Link>
        {/* <a
          className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]"
          href="Projects.tsx"
        >
          Projects
        </a> */}

        <Link to="Projects" className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]">Projects</Link>
        
      </ul>
    </div>
  );
}

export default Navbar;
