export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[60px]">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-white cursor-pointer">
              MNTN
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a className=" hover:text-yellow-400 text-white" href="#">
              Equipment
            </a>
            <a className=" hover:text-yellow-400 text-white" href="#">
              About us
            </a>
            <a className=" hover:text-yellow-400 text-white" href="#">
              Blog
            </a>
          </div>

          <div className="flex items-center">
            <button className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg hover:text-yellow-400 transition">
              <span>Account</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
