import "./TopSelling.scss"

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
const TopSelling = () => {

    const [TopSellingProoducts, setTopSellingProoducts] = useState<ProductType[]>([])

    

    useEffect(() => {
        async function TopProducts() {   
            try {
                const response = await ApiInstance("/products")
                const TopSellingProducts = response.data.products.filter((product: ProductType) => product.discountPercentage > 10)
                setTopSellingProoducts(TopSellingProducts);
                
            } 
            catch (error) {
                console.log(error);
            }   
        }
        TopProducts()
    }, [])


    return (
        <div className="top-selling container">
            <header className="top__selling-header">
                <h3>Top Selling Products</h3>
                <Link className="all-link" to={"/all-products"}>See All</Link>
            </header>
            <div className="selling-wrapper">

                <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    centeredSlides={false}
                    speed={800}
                    autoplay={{
                        delay: 1900,
                        disableOnInteraction: false,
                    }}
                  
                    modules={[Autoplay, Pagination]}
                    className="mySwiper swiper-wrapper"
                >
                    {
                        TopSellingProoducts?.map((product: ProductType, index) =>
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

export default TopSelling
