import React from 'react';
import CategoryCard from './CategoryCard';
import heroImg8 from '../assets/prdtImg8.jpg';
import heroImg3 from '../assets/prdtImg3.jpg';
import heroImg2 from '../assets/prdtImg2.jpg';
import heroImg4 from '../assets/prdtImg4.jpg';

const data = [
    {
        id: 0,
        name: "Fresh Groceries",
        count: "9 Products",
        img: heroImg3
    },
    {
        id: 1,
        name: "Loafers",
        count: "8 Products",
        img: heroImg8,
    },
    {
        id: 2,
        name: "Chips Potatoes",
        count: "12 Products",
        img: heroImg3,
    },
    {
        id: 3,
        name: "Chips Potatoes",
        count: "14 Products",
        img: heroImg3,
    },
    {
        id: 4,
        name: "Gadgets",
        count: "7 Products",
        img: heroImg2,
    },
    {
        id: 5,
        name: "Chips Potatoes",
        count: "3 Products",
        img: heroImg3,
    },
    {
        id: 7,
        name: "Skin Care",
        count: "4 Products",
        img: heroImg4,
    }
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map(el => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;