import React from "react";
import { DummyHTML, IlHomePage } from "../../assets/images";
import { Footer, Navbar, SubCategories } from "../../components";
import Fade from "react-reveal/Fade";

function CategoriesPage() {
  return (
    <section>
      <Navbar />
      <div className="container">
        <div className="row mx-auto">
          <div className="text-cat-home my-3">Mau belajar apa hari ini ?</div>
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
      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
}

export default CategoriesPage;
