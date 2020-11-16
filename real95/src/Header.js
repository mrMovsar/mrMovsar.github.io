import Logo from "./Logo";
import Menu from "./Menu";
function Header(){
    return (
        <div className="Header">
        <div><Logo/></div>
        <div><Menu/></div>
        </div>
    )
}
export default Header;