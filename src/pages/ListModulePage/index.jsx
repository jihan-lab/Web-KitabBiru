import React from "react";
import { Footer, ListModule, Navbar } from "../../components";
import "./index.scss";
import Fade from "react-reveal/Fade";

function ListModulePage() {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="text-cat-home my-4 mt-5">HTML</div>
          <ul>
            <Fade top>
              <li>
                <ListModule href="/module" label="01. Pengenalan HTML" />
              </li>
              <li>
                <ListModule href="/module" label="01. Pengenalan HTML" />
              </li>
              <li>
                <ListModule href="/module" label="01. Pengenalan HTML" />
              </li>
              <li>
                <ListModule href="/module" label="01. Pengenalan HTML" />
              </li>
            </Fade>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
}

export default ListModulePage;
