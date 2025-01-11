
import React, { useState, useEffect } from 'react';
import { GraphicDesign } from '../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function GraphicDes() {

    const [activeImage, setActiveImage] = useState(null);

    const toggleFullImage = (index) => {
        setActiveImage(activeImage === index ? null : index);
    };

    const handleClickOutside = (event) => {
        if (event.target.id === 'modal-overlay') {
            setActiveImage(null);
        }
    };

    useEffect(() => {
        // Lock scrolling when modal is open
        document.body.style.overflow = activeImage !== null ? 'hidden' : 'auto';
    }, [activeImage]);


    return (
        <>
            <div className='flex mx-auto px-8 text-center'>
                <h1 className='text-xl sm:text-2xl lg:text-5xl py-4 font-bold'>Graphic Designs</h1>
            </div>

            <div className="py-12 flex justify-center flex-wrap">
                {
                    GraphicDesign.map((src, index) => (
                        <div key={index} className="max-w-[26rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center">
                            <img src={src.Image} loading="lazy" className='shadow-lg cursor-pointer' alt={src.alt}
                                onClick={() => toggleFullImage(index)}
                            />
                        </div>
                    ))
                }
            </div>
            {activeImage !== null &&
                <div id="modal-overlay"
                    className="fixed inset-0 bg-[#484547] bg-opacity-90 flex items-center justify-center z-50"
                    onClick={handleClickOutside}>

                    <Swiper className="mySwiper max-w-[26rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center"
                        pagination={{
                            clickable: true
                        }}
                        modules={[Pagination]}
                        initialSlide={activeImage}
                    >
                        {
                            GraphicDesign.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-zoom-container">
                                        <img src={src.Image} loading="lazy" className='shadow-lg pb-12' alt={src.alt} />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            }

        </>
    )
}
