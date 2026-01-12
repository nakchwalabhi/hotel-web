import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex gap-20 justify-between items-center px-36">
      <div
        className="py-5 px-8 rounded-b-4xl bg-[rgb(222,184,113)] font-['Times_New_Roman',Times,serif] flex flex-col  
"
      >
        <h1 className="font-bold text-2xl text-[rgb(19,38,74)] tracking-widest">
          LUXURY
        </h1>
        <p className="font-bold flex justify-center text-[10px] tracking-widest">
          H O T E L S
        </p>
      </div>
      <div className="flex justify-between gap-10 py-5 text-white font-medium text-xl ">
        <Link to="/" className="relative group ">
          Home
          <span className="absolute left-0 -bottom-1 w-full h-0.5  bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link to="/facilities" className="relative group">
          Facilities
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link to="/rooms" className="relative group">
          Rooms
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link to="/contact" className="relative group">
          Contact-us
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
