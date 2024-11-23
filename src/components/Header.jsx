const Header = () => {
  return (
    <div className="sticky top-0 bg-white">
      <nav className="border border-blue-400 shadow-xl shadow-blue-100">
        <div className="flex justify-between my-1 mt-4">
          <div className="flex">
            <img
              src="https://mma.prnewswire.com/media/1458111/Great_Learning_Logo.jpg?p=twitter"
              alt="logo"
              className="h-[45px] w-[90px] ml-8 pb-1 mb-1"
            />
            <div className="border h-[40px] ml-5"></div>
            <div className="w-[90px] h-[27px] border ml-3 font-[] text-center pt-1 text-[12px] rounded-[5px] text-gray-500 mt-[4px] border-blue-500 shadow-md shadow-blue-100">
              BROWSE
            </div>
          </div>

          <div className="">
            {/* <span className="m-2 text-blue-600 hover:text-blue-900 cursor-pointer">Home</span>
            <span className="m-2 text-blue-600 hover:text-blue-900 cursor-pointer">About</span>
            <span className="m-2 text-blue-600 hover:text-blue-900 cursor-pointer">Contact</span>
            <span className="m-2 text-blue-600 hover:text-blue-900 cursor-pointer">Service</span> */}
            {/* <span className="m-2 text-blue-600 hover:text-blue-900 cursor-pointer">Blog</span> */}
          </div>
          <div className="mt-[5px]">
            <input
              type="text"
              placeholder="    Search"
              className="border rounded-md border-1 w-[300px] border-blue-500 shadow-blue-100 shadow-md mr-9"
            />
          </div>
          <div className="flex gap-7 mt-[1px]">
            <div className="">
              <p className="text-[12px] pt-[6px] flex gap-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/44/44386.png"
                  alt=""
                  className="h-[12px] w-[12px] mt-[3px]"
                />{" "}
                Study Abroad
              </p>
            </div>
            <div className="">
              <p className="text-[12px] pt-[6px] flex gap-1 mr-4">
                <img
                  src="https://cdn-icons-png.freepik.com/512/7341/7341979.png"
                  alt=""
                  className="h-[12px] w-[12px] mt-[4px] mr-[2px]"
                />{" "}
                Degree and Certificate Program
              </p>
            </div>
            {/* <p className="text-[12px] pt-[6px] ml-5">
              Degree and Certificate Program
            </p> */}
          </div>
          <div>
            <button className="w-[110px] rounded-[5px] bg-blue-500 text-white py-1 mr-5 text-[13px]">
              Login / Signup
            </button>
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
};
export default Header;
