import Image from "next/image"
import './future.css'

export default function Future(){
    return(
        <>
        <div className="flex flex-col bg-black items-center">
            <div className="flex flex-wrap bg-black">
                <div className="flex flex-col items-center justify-center bg-black">
                    <div className="title text-white mt-12 mb-3">
                    <h1>
                        Abra novas portas para o seu futuro
                    </h1>
                    </div>
                   <div className="flex flex-col w-full bg-black imagem items-center justify-center">
                        <Image 
                        src={'/future.webp'}
                        alt="future"
                        width={1206}
                        height={349}
                        className="bg-black"
                        />
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}