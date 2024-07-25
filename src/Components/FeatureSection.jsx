import React from 'react'
import heroImg1 from '../assets/prdtImg1.jpg';
import heroImg3 from '../assets/prdtImg3.jpg';
import heroImg6 from '../assets/prdtImg6.jpg';
import heroImg7 from '../assets/prdtImg7.jpg';
import ProductCard from './ProductCard';



const data = [
    {
        id: 0, img: heroImg1, name: "Dried Fruits", price: "&#8358; 1,800"
    },
    {id: 1, img: heroImg6, name: "Veggies", price: "&#8358; 500"

    },
    {id: 2, img: heroImg3, name: "Crunchy Crisp", price: "&#8358; 750"

    },
    {id: 3, img: heroImg7, name: "Nuts & Fruits", price: "&#8358; 2,500"

    },
]

const FeatureSection = () => {
  return (
    <>
       <div className="container pt-16">
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className='font-medium text-2xl'>
                        Fruits & Vegetables
                    </h3>
                    <p className="text-gray-600 mt-2">
                        Buy farm fresh vegetables and fruits online at the best price...
                    </p>
                </div>

                <div className="space-x-4 mt-8 lg:mt-0">
                    <button className='feature_btn'>
                        Fruits
                    </button>
                    <button className='text-gray-600 hover:text-accent'>
                        Vegetables
                    </button>
                    <button className='text-gray-600 hover:text-accent'>
                        Bread & Bakery
                    </button>
                </div>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                <div>
                    <img src={heroImg7} alt="banner"
                    className='w-full h-full object-cover rounded-lg' />
                </div>

                {data.map((el) => (
                   <ProductCard 
                    key={el.id}
                    img={el.img}
                    name={el.name}
                    price={el.price}
                   /> 
                ))}
            </div>
        </div> 
    </>
  )
}

export default FeatureSection