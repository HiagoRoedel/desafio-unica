'use client'

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useState } from 'react';
import FirstSectionHeader from "./FirstSectionHeader/firstsectionheader";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { IoMdSunny } from "react-icons/io";


export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container mx-auto ${darkMode ? 'dark' : ''}`}>
            <div>
               <FirstSectionHeader />
            </div>

            <div className={`bg-black shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg lg:bg-transparent lg:backdrop-blur-xl ${darkMode ? 'dark:bg-gray-900 dark:bg-opacity-80 dark:backdrop-filter dark:backdrop-blur-lg' : ''}`}>
                <div className="lg:hidden px-4 py-2 flex items-center justify-center">
                    <Image
                        src="/logo-unica.webp"
                        width={182}
                        height={182}
                        alt="Faculdade Única"
                        className="h-12 w-auto"
                    />
                    <button className="ml-4 text-yellow-500 dark:text-gray-400" onClick={toggleDarkMode}>
                            {darkMode ? (
                                <WiMoonAltThirdQuarter />
                            ) : (
                                <IoMdSunny />
                            )}
                        </button>
                </div>

                <header className="container mx-auto px-4 lg:px-8 pb-4 pt-8 hidden lg:block">
                    <nav className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <Image
                                src="/logo-unica.webp"
                                width={182}
                                height={182}
                                alt="Faculdade Única"
                                className="h-12 w-auto"
                            />
                        </div>
                        <div className="flex lg:flex-1 justify-center hidden lg:block">
                            <input
                                type="search"
                                id="default-search"
                                className={`block w-full px-4 py-2 text-sm placeholder-gray-400 bg-white border border-gray-300 focus:outline-none focus:ring-purple-800 focus:border-purple-800 ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : ''}`}
                                placeholder="Pesquisar por um curso..."
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button
                                disableRipple
                                className={`hover-effect text-sm xl:text-base font-semibold ${darkMode ? 'dark:text-white' : 'text-white'} `}
                                radius="sm"
                                variant="light"
                            >
                                Nossas Áreas
                            </Button>
                            <Button
                                disableRipple
                                className={`hover-effect text-sm xl:text-base font-semibold ${darkMode ? 'dark:text-white' : 'text-white'} `}
                                radius="sm"
                                variant="light"
                            >
                                Vidas Transformadas
                            </Button>
                            <Button
                                disableRipple
                                className={`hover-effect text-sm xl:text-base font-semibold ${darkMode ? 'dark:text-white' : 'text-white'} `}
                                radius="sm"
                                variant="light"
                            >
                                Blog
                            </Button>
                            <Button
                                disableRipple
                                className={`hover-effect text-sm xl:text-base font-semibold ${darkMode ? 'dark:text-white' : 'text-white'} `}
                                radius="sm"
                                variant="light"
                            >
                                FAQ
                            </Button>
                            <Button
                                disableRipple
                                className={`hover-effect border border-white px-4 py-2 text-sm xl:text-base font-semibold ${darkMode ? 'dark:text-white' : 'text-white'} `}
                                radius="sm"
                                variant="light"
                            >
                                Já sou aluno
                            </Button>
                        </div>
                        
                        <button className="ml-4" onClick={toggleDarkMode}>
                            {darkMode ? (
                                <WiMoonAltThirdQuarter />
                            ) : (
                                <IoMdSunny />
                            )}
                        </button>
                    </nav>
                </header>
            </div>
        </div>
    );
}
