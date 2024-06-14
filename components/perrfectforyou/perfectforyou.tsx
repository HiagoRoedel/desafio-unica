import './perfectforyou.css';
import Image from 'next/image';

export default function PerfectForYou() {
    return (
        <section className="perfectforyou w-full h-full flex justify-center items-center">
            <div className="container mx-auto text-center text-white">
                <div className="titles-unica mb-8">
                    <h1 className="perfect-title text-3xl md:text-4xl lg:text-5xl font-bold">
                        Perfeita para você!
                    </h1>
                </div>
                <div className="information mb-8">
                    Há mais de 22 anos, a Faculdade Única transforma vidas por meio da educação. Com base na ética e na responsabilidade social, com um preço justo e acessível, utilizamos a tecnologia e a inovação para ampliar as possibilidades de ensino de milhares de alunos espalhados por todo o país.
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="col-lg-4 p-4 card-course border flex justify-center">
                        <div className="other-card text-center">
                            <Image
                                src="/diploma-icon.webp"
                                alt="diploma"
                                width={50}
                                height={50}
                                className="diploma-image"
                            />
                            <h1 className="textStyle definirfonte">+ de 489 mil Alunos</h1>
                            <span className="textStyle definirfonte">Certificados</span>
                        </div>
                    </div>
                    <div className="col-lg-4 p-4 card-course border flex justify-center">
                        <div className="other-card text-center">
                            <Image
                                src="/Brasil.webp"
                                alt="diploma"
                                width={50}
                                height={50}
                                className="diploma-image"
                            />
                            <h1 className="textStyle definirfonte">+ de 250 Polos em</h1>
                            <span className="textStyle definirfonte">todo Brasil</span>
                        </div>
                    </div>
                    <div className="col-lg-4 p-4 card-course border flex justify-center">
                        <div className="other-card text-center">
                            <Image
                                src="/curso-online.webp"
                                alt="diploma"
                                width={50}
                                height={50}
                                className="diploma-image"
                            />
                            <h1 className="textStyle definirfonte">+ de 900 cursos em</h1>
                            <span className="textStyle definirfonte">diversas modalidades</span>
                            <span className="textStyle definirfonte">de ensino</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
