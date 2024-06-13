import Image from "next/image";
import './education.css';

export default function Education() {
    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="container mx-auto px-4 lg:px-8 py-8">
                        <div className="flex flex-col items-center w-full">
                            <div className="title-education text-white text-center mt-7 mb-5">
                                <h1>Mais que educação, uma transformação</h1>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 w-[1440] h-[925]">
                                <div className={`image-container`}>
                                    <Image
                                        src={'/missao.webp'}
                                        alt="Missão"
                                        width={384}
                                        height={630}
                                        className="altimageeducation"
                                    />
                                </div>
                                <div className={`image-container`}>
                                    <Image
                                        src={'/visao.webp'}
                                        alt="Visão"
                                        width={384}
                                        height={630}
                                        className="altimageeducation"
                                    />
                                </div>
                                <div className={`image-container`}>
                                    <Image
                                        src={'/valores.webp'}
                                        alt="Valores"
                                        width={384}
                                        height={630}
                                        className="altimageeducation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
