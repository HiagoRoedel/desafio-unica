import Image from "next/image";

export default function Gif() {
    return (
        <div className="bg-black">
            <div className="container mx-auto">
                <div className="relative">
                    <Image
                        src="/vidoBackGraduacao2.gif"
                        width={1446}
                        height={702}
                        alt="gif"
                        className="altgif"
                    />
                    <span className="criando text-white font-krona text-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
                        CRIANDO HOJE O SEU AMANHÃ
                    </span>
                </div>
            </div>
        </div>
    );
}
