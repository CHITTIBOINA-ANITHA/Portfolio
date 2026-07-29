import "./About.css";

import { BookOutlined, ReadOutlined } from "@ant-design/icons";

import Card from "../Card/Card";
import Section from "../Section/Section";
import SectionHeading from "../SectionHeading/SectionHeading";

function About() {
  return (
    <Section id="about">
      <SectionHeading subtitle="About" title="A quick intro" />

      <div className="about">
        <div className="about-left">
          <p>
            I'm a <strong>Software Engineer</strong> with{" "}
            <strong>1.5 years of professional experience</strong> in designing
            and developing modern web applications. My expertise includes{" "}
            <strong>React.js, JavaScript, Java, Spring Boot, Spring Security,
            REST APIs, and MySQL</strong>, enabling me to build responsive user
            interfaces and scalable backend services.
          </p>
           <p>
            During my professional journey, I have worked on enterprise
            applications, developing reusable UI components, integrating REST
            APIs, implementing authentication and role-based access control,
            and collaborating with cross-functional teams to deliver reliable
            and high-quality software solutions.
          </p>
          <p>
            I am passionate about writing clean, maintainable code and
            continuously improving my skills in frontend and backend
            development. My goal is to grow as a{" "}
            <strong>Full Stack Java Developer</strong> while building
            applications that provide excellent user experiences and solve
            real-world business problems.
          </p>
        </div>

        <div className="about-right">
          <Card className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <ReadOutlined />
              </div>

              <h3>Education</h3>
            </div>

            <h4>B.Tech, Computer Science</h4>

            <p className="college">
              Sri Venkateswara College Of Engineering ,Kadapa
            </p>

            <div className="education-footer">
              <span className="cgpa">8.1</span>

              <span className="education-meta">CGPA • 2024</span>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

export default About;
