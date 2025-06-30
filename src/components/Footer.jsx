const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Feedback', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Testimonials', href: '#' }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' }
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Company name Site - Trusted by over thousands of Boys & Girls for successful marriage. Join us today!
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>3812 Lena Lane City Jackson Mississxyzippi</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3"></i>
                <span>+91 9881216105</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>yashsharma14jan@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-6">
          <p className="text-center text-gray-400">
            Made By Yash Sharma | © {new Date().getFullYear()} Wedding Matrimony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 