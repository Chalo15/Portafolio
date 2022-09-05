import Avatar from "@mui/material/Avatar";
import photo from './img/photo.jpg'
function Navbar() {
  return (
    <div className=" py-7 bg-[#31706F] text-center shadow-lg opacity-85 ">
      <ul>
         
          <Avatar src={photo} sx={{width:70, height:70}}/>

        <a
          className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]"
          href="index.tsx"
        >
          Home
        </a>
        <a
          className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]"
          href="Projects.tsx"
        >
          Projects
        </a>
        <a
          className="px-5 py-2 mx-3 rounded-md bg-[#4CADAC]  hover:bg-[#53BDBB]"
          href="Contact.tsx"
        >
          Contact
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
