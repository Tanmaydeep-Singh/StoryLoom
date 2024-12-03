import { useRouter } from 'next/router';

const CountryPage = () => {
  const router = useRouter();
  const { country } = router.query;

  const handleStateClick = (state: string) => {
    router.push(`/V2/${country}/${state}`);
  };

  return (
    <div className="w-[80vw] mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Map of {country}</h1>
      <div 
        onClick={() => handleStateClick('Punjab')}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Click on Punjab
      </div>
    </div>
  );
};

export default CountryPage;
