import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import logo from "../logo.png";
import "./userAuth.css";
import {
  setUsername,
  setPassword,
  setShowError,
  setRememberMe,
  setShowPassword,
} from "../redux/authSlice";

function Login() {
  const dispatch = useDispatch();
  const { username, password, showError, rememberMe, showPassword } =
    useSelector((state) => state.auth);

  // Hàm để chuyển đổi hiển thị mật khẩu
  const togglePasswordVisibility = () => {
    dispatch(setShowPassword(!showPassword));
  };
  // Xử lý khi checkbox "Ghi nhớ đăng nhập" thay đổi
  const handleRememberMe = (e) => {
    dispatch(setRememberMe(e.target.checked));
  };

  // Kiểm tra localStorage để xác định xem có thông tin đăng nhập đã lưu hay không
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
      dispatch(setUsername(storedUsername));
      dispatch(setPassword(storedPassword));
      dispatch(setRememberMe(true));
    }
  }, []);

  const handleLogin = () => {
    // Kiểm tra thông tin đăng nhập với cơ sở dữ liệu
    if (username === "admin" && password === "123456") {
      // Xử lý logic đăng nhập thành công
      dispatch(setShowError(false)); // Ẩn thông báo lỗi (nếu có)

      if (rememberMe) {
        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        // Xóa thông tin đăng nhập khỏi localStorage nếu không ghi nhớ
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Tiến hành đăng nhập
      // ...
    } else {
      // Hiển thị thông báo lỗi
      dispatch(setShowError(true));
    }
  };

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <MDBContainer fluid>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" width="15%" />
      </div>
      <MDBRow className="d-flex justify-content-center align-items-center vh-100">
        <MDBCol col="6"></MDBCol>
        <MDBCol col="6">
          <MDBCard
            className="text-black mx-auto"
            style={{
              borderRadius: "1rem",
              maxWidth: "450px",
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              backdropFilter: "blur(10px)",
            }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              {/* Header */}
              <div className="form-header d-flex justify-content-center w-100">
                <MDBCol col="5" className="left-header">
                  <h1 className="fw-bold mb-2 fs-5">
                    <span>VNPT Shop</span>
                  </h1>
                  <h2 className="fw-bold mb-5 fs-2">Đăng nhập</h2>
                </MDBCol>
                <MDBCol col="3" className="right-header">
                  <h1 className="mt-1 mb-2 fs-6" style={{ color: "#8D8D8D" }}>
                    Chưa là thành viên?
                  </h1>
                  <h1 className="fs-6">
                    {/* Chuyển hướng người dùng sang trang Signup */}
                    <Link to="/signup">
                      <span>Đăng ký</span>
                    </Link>
                  </h1>
                </MDBCol>
              </div>
              {/* Social Media Login */}
              <div className="socialMedia d-flex flex-row mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="button"
                  style={{ color: "white" }}
                >
                  <div className="icon">
                    <MDBIcon fab icon="google" size="lg" />
                  </div>
                  <span>Google</span>
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="button"
                  style={{ color: "white" }}
                >
                  <div className="icon">
                    <MDBIcon fab icon="facebook-f" size="lg" />
                  </div>
                  <span>Facebook</span>
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="button"
                  style={{ color: "white" }}
                >
                  <div className="icon">
                    <MDBIcon fab icon="apple" size="lg" />
                  </div>
                  <span>Apple ID</span>
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="button"
                  style={{ color: "white" }}
                >
                  <div className="icon">
                    <MDBIcon fab icon="github" size="lg" />
                  </div>
                  <span>Github</span>
                </MDBBtn>
              </div>
              {/* username/Email */}
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-black"
                label="Tên đăng nhập/Email"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(e) => dispatch(setUsername(e.target.value))}
              />
              {/* Password */}
              <div
                className={`input-container d-flex align-items-center w-100 ${
                  showError ? `mb-0` : `mb-4`
                }`}
              >
                <MDBInput
                  labelClass="text-black"
                  label="Mật khẩu"
                  id="formControlLg"
                  type={showPassword ? "text" : "password"}
                  size="lg"
                  value={password}
                  onChange={(e) => {
                    dispatch(setPassword(e.target.value));
                  }}
                  style={{ maxWidth: "calc(100% - 28px)" }}
                />
                <MDBIcon
                  icon={showPassword ? "eye" : "eye-slash"}
                  onClick={togglePasswordVisibility}
                  className="eye-icon"
                  style={{
                    position: "absolute",
                    right: "60px",
                    cursor: "pointer",
                  }}
                />
              </div>

              {/* Hiển thị thông báo lỗi nếu cần */}
              {showError && (
                <div className="error-message">
                  Thông tin không chính xác! Mời nhập lại!
                </div>
              )}
              {/* Remember me - Forgot Password */}
              <div className="rf d-flex justify-content-between mb-4 w-100">
                <MDBCheckbox
                  name="rememberMeCheckbox"
                  value=""
                  id="rememberMeCheckbox"
                  label="Ghi nhớ đăng nhập"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <Link to="/forgotpass">
                  <span>Quên mật khẩu?</span>
                </Link>
              </div>
              {/* Login Button */}
              <MDBBtn
                outline
                className="mx-2 px-5 w-100"
                color="white"
                size="lg"
                style={{ background: "#779341", borderRadius: "10px" }}
                onClick={handleLogin}
                disabled={!isFormValid} // Vô hiệu hóa nút khi form không hợp lệ
              >
                Đăng nhập
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
