import React from "react";
import { IlLoginPage } from "../../assets/images";
import { Button, Footer, Input, Navbar } from "../../components";
import "./index.scss";
import Fade from "react-reveal/Fade";

const Login = () => {
  return (
    <section className="login-bg">
      <Fade>
        <Navbar />
        <div className="container text-white" style={{ marginBottom: 100 }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="img-wrap mx-auto">
                <img className="img" src={IlLoginPage} />
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <h1 className="mb-4">Selamat Datang Kembali</h1>
              <Input label="Email" type="email" htmlFor="email" id="email" />
              <Input
                label="Password"
                type="password"
                htmlFor="password"
                id="password"
              />
              <Button className="btn btn-primary w-100">Masuk</Button>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </Fade>
    </section>
  );
};

export default Login;
