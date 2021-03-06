import {Navbar, section} from "react-bootstrap";
import "./App.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(fas, fab, far);

export default function Layout() {
  return (
    <>
      <section className="et-hero-tabs" id="tabhome">
        <h1>APISAK SRIPRASERT</h1>
        <h3>
          I am graduated in major of Information Technology at Rajamangala
          University of Technology Krungthep.
        </h3>
        <h3>
          Then I need to improve my coding skill and learn new programming
          language.
        </h3>
        <h3>And Hopefully someone give me a chance</h3>
        <h1>
          <a className="js-scroll-into-skill" href="javascript:void(0);">
            <FontAwesomeIcon icon={["fas", "angle-double-down"]} />
          </a>
        </h1>
      </section>
      <Navbar sticky="top" className="et-hero-tabs-container p-0">
        <a className="et-hero-tab js-scroll-into-tabhome" href="#tabhome">
          Home
        </a>
        <a className="et-hero-tab js-scroll-into-tabskill" href="#tabskill">
          Skill
        </a>
        <a className="et-hero-tab js-scroll-into-tabedu" href="#tabedu">
          Education
        </a>
        <a className="et-hero-tab js-scroll-into-tabcer" href="#tabcer">
          Certificate
        </a>
        <span className="et-hero-tab-slider"></span>
      </Navbar>
    </>
  );
}
