import "./footer.scss";
import FacebookIcon from "../../access/facebook-footer.png";
import YoutubeIcon from "../../access/youtube-footer.png";
import Logo from "../../access/logo-footer.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <ul>
          <li>
            <img src={Logo} alt="" width={20} />
          </li>
          <li>
            <p>Giới thiệu</p>
          </li>
          <li>
            <p>Cơ hội việc làm</p>
          </li>
          <li>
            <p>Đối tác</p>
          </li>
        </ul>
      </div>
      <div className="right">
        <img src={FacebookIcon} alt="" width={17.5} height={17.5} />
        <img src={YoutubeIcon} alt="" width={17.5} height={17.5} />
      </div>
    </div>
  );
};

export default Footer;
