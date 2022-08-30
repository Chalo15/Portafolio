import Avatar from "@mui/material/Avatar";

function Navbar() {
  return (
    <div className=" py-7 bg-[#31706F] text-center shadow-lg opacity-85 ">
      <ul>
        {/* <div className=''>
        <Avatar src="/public/photo."/>
        </div> */}
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
