import Image from "next/image";
import './future.css';
export default function Future() {
    return (
        <div className=" bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center justify-center bg-black">
                        <div className="title text-white mt-12 mb-3">
                            <h1>Abra novas portas para o seu futuro</h1>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className={`image-container`}>
                                <Image
                                    src={'/cursosnotamaxima.webp'}
                                    alt="future"
                                    width={284}
                                    height={349}
                                />
                            </div>
                            <div className={`image-container`}>
                                <Image
                                    src={'/empresaseorgaos.webp'}
                                    alt="future"
                                    width={284}
                                    height={349}
                                />
                            </div>
                            <div className={`image-container`}>
                                <Image
                                    src={'/estagio.webp'}
                                    alt="future"
                                    width={284}
                                    height={349}
                                />
                            </div>
                            <div className={`image-container`}>
                                <Image
                                    src={'/professores.webp'}
                                    alt="future"
                                    width={284}
                                    height={349}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
