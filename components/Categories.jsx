import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const text = 'We, Divya and Gagan, are a happy couple living in Germany.👫🇩🇪 We love to travel 🌍 and capture our experiences through photography 📷 and blogging. On our blog, you will find a lots of tips to plan your next holiday❤️💕🌟, as well as some itineraries that we have personally taken. Our mission is to inspire others to live a healthy life 🌸and travel to the fullest, and also share some technological insights.';

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">About Us</h3>
      <img src="https://i.ibb.co/zRPLVgB/About-us.jpg" />
      <br />
      <p className="text-ls text-amber-600 pb-12"> {text.replace(/'/g, '&apos;')} </p>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Follow & Comment</h3>
      <p className="text-ls pb-4 mb-8">  @ Instagram  📸 : <a className="underline text-blue-600 👫🇩🇪. We love to travel 🌍 and capture our experiences throuhover:text-blue-900 visited:text-purple-600" href="https://www.instagram.com/divgan2702/"> Divgan2702 </a></p>

    </div>
  );
};

export default Categories;
