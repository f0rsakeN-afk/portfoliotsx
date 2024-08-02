import git from '../data/git.png'
import link from '../data/link.webp'

const Socials = () => {
    return (
        <div className='pt-4 flex items-center gap-8'>
            <a href="https://github.com/f0rsakeN-afk" className='hover:scale-125 transition-all ease-in-out duration-200 hover:shadow-2xl hover:border border-slate-100 p-1 rounded-md'>
                <img src={git} alt="github logo" className='h-12' />
            </a>
            <a href="https://www.linkedin.com/in/f0rsaken/" className="hover:scale-125 transition-all ease-in-out duration-200 hover:shadow-2xl hover:border border-slate-100 p-1 rounded-md">
                <img src={link} alt="linkedin logo" className='h-12' />
            </a>
        </div>
    )
}

export default Socials