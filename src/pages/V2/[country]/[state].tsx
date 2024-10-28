import SkeletonCard from '@/components/HomePage/SkeletonCard';
import Banner from '@/components/State/Banner';
import StoryCards from '@/components/StoryCards';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const StatePage: React.FC = () => {
  const router = useRouter();
  const { country, state } = router.query;


  const [selectedState, setSelectedState] = useState<string>('loading');

  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    if (state && typeof state === 'string') {
      setSelectedState(state);
    }
    setLoading(false);
 
  }, [state]);

 
  return (
    <div className="w-[80vw] mx-auto my-8">     <Banner imageUrl={''} state={selectedState} />
 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)

          // stories.map((tales) => (
          //   <StoryCards 
          //     key={tales.id} 
          //     image={tales.image} 
          //     title={tales.title} 
          //     story={tales.story} 
          //     id={tales.id}
          //   />
          // ))
        )}
      </div>
    </div>
  );
};

export default StatePage;
