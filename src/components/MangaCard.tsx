import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Manga } from '../types';
import { useCart } from '../context/CartContext';

interface MangaCardProps {
  manga: Manga;
}

const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(manga);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={manga.image} 
          alt={manga.title}
          className="w-full h-64 object-cover"
        />
        {!manga.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        {manga.originalPrice && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Sale
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-slate-800 mb-1">{manga.title}</h3>
        <p className="text-slate-600 text-sm mb-2">by {manga.author}</p>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-slate-600">{manga.rating}</span>
          </div>
          <span className="mx-2 text-slate-400">•</span>
          <span className="text-sm text-slate-600">{manga.genre}</span>
        </div>

        <p className="text-slate-700 text-sm mb-3 line-clamp-2">{manga.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-purple-800">${manga.price}</span>
            {manga.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${manga.originalPrice}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!manga.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              manga.inStock
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-400 text-white cursor-not-allowed opacity-50'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>{manga.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MangaCard;