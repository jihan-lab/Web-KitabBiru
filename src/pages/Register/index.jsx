import React from "react";
import { Button, Footer, Input, Navbar } from "../../components";
import Fade from "react-reveal/Fade";

function Register() {
  return (
    <section>
      <Fade>
        <Navbar />
        <div className="container">
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-lg-6">
              <h1 className="mb-4">Mulai Berbagi Ilmu</h1>
              <Input
                label="Nama Lengkap"
                htmlFor="full_name"
                id="full_name"
                type="name"
              />
              <Input
                label="Pekerjaan"
                htmlFor="profession"
                id="profession"
                type="name"
              />
              <Input label="Email" htmlFor="email" id="email" type="email" />
              <Input
                label="Tempat Pendidikan Terkahir"
                htmlFor="education"
                id="education"
                type="name"
              />
              <Input
                label="Nama Perusahaan Bekerja"
                htmlFor="company"
                id="company"
                type="name"
              />
              <Input
                label="Password"
                htmlFor="password"
                id="password"
                type="password"
              />
              <Button
                type="link"
                href="/home"
                className="btn btn-primary w-100"
              >
                Daftar
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </Fade>
    </section>
  );
}

export default Register;
