import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import Slider from "react-slick";


const Reviews = () => {

    const [reviews, setReviews] = useState([])
    var settings = {

        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    useEffect(() => {
        
        axios.get('https://salty-river-79195.herokuapp.com/reviews')
            .then(res => {
                console.log(res);
                setReviews(res.data)
            })
    }, [])

   


    return (
        <div className=" md:pb-40 pb-10 md:px-24 bg-black text-white">
            <div>
                <section className=" flex flex-col justify-center items-center md:pt-24 pt-8 md:mx-0 mx-4 md:mb-10 ">
                    <p className="text-yellow-400 text-md font-bold uppercase mb-2 ">TESTIMONIAL</p>
                    <h1 className=" text-xl md:text-3xl font-serif mb-12 text-gray-200">WHAT OUR CUSTOMERS SAY</h1>
                </section>
                <Slider {...settings} className=" z-0 ">

                    {
                        reviews.map(review => {

                            return (
                                <div className=" outline-none " >

                                    <div className="mx-10 md:flex flex-col ">
                                        <div className="md:flex items-center ">
                                            <img src={review.img} alt="" className="rounded-full border-2 mr-6 border-yellow-400 w-12 h-12 mr-1" />

                                            <p className="break-words text-justify">{review.description}</p>

                                        </div>
                                        <div className="md:flex flex-row justify-between mt-8">

                                            <div className="md:flex  flex-col" >
                                                <span className="font-semibold md:text-xl text-lef ">{review.displayName}</span>
                                                <h1 className="font-semibold md:text-md text-left ">{review.profession}</h1>

                                            </div>
                                            <h1 className="md:text-right mr-3">
                                                <Rating
                                                    initialRating={review.rating}
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star text-warning"
                                                    readonly
                                                />
                                            </h1>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }

                </Slider>
            </div>
        </div>
    )
}


export default Reviews;
