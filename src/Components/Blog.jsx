import React from 'react'
import heroImg6 from "../assets/prdtImg6.jpg";
import BlogCard from './BlogCard';


const data = [
    {
        id: 0,
        title: "Sustainable Farming",
        img: heroImg6,
        date: "Aug 28, 2024",
        comment: 8
    },
    {
        id: 1,
        title: "Healthy Eating",
        img: heroImg6,
        date: "Jun 6, 2024",
        comment: 5
    },
    {
        id: 2,
        title: "Healthy Food, Healthy Life",
        img: heroImg6,
        date: "Apr 3, 2024",
        comment: 2
    }
]
const Blog = () => {
  return (
    <>
       <div className="container pt-16">
        <h2 className="font-bold text-2xl">
            Latest Blog Posts
        </h2>
        <p className="text-gray-550">
            Check out our latest blog posts on various topics related to farming, health, and wellness.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el) => (
                <BlogCard 
                    key={el.date}
                    img={el.img}
                    title={el.title}
                    date={el.date}
                    comment={el.comment}
                />
            ))}
        </div>
       </div>
    </>
  )
}

export default Blog