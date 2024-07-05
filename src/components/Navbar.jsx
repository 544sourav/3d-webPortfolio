import { Link, NavLink } from "react-router-dom";


const NavbarLinks = [
    
    {
      title: "Projects",
       path: '/Projects',
      icon:"VscLayout"
    },
    {
      title: "About",
      path: "/about",
      icon:"VscGlobe"
    },
    {
      title: "Let's talk",
      path: "/contact",
      icon:"VscMail"
    },
  ];

export const Navbar = () => {
  return (
    <header className='sm:px-16 px-8 py-4 max-w-9xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
         <nav className="flex justify-start sm:justify-evenly items-center">
            <div className="bg-gray-100 px-3 py-1 rounded-2xl">
                 <Link to={'/'}>
                    <p className='blue-gradient_text font-semibold drop-shadow text-3xl'>Srv</p>
                 </Link>
            </div>
      
        <div className="flex justify-evenly items-center w-full sm:w-6/12 lg:w-3/12">
        {
            NavbarLinks.map((link,index)=>(
              <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) =>
                  isActive ? "font-medium text-base sm:text-lg text-blue-600" : "font-medium text-base sm:text-lg text-black"
              }
          >
              {link.title}
          </NavLink>
            ))
        }
        </div>

       
    </nav>
    </header>
   
  )
}
