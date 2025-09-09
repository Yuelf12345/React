import classnames from "classnames";
import Style from "./index.module.less";

interface NavProps {
  text: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ text, href, isActive, onClick }: NavProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <li className={Style.navItem}>
      <span>
        <a
          className={classnames({
            [Style.active]: isActive,
          })}
          aria-current={isActive ? "page" : undefined}
          href={href}
          onClick={handleClick}
        >
          <em> {text}</em>
          <sub className={classnames({
            [Style.cor]: isActive,
          })}>&nbsp;</sub>
        </a>
      </span>
    </li>
  );
};

export default NavItem;