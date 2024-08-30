import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const folktales = ['Russian', 'German', 'French', 'Spanish', 'Japanese', 'Indian'];
  const genres = [
    "Adventure", "Romance", "Mystery", "Fantasy",
    "Science Fiction", "Thriller", "Horror", "Comedy"
  ];

  return (
    <footer className="bg-background-card text-primary-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary-100">About Us</h2>
            <p className="text-primary-200">
              StoryLoom is your go-to platform for discovering and sharing captivating stories. Explore a world of fiction and non-fiction, translated into multiple languages, and immerse yourself in the magic of storytelling.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary-100">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-accent-300 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/explore" className="text-sm hover:text-accent-300 transition-colors duration-300">Stories</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-accent-300 transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Folktales Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary-100">Folktales</h2>
            <ul className="space-y-2">
              {folktales.map((folktale, index) => (
                <li key={index}>
                  <Link href={`/folktales/${folktale}`} className="text-sm hover:text-accent-300 transition-colors duration-300">{folktale}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Genres Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary-100">Genres</h2>
            <ul className="space-y-2">
              {genres.map((genre, index) => (
                <li key={index}>
                  <Link href={`/genres/${genre}`} className="text-sm hover:text-accent-300 transition-colors duration-300">{genre}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary-100">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <Image src="/Logos/x.svg" alt="Twitter" width={30} height={30} />
              </Link>
              <Link href="https://www.instagram.com/_storyloom_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <Image src="/Logos/instagram.svg" alt="Instagram" width={30} height={30} className='text-white'/>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-200 pt-4 text-center">
          <p className="text-primary-200 text-sm">
            &copy; {new Date().getFullYear()} StoryLoom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
