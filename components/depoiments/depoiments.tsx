'use client'
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './depoiments.css'

export default function Depoiments(){
    return(
        <>
        <div className="w-full h-[560px] cordefundo usarimagem">
  <div className="pt-12 title-modality text-white text-center mb-8 fonte">
<h1 className="text-3xl font-bold mb-2">Lado a lado com a sua evolução</h1>
  </div>
  <div className="flex items-center justify-center gap-3">
  <div className=" mt-10 h-[330px] w-[340px] rounded-xl bg-black p-4 shadow-sm backdrop-blur-lg xl:w-[420px] items-center flex text-center">
    
  </div>
  <div className="mt-10 h-[330px] w-[340px] rounded-xl bg-black p-4 shadow-sm backdrop-blur-lg xl:w-[420px] items-center flex text-center">
    
  </div>
  <div className="mt-10 h-[330px] w-[340px] rounded-xl bg-black p-4 shadow-sm backdrop-blur-lg xl:w-[420px] items-center flex text-center">
    
  </div>
  </div>
        </div>
        
        </>
    )
}