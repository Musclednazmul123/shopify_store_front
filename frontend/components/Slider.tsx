

import React from "react";
import Slider from "react-slick";
import  {SliderTypes} from '@/types'

export default function NextSlider({settings, children}:SliderTypes) {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}