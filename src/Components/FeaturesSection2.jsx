import React from 'react'
import heroImgb from '../assets/prdtImgb.jpg';
import heroImgd from '../assets/prdtImgd.jpg';
import heroImge from '../assets/prdtImge.jpg';
import heroImgc from '../assets/prdtImgc.jpg';
import ProductCard from './ProductCard';



const data = [
    {
        id: 0, img: heroImgb, name: "Laptop-iMac case", price: "₦ 1,800"
    },
    {id: 1, img: heroImgd, name: "MacBook Air", price: "₦ 560,800"

    },
    {id: 2, img: heroImge, name: "IoS Collection", price: "₦ 1,203,000"

    },
    {id: 3, img: heroImgc, name: "Gadget Workspace", price: "₦ 250,000"

    },
]

const FeatureSection2 = () => {
    return(
        <>
        <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
            <div>
                <h3 className='font-medium text-2xl'>
                    Gadgets
                </h3>
                <p className="text-gray-600 mt-2">
                    Scoop devices at whooping discounted prices...
                </p>
            </div>

            <div className="space-x-4 mt-8 lg:mt-0">
                <button className='feature_btn'>
                    Tech
                </button>
                <button className='text-gray-600 hover:text-accent'>
                    Laptops
                </button>
                <button className='text-gray-600 hover:text-accent'>
                    Androids & IoS
                </button>
            </div>
        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
                <img src={heroImgc} alt="banner"
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
    );
}

export default FeatureSection2