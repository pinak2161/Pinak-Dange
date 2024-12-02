import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import Particle from './Particle';
import Resume from '../assets/Resume.pdf';
import './resume.css';
function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download Button */}
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={Resume}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Display using iframe with dynamic size */}
        <Row
          className="resume"
          style={{
            justifyContent: 'center',
            position: 'relative',
            padding: '20px',
          }}
        >
          <iframe
            src={Resume}
            width-="5%"
            height="600px"  // Use 80% of the viewport height for better sizing
            style={{
              border: 'none',
              maxWidth: '100%',
              maxHeight: '80vh',
              aspectRatio: '16/9', // Optional: maintain a good aspect ratio
            }}
            title="PDF Viewer"
          />
        </Row>

        {/* Another Download Button */}
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={Resume}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
