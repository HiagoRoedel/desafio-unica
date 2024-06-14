export default function FirstSectionHeader() {
    return (
        <div className="text-base grid-cols-12 hidden lg:flex justify-center w-full bg-black py-3 font-poppins" id="mobile-menu-2" aria-label="Global">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-28 lg:mt-0">
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-white transition duration-300 ease-in-out hover:text-purple-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0">Graduação</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-white transition duration-300 ease-in-out hover:text-purple-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0">Segunda Graduação</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-white transition duration-300 ease-in-out hover:text-purple-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0">Pós-Graduação</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-white transition duration-300 ease-in-out hover:text-purple-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0">Disciplinas Isoladas</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-white transition duration-300 ease-in-out hover:text-purple-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0">Cursos Grátis</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-white transition duration-300 ease-in-out hover:text-purple-600 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0">Bolsas de Estudo</a>
                </li>
            </ul>
        </div>
    );
}
