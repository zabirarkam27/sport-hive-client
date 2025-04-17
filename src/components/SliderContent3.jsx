const SliderContent3 = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 max-w-screen-lg text-center">
      <h2 className="text-2xl md:text-3xl font-bold"> Shop by Sport</h2>
      <h3 className="text-base md:text-lg mb-4">
        Find the Perfect Gear for Every Game
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 items-center justify-stretch ">
        <div className="card bg-gray-100 shadow-md text-left p-4 min-h-48 sm:min-h-52 flex flex-col justify-between">
          <h1 className="text-base md:text-xl text-gray-700 text-justify mb-4">
            ❝SportHive has the best football gear! The quality is top-notch, and
            I always feel game-ready.❞
          </h1>
          <h2 className="card-title">John Doe</h2>
          <p className="text-sm text-gray-400">Professional Footballer</p>
        </div>
        <div className="card bg-gray-100 shadow-md text-left p-4 min-h-48 sm:min-h-52 flex flex-col justify-between">
          <h1 className="text-xl text-gray-700 text-justify mb-4">
            ❝Great selection of workout equipment! SportHive keeps me motivated
            and well-equipped for my fitness goals.❞
          </h1>
          <h2 className="card-title">Emily Smith</h2>
          <p className="text-sm text-gray-400">Fitness Enthusiast</p>
        </div>
        <div className="card bg-gray-100 shadow-md text-left p-4 min-h-48 sm:min-h-52 col-span-1 sm:col-span-2 flex flex-col justify-between">
          <h1 className="text-xl text-gray-700 text-justify mb-4">
            ❝The basketball gear from SportHive is excellent! Durable,
            comfortable, and perfect for my team.❞
          </h1>
          <h2 className="card-title">Michael Johnson</h2>
          <p className="text-sm text-gray-400">Basketball Coach</p>
        </div>
      </div>
    </div>
  );
};

export default SliderContent3;
