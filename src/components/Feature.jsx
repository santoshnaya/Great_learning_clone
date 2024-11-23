const Feature = () => {
  return (
    <>
      <div className="text-center mt-8 font-semibold text-[25px] text-green-500">As featured on</div>
      <div className="flex justify-evenly mt-[30px]">
        <div>
          <p className="font-bold text-purple-500 border w-[150px] text-center rounded-md border-blue-400">
            CAREERS<span className="font-thin">360</span>
          </p>
        </div>
        <div>
          <p className="font-bold text-black border w-[150px] text-center rounded-md border-blue-400">class central</p>
        </div>
        <div>
          <p className="font-bold text-green-800 border w-[150px] text-center rounded-md border-blue-400">shiksha</p>
        </div>
        <div>
          <p className="font-bold text-blue-800 border w-[150px] text-center rounded-md border-blue-400">codecademy</p>
        </div>
      </div>
    </>
  );
};
export default Feature;
