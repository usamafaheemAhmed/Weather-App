import { useEffect, useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import { Link, useLocation } from "react-router-dom/dist";


const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const location = useLocation();

  // Access information about the current route
  let pathname = location.pathname;
  let search = location.search;
  let hash = location.hash;


  useEffect(() => {

    console.log("pathname", pathname);
    console.log("search", search);
    console.log("hash", hash);

    if (pathname === "/Search") {
      setActive(nav.length - 1);
    }
    else if (pathname === "/AboutUs") {
      setActive(nav.length - 3);
    }

  }, [location])



  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${showMenu ? "bottom-10" : "bottom-[-100%]"
          }`}
      >
        {pathname === '/' ?
          <> {nav.map((item, i) => {
            if (item.Page) {
              return (
                <Link
                  to={item.link}
                  className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
                    ${i === active && "bg-dark_primary text-white"} `}
                  onClick={() => setActive(i)}
                >
                  {createElement(item.icon)}
                </Link>
              )
            }
            else {
              return (
                <a
                  href={item.link}
                  onClick={() => setActive(i)}
                  className={`text-xl p-2.5 rounded-full sm:cursor-pointer
                    ${i === active && "bg-dark_primary text-white"} `}
                >
                  {createElement(item.icon)}
                </a>
              )
            }
          })}</>
          :
          <> {nav.map((item, i) => {
            if (item.Page) {
              return (
                <Link
                  to={item.link}
                  className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
                  ${i === active && "bg-dark_primary text-white"} `}
                  onClick={() => setActive(i)}
                >
                  {createElement(item.icon)}
                </Link>
              )
            }
            else {
              return (
                <Link
                  to={"../"}
                  className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
                ${i === active && "bg-dark_primary text-white"} `}
                  onClick={() => setActive(i)}
                >
                  {createElement(item.icon)}
                </Link>
              )
            }
          })}</>
        }


      </nav>
    </div>
  );
};

export default Navbar;

// <a
// href={item.link}
// onClick={() => setActive(i)}
// className={`text-xl p-2.5 rounded-full sm:cursor-pointer
// ${i === active && "bg-dark_primary text-white"} `}
// >
// {createElement(item.icon)}
// </a>
