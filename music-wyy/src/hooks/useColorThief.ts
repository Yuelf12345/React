import { useState } from 'react';
import ColorThief from 'colorthief';

const useColorThief = () => {

    const [colorThief] = useState(() => new ColorThief());
    // 创建并加载图片的辅助函数
    const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // 处理跨域问题
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    };

    const getColorThief = async (src: string) => {
        const img = await loadImage(src);

        // 获取调色板
        const colors = colorThief.getPalette(img, 5);
        // 将颜色转换为RGB字符串
        const colorStrings = colors.map((color: number[]) =>
            `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        );
        // 设置渐变背景
        const gradient = `linear-gradient(135deg, ${colorStrings[0]} 0%, ${colorStrings[1]} 25%, ${colorStrings[2]} 50%, ${colorStrings[3]} 75%, ${colorStrings[4]} 100%)`;
        return gradient;
    };

    return {
        getColorThief
    }
}

export default useColorThief;