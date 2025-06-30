const Contact = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Contact Us</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Have questions or need assistance? We're here to help you find your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-primary"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-primary"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-primary h-32"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">3812 Lena Lane City Jackson Mississippi</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-phone text-primary text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+92 (8800) 68 - 8960</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 