import React from "react";
import { Footer, Navbar } from "../../components";
import "./index.scss";
import Fade from "react-reveal/Fade";

function Module() {
  return (
    <section>
      <Navbar />
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="text-cat-home my-3 mt-5">Pengenalan HTML</div>
              <div className="text-module">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem, corporis fugit adipisci reiciendis obcaecati
                porro laboriosam asperiores iusto voluptatibus nulla possimus
                deserunt at architecto quasi, consequatur accusantium deleniti
                animi omnis modi explicabo? Dolorem esse debitis optio sint
                similique, nobis blanditiis quos amet deleniti soluta ullam
                ipsum consequatur laboriosam. Recusandae quasi fugiat soluta
                tempora error tenetur facilis fuga similique totam! Vel nisi
                nostrum molestias et cumque iure minus, quae necessitatibus
                asperiores omnis. Commodi ad excepturi ipsam quisquam doloribus.
                Rem pariatur in assumenda dolore veritatis, accusantium qui ut
                porro quaerat quae tenetur amet libero veniam esse sunt dolor
                saepe. Nobis obcaecati numquam praesentium tempore hic,
                similique mollitia porro velit corrupti. Distinctio, voluptatum?
                Magnam, quam! Sunt aliquam tenetur, in alias pariatur inventore,
                voluptatibus quos optio, ullam ducimus mollitia! Quaerat cumque
                quidem exercitationem dicta quibusdam at soluta. Expedita id
                aliquam tempore est praesentium ex, alias laudantium vero
                recusandae, consequuntur sunt quasi veritatis molestiae dolorum
                quaerat reiciendis inventore? Inventore, illum recusandae ea
                error repellendus quis, possimus quos, repudiandae temporibus
                porro tempora eaque atque voluptates. Illum voluptate obcaecati
                consectetur, laboriosam, iure non quisquam libero omnis
                consequuntur perferendis, ratione necessitatibus quos maxime
                mollitia aliquam sunt et recusandae! Sequi modi, deserunt, natus
                voluptates laborum earum exercitationem repellat, tenetur
                laboriosam amet saepe quaerat sed error provident commodi enim
                consequatur debitis nobis explicabo nemo aliquid! Dignissimos,
                recusandae? Totam labore perspiciatis reprehenderit dolore
                expedita? Neque quas ad blanditiis libero voluptas. Molestiae
                provident harum libero quidem sapiente est itaque, ab sed vitae
                ut cum illo. Laborum, molestiae odio reiciendis sequi quidem
                dolores, modi sapiente consectetur unde vel ab aliquam deserunt
                culpa velit architecto sed blanditiis iste eveniet doloribus
                dolorem.
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-cat-home my-3 mt-5">
                Contoh Penggunaan HTML
              </div>
              <div className="text-module">
                <pre>
                  <code>
                    {`
<section>
    <Navbar />
    <div className="container">
      <div className="row mx-auto">
        <div className="text-cat-home my-3">Mau belajar apa hari ini ?</div>
        <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
          <SubCategories
            card_title="HTML"
            href="/listModule"
            image_name="html"
            image={IlHomePage}
          >
            MarkUp Language untuk memulai membuat sebuah website
          </SubCategories>
        </div>
      </div>
    </div>
    <div className="mt-5">
      <Footer />
    </div>
</section>
              `}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
}

export default Module;
