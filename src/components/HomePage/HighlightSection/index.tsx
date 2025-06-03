import Image from 'next/image';

const HighlightSection = () => {
  return (
    <div className="relative w-[97vw] mt-24 h-[100vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto mb-8" style={{ backgroundImage: "url('/highlight.png')" }}>
      {/* Fade effect for top and bottom */}


      {/* Centered text */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8">
        <div className="text-center text-white">
         <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-bold pb-10">
          Intriguing Plots and Characters
        </h2>
       </div>
      </div>
    </div>
  );
};

export default HighlightSection;
