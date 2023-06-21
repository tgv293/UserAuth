import React from "react";
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

function Login() {
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
              <div className="login-header d-flex justify-content-center w-100">
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
                    <span>Đăng ký</span>
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
                type="email"
                size="lg"
              />
              {/* Password */}
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-black"
                label="Mật khẩu"
                id="formControlLg"
                type="password"
                size="lg"
              />
              {/* Remember me - Forgot Password */}
              <div className="d-flex justify-content-between mb-4 w-100">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Ghi nhớ đăng nhập"
                />
                <a href="!#">Quên mật khẩu?</a>
              </div>
              {/* Login Button */}
              <MDBBtn
                outline
                className="mx-2 px-5 w-100"
                color="white"
                size="lg"
                style={{ background: "#779341", borderRadius: "10px" }}
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
