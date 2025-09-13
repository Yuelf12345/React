import Style from './index.module.less';
import vipCardImg from '@/assets/vip-card.png';
const UserCard = () => {
    return (
        <div className={Style.userCard}>
            <div className={Style.vipCard}>
                <img src={vipCardImg} alt="" />
            </div>
            <div className={Style.userInfo}>
                <div className={Style.top}>
                    <img className={Style.avatar} src='https://p1.music.126.net/UwgS1wdK8tBHdn0JovDIsQ==/109951170633548386.jpg?param=80y80' />
                    <div className={Style.info}>
                        <h4>有品_Y
                            <span></span>
                        </h4>
                        <a className={Style.level}>
                            Lv.8
                        </a>
                        <div className={Style.signIn}>签到</div>
                    </div>
                </div>
                <ul className={Style.bottom}>
                    <li>
                        <a href="">
                            <strong>4</strong>
                            <span>笔记</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <strong>4</strong>
                            <span>关注</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <strong>4</strong>
                            <span>粉丝</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={Style.singer}>
                <div className={Style.header}>
                    <h4>入住歌手</h4>
                    <a>查看全部 &gt; </a>
                </div>
                <ul className={Style.singerList}>
                    {
                        new Array(10).fill(0).map((item, index) => (
                            <li className={Style.singerItem} key={index}>
                                <img src="https://p2.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=62y62" alt="" />
                                <div className={Style.info}>
                                    <h4 >张惠妹aMEI</h4>
                                    <span>台湾歌手张惠妹</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
export default UserCard;