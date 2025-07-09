import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Manga Buddy</h1>
            <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto">
              We're passionate manga enthusiasts dedicated to bringing you the best collection 
              of Japanese comics and graphic novels from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Our Story</h2>
              <p className="text-purple-600 mb-4">
                Founded in 2020 by a group of manga lovers, Manga Buddy started as a small 
                online bookstore with a simple mission: to make authentic Japanese manga 
                accessible to readers worldwide.
              </p>
              <p className="text-purple-600 mb-4">
                What began as a weekend project has grown into one of the most trusted 
                manga retailers, serving over 50,000 customers globally. We work directly 
                with Japanese publishers to ensure you get the highest quality manga at 
                competitive prices.
              </p>
              <p className="text-purple-600">
                Today, we're proud to offer thousands of titles ranging from classic 
                series like Dragon Ball and Naruto to the latest releases hitting 
                Japanese shelves.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/7188009/pexels-photo-7188009.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Manga Store" 
                className="rounded-lg shadow-xl border-4 border-gradient-to-r from-pink-300 to-purple-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Our Values</h2>
            <p className="text-purple-600 max-w-2xl mx-auto">
              These core values guide everything we do, from curating our collection 
              to serving our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Passion</h3>
              <p className="text-purple-600">
                We're genuine manga fans who understand what readers want and need.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Quality</h3>
              <p className="text-purple-600">
                Every manga we sell meets our high standards for authenticity and condition.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Community</h3>
              <p className="text-purple-600">
                We're building a global community of manga readers and collectors.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Excellence</h3>
              <p className="text-purple-600">
                We strive for excellence in everything from our product selection to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Meet Our Team</h2>
            <p className="text-purple-600 max-w-2xl mx-auto">
              The passionate individuals behind Manga Buddy who work tirelessly to 
              bring you the best manga experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gradient-to-r from-pink-400 to-purple-500 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-purple-800 mb-1">Akira Tanaka</h3>
              <p className="text-pink-600 mb-2 font-semibold">Founder & CEO</p>
              <p className="text-purple-600 text-sm">
                Manga collector for 15+ years with extensive knowledge of Japanese publishing.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gradient-to-r from-pink-400 to-purple-500 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-purple-800 mb-1">Sarah Chen</h3>
              <p className="text-pink-600 mb-2 font-semibold">Head of Curation</p>
              <p className="text-purple-600 text-sm">
                Expert in manga trends and customer preferences, ensuring our collection stays fresh.
              </p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gradient-to-r from-pink-400 to-purple-500 shadow-lg"
              />
              <h3 className="text-xl font-semibold text-purple-800 mb-1">Mike Rodriguez</h3>
              <p className="text-pink-600 mb-2 font-semibold">Customer Success Manager</p>
              <p className="text-purple-600 text-sm">
                Dedicated to providing exceptional customer service and support to our community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;