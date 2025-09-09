import { Outlet } from "react-router-dom";
import Nav from "./nav";
import style from "./index.module.less";
const Layout = () => {
    return <>
        <div className={style.layout}>
            <div className={style.top}>
                <Nav />
            </div>
            <div className={style.content}>
                <Outlet />
            </div>
        </div>
    </>
}

export default Layout