import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Faq() {
    const questions = [
        "O que é graduação?",
        "Como funciona a Graduação EAD?",
        "Por que fazer o EAD?",
        "Qual faculdade EaD escolher?",
        "Qual curso EaD fazer?",
        "Quem faz EaD pode fazer mestrado?",
        "Quem faz faculdade EaD tem formatura?",
    ];
    return (
        <div className="bg-black">
            <div className="container mx-auto p-4 text-white">
                <div className="pt-12 text-center mb-8 definirfonte">
                    <h1 className="text-3xl font-bold mb-2">Perguntas Frequentes</h1>
                </div>
                <ul className="space-y-4">
                    {questions.map((question, index) => (
                        <li key={index} className="content item-menu-footer">
                            <button className="w-full flex items-center justify-between button-tag-faq text-white p-4 text-left">
                                <span>{question}</span>
                                <span className="flex items-center justify-center h-6 w-6 border border-white ml-2">
                                    <FontAwesomeIcon icon={faTimes} className="text-white h-3 w-3" />
                                </span>
                            </button>
                            <div className="w-full h-1 bg-gray-200 mt-2">
                                <div className="bg-white h-1"></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
