
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "./projectData";
import ProjectCard from "./ProjectCard";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Atharva_Resume.pdf";
    link.download = "Atharva_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="about"
      className="px-4 md:px-12 lg:px-24 py-16 text-white"
      style={{
        background: "linear-gradient(to bottom, #0D1B2A, #1B263B)",
      }}
    >
      <div className="space-y-12">

        {/* --------- Heading --------- */}
        <h2 className="text-2xl md:text-3xl font-bold color-pulse">
          About Me
        </h2>

        {/* --------- Intro Paragraph --------- */}
        <p className="text-lg leading-relaxed max-w-5xl">
          I am a passionate <span className="font-bold text-[#D4AF37]">Software Developer</span>,
          <span className="font-bold text-[#D4AF37]"> Data Science enthusiast</span>, and
          <span className="font-bold text-[#D4AF37]"> AWS Certified Cloud Practitioner</span>
          with a track record of building unique projects that solve real-world problems.
          I enjoy transforming complex challenges into impactful solutions through innovative design,
          intelligent systems, and robust cloud architectures.
        </p>

        {/* --------- Education Section --------- */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#D4AF37]">Education</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <a
                href="https://www.illinois.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="institution-link font-bold text-lg"
              >
                MS in Information Management - University of Illinois Urbana-Champaign
              </a>
              <p>GPA: 4/4</p>
            </div>
            <div className="space-y-1">
              <a
                href="https://www.vit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="institution-link font-bold text-lg"
              >
                B.Tech in Electronics and Telecommunication - Vishwakarma Institute of Technology, Pune
              </a>
              <p>GPA: 3.5/4</p>
            </div>
          </div>
        </div>

        {/* --------- Skills Section --------- */}
        <div className="space-y-6">
          <h3 id="skills" className="text-2xl md:text-3xl font-bold color-pulse">Skills</h3>
          <div className="space-y-2">
            {[
              { label: "Programming Languages", details: "HTML, CSS, JavaScript, x86 Assembly Language, C, C++, Python, Java" },
              { label: "Frameworks and Runtimes", details: "Node.js, Express.js, React.js, Embedded JavaScript (EJS), Spring Boot" },
              { label: "Databases", details: "MongoDB, MySQL, DynamoDB" },
              { label: "Packages", details: "Data Structures, OOPs, OpenCV, Neural Networks, PyTorch, LLMs" },
              { label: "Computer Fundamentals", details: "Operating Systems, DBMS, Computer Networking" },
              { label: "Data Analysis & Visualization", details: "Tableau, Power BI" },
              { label: "AWS Cloud", details: "EC2, S3, RDS, VPC, IAM, ELB, Auto Scaling, CloudWatch, Route 53, CloudFormation, EBS, EFS, Lambda, SNS, SQS" },
              { label: "System Design", details: "Microservices, RESTful APIs, Load Balancing, Caching, Sharding, Fault Tolerance" }
            ].map((item, i) => (
              <div className="skill-row" key={i}>
                <span className="skill-label">{item.label}</span>
                <span className="skill-arrow">&gt;</span>
                <span className="skill-details">{item.details}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --------- Experience Section --------- */}
        <div className="space-y-6">
          <h3 id="experience" className="text-2xl md:text-3xl font-bold color-pulse">Experience</h3>
          <div className="space-y-2">

            {/* New RA Experience */}
            <div className="space-y-2">
              <div className="flex justify-between items-center font-bold">
                <span>Center of Health Informatics (UIUC), Graduate Research Assistant</span>
                <span className="color-pulse">(Jul 2025 – Present)</span>
              </div>
              <ExperienceScroller points={[
                "Spearheaded AI-driven tool for misinformation detection in short-form videos",
                "Integrated Whisper transcription, LLM classification, and keyword visualization",
                "Designed end-to-end pipeline supporting OpenAI/Azure models with fallback",
                "Implemented chunked video processing and real-time Streamlit UI",
                "Built JSON-based prompt parser for “debunked” vs “misinformation” labels",
                "Conducted token-aware NLP analysis for robust health communication"
              ]} />
            </div>

            {/* Previous Lecturer Experience */}
            <div className="space-y-2">
              <div className="flex justify-between items-center font-bold">
                <span>Adarsh College of Computer and Management, Lecturer</span>
                <span className="color-pulse">(July 2023–May 2024)</span>
              </div>
              <ExperienceScroller />
            </div>

          </div>
        </div>

        {/* --------- Projects Section --------- */}
        <div className="space-y-12">
          <h3 id="projects" className="text-2xl md:text-3xl font-bold color-pulse">Projects</h3>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* --------- Certifications Section --------- */}
        <div className="space-y-6">
          <h3 id="certifications" className="text-2xl md:text-3xl font-bold color-pulse">
            Certifications
          </h3>
          <div className="space-y-2">
            {[
              {
                name: "AWS Certified Cloud Practitioner",
                details: "Validation Number: 67f6580b7c5d46b4a647609208817fd9",
                url: "https://drive.google.com/file/d/15WxTjLR1m4-sswbhqoD7-rjQWumNm1k6/view?usp=sharing"
              },
              {
                name: "ERA V2",
                details: "AI & Deep Learning certificate: DNNs, transformers, GANs & AWS MLOps",
                url: "https://drive.google.com/file/d/1UTSpLqylBggCm82ikEz2lfrDFjIiCG3p/view"
              },
              {
                name: "Masterclass in C",
                details: "Year-long C Masterclass covering C, assembly, Linux/Windows system, and GUI programming",
                url: "https://drive.google.com/file/d/1sA9sO43XRSJfcr-qBrRm6l-VKSsWmsdG/view"
              }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden flex items-center py-2"
              >
                <span
                  className="
                    absolute bottom-0 left-0 h-[2px] bg-[#D4AF37]
                    w-full transform scale-x-0
                    group-hover:scale-x-100 origin-left
                    transition-transform duration-500
                  "
                />
                <span className="flex items-center">
                  <span className="mr-4">{cert.name}</span>
                  <span className="!text-[#D4AF37]">&gt;</span>
                </span>
                <span
                  className="
                    ml-4 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 flex-1
                  "
                >
                  {cert.details}
                </span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#D4AF37] whitespace-nowrap"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* --------- Achievements Section --------- */}
        <div className="space-y-12 achv-container">
          <h3 id="achievements" className="text-2xl md:text-3xl font-bold color-pulse">
            Achievements
          </h3>
          {[
            {
              text: "Presented paper at the 5th International Conference on Intelligent Computing (IEEE) (March 25–26, 2022)",
              url: "https://drive.google.com/file/d/19iFyeDaew9IWV2pbaVHVrHcESnVWzOi5/view"
            },
            {
              text: "Presented paper at International Conference on Computational Intelligence, Network and Security (IEEE) (December 22-23, 2023)",
              url: "https://drive.google.com/file/d/1klw5Wn-yA0TKH6MI2eHAIhukfvunAN3M/view"
            },
            {
              text: "Awarded as Best Teacher of the Semester in the very first semester of teaching",
              url: null
            }
          ].map(({ text, url }, idx) => {
            const Wrapper: any = url ? "a" : "div";
            const wrapperProps = url
              ? { href: url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <div key={idx} className="w-full">
                <Wrapper
                  {...wrapperProps}
                  className="achv-link group flex items-start gap-2 w-full transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <span className="text-[#D4AF37] text-base golden-pulse achv-arrow" style={{ animationDuration: "1s" }}>
                    &gt;
                  </span>
                  <span className="text-white group-hover:!text-[#D4AF37] transition-colors duration-200 text-base achv-text flex-1 leading-snug">
                    {text}
                  </span>
                </Wrapper>
              </div>
            );
          })}
        </div>

        {/* --------- Resume Section --------- */}
        <div className="space-y-6">
          <h3 id="resume" className="text-2xl md:text-3xl font-bold color-pulse">Resume</h3>
          <div className="resume-container">
            <embed
              src="/Atharva_Resume.pdf#toolbar=0&view=fitH"
              type="application/pdf"
              className="resume-embed"
            />
            <button onClick={handleDownload} className="download-button">
              <span className="arrow-pulse">&gt;</span>
              <span className="download-text">Download Resume</span>
            </button>
          </div>
        </div>

      </div>

      {/* --------- Contact Me Section --------- */}
      <div className="space-y-6">
        <h3 id="contact" className="text-2xl md:text-3xl font-bold color-pulse">
          Contact Me
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="/outlook.png"
              alt="Email"
              className="w-16 h-16 animate-pulse drop-shadow-[0_0_8px_#D4AF37] [animation-duration:3s]"
            />
            <span className="text-lg text-white">
              ac151@illinois.edu
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/phone.png"
              alt="Phone"
              className="w-16 h-16 animate-pulse drop-shadow-[0_0_8px_#D4AF37] [animation-duration:3s]"
            />
            <span className="text-lg text-white">
              +1-(447)-902-6162
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src="/github.png"
              alt="Location"
              className="w-16 h-16 animate-pulse drop-shadow-[0_0_8px_#D4AF37] [animation-duration:3s]"
            />
            <span className="text-lg text-white">
              Champaign, IL
            </span>
          </div>
        </div>
      </div>

      {/* --------- Footer: Connect with Me --------- */}
      <div
        className="mt-16 py-12"
        style={{
          background: "linear-gradient(to bottom, #0D1B2A, #1B263B)"
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 color-pulse">
          Connect with me
        </h3>
        <div className="flex justify-center gap-10 flex-wrap">
          <a
            href="https://github.com/atharvasatishchaudhari"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="/github_1.png"
              alt="GitHub"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/atharva-chaudhari-83a16a209/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </a>
          <a
            href="https://leetcode.com/u/Atharva2711/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="/leetcode.png"
              alt="LeetCode"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </a>
          <a
            href="https://www.instagram.com/atharvasc27"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src="/instagram.png"
              alt="Instagram"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function ExperienceScroller({ points }: { points?: string[] }) {
  const defaultPoints = [
    "Led lectures on C Language, Data Structures, Operating Systems, and Neural Networks for Bachelor of Computer Applications (BCA) students across all years, fostering strong understanding and practical skills.",
    "Contributed actively to the School Improvement Community, collaborating with educators and stakeholders to develop and implement initiatives that enhance the overall educational environment and student outcomes.",
    "Analyzed student performance through data analysis, identifying trends and areas for support.",
    "Analyzed over 200 individual student records utilizing advanced pivot tables and statistical functions in Excel; provided detailed reports that enhanced understanding of academic strengths and weaknesses, facilitating tailored support strategies.",
    "Handled administrative tasks such as managing schedules, maintaining student records, and tracking attendance with Excel.",
    "Conducted workshop on the future scope after completing the BCA for 300+ students in the college.",
    "Awarded as Best Teacher of the Semester award in the very first semester of the teaching"
  ];
  const pts = points ?? defaultPoints;

  const [startIndex, setStartIndex] = useState(0);
  const canScrollDown = startIndex + 3 < pts.length;
  const canScrollUp = startIndex > 0;

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <AnimatePresence mode="wait">
          {pts.slice(startIndex, startIndex + 3).map(point => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-2"
            >
              <span className="text-[#D4AF37]">&gt;</span>
              <span>{point}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => canScrollUp && setStartIndex(prev => prev - 1)}
          disabled={!canScrollUp}
          className={`p-2 rounded-full transition ${
            canScrollUp
              ? "text-[#D4AF37] hover:bg-white/10 animate-pulse"
              : "text-gray-500 opacity-50"
          }`}
        >
          <ChevronUp size={24} />
        </button>
        <button
          onClick={() => canScrollDown && setStartIndex(prev => prev + 1)}
          disabled={!canScrollDown}
          className={`p-2 rounded-full transition ${
            canScrollDown
              ? "text-[#D4AF37] hover:bg-white/10 animate-pulse"
              : "text-gray-500 opacity-50"
          }`}
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
}
