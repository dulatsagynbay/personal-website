import React from "react";
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
    },
    {
        avatar: AVTR2,
        name: 'Tina Snow',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
    },
    {
        avatar: AVTR3,
        name: 'Tina Snow',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
    },
    {
        avatar: AVTR4,
        name: 'Tina Snow',
        review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type'
    }
]

const Testimonial = () => {
    return (
        <section id="testimonial">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={
                        {clickable: true}
                    }
            >
                {
                    data.map(({avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonial