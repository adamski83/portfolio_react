import React, { useState } from "react";

import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const skills = [
	{ name: "GraphQL", bgColor: "", icon: images.graphql },
	{ name: "Figma", bgColor: "", icon: images.figma },
	{ name: "HTML", bgColor: "", icon: images.html },
	{ name: "JavaScript", bgColor: "", icon: images.javascript },
];
const experiences = [
	{
		name: "Frontend Developer",
		bgColor: "",
		icon: images.graphql,
		desc: "Working with Googe Docs",
		company: "Google",
	},
	{
		name: "Backend Developer",
		bgColor: "",
		icon: images.figma,
		desc: "Member of AI team",
		company: "Meta",
	},
	{
		name: "Ful Stack Developer",
		bgColor: "",
		icon: images.html,
		desc: "Streaming and decrypting data",
		company: "Netflix",
	},
	{
		name: "QA engineer",
		bgColor: "",
		icon: images.javascript,
		desc: "Quality, hunting on Buggs",
		company: "Tesla",
	},
];

const Skills = () => {
	return (
		<>
			<h2 className="head-text">Skills & Expirience</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill, index) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name + index}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img src={skill.icon} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div className="app__skills-exp">
					{experiences.map((work, index) => (
						<>
							<motion.div
								key={work.exp}
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__skills-exp-work"
								data-tip
								data-for={work.name}
							>
								<h4
									className="bold-text"
									style={{ marginBottom: "0.25rem" }}
								>
									{work.name}
								</h4>
								<p className="p-text">{work.company}</p>
							</motion.div>
							<ReactTooltip
								id={work.name}
								effect="solid"
								arrowColor="#fff"
								className="skills-tooltip"
								key={work.name}
							>
								{work.desc}
							</ReactTooltip>
						</>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(Skills, "skills");
