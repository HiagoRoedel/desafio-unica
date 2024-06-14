'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from "swiper/core";
import  { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import './depoiments.css'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

SwiperCore.use([Navigation, Autoplay, Pagination]);

interface CustomerProps {
    name: string;
    email: string;
}

export default function Depoiments() {
    const [customers, setCustomers] = useState<CustomerProps[]>([]);

    useEffect(() => {
        loadCustomers();
    }, []);

    async function loadCustomers() {
        try {
            const response = await axios.get("/api/bancoMongo");
            setCustomers(response.data);
        } catch (error) {
            console.error("Erro ao carregar depoimentos:", error);
        }
    }

    return (
        <div className="w-full bg-[#333] pt-16 pb-8 text-white cordefundo usarimagem">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Lado a lado com a sua evolução</h1>
                </div>
                <div className="row relative mt-5">
            <div className="swiper-button image-swiper-button-next">
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            </div>
            <div className="swiper-button image-swiper-button-prev">
              <FontAwesomeIcon icon={['fas', 'chevron-left']} />
            </div>
            </div>

                <Swiper
                    slidesPerView={window.innerWidth < 1023 ? 1 : 3}

                    spaceBetween={30}
                    autoplay={{
                      delay: Math.max(4000, Math.random() * 10000),
                      disableOnInteraction: true,
                    }}
                    pagination={{
                      clickable: false,
                    }}
                    navigation={{
                      nextEl: '.image-swiper-button-next',
                      prevEl: '.image-swiper-button-prev',
                      disabledClass: 'swiper-button-disabled',
                    }}
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    className="mySwiper"
                >
                    {customers.length > 0 ? (
                        customers.map((customer, index) => (
                            <SwiperSlide key={index} className="">
                                
                                <div className="flex justify-center items-center h-full">
                                    <div className="backdrop-blur-lg bg-black bg-opacity-30 rounded-xl p-4 flex items-center">
                                        <div className="relative w-[44px] h-[44px] mr-4 top-12">
                                            <Image
                                                src='/depoiments-icon.webp'
                                                alt=''
                                                layout="fill"
                                                objectFit="cover"
                                                className=''
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="relative w-[253px] h-[135px]">
                                                <Image
                                                    src='/depoiments-card.webp'
                                                    alt=''
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-t-xl"
                                                />
                                            </div>
                                            <div className="text-left mt-4">
                                                <h3 className="text-white">{customer.name}</h3>
                                                <p className="text-sm">{customer.email}</p>
                                            </div>
                                            <div className="mt-2">
                                                <div className="relative w-[177px] h-[26px]">
                                                    <Image
                                                        src='/avaliacao-google.webp'
                                                        alt=''
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-center">Carregando depoimentos...</p>
                    )}
                </Swiper>
            </div>
     
    );
}
