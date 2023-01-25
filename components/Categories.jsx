import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

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
      <p className="text-ls text-amber-600 pb-12"> Hi! We are two happy birds <strong>Divya</strong> and <strong>Gagan</strong> trying to add our little bit of life work in here. We do research in different fields, mainly in computer science and microbiology domain. Hence this platform covers about those specific topics. Nevertheless we happen to do many more things like, travel, lifestyle, healthy diet, food and lots more. A few bit of interesting blogs about these can make this blog tastier. </p>
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Follow & Comment</h3>
      <p className="text-ls pb-4 mb-8">  @ Instagram  📸 : <a className="underline text-blue-600 hover:text-blue-900 visited:text-purple-600" href="https://www.instagram.com/divgan2702/"> Divgan2702 </a></p>

    </div>
  );
};

export default Categories;
