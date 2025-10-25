import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeClass = "block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white md:dark:text-green-500";
  const inactiveClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <header>
      <nav className="bg-green-700  border-green-700 dark:bg-white-900 border-b-2 border-gray-100 dark:border-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="text-2xl font-bold whitespace-nowrap dark:text-white">
              🌍 Climate Pledge
            </span>
          </NavLink>
          
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? activeClass : inactiveClass} 
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/pledge" 
                  className={({ isActive }) => isActive ? activeClass : inactiveClass}
                >
                  Take the Pledge
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/wall" 
                  className={({ isActive }) => isActive ? activeClass : inactiveClass}
                >
                  Pledge Wall
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
