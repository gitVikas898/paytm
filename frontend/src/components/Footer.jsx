const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="text-xs mt-2">
          Built with <span className="text-red-500">❤</span> By Vikas
        </p>
      </footer>
    );
  };
  
  export default Footer;