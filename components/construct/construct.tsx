import Image from 'next/image';

export default function Construct() {
    return (
        <div className='bg-black'>
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-2/3">
                        <div className='textos'>
                            <h1 className='text-white text-3xl lg:text-4xl font-bold mb-4 text-center'>
                                Construa seu amanhã conosco
                            </h1>
                            <p className='text-white text-base lg:text-lg definirfonte text-center'>
                                Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/3 mt-4 lg:mt-0 flex justify-center">
                        <Image
                            src={'/mockup.webp'}
                            alt='theme'
                            width={582}
                            height={330}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
