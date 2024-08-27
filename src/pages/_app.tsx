import type { AppProps } from 'next/app';
import "@/style/globals.css";
import Layout from '@/components/Layout';
import { Poppins } from '@next/font/google';


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'], // Choose weights as needed
  });


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
