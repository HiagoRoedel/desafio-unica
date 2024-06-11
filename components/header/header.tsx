import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@nextui-org/react'
import FirstSectionHeader from "./FirstSectionHeader/firstsectionheader"
import './header.css'

export default function Header() {
    return (
        <>
        <FirstSectionHeader />
            <header className="relative z-[999999] backdrop-blur header">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 font-poppins">
                    <div className="flex lg:flex-1">
                        <Image
                            src="/logo-unica.webp"
                            width={182}
                            height={182}
                            alt="faculdade unica"
                            className="h-8 w-auto"
                        />
                    </div>
                    <div className="relative flex lg:flex-1">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <div className="flex lg:flex-1 px-1 justify-content align-itens">
                        <input
                            type="search"
                            id="default-search"
                            className="shadow-sm block w-auto p-4 ps-10 text-sm black text-slate-100 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 white:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Pesquise por um curso..."
                            required
                        />
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="flex">
                            <Button
                                disableRipple
                                className="bg-transparent p-0 data-[hover=true]:bg-transparent font-bold"
                                radius="sm"
                                variant="light"
                            >
                                <span className="hover-effect text-sm xl:text-base text-white">Indicação Premiada</span>
                                <FontAwesomeIcon
                                    className="ml-1"
                                    icon={['fas', 'angle-down']}
                                    style={{ fontSize: '12px' }}
                                />
                            </Button>
                        </div>
                        <div className="flex lg:flex">
                            <Button
                                disableRipple
                                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                <span className="hover-effect text-sm xl:text-base text-white">Central de Ajuda</span>
                                <FontAwesomeIcon
                                    className="ml-1"
                                    icon={['fas', 'angle-down']}
                                    style={{ fontSize: '12px' }}
                                />
                            </Button>
                        </div>
                        <div className="flex lg:flex">

                            <Button
                                disableRipple
                                className="bg-transparent p-0 data-[hover=true]:bg-transparent border-zinc-950 flex items-center gap-2 rounded-[6px] border px-4 py-2 font-semibold"
                                radius="sm"
                                variant="light"
                            >
                                <span className="hover-effect text-sm xl:text-base font-semibold">Já sou aluno</span>
                                <FontAwesomeIcon
                                    className="ml-1"
                                    icon={['fas', 'angle-down']}
                                    style={{ fontSize: '12px' }}

                                />
                            </Button>

                        </div>
                    </div>


                </nav>
            </header>





        </>
    )
}