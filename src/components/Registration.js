import React, { useState } from "react";
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
  const [step, setStep] = useState(2);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

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
    if (step === 1) {
      // Kiểm tra các trường dữ liệu ở bước 1
      if (
        firstName === "" ||
        lastName === "" ||
        username === "" ||
        phoneNumber === "" ||
        address === ""
      ) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }
    }
    setStep(step + 1);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Kiểm tra các trường dữ liệu ở bước cuối
    if (password === "" || rePassword === "") {
      alert("Vui lòng nhập mật khẩu và xác nhận mật khẩu!");
      return;
    }

    if (password !== rePassword) {
      alert("Mật khẩu không khớp!");
      return;
    }

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
              <div className="reg-header d-flex justify-content-center w-100">
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
                    <span>Đăng nhập</span>
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
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-black"
                        label="Họ"
                        id="form1"
                        type="text"
                        size="lg"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </MDBCol>

                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-black"
                        label="Tên"
                        id="form2"
                        type="text"
                        size="lg"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
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
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-black"
                    label="Email"
                    id="formControlRg"
                    type="email"
                    size="lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* Phone Number */}
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-black"
                    label="Số điện thoại"
                    id="formControlRg"
                    type="tel"
                    size="lg"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />

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
                  <div className="input-container mb-4 d-flex align-items-center w-100">
                    <MDBInput
                      labelClass="text-black"
                      label="Nhập mật khẩu"
                      id="formControlLg"
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ maxWidth: "calc(100% - 28px)" }}
                    />
                    <MDBIcon
                      icon={showPassword ? "eye-slash" : "eye"}
                      onClick={togglePasswordVisibility}
                      className="eye-icon"
                      style={{
                        position: "absolute",
                        right: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  {/* Re-enter Password */}
                  <div className="input-container mb-4 d-flex align-items-center w-100">
                    <MDBInput
                      labelClass="text-black"
                      label="Nhập lại mật khẩu"
                      id="formControlLg"
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      value={rePassword}
                      onChange={(e) => setRePassword(e.target.value)}
                      style={{ maxWidth: "calc(100% - 28px)" }}
                    />
                    <MDBIcon
                      icon={showRePassword ? "eye-slash" : "eye"}
                      onClick={toggleRePasswordVisibility}
                      className="eye-icon"
                      style={{
                        position: "absolute",
                        right: "60px",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <div className="rules-box d-flex justify-content-start align-items-start mb-4">
                    <div>
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
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
                    className="mx-2 px-5 w-100"
                    color="white"
                    size="lg"
                    style={{ background: "#779341", borderRadius: "10px" }}
                    type="submit"
                  >
                    Đăng ký
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
