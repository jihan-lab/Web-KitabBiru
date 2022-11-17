import React from "react";
import {
  DummyHTML,
  IlBasicCat,
  IlCoding,
  IlHomePage,
} from "../../assets/images";
import { Categories, Footer, Navbar, SubCategories } from "../../components";
import "./index.scss";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <section>
      <Fade top>
        <Navbar />
      </Fade>
      <div className="container">
        <div className="row">
          <Fade>
            <div className="col-lg-12">
              <div className="img-wrap-home">
                <img src={IlCoding} className="img-home" />
                <h1 className="welcome-home">Semua dimulai dari hal kecil</h1>
              </div>
            </div>
          </Fade>
          <div className="row mx-auto">
            <div className="text-cat-home my-3">Trend Categories</div>
            <Fade top delay={100}>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 my-2">
                <Categories
                  href="categories"
                  image={IlBasicCat}
                  label="Pemrograman Basic"
                />
              </div>
            </Fade>
            <Fade top delay={200}>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 my-2">
                <Categories
                  href="categories"
                  image={IlBasicCat}
                  label="Pemrograman Basic"
                />
              </div>
            </Fade>
            <Fade top delay={300}>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 my-2">
                <Categories
                  href="categories"
                  image={IlBasicCat}
                  label="Pemrograman Basic"
                />
              </div>
            </Fade>
            <Fade top delay={400}>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 my-2">
                <Categories
                  href="categories"
                  image={IlBasicCat}
                  label="Pemrograman Basic"
                />
              </div>
            </Fade>
            <Fade top delay={500}>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 my-2">
                <Categories
                  href="categories"
                  image={IlBasicCat}
                  label="Pemrograman Basic"
                />
              </div>
            </Fade>
            <Fade top delay={600}>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 my-2">
                <Categories
                  href="categories"
                  image={IlBasicCat}
                  label="Pemrograman Basic"
                />
              </div>
            </Fade>
            <Fade top delay={700}>
              <div className="col-6 col-sm-4 col-md-4 col-lg-2 my-2">
                <Categories
                  href="categories"
                  image={IlBasicCat}
                  label="Pemrograman Basic"
                />
              </div>
            </Fade>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="text-cat-home my-2 mt-5">Module</div>
              <Fade top delay={100}>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                  <SubCategories
                    card_title="HTML"
                    href="/listModule"
                    image_name="html"
                    image={IlHomePage}
                    title="HTML"
                    desc="Programming Basic"
                  />
                </div>
              </Fade>
              <Fade top delay={200}>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                  <SubCategories
                    card_title="HTML"
                    href="/listModule"
                    image_name="html"
                    image={IlHomePage}
                    title="HTML"
                    desc="Programming Basic"
                  />
                </div>
              </Fade>
              <Fade top delay={300}>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                  <SubCategories
                    card_title="HTML"
                    href="/listModule"
                    image_name="html"
                    image={IlHomePage}
                    title="HTML"
                    desc="Programming Basic"
                  />
                </div>
              </Fade>
              <Fade top delay={400}>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                  <SubCategories
                    card_title="HTML"
                    href="/listModule"
                    image_name="html"
                    image={IlHomePage}
                    title="HTML"
                    desc="Programming Basic"
                  />
                </div>
              </Fade>
              <Fade top delay={500}>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                  <SubCategories
                    card_title="HTML"
                    href="/listModule"
                    image_name="html"
                    image={IlHomePage}
                    title="HTML"
                    desc="Programming Basic"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
}

export default Home;
