const Navbar = () => {
  return (
    <nav className="absolute left-0 py-6 w-full transition-all duration-300 z-30 lg:px-10  top-5">
        <div className="w-full px-5 lg:px-10 flex items-center justify-between absolute top-5 lg:hidden">
            a
        </div>

        <div className="container mx-auto items-center justify-between hidden lg:flex">
            <a href="/" className="">
                <img src="https://www.fundamental.bg/logo-white.svg" alt="" />
            </a>
            
            <ul className="text-lg flex items-center space-x-10 text-white">
                <li>
                    <a className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-[#3EC091]" href="#">
                        About
                    </a>
                </li>
                <li>
                    <a className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-[#3EC091]" href="#">
                        Project
                    </a>
                </li>
                <li>
                    <a className="text-lg 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:text-[#3EC091]" href="#">
                        Contact
                    </a>
                </li>
                <li>
                    <button className="py-2 px-4 rounded bg-[#3EC091] text-lg font-semibold 2xl:text-xl lg:hidden xl:flex transition-all duration-300 hover:bg-white hover:text-[#3EC091]"  href="#">
                        Start our journey
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar