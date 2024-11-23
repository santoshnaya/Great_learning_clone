const Footer = () => {
  return (
      <div className="w-full h-[220px] border bg-black text-white">
          <div className="flex justify-evenly mt-4">
              {/* 1st col */}
              <div className="flex flex-col">
                  <p className="font-semibold mt-3">Great Learning Academy</p>
                  <a href="" className="font-thin text-[13px] mt-2">Career Paths</a>
                  <a href="" className="font-thin text-[13px] mt-2">All Free Courses</a>
                  <a href="" className="font-thin text-[13px] mt-2">Live Sessions / Webinars</a>
                  <a href="" className="font-thin text-[13px] mt-2">Free Courses with Certificate</a>
              </div>

              {/* 2nd col */}
              <div className="flex flex-col">
              <p className="font-semibold mt-3">About Great Learning</p>
                  <a href="" className="font-thin text-[13px] mt-2">About Us</a>
                  <a href="" className="font-thin text-[13px] mt-2">Contact Us</a>
                  <a href="" className="font-thin text-[13px] mt-2">Grievance Redressal</a>
                  <a href="" className="font-thin text-[13px] mt-2">Enterprise Solution</a>
                  <a href="" className="font-thin text-[13px] mt-2">Careers at Great Learning</a>
              </div>

              {/* 3rd col */}
              <div className="flex flex-col">
              <p className="font-semibold mt-3">Subjects</p>
                  <a href="" className="font-thin text-[13px] mt-2">AI Courses</a>
                  <a href="" className="font-thin text-[13px] mt-2">Coding Courses</a>
                  <a href="" className="font-thin text-[13px] mt-2">Python Courses</a>
                  <a href="" className="font-thin text-[13px] mt-2">CharGPT Courses</a>
                  <a href="" className="font-thin text-[13px] mt-2">Data Science Courses</a>
              </div>
          </div>
    </div>
  )
}
export default Footer