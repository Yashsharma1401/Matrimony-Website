import React from 'react';
import ba1 from '../assets/images/blog/1.jpg';
import ba2 from '../assets/images/blog/2.jpg';
import ba3 from '../assets/images/blog/3.jpg';


const BlogArticles = () => {
  const articles = [
    {
      image: ba1,
      category: 'Wedding',
      author: 'Johnny',
      title: 'Wedding Arrangements',
      excerpt:
        'It is a long established fact that a reader will be distracted by the readable content.',
      date: '12 Dec 2023',
    },
    {
      image: ba2,
      category: 'Wedding',
      author: 'Johnny',
      title: 'Wedding Arrangements',
      excerpt:
        'It is a long established fact that a reader will be distracted by the readable content.',
      date: '12 Dec 2023',
    },
    {
      image: ba3,
      category: 'Wedding',
      author: 'Johnny',
      title: 'Invitation Cards',
      excerpt:
        'It is a long established fact that a reader will be distracted by the readable content.',
      date: '12 Dec 2023',
    },
  ];

  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Blog & Articles</p>
          <h2 className="text-3xl md:text-4xl font-bold">Latest News</h2>
        </div>

        {/* Three-in-a-row Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-light rounded-lg overflow-hidden shadow-md">
              {/* Image Section */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover"
              />
              {/* Text Section */}
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span className="font-semibold">{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{article.title}</h3>
                <p className="text-base text-gray-600 mb-4">{article.excerpt}</p>
                <a
                  href="#"
                  className="inline-block bg-primary text-white px-5 py-2 rounded"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
