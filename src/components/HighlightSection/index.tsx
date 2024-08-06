import Image from 'next/image';

const HighlightSection = () => {
  return (
    <div className="relative w-[97vw] h-[100vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto my-8" style={{ backgroundImage: "url('/highlight.png')" }}>
      {/* Fade effect for top and bottom */}
      <div className="absolute inset-0">
        {/* Fade effect at the top */}
        <div className="absolute inset-0 bg-gradient-t-to-b from-black via-transparent to-transparent opacity-40"></div>
        {/* Fade effect at the bottom */}
        <div className="absolute inset-0  bg-gradient-b-to-t from-black via-transparent to-transparent opacity-40"></div>
      </div>
      
      {/* Centered text */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Intriguing Plots and Characters
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
