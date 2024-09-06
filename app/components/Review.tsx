"use client";
import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import review1 from "../assets/img/review-1.jpg";
import review2 from "../assets/img/review-2.jpg";
import review3 from "../assets/img/review-3.jpg";
import review4 from "../assets/img/review-4.jpg";
import review5 from "../assets/img/review-5.jpg";

const Review = () => {
  // const mthd = () => {
  //     const swiper = new Swiper(".swiper", {
  //       autoplay: {
  //         delay: 5000,
  //       },
  //     });
  // }

  return (
    <section id="review" className="bg-primaryColorLight py-20">
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">CUSTOMER REVIEW</h2>
          <div className="seperator mx-auto"></div>
          <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            dicta mollitia, eveniet repellendus magni voluptatum libero nisi
            quos porro iste rem, sapiente, sed dignissimos iusto. Nihil, maxime
            soluta! Corrupti, placeat!
          </p>
        </div>

        {/* <div className="swiper py-10">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review1}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review2}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review3}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review4}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review5}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
          </ul>

          <div className="swiper-pagination"></div>
        </div> */}

        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          grabCursor={true}
          speed={400}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="py-8">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review1}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="py-8">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review2}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="py-8">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review3}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="py-8">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review4}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide className="py-8">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eaque quae assumenda officia quia molestias nobis quis veniam.
                </p>
                <div className="flex items-center">
                  <Image
                    className="w-12 h-12 rounded-full"
                    src={review5}
                    alt="Review Image"
                    priority
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">John Doe</p>
                    <p className="paragraph">Designer</p>
                  </div>

                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
