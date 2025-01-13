import React, { useState, useEffect } from 'react';
import { videos } from '../../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Videography() {
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
                <h1 className='text-3xl sm:text-4xl lg:text-5xl py-4 font-bold'>Videography</h1>
            </div>

            <div className="py-12 flex justify-center flex-wrap">
                {videos.map((src, index) => (
                    <div
                        key={index}
                        className="max-w-[28rem] m-5 p-5 rounded overflow-hidden text-center flex flex-col justify-center"
                    >
                        <video
                            className="last:h-[237px] cursor-pointer"
                            onClick={() => toggleFullImage(index)}
                        >
                            <source src={src.src} loading="lazy"/>
                        </video>
                    </div>
                ))}
            </div>

            {activeImage !== null && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-[#484547] bg-opacity-90 flex items-center justify-center z-50"
                    onClick={handleClickOutside}
                >
                    <div className="max-w-3xl w-full p-4">
                        <Swiper
                            navigation={{ 
                                clickable:true
                             }}
                            modules={[Navigation]}
                            className="mySwiper"
                            initialSlide={activeImage} 
                        >
                            {videos.map((video, index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-zoom-container">
                                        <video
                                            src={video.src}
                                            muted
                                            controls
                                            autoPlay
                                            loop
                                            className="w-[564px] pb-6"
                                            loading="lazy"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    );
}
