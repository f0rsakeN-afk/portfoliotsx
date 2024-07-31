import Logo from "./Logo"
import ResumeButton from "./ResumeButton"


const Navbar = () => {
  return (
    <div className="container m-auto px-4 xl:px-0 py-2">
       <div className="flex items-center justify-between">
              <Logo />
              <ResumeButton />
       </div>
    </div>
  )
}

export default Navbar