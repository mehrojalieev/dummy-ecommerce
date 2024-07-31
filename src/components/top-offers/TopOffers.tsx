import "./TopOffers.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiInstance } from "../../api";
import { ProductType } from "../../types";
import Card from "../../utils/card/Card";
const TopOffers = () => {

    const [TopProducts, setTopProducts] = useState<ProductType[]>([])

    

    useEffect(() => {
        async function TopProducts() {   
            try {
                const response = await ApiInstance("/products")
                setTopProducts(response?.data.products);
                
            } 
            catch (error) {
                console.log(error);
            }   
        }
        TopProducts()
    }, [])


    return (
        <div className="top-offers container">
            <header className="top__offers-header">
                <h3>Top Offers</h3>
                <Link className="all-link" to={"/all-products"}>See All</Link>
            </header>
            <div className="offers-wrapper">

                <Swiper
                
                    spaceBetween={20}
                    slidesPerView={5}
                    centeredSlides={false}
                    speed={1000}
                    autoplay={{
                        delay: 2200,
                        disableOnInteraction: false,
                    }}
                  
                    modules={[Autoplay, Pagination]}
                    className="mySwiper swiper-wrapper"
                >
                    {
                        TopProducts?.map((product: ProductType, index) =>
                            <SwiperSlide key={index} className="swiper-slide">
                                <Card product={product}/>
                            </SwiperSlide>
                        
                        )
                    }
                   

                </Swiper>
            </div>
        </div>
    )
}

export default TopOffers
