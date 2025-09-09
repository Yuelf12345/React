import { useState } from "react";
import style from "./index.module.less";
import { SearchOutlined } from '@ant-design/icons';
import { Input, Avatar } from 'antd';
import NavItem from "./components/navItem";
import SubNav from "./components/subNav";
import avatarImg from '@/assets/avatar.jpg';
const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const navList = [
        { text: "发现音乐", href: "/home" },
        { text: "我的音乐", href: "/playlist" },
        { text: "关注", href: "/djradio" },
        { text: "商城", href: "/rank" },
        { text: "音乐人", href: "/singer" },
        { text: "云推歌", href: "/album" },
        { text: "下载客户端", href: "/album" }
    ];

    const subNavList = [
        { text: "推荐", href: "/home" },
        { text: "歌单", href: "/playlist" },
        { text: "排行榜", href: "/rank" },
        { text: "播客", href: "/singer" },
        { text: "歌手", href: "/singer" },
        { text: "新碟上架", href: "/album" }
    ];

    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className={style.navContainer}>
                <h1 className={style.logo}>
                    <a href="/home">网易云音乐</a>
                </h1>
                <ul className={style.nav}>
                    {navList.map((item, index) => (
                        <NavItem
                            key={item.text}
                            text={item.text}
                            href={item.href}
                            isActive={index === activeIndex}
                            onClick={() => handleNavClick(index)}
                        />
                    ))}
                </ul>
                <div className={style.search}>
                    <Input
                        placeholder="音乐/视频/电台/用户"
                        prefix={<SearchOutlined />}
                        className={style.searchInput}
                    />
                </div>
                <a className={style.creatorCenter}>创作者中心</a>
                <Avatar className={style.avatar} src={avatarImg} size={32} />
            </div>
            <SubNav
                subNavList={!activeIndex ? subNavList : []}
            />
        </>
    )
}

export default Nav