//import logo from './logo.svg';
import "./App.css";
import Navy from "./Navbar.js";
import Corsel from "./Carousel.js";
import {Container, Row, Col} from "react-bootstrap";
import Cert from "./Cer.js";
import ContainFoot from "./ContainFoot.js";
import Layout from "./layout.js";
import Skill from "./Skill";
import Timeline from "./Edu";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <>
      <Layout />
      <Skill />
      <Timeline />
      <div className="App">
        {/* <Navy /> */}
        <Container>
          <Row>
            <Col className="pad-top">
              <SimpleReactLightbox>
                <Cert />
              </SimpleReactLightbox>
            </Col>
          </Row>
        </Container>
        <ContainFoot />
      </div>
    </>
  );
}

export default App;
