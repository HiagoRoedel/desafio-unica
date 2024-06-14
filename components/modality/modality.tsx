import './modality.css'

export default function Modality() {
    return (
        <div className="flex flex-col w-full bg-black pt-12">
            <div className="flex flex-col items-center">
                <div className="title-modality text-white text-center mb-8 definirfonte">
                    <h1 className="text-3xl font-bold mb-2">Sua jornada é Única</h1>
                    <span className="text-lg">Escolha a melhor modalidade para você!</span>
                </div>
                <div className="grid  grid-cols-2 md:grid-cols-4 w-full">
                    <div className="image-container">
                        <div className="imagens graduacao absolute inset-x-0 bottom-0 text-center flex flex-col items-center justify-end">
                            <div className="mb-48 definirfonte tamanho">
                                <h1 className="text-white text-3xl mb-2 text-mobile">GRADUAÇÃO</h1>
                                <button className="text-sm px-6 py-2 border-2 border-white text-white bg-transparent rounded">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="image-container">
                        <div className="imagens pos-graduacao absolute inset-x-0 bottom-0 text-center flex flex-col items-center justify-end">
                            <div className="mb-48 definirfonte tamanho">
                                <h1 className="text-white text-3xl mb-2 text-mobile">PÓS ONLINE</h1>
                                <button className="text-sm px-6 py-2 border-2 border-white text-white bg-transparent rounded">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="imagens segunda-graduacao absolute inset-x-0 bottom-0 text-center flex flex-col items-center justify-end">
                            <div className="mb-48 definirfonte tamanho">
                                <h1 className="text-white text-3xl mb-2 text-mobile">SEGUNDA GRADUAÇÃO</h1>
                                <button className="text-sm px-6 py-2 border-2 border-white text-white bg-transparent rounded">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <div className="imagens disciplina-isolada absolute inset-x-0 bottom-0 text-center flex flex-col items-center justify-end">
                            <div className="mb-48 definirfonte tamanho">
                                <h1 className="text-white text-3xl mb-2 text-mobile">DISCIPLINA ISOLADA</h1>
                                <button className="text-sm px-6 py-2 border-2 border-white text-white bg-transparent rounded">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
