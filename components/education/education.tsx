import Image from "next/image"
import './education.css'

export default function Education(){
    return(
        <>
            <div className="flex bg-black flex-col items-center w-full">
                <div className="flex flex-wrap">
                    <div className="w-full flex flex-col">
                        <div className="title-education text-white items-center flex flex-col mt-7">
                            <h1>Mais que educação, uma transformação</h1>
                        </div>
                        <div className="image w-auto mb-7">
                            <Image 
                            src={'/education.webp'}
                            alt="Mais que educação, uma transformação"
                            width={1219}
                            height={630}
                            className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}