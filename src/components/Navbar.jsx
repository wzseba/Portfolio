const Navbar = () => {
  return (
    <div className="fixed bottom-0 z-20 flex flex-col items-center w-full  mt-auto md:w-16 md:justify-center h-max md:top-1/4 md:right-10 md:max-w-md md:h-screen">
      <div className="flex items-center justify-between w-full px-4 py-3 md:py-8 md:flex-col md:justify-center gap-y-10 md:px-4 md:h-max bg-white/10 backdrop-blur-sm md:rounded-full">
        <div>
          <a className="group transition-all duration-300">
            <div className="absolute right-0 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center">
              <div className="relative flex items-centerp-2 leading-none text-black capitalize bg-white rounded-sm">
                home
              </div>
              <div className="absolute border-l-8 border-r-0 border-solid border-l-white border-y-transparent border-y-4 -right-2"/>
            </div>
            icon
          </a>
          <a className="group transition-all duration-300">
            <div className="absolute right-0 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center">
              <div className="relative flex items-centerp-2 leading-none text-black capitalize bg-white rounded-sm">
                home
              </div>
              <div className="absolute border-l-8 border-r-0 border-solid border-l-white border-y-transparent border-y-4 -right-2"/>
            </div>
            icon
          </a>
          <a className="group transition-all duration-300">
            <div className="absolute right-0 hidden mr-20 rounded-sm md:group-hover:flex md:group-hover:items-center">
              <div className="relative flex items-centerp-2 leading-none text-black capitalize bg-white rounded-sm">
                home
              </div>
              <div className="absolute border-l-8 border-r-0 border-solid border-l-white border-y-transparent border-y-4 -right-2"/>
            </div>
            icon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
