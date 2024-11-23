const Career = () => {
  return (
    <>
      <p className="text-center font-semibold text-[20px] mb-6 mt-9">
        Select a career path and power ahead
      </p>

      <div className="m-2">
        {/* upper part */}
        <div className="flex">
          <div className="ml-4 border w-1/2 h-[120px] mr-2 rounded-md mr-4 mb-4">
            <div className="flex justify-between">
              {/* left */}
              <div className="p-3">
                <p className="font-thin text-[13px]">ARTIFICIAL INTELIGENCE</p>
                <p className="font-semibold">AI Engineer</p>
                <p className="text-[13px] mt-[34px]">$ 80k+ Avarage Salary</p>
              </div>
              {/* right */}
              <div>
                <img
                  src="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Pic.png"
                  alt=""
                  className="w-[130px]"
                />
              </div>
            </div>
          </div>
                  <div className=" ml-4 border w-1/2 h-[120px] ml-2 rounded-md mr-4 mb-4">
                  <div className="flex justify-between">
              {/* left */}
              <div className="p-3">
                <p className="font-thin text-[13px]">DATA SCIENCE </p>
                <p className="font-semibold">Data Science</p>
                <p className="text-[13px] mt-[34px]">$ 50k+ Avarage Salary</p>
              </div>
              {/* right */}
              <div>
                <img
                  src="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Picture.png"
                  alt=""
                  className="w-[130px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* lower part */}
        <div className="flex">
                  <div className="ml-4 border w-1/2 h-[120px] mr-2 rounded-md mr-4 mb-4">
                  <div className="flex justify-between">
              {/* left */}
              <div className="p-3">
                <p className="font-thin text-[13px]">DIGITAL MARKETING</p>
                <p className="font-semibold">Digital Marketing</p>
                <p className="text-[13px] mt-[34px]">$ 70k+ Avarage Salary</p>
              </div>
              {/* right */}
              <div>
                <img
                  src="https://png.pngtree.com/png-clipart/20230405/original/pngtree-business-letters-illustration-png-image_9028250.png"
                  alt=""
                  className="w-[110px]"
                />
              </div>
            </div>
          </div>
                  <div className="ml-4 border w-1/2 h-[120px] ml-2 rounded-md mr-4 mb-4">
                  <div className="flex justify-between">
              {/* left */}
              <div className="p-3">
                <p className="font-thin text-[13px]">MACHINE LEARING</p>
                <p className="font-semibold">Machine Learing Engineer</p>
                <p className="text-[13px] mt-[34px]">$ 100k+ Avarage Salary</p>
              </div>
              {/* right */}
              <div>
                <img
                  src="https://png.pngtree.com/png-clipart/20211128/original/pngtree-man-is-working-at-his-laptop-in-the-office-flat-vector-png-image_6952078.png"
                  alt=""
                  className="w-[130px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Career;
