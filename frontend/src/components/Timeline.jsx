import React from "react";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="mt-10">
      <div className="my-8 border-t-2 border-gray-300"></div>

      <h3 className="text-3xl font-semibold text-center mb-4">Education</h3>
      <VerticalTimeline lineColor="gray-400 dark:gray-600">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#2196F3",
            color: "#fff",
            borderRadius: "15px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #2196F3" }}
          date="July 2024 - December 2024"
          dateClassName="text-black dark:text-white font-bold text-sm"
          iconStyle={{
            background: "#2196F3",
            color: "#fff",
            boxShadow: "0 0 15px rgba(33, 150, 243, 0.7)",
          }}
          icon={<FaGraduationCap />}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Full-Stack Web Development Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Meraki Academy
            </h4>
            <p>
              Comprehensive Full-Stack Development Bootcamp spanning 22 weeks,
              with over 400 hours of training. Covered foundational and advanced
              web development skills, including JavaScript, React, Redux,
              Node.js, Express.js, and more. Completed solo and team-based
              projects with a focus on problem-solving and teamwork.
            </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#4CAF50",
            color: "#fff",
            borderRadius: "15px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #4CAF50" }}
          date="September 2014 - August 2018"
          dateClassName="text-black dark:text-white font-bold text-sm"
          iconStyle={{
            background: "#4CAF50",
            color: "#fff",
            boxShadow: "0 0 15px rgba(76, 175, 80, 0.7)",
          }}
          icon={<FaGraduationCap />}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Bachelor's Degree in Mechanical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Hashemite University
            </h4>
            <p>
              Developed strong problem-solving and project management skills
              through coursework and team-based engineering projects.
            </p>
          </motion.div>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className="my-8 border-t-2 border-gray-300"></div>

      <h3 className="text-3xl font-semibold text-center mb-4">Projects</h3>

      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="/projects"
          className="relative inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></span>
          <span className="relative z-10">Explore My Projects</span>
        </a>
      </motion.div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          contentStyle={{
            background: "#673AB7",
            color: "#fff",
            borderRadius: "15px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #673AB7" }}
          date="December 2024"
          dateClassName="text-black dark:text-white font-bold text-sm"
          iconStyle={{
            background: "#673AB7",
            color: "#fff",
            boxShadow: "0 0 15px rgba(103, 58, 183, 0.7)",
          }}
          icon={
            <motion.img
              src="https://res.cloudinary.com/drhborpt0/image/upload/v1735353834/DALL_E_2024-12-28_05.43.35_-_A_highly_professional_and_elegant_logo_design_for_an_e-commerce_platform_named_SmartCart._The_design_features_a_sleek_and_modern_shopping_cart_icon_yjwelx.webp"
              alt="SmartCart Logo"
              className="w-full h-full rounded-full"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          }
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              E-Commerce Platform Website (Team Project)
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              PERN Stack
            </h4>
            <p>
              Built a robust e-commerce platform with user authentication,
              role-based access, and CRUD operations using PostgreSQL,
              Express.js, React.js, and Node.js.
            </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          contentStyle={{
            background: "#673AB7",
            color: "#fff",
            borderRadius: "15px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #673AB7" }}
          date="November 2024"
          dateClassName="text-black dark:text-white font-bold text-sm"
          iconStyle={{
            background: "#673AB7",
            color: "#fff",
            boxShadow: "0 0 15px rgba(103, 58, 183, 0.7)",
          }}
          icon={
            <motion.img
              src="https://res.cloudinary.com/drhborpt0/image/upload/v1735352368/Logo_c0cb5u.png"
              alt="Football Jerseys Logo"
              className="w-full h-full rounded-full"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          }
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Football Jerseys E-Commerce Website (Solo Project)
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              MERN Stack
            </h4>
            <p>
              Developed a modern e-commerce platform for selling football
              jerseys with features like user authentication, CRUD operations,
              and API integration.
            </p>
          </motion.div>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className="my-8 border-t-2 border-gray-300"></div>

      <h3 className="text-3xl font-semibold text-center mb-4">Career</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#FFC107",
            color: "#fff",
            borderRadius: "15px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #FFC107" }}
          date="May 2021 - August 2024"
          dateClassName="text-black dark:text-white font-bold text-sm"
          iconStyle={{
            background: "#FFC107",
            color: "#fff",
            boxShadow: "0 0 15px rgba(255, 193, 7, 0.7)",
          }}
          icon={<FaBriefcase />}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Technical & Design Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Jadara Electronics
            </h4>
            <p>
              Conducted site surveys, developed CAD designs, and installed solar
              systems while optimizing performance and ensuring client
              engagement.
            </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#FFC107",
            color: "#fff",
            borderRadius: "15px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #FFC107" }}
          date="September 2018 - May 2021"
          dateClassName="text-black dark:text-white font-bold text-sm"
          iconStyle={{
            background: "#FFC107",
            color: "#fff",
            boxShadow: "0 0 15px rgba(255, 193, 7, 0.7)",
          }}
          icon={<FaBriefcase />}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hover:shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Site Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg">
              Thunder Est.
            </h4>
            <p>
              Supervised mechanical pre-assembly and installation processes,
              ensuring quality and compliance with project requirements.
            </p>
          </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#FFC107", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #FFC107" }}
          date="June 2018 - August 2018"
          dateClassName="text-black dark:text-white font-bold text-sm"
          iconStyle={{
            background: "#FFC107",
            color: "#fff",
            boxShadow: "0 0 15px rgba(255, 193, 7, 0.7)",
          }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            Mechanical Engineer Trainee
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-xl ">
            Bitar Consultant
          </h4>
          <p>
            Designed HVAC, water supply, drainage, and firefighting systems,
            contributing to efficient system implementation.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
