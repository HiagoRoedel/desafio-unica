import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Image } from '@nextui-org/react';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto py-8 px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b-4 pb-3">
                    {/* Primeira coluna */}
                    <div className="text-left">
                        <h2 className="text-xl font-bold mb-4">Siga a nossa faculdade</h2>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faFacebook} size="lg" className="text-white w-10" />
                            <FontAwesomeIcon icon={faYoutube} size="lg" className="text-white w-10" />
                            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-white w-10" />
                        </div>
                    </div>

                    {/* Segunda coluna */}
                    <div className="text-left">
                        <h2 className="text-xl font-bold mb-4">Baixe nosso App</h2>
                        <div className="flex items-center gap-4">
                            <Image
                                src="/googleplay.webp"
                                alt='googleplay'
                                width={180}
                                height={53}
                                className=''
                            />
                            <Image
                                src="/applestore.webp"
                                alt='applestore'
                                width={180}
                                height={53}
                                className=''
                            />
                        </div>
                    </div>

                    {/* Terceira coluna */}
                    <div className="text-left">
                        <h2 className="text-xl font-bold mb-4">Consulte aqui o cadastro da Instituição no Sistema e-MEC</h2>
                        <Image
                            src="/qrcode.webp"
                            alt='qrcode'
                            width={113}
                            height={188}
                            className=''
                        />
                    </div>
                </div>

                <div className="py-8">
                    <div className='border-b-4 '>
                        <h2 className="text-xl font-bold mb-4">Saiba mais da Faculdade Única</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-5">
                            <div className="text-left">
                                <p className='text-xl font-bold mb-2'>Pós Graduação</p>
                                <a href="#" className="text-white block">Ver nossos cursos</a>
                            </div>
                            <div className="text-left">
                                <p className='text-xl font-bold mb-2'>Segunda Graduação</p>
                                <a href="#" className="text-white block">Ver nossos cursos</a>
                            </div>
                            <div className="text-left">
                                <p className='text-xl font-bold mb-2'>Disciplinas Isoladas</p>
                                <a href="#" className="text-white block">Ver nossos cursos</a>
                            </div>
                            <div className="text-left">
                                <p className='text-xl font-bold mb-2'>Cursos Livres</p>
                                <a href="#" className="text-white block">Ver nossos cursos</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex flex-wrap gap-12 md:gap-28 items-center justify-center">
                            <a href="#" className="text-white">Teste Vocacional</a>
                            <a href="#" className="text-white">Seja um embaixador</a>
                            <a href="#" className="text-white">Fale com a gente</a>
                            <a href="#" className="text-white">Quem somos</a>
                            <a href="#" className="text-white">Privacidade</a>
                            <a href="#" className="text-white">Termos de Uso</a>
                            <a href="#" className="text-white">Trabalhe Conosco</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
