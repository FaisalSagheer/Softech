import React, { useState, useEffect } from 'react';
import { WebImg } from '../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';

export default function WebDev() {
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
            <div className='flex mx-auto px-8 pt-14 text-center'>
                <h1 className='text-xl sm:text-2xl lg:text-5xl py-4 font-bold'>Web Designs</h1>
            </div>

            <div className="py-12 flex justify-center flex-wrap">
                {WebImg.map((item, index) => (
                    <div
                        key={index}
                        className='max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center'
                    >
                        {/* Thumbnail Image */}
                        <img
                            src={item.src}
                            className='shadow-lg cursor-pointer'
                            alt={item.alt}
                            onClick={() => toggleFullImage(index)}
                        />
                    </div>
                ))}
            </div>

            {/* Full Image Modal */}
            {activeImage !== null && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-[#484547] bg-opacity-90 flex items-center justify-center z-50"
                    onClick={handleClickOutside}
                >
                    <div className="max-w-3xl w-full p-4">
                        <Swiper
                            zoom={true}
                            modules={[Zoom]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="swiper-zoom-container">
                                    <img
                                        src={WebImg[activeImage].full}
                                        className="w-48"
                                        alt={WebImg[activeImage].alt}
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    );
}
