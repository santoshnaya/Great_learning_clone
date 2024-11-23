const Certificate = () => {
  return (
    <>
      <div className="border h-[30px] w-[200px] text-center items-center bg-blue-500 ml-[607px] mt-3 rounded-md text-white my-6">
        <p className="justify-center items-center text-center">See More</p>
      </div>
    <div className="bg-blue-200 pb-9">
      <div className="flex mt-[30px]">
        <div>
          <div className="mt-[50px]">
            <div className="ml-[80px]">
              <p className="text-[20px] font-semibold">
                Why you should choose our courses
              </p>
              <div className="mt-7">
                <div className="flex">
                  <div className="w-[250px]">
                    <div>
                      <p className="font-medium">Share your Certificate</p>
                      <p className="flex font-thin text-[10px]">
                        Stand out to your professional network by sharing your
                        cirtificate
                      </p>
                    </div>
                  </div>
                  <div className="w-[250px]">
                    <div>
                      <p className="font-medium">Learn from industy expert</p>
                      <p className="flex font-thin text-[10px]">
                        Get in-depth, hands-on learning from industry expert
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex">
                  <div className="w-[250px]">
                    <div>
                      <p className="font-medium">Free lifetime access</p>
                      <p className="flex font-thin text-[10px]">
                        Gain access to free guides on career paths, salary
                        trends, and more
                      </p>
                    </div>
                  </div>
                  <div className="w-[250px]">
                    <div>
                      <p className="font-medium">Flexible Learning</p>
                      <p className="flex font-thin text-[10px]">
                        Learn at your own pace from any location, using any
                        device
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/courses/premium-sample-certificate.jpg"
            alt=""
            className="w-[350px] h-[210px] ml-[90px] mt-[40px]"
          />
        </div>
      </div>
      </div>
      </>
  );
};
export default Certificate;
