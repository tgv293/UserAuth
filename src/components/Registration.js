import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  setStep,
  setFirstName,
  setLastName,
  setUsername,
  setEmail,
  setDateOfBirth,
  setPhoneNumber,
  setAddress,
  setPassword,
  setRePassword,
  setIsChecked,
  setFirstNameError,
  setLastNameError,
  setEmailError,
  setPhoneNumberError,
  setNextButtonDisabled,
  setPasswordError,
  setRePasswordError,
  setShowPassword,
  setShowRePassword,
  setIsFocused,
} from "../redux/signupSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    step,
    firstName,
    lastName,
    username,
    email,
    dateOfBirth,
    phoneNumber,
    address,
    password,
    rePassword,
    isChecked,
    firstNameError,
    lastNameError,
    emailError,
    phoneNumberError,
    nextButtonDisabled,
    passwordError,
    rePasswordError,
    showPassword,
    showRePassword,
    isFocused,
    currentDate,
  } = useSelector((state) => state.signup);

  // Ẩn/Hiện mật khẩu
  const togglePasswordVisibility = () => {
    dispatch(setShowPassword(!showPassword));
  };
  const toggleRePasswordVisibility = () => {
    dispatch(setShowRePassword(!showRePassword));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    dispatch(setStep(step + 1));
  };

  useEffect(() => {
    const isStep1Complete =
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      email !== "" &&
      firstNameError === "" &&
      lastNameError === "" &&
      emailError === "";

    const isStep2Complete =
      phoneNumber !== "" && address !== "" && phoneNumberError === "";

    if (step === 1) {
      dispatch(setNextButtonDisabled(!isStep1Complete));
    } else if (step === 2) {
      dispatch(setNextButtonDisabled(!isStep2Complete));
    }
  }, [
    step,
    firstName,
    lastName,
    username,
    email,
    firstNameError,
    lastNameError,
    emailError,
    phoneNumber,
    address,
    phoneNumberError,
  ]);

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
  //Hàm kiểm tra ấn vào datepicker
  const handleFocus = () => {
    dispatch(setIsFocused(true));
  };
  //Hàm kiểm tra rời datepicker
  const handleBlur = () => {
    dispatch(setIsFocused(false));
  };
  //Kiểm tra input First Name
  const handleFirstNameChange = (e) => {
    const firstNameValue = e.target.value;
    dispatch(setFirstName(firstNameValue));

    if (firstNameValue.length === 0) {
      dispatch(setFirstNameError("Không được để trống!"));
    } else if (!validateName(firstNameValue)) {
      dispatch(setFirstNameError("Vi phạm định dạng!"));
    } else {
      dispatch(setFirstNameError(""));
    }
  };
  //Kiểm tra input Last Name
  const handleLastNameChange = (e) => {
    const lastNameValue = e.target.value;
    dispatch(setLastName(lastNameValue));

    if (lastNameValue.length === 0) {
      dispatch(setLastNameError("Không được để trống!"));
    } else if (!validateName(lastNameValue)) {
      dispatch(setLastNameError("Vi phạm định dạng!"));
    } else {
      dispatch(setLastNameError(""));
    }
  };
  //Kiểm tra input Username
  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;
    dispatch(setUsername(usernameValue));
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
  //Kiểm tra input Phone Number
  const handlePhoneNumberChange = (e) => {
    const phoneNumberValue = e.target.value;
    dispatch(setPhoneNumber(phoneNumberValue));

    if (phoneNumberValue.length === 0) {
      dispatch(setPhoneNumberError("Không được để trống!"));
    } else if (!validatePhoneNumber(phoneNumberValue)) {
      dispatch(setPhoneNumberError("Vi phạm định dạng số điện thoại!"));
    } else {
      dispatch(setPhoneNumberError(""));
    }
  };
  //Kiểm tra input Address
  const handleAddressChange = (e) => {
    const addressValue = e.target.value;
    dispatch(setAddress(addressValue));
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

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    dispatch(setIsChecked(checked));
  };

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    // Kiểm tra xem ngày được chọn có lớn hơn ngày hiện tại hay không
    if (selectedDate > currentDate) {
      // Nếu ngày được chọn lớn hơn, đặt giá trị ngày sinh là ngày hiện tại
      dispatch(setDateOfBirth(currentDate));
    } else {
      // Nếu ngày được chọn nhỏ hơn hoặc bằng ngày hiện tại, đặt giá trị ngày sinh là ngày được chọn
      dispatch(setDateOfBirth(selectedDate));
    }
  };

  const handleSubmit = async () => {
    const formattedBirthdate = dateOfBirth.split("-").reverse().join("/");
    const newUser = {
      lastName: lastName,
      firstName: firstName,
      userName: username,
      Email: email,
      phoneNumber: phoneNumber,
      Birthdate: dateOfBirth,
      Role: "User",
      Address: address,
      passWord: password,
    };

    try {
      const response = await axios.post(
        "https://64a4e0ad00c3559aa9bec3c3.mockapi.io/Users",
        newUser
      );
      console.log(response.data); // Log thông tin user đã tạo thành công
      // Reset form và chuyển đến trang thành công
      navigate("/");
    } catch (error) {
      console.log(error); // Log lỗi nếu có
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
                          onChange={handleFirstNameChange}
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
                          onChange={handleLastNameChange}
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
                    onChange={handleUsernameChange}
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
                    disabled={nextButtonDisabled}
                  >
                    Tiếp tục
                  </MDBBtn>
                </form>
              )}
              {step === 2 && (
                <form
                  onSubmit={handleNextStep}
                  className="d-flex flex-column align-items-center mx-auto w-100"
                >
                  {/* Date of Birth */}
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-black"
                    label="Ngày sinh"
                    id="formControlRg"
                    type={isFocused ? "date" : "text"}
                    size="lg"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={dateOfBirth}
                    onChange={handleDateChange}
                    max={currentDate}
                  />

                  {/* PhoneNumber */}
                  <MDBInput
                    wrapperClass={`mb-${phoneNumberError ? 0 : 4} mx-5 w-100`}
                    labelClass="text-black"
                    label="Số điện thoại"
                    id="form4"
                    type="tel"
                    size="lg"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
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
                    onChange={handleAddressChange}
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
              {step === 3 && (
                <form className="d-flex flex-column align-items-center mx-auto w-100">
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
                      label="Nhập lại mật khẩu"
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

                  <div className="rules-box d-flex justify-content-start align-items-start mb-4">
                    <div>
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
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
                    onClick={handleSubmit} // Thêm onClick event handler vào nút Đăng ký
                  >
                    <span>Đăng ký</span>
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
