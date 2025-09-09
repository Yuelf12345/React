import { useState } from "react";
import Style from "./index.module.less";
import classnames from "classnames";
interface SubNavProps {
    subNavList: Array<any>
}
const SubNav = ({ subNavList }: SubNavProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    }
    return (
        <div className={Style.subNav}>
            <ul >
                {subNavList.map((item, index) => (
                    <li key={index}>
                        <a onClick={() => handleNavClick(index)}>
                            <em className={
                                classnames(Style.navItem, {
                                    [Style.active]: index === activeIndex
                                })
                            }>{item.text}</em>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubNav;