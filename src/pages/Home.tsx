import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Heart } from 'lucide-react';
import { mangaData } from '../data/mangaData';
import MangaCard from '../components/MangaCard';

const Home: React.FC = () => {
  const featuredManga = mangaData.filter(manga => manga.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-25 animate-pulse delay-500"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Your Ultimate
                <span className="text-yellow-300 drop-shadow-lg"> Manga </span>
                Destination
              </h1>
              <p className="text-xl mb-8 text-white drop-shadow-md">
                Discover thousands of manga titles from classic series to the latest releases. 
                Join millions of readers in their epic adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/products" 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-800 px-8 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/7188010/pexels-photo-7188010.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Manga Collection" 
                className="rounded-lg shadow-2xl border-4 border-white border-opacity-30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            Why Choose Manga Buddy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Fast Delivery</h3>
              <p className="text-purple-600">Get your manga delivered within 2-3 business days with our express shipping.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Quality Guaranteed</h3>
              <p className="text-purple-600">All our manga are authentic and in perfect condition, guaranteed.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Curated Collection</h3>
              <p className="text-purple-600">Handpicked selection of the best manga from popular and hidden gems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Manga Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800">Featured Manga</h2>
            <Link 
              to="/products" 
              className="text-pink-600 hover:text-pink-800 font-semibold flex items-center space-x-2 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredManga.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-10"></div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300 rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-5 animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">10K+</div>
              <div className="text-purple-200">Manga Titles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">50K+</div>
              <div className="text-purple-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-300 mb-2">99%</div>
              <div className="text-purple-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-300 mb-2">24/7</div>
              <div className="text-purple-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;