import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  padding: 40px 20px;
  background: linear-gradient(135deg, #f3f3f3 0%, #e2e2e2 100%);
  max-width: 900px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const TimelineTitle = styled.h1`
  font-family: 'Arial', sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const TimelineItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.align === 'left' ? 'flex-start' : 'flex-end')};
  text-align: ${props => (props.align === 'left' ? 'left' : 'right')};
  cursor: pointer;

  &:nth-child(even) {
    align-items: flex-start;
    text-align: left;
  }

  &:nth-child(odd) {
    align-items: flex-end;
    text-align: right;
  }
`;

const TimelineContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  transition: max-height 0.8s ease, opacity 0.8s ease;
  overflow: hidden;
  max-height: 70px;
  opacity: 0.85;

  ${TimelineItem}:hover & {
    max-height: 1000px;
    opacity: 1;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin: 0;
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: #1a202c;
  z-index: -1;
`;

const Timeline = () => {
  const timelineData = [
    {
      date: 'Present',
      title: 'University Of Mindanao - BSIT',
      description: 'At the University of Mindanao, pursuing a Bachelor of Science in Information Technology. My coursework has provided me with a comprehensive understanding of core IT principles, including database management, software development, network administration, and cybersecurity. I am actively engaged in honing my practical skills through coursework, projects, and internships, where I have gained hands-on experience in applying theoretical knowledge to real-world scenarios. This academic journey has not only deepened my technical proficiency but also instilled in me a commitment to continuous learning and adaptation to emerging technologies.',
    },
    {
      date: '2018 - 2020',
      title: 'Senior High - ICT Philippine\'s Women College of Davao',
      description: 'In senior high school, I immersed myself in a diverse array of subjects, including Python, Java, JavaScript, PHP, HTML, and CSS, which fueled my passion for pursuing a career as a web developer. The opportunity to learn these programming languages and delve into web development techniques not only broadened my technical expertise but also ignited my creativity in creating dynamic, visually captivating designs and functional interfaces. I am driven by the challenge of crafting detailed solutions that not only meet technical standards but also enhance user experience and operational efficiency.',
    },
    {
      date: '2014 - 2018',
      title: 'Junior High - Davao City National High School',
      description: 'I was introduced to the dynamic world of Information Communication Technology (ICT), where my curiosity was ignited to delve deeper into various IT-related disciplines. This initial exposure motivated me to pursue further studies, particularly focusing on computer hardware servicing. Through hands-on experience and formal education, I honed my skills in troubleshooting, maintaining, and upgrading computer systems. This journey not only enriched my technical knowledge but also solidified my passion for IT, paving the way for continuous learning and growth in the field.',
    },
  ];

  return (
    <TimelineContainer>
      <Header>
        <TimelineTitle>Timeline</TimelineTitle>
      </Header>
      <TimelineItemContainer>
        <VerticalLine />
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            align={index % 2 === 0 ? 'right' : 'left'}
          >
            <TimelineContent>
              <Date>{item.date}</Date>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineItemContainer>
    </TimelineContainer>
  );
};

export default Timeline;
