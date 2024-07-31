import { NavLink } from "react-router-dom"
import { TiTick } from "react-icons/ti";

const Logo: React.FC = () => {
    return (
        <NavLink to='/'>
            <h2 className="flex items-center gap-1 text-3xl font-semibold pt">Naresh <Tick /></h2>
        </NavLink>

    )
}
export default Logo;

const Tick = () => {
    return (
        <span className=""><TiTick className="text-[#EF4444]" size={48} /></span>
    )
}