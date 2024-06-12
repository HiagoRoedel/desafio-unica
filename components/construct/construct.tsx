import './construct.css'
import Image from 'next/image'

export default function Construct() {
    return (
        <div className='bg-black w-auto'>
            <div className="flex flex-wrap ">
                <div className="flex flex-col w-full lg:w-2/3">
                    <div className='textos flex flex-col items-start'>
                        <h1 className='text-white perfect-style'>
                            Construa seu amanhã conosco
                        </h1>
                        <span className='text-white mt-4 ajust-span'>
                            Com foco em inovação e qualidade, seja nos cursos presenciais ou online, utilizamos as mais modernas tecnologias para uma comunicação mais eficiente e eficaz entre professor e aluno, destinados à formação de profissionais qualificados, capazes de transformar a realidade socioeconômica do país.
                        </span>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-end mt-4 lg:mt-0">
                    <Image
                        src={'/mockup.webp'}
                        alt='theme'
                        width={582}
                        height={330}
                    />
                </div>
            </div>
        </div>
    );
}
