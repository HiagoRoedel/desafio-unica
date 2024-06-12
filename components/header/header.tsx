import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@nextui-org/react";
import FirstSectionHeader from "./FirstSectionHeader/firstsectionheader";
import "./header.css";

export default function Header() {
    return (
        <div className="">
            <FirstSectionHeader />

            <header className="relative z-[999999] backdrop-blur header">
                <nav className="container mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 font-poppins">
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
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="shadow-sm block w-full p-4 pl-10 text-sm text-slate-100 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Pesquise por um curso..."
                            required
                        />
                    </div>
                    <div className="flex space-x-6">
                        <Button
                            disableRipple
                            className="bg-transparent p-0 font-bold"
                            radius="sm"
                            variant="light"
                        >
                            <span className="hover-effect text-sm xl:text-base text-white">Indicação Premiada</span>
                           
                        </Button>
                        <Button
                            disableRipple
                            className="bg-transparent p-0"
                            radius="sm"
                            variant="light"
                        >
                            <span className="hover-effect text-sm xl:text-base text-white">Central de Ajuda</span>
                           
                        </Button>
                        <Button
                            disableRipple
                            className="bg-transparent p-0 border border-zinc-950 flex items-center gap-2 rounded-[6px] px-4 py-2 font-semibold"
                            radius="sm"
                            variant="light"
                        >
                            <span className="hover-effect text-sm xl:text-base font-semibold">Já sou aluno</span>
                            {/* <FontAwesomeIcon
                                className="ml-1"
                                icon={faAngleDown}
                                style={{ fontSize: "12px" }}
                            /> */}
                        </Button>
                    </div>
                </nav>
            </header>
        </div>
    );
}
