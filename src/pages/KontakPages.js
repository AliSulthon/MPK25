import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ContactAlumni = () => {

  // Alumni data
  const alumni = [
    { name: "MUHAMMAD FARROSY", campus: "UB", phone: "089519200307" },
    { name: "Fauzan Izzul Haq", campus: "PPNS", phone: "085334385605" },
    { name: "Ahmad Widad Romdhoni", campus: "UMG", phone: "085894657672" },
    { name: "Naashirul Haq", campus: "UINSA", phone: "081232069899" },
    { name: "Muhammad Ainul Yaqin", campus: "UB", phone: "085749388120" },
    { name: "Roisul Ummamul Manaf", campus: "UNESA", phone: "081358405893" },
    { name: "Raden Muh Abror Ikonansyah", campus: "UI", phone: "081252038509" },
    { name: "Muhammad Agung Budi Prasetyo", campus: "UNESA", phone: "085604172148" },
    { name: "Faza nuha ulwani", campus: "UB", phone: "083832133152" },
    { name: "M. Muamar Azmi", campus: "UTM", phone: "083849945086" },
    { name: "Muhammad Rusydi Nuryadin", campus: "UINSA", phone: "082337170600" },
    { name: "Muhammad Misy'al Ammar", campus: "PPNS", phone: "085104444135" },
    { name: "Alief Kurnia athik", campus: "POLTEK-Si", phone: "085334385781" },
    { name: "Muhammad Azkaa Al Royhaan", campus: "IPB", phone: "089637524612" },
    { name: "Imam Khusaini Satrio", campus: "UM", phone: "085855334175" },
    { name: "Hafiz Andrian Alfaruq", campus: "UNESA", phone: "087853044756" },
    { name: "Abdullah subhan Al aziz", campus: "LIPIA", phone: "085738757967" },
    { name: "Ghulam Halim", campus: "LIPIA", phone: "087719295535" },
    { name: "Al Muktafi Billah", campus: "LIPIA", phone: "083150780350" },
    { name: "M.Khafi Azmi A", campus: "UINSA", phone: "085648379857" }
  ];

  // Group alumni by campus
  const groupedAlumni = alumni.reduce((acc, alum) => {
    if (!acc[alum.campus]) {
      acc[alum.campus] = [];
    }
    acc[alum.campus].push(alum);
    return acc;
  }, {});

  return (
    <section className="contact-alumni" id="contact-alumni" style={{ background: 'linear-gradient(135deg, #04349c, #ffd700)', paddingTop: '120px' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#ffd700' }}>Kontak Alumni</h2>
                  <p style={{ textAlign: 'center', marginBottom: '40px' }}>Berikut adalah daftar kontak alumni yang dapat dihubungi, dikelompokkan berdasarkan kampus mereka.</p>
                  <Row className="justify-content-center">
                    {Object.keys(groupedAlumni).map((campus, index) => (
                      <Col md={6} key={index} className="mb-4">
                        <Card style={{ backgroundColor: '#fdf0d5', border: 'none' }}>
                          <Card.Body>
                            <Card.Title style={{ color: '#ffd700' }}>{campus}</Card.Title>
                            <ListGroup variant="flush">
                              {groupedAlumni[campus].map((alumni, idx) => (
                                <ListGroup.Item key={idx} style={{ backgroundColor: 'transparent', color: '#004aad' }}>
                                  <strong>{alumni.name}</strong>: {alumni.phone}
                                </ListGroup.Item>
                              ))}
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};



export default ContactAlumni;