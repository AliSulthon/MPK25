import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Images for each scholarship (you can replace these with real images)
import kipkImg from "../assets/beasiswa/kipk.jpg";
import unggulanImg from "../assets/beasiswa/unggulan.jpg";
import bpiImg from "../assets/beasiswa/bpi.jpg";
import apertiImg from "../assets/beasiswa/aperti.jpg";
import oscImg from "../assets/beasiswa/osc.jpg";
import bibImg from "../assets/beasiswa/bib.jpg";
import keguruanImg from "../assets/beasiswa/keguruan.jpg";
import baznasImg from "../assets/beasiswa/baznas.jpg";
import bcaImg from "../assets/beasiswa/bca.jpg";
import surabayaImg from "../assets/beasiswa/surabaya.jpg";
import goldGenImg from "../assets/beasiswa/goldgen.jpg";
import perintisImg from "../assets/beasiswa/perintis.jpg";
import petroImg from "../assets/beasiswa/petro.jpg";
import etosImg from "../assets/beasiswa/etos.jpg";
import mahaghoraImg from "../assets/beasiswa/mahaghora.jpg";

export const Beasiswa = () => {

  // Scholarship data
  const scholarships = [
    { title: "KIPK", description: "Kartu Indonesia Pintar adalah program bantuan sosial dari pemerintah Indonesia untuk membantu meringankan beban biaya pendidikan bagi siswa yang berasal dari keluarga kurang mampu.", imgUrl: kipkImg },
    { title: "Beasiswa Unggulan", description: "Beasiswa Unggulan adalah pemberian biaya pendidikan oleh pemerintah Indonesia kepada putra-putri terbaik bangsa Indonesia pada perguruan tinggi penerima peserta didik program Beasiswa Unggulan.", imgUrl: unggulanImg },
    { title: "Beasiswa Pendidikan Indonesia (BPI)", description: "Beasiswa Pendidikan Indonesia adalah program kerja sama antara Kemendikbudristek dengan Lembaga Pengelola Dana Pendidikan (LPDP) Kementerian Keuangan.", imgUrl: bpiImg },
    { title: "Beasiswa APERTI BUMN", description: "Beasiswa Aliansi perguruan tinggi Badan Usaha Milik Negara di 8 Kampus BUMN terbaik.", imgUrl: apertiImg },
    { title: "Beasiswa Online Scholarship Competition", description: "OSC hadir untuk memberikan kemudahan kepada putra-putri Indonesia agar bisa melanjutkan pendidikan hingga jenjang S1 dan S2 dengan beasiswa universitas favorit di Indonesia.", imgUrl: oscImg },
    { title: "Beasiswa Indonesia Bangkit (BIB)", description: "Beasiswa Indonesia Bangkit (BIB) merupakan skema beasiswa prestisius kolaborasi dari Kementerian Agama dan LPDP Kementerian Keuangan untuk masyarakat Indonesia yang ingin mengembangkan karier, pengalaman, dan jaringan kampus di dalam dan luar negeri.", imgUrl: bibImg },
    { title: "Beasiswa Keguruan Rubic", description: "Program beasiswa yang diselenggarakan oleh Yayasan Rumah Bina Cendikia, untuk memfasilitasi siswa-siswi terbaik bangsa yang bercita-cita mengabdikan diri pada bidang pendidikan.", imgUrl: keguruanImg },
    { title: "Beasiswa Baznas", description: "Program penyaluran beasiswa kepada mahasiswa di seluruh Indonesia yang memenuhi kualifikasi dan prosedur yang ditetapkan oleh Lembaga Beasiswa BAZNAS.", imgUrl: baznasImg },
    { title: "Beasiswa BCA", description: "Beasiswa BCA ditujukan kepada para lulusan SMA/SMK/sederajat yang berprestasi.", imgUrl: bcaImg },
    { title: "Beasiswa Pemuda Tangguh Mahasiswa", description: "Beasiswa Pemuda Tangguh adalah beasiswa yang diperuntukan untuk pemuda Surabaya, yang sedang menempuh jenjang pendidikan SMA/SMK/MA Sederajat.", imgUrl: surabayaImg },
    { title: "Beasiswa Indonesian Gold Generation Scholarship", description: "Beasiswa Indonesian Gold Generation Scholarship adalah program beasiswa kolaborasi Telkom University dengan Forum Osis Jawa Barat.", imgUrl: goldGenImg },
    { title: "Program Perintis", description: "Pemberian beasiswa pendidikan kepada siswa SD, SMP, SMA sederajat dan Mahasiswa D3, D-4/S1, S2 yang kurang sejahtera dan atau berprestasi.", imgUrl: perintisImg },
    { title: "BEASISWA PETROKIMIA BESTRO", description: "Beasiswa Bestro S1 yang diberikan oleh perusahaan pupuk terkemuka di Indonesia ini berupa Uang Kuliah Tunggal atau UKT bagi mahasiswa selama 8 semester.", imgUrl: petroImg },
    { title: "Beasiswa ETOS", description: "Etos ID merupakan program investasi Sumber Daya Manusia (SDM) strategis melalui peningkatan dan pengembangan kapasitas serta integritas mahasiswa.", imgUrl: etosImg },
    { title: "Beasiswa Mahaghora", description: "Beasiswa Mahaghora merupakan salah satu bentuk Corporate Social Responsibility (CSR) dari PT Mahaghora untuk mendukung pendidikan di Indonesia.", imgUrl: mahaghoraImg },
  ];

  return (
    <section className="beasiswa" id="beasiswa" style={{ background: 'linear-gradient(135deg, #04349c, #ffd700)', paddingTop: '120px' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#ffd700' }}>Beasiswa</h2>
                  <p style={{ textAlign: 'center', marginBottom: '40px', color: '#fff' }}>Beberapa Beasiswa/Scholarship yang ada di Indonesia baik itu swasta ataupun dari pemerintah.</p>
                  <Row className="justify-content-center">
                    {scholarships.map((scholarship, index) => (
                      <Col md={6} key={index} className="mb-4">
                        <Card style={{ backgroundColor: '#fdf0d5', border: 'none', display: 'flex', flexDirection: 'row' }}>
                          <Card.Img variant="left" src={scholarship.imgUrl} style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '20px' }} />
                          <Card.Body>
                            <Card.Title style={{ color: '#fad02c' }}>{scholarship.title}</Card.Title>
                            <Card.Text style={{ color: '#004aad' }}>
                              {scholarship.description}
                            </Card.Text>
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

export default Beasiswa;