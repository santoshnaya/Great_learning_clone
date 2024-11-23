const Explore = () => {
  return (
    <>
      <div className="border w-full h-[250px] mb-6 bg-blue-600">
        <p className="font-bold text-[18px] text-white text-center pt-9">
          Popular topics to explore
              </p>
                <div className="pt-6">
              {/* first line */}
              <div className="flex justify-center">
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free ChatGPT Courses</div>
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free AI Courses</div>
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free Data Science Courses</div>
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free Microsoft Excel Courses</div>
              </div>

              {/* second line */}
              <div className="flex justify-center">
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free Python Courses</div>
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free Machine Learning Courses</div>
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free Cybersecurity Courses</div>
                  <div className="border bg-white m-1 text-[10px] w-[180px] text-center pt-3  rounded-sm pb-3">Free SQL Courses</div>
                  </div>
                  </div>
      </div>
    </>
  );
};
export default Explore;
