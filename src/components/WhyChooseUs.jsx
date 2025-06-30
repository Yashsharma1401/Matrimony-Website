const WhyChooseUs = () => {
  const features = [
    {
      icon: '/images/icon/prize.png',
      title: 'Genuine profiles',
      description: 'Contact genuine profiles with 100% verified mobile'
    },
    {
      icon: '/images/icon/trust.png',
      title: 'Most trusted',
      description: 'The most trusted wedding matrimony brand lorem'
    },
    {
      icon: '/images/icon/rings.png',
      title: '2000+ weddings',
      description: 'Lakhs of peoples have found their life partner'
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Why Choose Us</p>
          <h2 className="section-title">Our Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 text-center"
            >
              <img 
                src={feature.icon} 
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 