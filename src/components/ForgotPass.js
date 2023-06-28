import React from "react";
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
} from "mdb-react-ui-kit";
import logo from "../logo.png";
import "./userAuth.css";
import {
  setStep,
  setEmail,
  setPassword,
  setRePassword,
  setOTP,
  setShowPassword,
  setShowRePassword,
  setEmailError,
  setPasswordError,
  setRePasswordError,
  setIsOTPValid,
} from "../redux/forgotPassSlice";

function ForgotPass() {
  const dispatch = useDispatch();
  const {
    step,
    email,
    password,
    rePassword,
    otp,
    showPassword,
    showRePassword,
    emailError,
    passwordError,
    rePasswordError,
    isOTPValid,
  } = useSelector((state) => state.forgotPass);

  // Ẩn/Hiện mật khẩu
  const togglePasswordVisibility = () => {
    dispatch(setShowPassword(!showPassword));
  };
  const toggleRePasswordVisibility = () => {
    dispatch(setShowRePassword(!showRePassword));
  };

  // Hàm kiểm tra định dạng email
  const validateEmail = (email) => {
    // Biểu thức chính quy để kiểm tra định dạng email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  };
  // Hàm kiểm tra độ dài mật khẩu
  const validatePassword = (password) => {
    return password.length >= 6; // Mật khẩu có ít nhất 6 ký tự
  };

  const handleNextStep = (e) => {
    e.preventDefault();

    dispatch(setStep(step + 1));
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      dispatch(setIsOTPValid(false));
      dispatch(setStep(step + 1));
    } else dispatch(setIsOTPValid(true));
  };

  const handleChangePass = (e) => {
    e.preventDefault();
  };
  //Kiểm tra input Email
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    dispatch(setEmail(emailValue));

    if (emailValue.length === 0) {
      dispatch(setEmailError("Không được để trống!"));
    } else if (!validateEmail(emailValue)) {
      dispatch(setEmailError("Vi phạm định dạng email!"));
    } else {
      dispatch(setEmailError(""));
    }
  };
  //Kiểm tra input OTP
  const handleOTPChange = (e) => {
    dispatch(setOTP(e.target.value));
  };
  //Kiểm tra input Password
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    dispatch(setPassword(passwordValue));

    if (passwordValue.length === 0) {
      dispatch(setPasswordError("Không được để trống!"));
    } else if (!validatePassword(passwordValue)) {
      dispatch(setPasswordError("Mật khẩu phải có ít nhất 6 ký tự!"));
    } else {
      dispatch(setPasswordError(""));
    }
  };
  //Kiểm tra input RePassword
  const handleRePasswordChange = (e) => {
    const rePasswordValue = e.target.value;
    dispatch(setRePassword(rePasswordValue));

    if (rePasswordValue.length === 0) {
      dispatch(setRePasswordError("Không được để trống!"));
    } else if (rePasswordValue !== password) {
      dispatch(setRePasswordError("Mật khẩu chưa trùng khớp!"));
    } else {
      dispatch(setRePasswordError(""));
    }
  };

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
              transition: "transform 0.3s ease",
            }}
          >
            <MDBCardBody className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              {/* Header */}
              <div className="form-header d-flex justify-content-center w-100">
                <MDBCol col="12" className="left-header">
                  <h1 className="fw-bold mb-2 fs-5">
                    <span>VNPT Shop</span>
                  </h1>
                  <h2 className="fw-bold mb-5 fs-2">Quên mật khẩu</h2>
                </MDBCol>
              </div>
              {step === 1 && (
                <form
                  onSubmit={handleNextStep}
                  className="d-flex flex-column align-items-center mx-auto w-100"
                >
                  <div className="mb4">
                    <p>
                      Để bắt đầu quá trình đặt lại mật khẩu, vui lòng cung cấp
                      địa chỉ email đã đăng ký với tài khoản của bạn.
                    </p>
                  </div>
                  {/* Email*/}
                  <MDBInput
                    wrapperClass={`mb-${emailError ? 0 : 4}
                    mx-5 w-100`}
                    labelClass="text-black"
                    label="Email"
                    id="form3"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={handleEmailChange}
                  />

                  {emailError && (
                    <div className="error-message">{emailError}</div>
                  )}

                  {/* Next Button */}
                  <MDBBtn
                    outline
                    className="mx-2 px-5 w-100"
                    color="white"
                    size="lg"
                    style={{ background: "#779341", borderRadius: "10px" }}
                    type="submit"
                    disabled={email === "" || emailError} // Vô hiệu hóa nút khi email không hợp lệ
                  >
                    Tiếp tục
                  </MDBBtn>
                </form>
              )}

              {step === 2 && (
                <form
                  onSubmit={handleSubmitOtp}
                  className="d-flex flex-column align-items-center mx-auto w-100"
                >
                  <div style={{ textAlign: "justify" }}>
                    <p>
                      Chúng tôi đã gửi một mã OTP đến địa chỉ email đã đăng ký
                      của bạn. Vui lòng nhập mã OTP vào ô dưới đây để hoàn tất
                      quá trình đặt lại mật khẩu.
                    </p>
                  </div>
                  {/* OTP Input */}
                  <MDBInput
                    wrapperClass={`mb-${isOTPValid ? 0 : 4}
                    mx-5 w-100`}
                    labelClass="text-black"
                    label="Nhập OTP"
                    id="otpControl"
                    type="text"
                    size="lg"
                    value={otp}
                    onChange={handleOTPChange}
                  />
                  {/* Hiển thị thông báo lỗi nếu cần */}
                  {isOTPValid && (
                    <div className="error-message">
                      OTP không chính xác! Mời nhập lại!
                    </div>
                  )}

                  {/* OTP Submit Button */}
                  <MDBBtn
                    outline
                    className="mx-2 px-5 w-100"
                    color="white"
                    size="lg"
                    style={{ background: "#779341", borderRadius: "10px" }}
                    type="submit"
                    disabled={otp === ""}
                    onClick={handleSubmitOtp}
                  >
                    Xác nhận OTP
                  </MDBBtn>
                </form>
              )}

              {step === 3 && (
                <form
                  onSubmit={handleChangePass}
                  className="d-flex flex-column align-items-center mx-auto w-100"
                >
                  {/* Password */}
                  <div
                    className={`input-container d-flex align-items-center w-100 ${
                      passwordError ? `mb-0` : `mb-4`
                    }`}
                  >
                    <MDBInput
                      labelClass="text-black"
                      label="Nhập mật khẩu mới"
                      id="formControlLg"
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      value={password}
                      onChange={handlePasswordChange}
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
                  {passwordError && (
                    <div className="error-message">{passwordError}</div>
                  )}
                  {/* Re-enter Password */}
                  <div
                    className={`input-container d-flex align-items-center w-100 ${
                      rePasswordError ? `mb-0` : `mb-4`
                    }`}
                  >
                    <MDBInput
                      labelClass="text-black"
                      label="Nhập lại mật khẩu mới"
                      id="formControlLg"
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      value={rePassword}
                      onChange={handleRePasswordChange}
                      style={{ maxWidth: "calc(100% - 28px)" }}
                    />
                    <MDBIcon
                      icon={showRePassword ? "eye" : "eye-slash"}
                      onClick={toggleRePasswordVisibility}
                      className="eye-icon"
                      style={{
                        position: "absolute",
                        right: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                  {rePasswordError && (
                    <div className="error-message">{rePasswordError}</div>
                  )}

                  {/* Change Pass Button */}
                  <MDBBtn
                    outline
                    className="chPass-btn mx-2 px-5 w-100"
                    color="white"
                    size="lg"
                    style={{ background: "#779341", borderRadius: "10px" }}
                    type="submit"
                    disabled={
                      password === "" ||
                      rePassword === "" ||
                      passwordError ||
                      rePasswordError
                    }
                  >
                    <Link to="/">
                      <span>Xác nhận đổi mật khẩu</span>
                    </Link>
                  </MDBBtn>
                </form>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ForgotPass;
