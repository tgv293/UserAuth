import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

function Signup() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Bắt lỗi
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");

  // Hàm kiểm tra định dạng tên
  const validateName = (name) => {
    const regex = /^[a-zA-ZÀ-ỹ\s]+$/; // Biểu thức chính quy kiểm tra không có ký tự đặc biệt và số, cho phép tiếng Việt và khoảng trắng
    return regex.test(name);
  };

  // Hàm kiểm tra định dạng email
  const validateEmail = (email) => {
    // Biểu thức chính quy để kiểm tra định dạng email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  };

  // Hàm kiểm tra định dạng số điện thoại
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]{10}$/; // Định dạng: 10 chữ số

    return phoneNumberRegex.test(phoneNumber);
  };

  // Hàm kiểm tra độ dài mật khẩu
  const validatePassword = (password) => {
    return password.length >= 6; // Mật khẩu có ít nhất 6 ký tự
  };

  // Ẩn/Hiện mật khẩu
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  useEffect(() => {
    // Kiểm tra xem tất cả các trường input có giá trị và không có lỗi hay không
    const isStep1Complete =
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      phoneNumber !== "" &&
      address !== "" &&
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "" &&
      phoneNumberError === "";

    setNextButtonDisabled(!isStep1Complete);
  }, [
    firstName,
    lastName,
    username,
    phoneNumber,
    address,
    firstNameError,
    lastNameError,
    emailError,
    phoneNumberError,
  ]);

  const handleSignup = (e) => {
    e.preventDefault();

    // Gửi yêu cầu POST lên cơ sở dữ liệu
    fetch("URL_API", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        phoneNumber,
        address,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý dữ liệu phản hồi từ cơ sở dữ liệu
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
                <MDBCol col="5" className="left-header">
                  <h1 className="fw-bold mb-2 fs-5">
                    <span>VNPT Shop</span>
                  </h1>
                  <h2 className="fw-bold mb-5 fs-2">Đăng ký</h2>
                </MDBCol>
                <MDBCol col="3" className="right-header">
                  <h1 className="mt-1 mb-2 fs-6" style={{ color: "#8D8D8D" }}>
                    Đã là thành viên?
                  </h1>
                  <h1 className="fs-6">
                    <Link to="/">
                      <span>Đăng nhập</span>
                    </Link>
                  </h1>
                </MDBCol>
              </div>
              {step === 1 && (
                <form
                  onSubmit={handleNextStep}
                  className="d-flex flex-column align-items-center mx-auto w-100"
                >
                  {/* First Name - Last Name */}
                  <MDBRow>
                    <MDBCol col="6">
                      <div className="input-container">
                        <MDBInput
                          wrapperClass={`mb-${firstNameError ? 0 : 4}`}
                          labelClass="text-black"
                          label="Họ"
                          id="form1"
                          type="text"
                          size="lg"
                          value={firstName}
                          onChange={(e) => {
                            const value = e.target.value;
                            setFirstName(value);
                            if (value === "") {
                              setFirstNameError("");
                            } else if (!validateName(value)) {
                              setFirstNameError("Vi phạm định dạng!");
                            } else {
                              setFirstNameError("");
                            }
                          }}
                        />

                        {firstNameError && (
                          <div className="error-message">{firstNameError}</div>
                        )}
                      </div>
                    </MDBCol>

                    <MDBCol col="6">
                      <div className="input-container">
                        <MDBInput
                          wrapperClass={`mb-${lastNameError ? 0 : 4}`}
                          labelClass="text-black"
                          label="Tên"
                          id="form2"
                          type="text"
                          size="lg"
                          value={lastName}
                          onChange={(e) => {
                            const value = e.target.value;
                            setLastName(value);
                            if (value === "") {
                              setLastNameError("");
                            } else if (!validateName(value)) {
                              setLastNameError("Vi phạm định dạng!");
                            } else {
                              setLastNameError("");
                            }
                          }}
                        />

                        {lastNameError && (
                          <div className="error-message">{lastNameError}</div>
                        )}
                      </div>
                    </MDBCol>
                  </MDBRow>

                  {/* Username */}
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-black"
                    label="Tên đăng nhập"
                    id="formControlRg"
                    type="text"
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
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
                    onChange={(e) => {
                      const value = e.target.value;
                      setEmail(value);
                      if (value === "") {
                        setEmailError("");
                      } else if (!validateEmail(value)) {
                        setEmailError("Email không hợp lệ!");
                      } else {
                        setEmailError("");
                      }
                    }}
                  />

                  {emailError && (
                    <div className="error-message">{emailError}</div>
                  )}

                  {/* PhoneNumber */}
                  <MDBInput
                    wrapperClass={`mb-${phoneNumberError ? 0 : 4} mx-5 w-100`}
                    labelClass="text-black"
                    label="Số điện thoại"
                    id="form4"
                    type="tel"
                    size="lg"
                    value={phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      setPhoneNumber(value);

                      if (value === "") {
                        setPhoneNumberError("");
                      } else if (validatePhoneNumber(value)) {
                        setPhoneNumberError("");
                      } else {
                        setPhoneNumberError("Số điện thoại không hợp lệ!");
                      }
                    }}
                  />

                  {phoneNumberError && (
                    <div className="error-message">{phoneNumberError}</div>
                  )}

                  {/* Address */}
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-black"
                    label="Địa chỉ"
                    id="formControlRg"
                    type="text"
                    size="lg"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  {/* Next Button */}
                  <MDBBtn
                    outline
                    className="mx-2 px-5 w-100"
                    color="white"
                    size="lg"
                    style={{ background: "#779341", borderRadius: "10px" }}
                    type="submit"
                    disabled={nextButtonDisabled}
                  >
                    Tiếp tục
                  </MDBBtn>
                </form>
              )}
              {step === 2 && (
                <form
                  onSubmit={handleSignup}
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
                      label="Nhập mật khẩu"
                      id="formControlLg"
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      value={password}
                      onChange={(e) => {
                        const value = e.target.value;
                        setPassword(value);
                        if (value === "") {
                          setPasswordError("");
                        } else if (!validatePassword(value)) {
                          setPasswordError("Mật khẩu phải có ít nhất 6 ký tự!");
                        } else {
                          setPasswordError("");
                        }
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
                      label="Nhập lại mật khẩu"
                      id="formControlLg"
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      value={rePassword}
                      onChange={(e) => {
                        const value = e.target.value;
                        setRePassword(value);
                        if (value === "") {
                          setRePasswordError("");
                        } else if (value !== password) {
                          setRePasswordError("Mật khẩu chưa trùng khớp!");
                        } else {
                          setRePasswordError("");
                        }
                      }}
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

                  <div className="rules-box d-flex justify-content-start align-items-start mb-4">
                    <div>
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                    </div>
                    <div className="ms-2">
                      <p className="mb-0">
                        Bạn đồng ý với <span>Điều khoản dịch vụ</span> và{" "}
                        <span>Chính sách bảo mật</span> của chúng tôi.
                      </p>
                    </div>
                  </div>

                  {/* Signup Button */}
                  <MDBBtn
                    outline
                    className="signUp-btn mx-2 px-5 w-100"
                    color="white"
                    size="lg"
                    style={{ background: "#779341", borderRadius: "10px" }}
                    type="submit"
                    disabled={
                      password === "" ||
                      rePassword === "" ||
                      passwordError ||
                      rePasswordError ||
                      !isChecked
                    }
                  >
                    <Link to="/">
                      <span>Đăng ký</span>
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

export default Signup;
