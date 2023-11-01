import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

// const items: MenuItem[] = [
//     getItem('Option 1', '/option1', <PieChartOutlined />),
//     getItem('Option 2', '/option2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

const items: MenuItem[] = [
    {
        label: 'Option1',
        key: '/option1',
        icon: <PieChartOutlined />
    },
    {
        label: 'Option2',
        key: '/option2',
        icon: <DesktopOutlined />
    },
    {
        label: 'Option3',
        key: '/option3',
        icon: <UserOutlined />,
        children: [
            {
                label: 'Option3-1',
                key: '/option31'
            },
            {
                label: 'Option3-2',
                key: '/option32'
            }
        ]
    }
]

const MenuComp: React.FC = () => {
    const navigateTo = useNavigate()
    const { pathname } = useLocation()

    
    const res:any = items.find((option: any) => {
        if(option.children){
            return option.children && option.children.some((child: any) => child.key === pathname);
        }
    });
    console.log('---------------',res);
    let openKey: string = res?.key || ''
    const [openKeys, setOpenKeys] = useState([openKey])

    // console.log(currentRouter);

    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }
    const handleOpenChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu theme="dark" defaultSelectedKeys={[pathname]} mode="inline" items={items} onOpenChange={handleOpenChange} openKeys={openKeys} onClick={menuClick} />
    )
}
export default MenuComp;