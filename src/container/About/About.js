import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
const abouts = [
	{
		title: "Web Developer",
		description: "I am good at this",
		imgURL: images.about01,
	},
	{
		title: "Frontend",
		description: "JavaScript, React ,SCSS",
		imgURL: images.about02,
	},
	{
		title: "Backend",
		description: "Node, Express, MongoDB, MySQL",
		imgURL: images.about03,
	},
	{ title: "UX/UI", description: "Figma", imgURL: images.about04 },
];

const About = () => {
	// const [abouts, setAbouts] = useState([]);

	// useEffect(() => {
	// 	const query = '*[_type == "abouts"]';

	// 	client.fetch(query).then((data) => {
	// 		setAbouts(data);
	// 	});
	// }, []);
	return (
		<>
			<h2 className="head-text">
				<span>I Know that Development</span>
				<br />
				Means <span>Good Buisness</span>
			</h2>
			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={about.imgURL} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(About, "about");
