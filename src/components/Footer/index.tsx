import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-teal text-lightGreen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-mediumGreen">About Us</h2>
            <p className="text-lightGreen">
              StoryVerse is your go-to platform for discovering and sharing captivating stories. Explore a world of fiction and non-fiction, translated into multiple languages, and immerse yourself in the magic of storytelling.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-mediumGreen">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-lightGreen">Home</Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-lightGreen">Stories</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-lightGreen">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-lightGreen">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-mediumGreen">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-darkGreen pt-4 text-center">
          <p className="text-lightGreen text-sm">
            &copy; {new Date().getFullYear()} StoryVerse. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
