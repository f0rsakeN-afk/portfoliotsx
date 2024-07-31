import { FaSquareFull } from "react-icons/fa6";
const Projects = () => {
    return (
        <div className="container m-auto pt-12 min-h-screen">
            <div className="flex gap-4 items-center justify-center">
                <FaSquareFull size={48} className="rotate-45 text-[#ef4444]" />
                <h2 className="text-6xl pt font-bold text-gray-800 ">Projects</h2>
                <FaSquareFull size={48} className="rotate-45 text-[#ef4444]" />
            </div>

            <h3 className="pt-28 text-5xl font-semibold text-center">Coming soon </h3>
        </div>
    )
}

export default Projects;