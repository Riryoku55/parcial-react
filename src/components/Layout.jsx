import React from 'react';
import NavbarMenu from './Navbar';
import { Container, Row, Col } from 'reactstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-dark text-white text-center p-3">
        <h1>Cinemateca Boliviana</h1>
      </header>

      <NavbarMenu />

      <main className="my-4">
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>

      <footer className="bg-light border-top p-3">
        <Container>
          <Row>
            <Col md="8">
              <p className="text-muted">© 2025 Alexander Edgar Saire Mendoza.</p>
            </Col>
            <Col md="4">
              <div className="bg-warning text-center p-2">
                <strong>INF-122 Progamación web II</strong>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
