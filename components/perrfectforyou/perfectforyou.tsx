import './perfectforyou.css'
import Image from 'next/image'
export default function PerfectForYou() {
    return (
        <>
            <section className="perfectforyou w-auto">
                <div className="flex flex-wrap">
                    <div className="flex flex-col w-full">
                        <div className="">
                            <div className="container text-white">
                                <div className="titles-unica">
                                    <h1 className="perfect-title">Perfeita para você!</h1>
                                </div>
                                <div className=" information mt-5">
                                    <span className=' flex text-center'>Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.</span>
                                </div>
                                <div className='flex align-center justify-center mt-7 w-auto h-48 gap-36'>



                                    <div className="col-lg-4 p-30 card-course border flex">
                                        <div className='other-card'>

                                            <Image
                                                src="/diploma-icon.webp"
                                                alt='diploma'
                                                width={50}
                                                height={50}
                                                className='diploma-image'
                                            />
                                            <h1 className='textStyle'>+ de 489 mil Alunos</h1>
                                            <span className='textStyle'>Certificados</span>

                                        </div>
                                    </div>

                                    <div className="col-lg-4 p-30 card-course border flex">
                                        <div className='other-card'>
                                            <div className=''>
                                                <Image
                                                    src="/diploma-icon.webp"
                                                    alt='diploma'
                                                    width={50}
                                                    height={50}
                                                    className='diploma-image'
                                                />
                                                <h1 className='textStyle'>+ de 250 Polos em </h1>
                                                <span className='textStyle'>todo Brasil</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 p-30 card-course border flex">
                                        <div className='other-card'>
                                            <div className=''>
                                                <Image
                                                    src="/diploma-icon.webp"
                                                    alt='diploma'
                                                    width={50}
                                                    height={50}
                                                    className='diploma-image'
                                                />

                                            </div>
                                            <h1 className='textStyle'>+ de 900 cursos em</h1>
                                            <span className='textStyle'> diversas modalidades</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}