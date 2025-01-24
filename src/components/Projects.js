import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chapter Reflection",
      description: "Reflecting on lessons learned.",
      imgUrl: projImg1,
    },
    {
      title: "Chapter Reflection",
      description: "Reflecting on lessons learned.",
      imgUrl: projImg2,
    },
    {
      title: "Chapter Reflection",
      description: "Reflecting on lessons learned.",
      imgUrl: projImg3,
    },
    {
      title: "Chapter Reflection",
      description: "Reflecting on lessons learned.",
      imgUrl: projImg4,
    },
    {
      title: "Chapter Reflection",
      description: "Reflecting on lessons learned.",
      imgUrl: projImg5,
    },
    {
      title: "Chapter Reflection",
      description: "Reflecting on lessons learned.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Reflecting from Past Chapters</h2>
                <p>Dokumentasi ini bertujuan untuk merefleksikan momen-momen berharga yang terjadi dalam acara yang telah dilaksanakan tahun lalu, dengan menampilkan berbagai pengalaman dan pelajaran yang dapat diambil dari peristiwa tersebut.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      );
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};