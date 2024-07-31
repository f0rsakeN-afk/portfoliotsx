import { FaSquareFull } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="container mx-auto pt-12 px-4 xl:px-0 ">
            <div className="flex gap-4 items-center justify-center">
                <FaSquareFull size={48} className="rotate-45 text-red-500" aria-label="decorative square" />
                <h2 className="text-6xl font-bold text-gray-800">Contact</h2>
                <FaSquareFull size={48} className="rotate-45 text-red-500" aria-label="decorative square" />
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">
                    Phone Number: <a href="tel:+9779742302747" className="text-blue-600">+977-9742302747</a>
                </h2>
                <h2 className="text-xl font-semibold text-gray-800">
                    Email: <a href="mailto:xyz@gmail.com" className="text-blue-600">xyz@gmail.com</a>
                </h2>
            </div>
            <p className=" py-2 text-gray-700 text-center">Copyright &copy; 2024 Naresh Rajbanshi</p>
        </div>
    );
};

export default Contact;
