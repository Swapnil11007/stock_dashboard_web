import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';


const { Title, Text } = Typography;

const About = () => {
  return (
    <div>
      
      <Title level={2} style={{ textAlign: 'center', marginTop: '70px', marginBottom:'30px' }}>Our Team</Title>

      <Row gutter={[16, 16]} justify="center">
        <Col span={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Sam</Title>
              <Text strong>CEO & Founder</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>Sam@example.com</Text><br/>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Sandy</Title>
              <Text strong>CFO</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>Sandy@example.com</Text><br/>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Ash</Title>
              <Text strong>HOD</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>Ash@example.com</Text><br/>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;

