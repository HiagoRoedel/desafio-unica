import Image from "next/image"

export default function Gif() {
    return (
        <>
            <div className="flex lg:flex">
                <Image
                    src="/vidoBackGraduacao2.gif"
                    width={1446}
                    height={702}
                    alt="gif"
                    className="altgif"
                />
                <span className="criando">CRIANDO HOJE O SEU AMANHÃ</span>
            </div>
        </>
    )
}