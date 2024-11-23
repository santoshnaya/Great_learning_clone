const Hero = () => {
  return (
    <div className="flex h-[500px] mt-[10px] mb-[30px]">
      <div>
        <div className="ml-[60px] w-[450px] mt-[80px]">
          <span className="text-sm text-blue-500">GREAT LEARNING ACADEMY</span>
          <p className="wrap text-[40px]">
            Free online courses with certificate in AI ChatGPT and more
          </p>
          <p className="text-[11px] mt-2">✅ GenAI, Prompt engineering & 1000+ free courses to crack your dream job</p>
          <p className="text-[11px] mt-2">✅ Personalised course recommendations that align with your goals</p>
          <p className="text-[11px] mt-2">✅ Trusted by 1 Crore+ learners globally</p>
        </div>
        <div className="flex my-3">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="googleLogo"
            className="h-[30px] w-[30px] ml-[60px] border border-blue-500 rounded-md"
          />
          <div
            className="border
          w-[250px] text-center bg-blue-500 text-white rounded-md ml-2"
          >
            Sing up with Google
          </div>
          <div className="border w-[250px] text-center ml-3 border-blue-500 rounded-md text-blue-500">
            Sign up with Email
          </div>
        </div>
      </div>

      <div>
        <img
          src="https://www.pngarts.com/files/18/Illustration-PNG-HQ-Picture.png"
          alt=""
          className="h-[400px] w-[400px] ml-7"
        />
      </div>
    </div>
  );
};
export default Hero;
