import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const KampusPage = () => {

  // List of universities
  const universities = [
    "Universitas Terbuka (UT)", "Universitas Gadja Mada (UGM)", "Universitas Indonesia (UI)", "Institut Teknologi Bandung (ITB)", 
    "Institut Teknologi Sepuluh November Surabaya (ITS)", "Institut Pertanian Bogor (IPB)", "Universitas Udayana (UNUD)", 
    "Universitas Padjadjaran (Unpad)", "Universitas Diponegoro (Undip)", "Universitas Airlangga (Unair)", "Universitas Brawijaya (UB)", 
    "Universitas Hasanuddin (UNHAS)", "Universitas Jember (Unej)", "Universitas Sebelas Maret (UNS)", "Universitas Jenderal Soedirman (Unsoed)",
    "Universitas Pendidikan Indonesia (UPI)", "Universitas Negeri Yogyakarta (UNY)", "Universitas Negeri Malang (UM)", 
    "Universitas Negeri Semarang (Unnes)", "Universitas Negeri Jakarta (UNJ)", "Universitas Negeri Surabaya (Unesa)", 
    "Universitas Pendidikan Ganesha (Undiksha)", "UPN Veteran Jakarta", "UPN Veteran Jawa Timur", "UPN Veteran Yogyakarta", 
    "Universitas Trunojoyo Madura (UTM)", "Universitas Andalas (UNAND)", "Universitas Sriwijaya (UNSRI)", "Universitas Nusa Cendana", 
    "Universitas Syiah Kuala", "Institut Teknologi Sumatera (Itera)", "Institut Teknologi Kalimantan (ITK)", 
    "Institut Seni Indonesia Yogyakarta", "Institut Seni Indonesia Denpasar", "Institut Seni Indonesia Surakarta", 
    "Universitas Islam Negeri Syarif Hidayatullah, Jakarta", "Universitas Islam Negeri Sunan Gunung Djati, Bandung", 
    "Institut Agama Islam Negeri Syekh Nurjati Cirebon", "Universitas Islam Negeri Sunan Kalijaga, Yogyakarta", 
    "Universitas Islam Negeri Walisongo, Semarang", "Universitas Islam Negeri Raden Mas Said, Surakarta", 
    "Universitas Islam Negeri Prof. KH. Saifuddin Zuhri, Purwokerto", "UIN Salatiga", "Universitas Islam Negeri Abdurrahman Wahid, Pekalongan", 
    "Institut Agama Islam Negeri Kudus", "Universitas Islam Negeri Maulana Malik Ibrahim, Malang", "Universitas Islam Negeri Mataram", 
    "Universitas Islam Negeri KH. Achmad Siddiq, Jember", "Universitas Islam Negeri Sayyid Ali Rahmatullah, Tulungagung", 
    "Institut Agama Islam Negeri Madura", "Institut Agama Islam Negeri Kediri", "Institut Agama Islam Negeri Ponorogo", 
    "Universitas Islam Negeri Alauddin Makassar", "Universitas Islam Negeri Raden Fatah, Palembang", 
    "Universitas Islam Negeri Raden Intan, Lampung", "Universitas Islam Negeri Sumatera Utara, Medan", 
    "Universitas Islam Negeri Sultan Syarif Kasim, Riau", "Universitas Islam Negeri Ar-Raniry Banda Aceh", 
    "Universitas Islam Negeri Imam Bonjol, Padang", "Institut Agama Islam Negeri Malikussaleh, Lhokseumawe", 
    "Politeknik Elektronika Negeri Surabaya", "Politeknik Manufaktur Negeri Bandung", "Politeknik Negeri Jakarta", 
    "Politeknik Negeri Semarang", "Politeknik Negeri Jember", "Politeknik Negeri Bandung", "Sekolah Tinggi Intelijen Negara", 
    "Politeknik Siber dan Sandi Negara", "Sekolah Tinggi Meteorologi Klimatologi dan Geofisika", "Politeknik Statistika STIS", 
    "Politeknik Keuangan Negara STAN", "Institut Pemerintahan Dalam Negeri", "Politeknik Keselamatan Transportasi Jalan (PKTJ) Tegal", 
    "Politeknik Transportasi Sungai, Danau, dan Penyeberangan (Poltrans SDP) Palembang", 
    "Politeknik Transportasi Darat Indonesia", "Politeknik Perkeretaapian Indonesia (PPI) Madiun", 
    "Politeknik Transportasi Darat (Poltrada) Bali", "Sekolah Tinggi Ilmu Pelayaran (STIP) Jakarta", "Politeknik Pelayaran (STIP) Semarang", 
    "Politeknik Pelayaran (STIP) Makassar", "Politeknik Pelayaran (STIP) Malahayati Aceh", "Politeknik Pelayaran (STIP) Sumatera Barat", 
    "Politeknik Pelayaran (STIP) Surabaya", "Politeknik Pelayaran (STIP) Banten", "Politeknik Pelayaran (STIP) Barombong", 
    "Politeknik Penerbangan Indonesia (PPI) Curug", "Politeknik Penerbangan (Poltekbang) Surabaya", "Politeknik Penerbangan (Poltekbang) Medan", 
    "Politeknik Penerbangan (Poltekbang) Makassar", "Politeknik Penerbangan (Poltekbang) Palembang", "Politeknik Penerbangan (Poltekbang) Jayapura", 
    "Politeknik Ilmu Pemasyarakatan (POLTEKIP)", "Politeknik Imigrasi (Poltekim)", "Politeknik Negeri Bali", 
    "Politeknik Perkapalan Negeri Surabaya", "Politeknik Negeri Kupang", "Politeknik Negeri Malang", 
    "Institut Teknologi Adhi Tama Surabaya (ITATS)", "Politeknik Negeri Batam", "Politeknik Negeri Madura", 
    "Politeknik Maritim Negeri Indonesia", "Politeknik Negeri Madiun", "Politeknik Negeri Banyuwangi", "Politeknik ATK Yogyakarta", 
    "Poltekkes Kemenkes Bandung", "Poltekkes Kemenkes Jakarta I", "Poltekkes Kemenkes Jakarta II", "Poltekkes Kemenkes Jakarta III", 
    "Poltekkes Kemenkes Yogyakarta", "Poltekkes Kemenkes Semarang", "Poltekkes Kemenkes Surakarta", "Poltekkes Kemenkes Surabaya", 
    "Poltekkes Kemenkes Malang", "Poltekkes Kemenkes Denpasar", "Sekolah Tinggi Ilmu Tarbiyah Maskumambang (STITMas)", 
    "Universitas Telkom", "Universitas Pertamina", "Universitas Internasional Semen Indonesia", 
    "Universitas Muhammadiyah Malang", "Universitas Muhammadiyah Surabaya", "Universitas Muhammadiyah Gresik", 
    "Universitas Muhammadiyah Lamongan", "Universitas Muhammadiyah Sidoarjo", "Universitas Muhammadiyah Semarang", 
    "Universitas Muhammadiyah Yogyakarta", "Universitas Muhammadiyah Surakarta", "Universitas Ahmad Dahlan", 
    "Universitas Islam Indonesia (UII)", "Universitas Surabaya (Ubaya)", "Universitas Islam Malang (Unisma)", 
    "Universitas PGRI Adi Buana Surabaya", "Universitas Merdeka Malang", "Universitas Nahdlatul Ulama Surabaya", 
    "Universitas Ciputra", "Universitas Pelita Harapan (UPH)", "Universitas Bina Nusantara (Binus University)", 
    "Universitas Mercu Buana (UMB)", "Universitas Islam Sultan Agung (Unissula)", "Universitas Multimedia Nusantara (UMN)", 
    "Universitas Sarjanawiyata Tamansiswa", "Universitas Trisakti", "President University", 
    "Universitas Islam Darul Ulum (Unisda) Lamongan", "Universitas Islam Lamongan (Unisla)", "Universitas Al Azhar Indonesia", 
    "Universitas 17 Agustus 1945 (Untag) Surabaya", "Universitas AMIKOM Yogyakarta", "STIDKI Ar-Rahmah Surabaya", 
    "STKIP Al-Hikmah", "LIPIA", "Ma'had Aly An-Nuaimy", "STID Al-Hikmah Jakarta", "Universitas ‘Aisyiyah Yogyakarta", 
    "Politeknik Negeri Media Kreatif"
  ];

  return (
    <section className="kampus" id="kampus" style={{ background: 'linear-gradient(135deg, #04349c, #ffd700)', paddingTop: '120px' }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#ffd700' }}>Daftar Universitas</h2>
                  <p style={{ textAlign: 'center', marginBottom: '40px', color: '#fff' }}>Berikut adalah daftar universitas yang ada di Indonesia</p>
                  <Row className="justify-content-center">
                    {universities.map((university, index) => (
                      <Col md={6} key={index} className="mb-4">
                        <Card style={{ backgroundColor: '#fdf0d5', border: 'none' }}>
                          <Card.Body>
                            <Card.Title style={{ color: '#004aad' }}>{university}</Card.Title>
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

export default KampusPage;