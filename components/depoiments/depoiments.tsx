'use client'

import './depoiments.css'
import Image from 'next/image'

export default function Depoiments() {
    return (
        <div className="w-full bg-[#333] pt-16 pb-8 text-white cordefundo usarimagem">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Lado a lado com a sua evolução</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="mt-10 w-full sm:w-[340px] xl:w-[420px] rounded-xl p-4 shadow-sm">
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
                                    <h3 className="text-white">Pedro Alvarenga Assis</h3>
                                    <p className="text-sm">Nome do curso</p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
