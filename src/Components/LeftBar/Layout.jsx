import "./Layout.css"
import { FaHome } from "react-icons/fa";

const Layout = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar_icon">
                    <FaHome className="navbar_icon_item"/>
                </div>
            </div>
        </>
    );
}
export default Layout;