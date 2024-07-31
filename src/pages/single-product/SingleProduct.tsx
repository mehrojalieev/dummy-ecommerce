import "./SingleProduct.scss"
import { useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Thumbs } from 'swiper/modules';
import { useParams } from "react-router";
import { ApiInstance } from "../../api";
import { ProductType } from "../../types";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loadCarts, RemoveCart } from "../../redux/actions/cart-action";

const SingleProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [productDetail, setProductDetail] = useState<ProductType | any>(null);

    const { id } = useParams();

    const dispatch = useDispatch()

    const CardProducts = useSelector((state: any) => state.cart.cart)

    useEffect(() => {
        async function fetchSingleProduct() {
            try {
                const response = await ApiInstance.get(`/products/${id}`);
                setProductDetail(response?.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleProduct();
    }, [id]);


    const handleAddToCart = () => {
        dispatch(loadCarts(productDetail) as any )
    }

    const handleRemoveFromCart = () => {
        dispatch(RemoveCart(productDetail) as any )
    }

    return (
        <div className='single-product container'>
            <div className="single__product-wrapper">
                <div className="product__images-wrapper">
                    <div className="single__images-carousel">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper single__images-carousel"
                        >
                            {
                                productDetail?.images.map((image: string, index: number) => (
                                    <SwiperSlide key={index} className='single-slide'>
                                        <img src={image} alt={`Slide ${index}`} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>

                    <div className="main__image-carousel">
                        <Swiper
                            loop={true}
                            spaceBetween={50}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper2 product__main-carousel"
                        >
                            {
                                productDetail?.images.map((image: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <img className="main-image" src={image} alt={`Main Slide ${index}`} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="product-contents">
                    <h3 className="title">{productDetail?.title}</h3>
                    <h5 className="price">${productDetail?.price}</h5>
                    <div className="star-items">
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </div>
                    <p className="description">{productDetail?.description}</p>
                    <div className="content-action">
                                {
                                    CardProducts.filter((f: ProductType) => f.id === productDetail?.id).length > 0 ? 
                                    <div>
                                        <button onClick={handleRemoveFromCart} className='in-cart add-to-cart'>- Remove From Cart</button>
                                    </div>
                                    : <button onClick={handleAddToCart} className='add-to-cart'>+ Add To Cart </button>
                                }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
