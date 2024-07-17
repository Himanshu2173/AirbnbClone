import { FaFacebookF, FaTwitter, FaInstagram, FaHeart, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ChatbotButton from './ChatButton';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="font-bold text-xl mb-4">Discover</h5>
            <ul className="space-y-2">
              <li><a href="/trust-safety" className="hover:text-pink-400 transition duration-300">Trust & Safety</a></li>
              <li><a href="/travel-credit" className="hover:text-pink-400 transition duration-300">Travel Credit</a></li>
              <li><a href="/gift-cards" className="hover:text-pink-400 transition duration-300">Gift Cards</a></li>
              <li><a href="/rentbnb-citizen" className="hover:text-pink-400 transition duration-300">Rentbnb Citizen</a></li>
              <li><a href="/business-travel" className="hover:text-pink-400 transition duration-300">Business Travel</a></li>
              <li><a href="/guides" className="hover:text-pink-400 transition duration-300">Guidebooks</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xl mb-4">Hosting</h5>
            <ul className="space-y-2">
              <li><a href="/host-homes" className="hover:text-pink-400 transition duration-300">Host Your Home</a></li>
              <li><a href="/host-experience" className="hover:text-pink-400 transition duration-300">Host an Experience</a></li>
              <li><a href="/responsible-hosting" className="hover:text-pink-400 transition duration-300">Responsible Hosting</a></li>
              <li><a href="/host-resources" className="hover:text-pink-400 transition duration-300">Resource Center</a></li>
              <li><a href="/community-center" className="hover:text-pink-400 transition duration-300">Community Center</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xl mb-4">Rentbnb</h5>
            <ul className="space-y-2">
              <li><a href="/about-us" className="hover:text-pink-400 transition duration-300">About Us</a></li>
              <li><a href="/careers" className="hover:text-pink-400 transition duration-300">Careers</a></li>
              <li><a href="/press" className="hover:text-pink-400 transition duration-300">Press</a></li>
              <li><a href="/policies" className="hover:text-pink-400 transition duration-300">Policies</a></li>
              <li><a href="/help" className="hover:text-pink-400 transition duration-300">Help</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-xl mb-4">Follow Us</h5>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300"><FaFacebookF size={24} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300"><FaInstagram size={24} /></a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300"><FaGithub size={24} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300"><FaLinkedinIn size={24} /></a>
            </div>
            <p className="text-sm">Stay connected with us on social media for the latest updates and offers!</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col items-center text-center mb-4">
            <div className="mb-4">
              <a href="/privacy" className="text-sm mx-2 hover:text-pink-400 transition duration-300">Privacy</a>
              <a href="/terms" className="text-sm mx-2 hover:text-pink-400 transition duration-300">Terms</a>
              <a href="/sitemap" className="text-sm mx-2 hover:text-pink-400 transition duration-300">Sitemap</a>
            </div>
            <span className="text-sm mb-2">© 2024 Rentbnb, Inc.</span>
            <a href='https://www.linkedin.com/in/himanshu-verma-642a30222/'
              className="flex items-center justify-center hover:text-red-400 transition duration-300">
              <span className="text-sm mr-1">Created with</span>
              <FaHeart className="text-red-500 mx-1" />
              <span className="text-sm">by Himanshu Verma</span>
            </a>
          </div>
        </div>
      </div>
      <ChatbotButton />
    </footer>
  );
};

export default Footer;