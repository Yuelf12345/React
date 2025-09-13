import Style from './index.module.less';
const Popular = () => {
    const tab: string[] = ['华语', '流行', '摇滚', '民谣', '电子'];
    return (
        <div className={Style.popular}>
            <div className={Style.header}>
                <a>热门推荐</a>
                <div className={Style.tab}>
                    {
                        tab.map((item, index) => (
                            <>
                                <a key={index}>{item}</a>
                                {
                                    (index !== tab.length - 1) ? (
                                        <span key={index} className={Style.tabLine}>|</span>
                                    ) : null
                                }
                            </>
                        ))
                    }
                </div>
                <div className={Style.more}>
                    <a>更多</a>
                    <i className={Style.icon}></i>
                </div>
            </div>
            <ul className={Style.cardList}>
                {
                    new Array(16).fill(0).map((item, index) => (
                        <li className={Style.card} key={index}>
                            <img src="https://p2.music.126.net/o9A-kJtQuHsLSNrKVOqEhQ==/18890709277132382.jpg?param=140y140" alt="" />
                            <div className={Style.bottom}>
                                <span className={Style.headset}></span>
                                <span className={Style.playCount}>3701万</span>
                                <a className={Style.play}></a>
                            </div>
                            <p className={Style.dec}>赶走阴霾 来一首欢快的欧美小调</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
export default Popular;