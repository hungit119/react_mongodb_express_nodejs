import "./Login.scss";
import React from "react";
import StdIcon from "../../../access/std.png";
import GGIcon from "../../../access/logingg.png";
import FBIcon from "../../../access/loginfb.png";
import GitIcon from "../../../access/logingit.png";
import loginF8 from "../../../access/loginf8.png";

import { useGoogleAuth } from "../google/GoogleLogin";
import { Navigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const Login = () => {
  const { signIn, isSignedIn } = useGoogleAuth();
  const [login, setLogin] = React.useState(false);

  return isSignedIn ? (
    <Navigate to={"/"} />
  ) : (
    <div className="Login">
      <div className="wrap-login" style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "48px",
          }}
        >
          <img src={loginF8} alt="" style={{ marginBottom: "16px" }} />
          <h3 style={{ fontWeight: 800 }}>Đăng nhập vào F8</h3>
        </div>

        {login ? (
          <div className="login-std">
            <div className="head-login">
              <p>Số điện thoại</p>
              <p>Đăng nhập với email</p>
            </div>
            <form>
              <input type="text" name="std" className="input-std" />
              <select className="std">
                {<option value="+84">VN +84</option>}
              </select>
              <input type="text" name="mk" className="input-mk" />
              <button>Đăng nhập</button>
            </form>
          </div>
        ) : (
          <div className="form-login">
            <div className="btn">
              <img src={StdIcon} alt="" width={16} />
              <div
                className="btn-btn"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setLogin(true);
                }}
              >
                Sử dụng email / số điện thoại
              </div>
            </div>
            <div className="btn">
              <img src={GGIcon} alt="" width={16} />
              <div
                className="btn-btn"
                onClick={async () => {
                  await signIn();
                }}
              >
                Tiếp tục với Google
              </div>
            </div>
            <div className="btn">
              <img src={FBIcon} alt="" width={16} />
              <div className="btn-btn">Tiếp tục với Facebook</div>
            </div>
            <div className="btn">
              <img src={GitIcon} alt="" width={16} />
              <div className="btn-btn">Tiếp tục với Github</div>
            </div>
          </div>
        )}

        <div>
          Nếu bạn chưa có tài khoản?{" "}
          <span style={{ color: "#F05123", fontWeight: "700" }}>Đăng ký</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
