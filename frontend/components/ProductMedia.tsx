import Image from 'next/image'
import React, { useState } from 'react';
import NextSlider  from './Slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const ImageWithThumb=({images}:any)=>{

    const [active, setActive] = useState(images[0]?.node?.transformedSrc)

    const sliderSettings={
        dots: false,
        arrow: true,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            }
        ]
    }
    return<div >
        <div className='max-w-[600px]'>
            <div className='mb-2 max-w-full'>
              <Image alt='Mountains' width={1080} height={1920} src={active?active:"/placeholder.webp"} />
            </div>
            <NextSlider settings={sliderSettings}>
                {images.map((image:any, index:number)=>
                    <div onClick={()=>setActive(image?.node?.transformedSrc)} key={`product-page-image-component-${index}`} className='max-w-[600px] h-auto p-1 relative cursor-pointer'>
                        <Image alt='Mountains' width={1080} height={1920} src={image?.node?.transformedSrc ? image?.node?.transformedSrc : "/placeholder.webp"} />
                    </div>
                )}
            </NextSlider>  
        </div>
    </div>
}