import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import "./Testimonial.scss";

const testimonials = [
	{
		phrase: "super cena, średnia jakość",
		imgUrl: images.html,
		feedback: "Adam is a great Developer",
		company: "Netflix",
		name: "Sarah",
	},
	{
		phrase: "polecam, nikt nie zrobi tak tanio",
		imgUrl: images.asus,
		feedback: "Work with him is a pleasure",
		company: "Asus",
		name: "Jon",
	},
	{
		phrase: "taniej nie znajdziesz",
		imgUrl: images.cpp,
		feedback: "Chętnie nawiąże współprace kolejny raz",
		company: "Lab-mar",
		name: "Marek",
	},
	{
		phrase: "za darmo to i tak za drogo",
		imgUrl: images.nb,
		feedback: "Adam is a great Developer",
		company: "New-Balance",
		name: "Jimm",
	},
	{
		phrase: "I recomend this Developer",
		imgUrl: images.spotify,
		feedback: "Realy creative soul",
		company: "Spotify",
		name: "Miguel",
	},
];
const brands = [
	{
		comp: "Amazon",
		_id: 1,
		imageUrl: images.amazon,
	},
	{
		comp: "Google",
		_id: 2,
		imageUrl: images.spotify,
	},
	{
		comp: "Piekarnia Kraszowice",
		_id: 3,
		imageUrl: images.adidas,
	},
	{
		comp: "Poczta Polska",
		_id: 4,
		imageUrl: images.skype,
	},
];

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};
	return (
		<>
			{testimonials.length && (
				<>
					<div className="app__testimonial-item app__flex">
						<img
							src={testimonials[currentIndex].imgUrl}
							alt="testimonial"
						/>
						<div className="app__testimonial-content">
							<p className="p-text">
								{testimonials[currentIndex].feedback}
							</p>
							<div>
								<h4 className="bold-text">
									{testimonials[currentIndex].name}
								</h4>
								<h5 className="p-text">
									{testimonials[currentIndex].company}
								</h5>
							</div>
						</div>
					</div>
					<div className="app__testimonials-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}
						>
							<HiChevronLeft />
						</div>
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}
						>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}
			<div className="app__testimonial-brands app__flex">
				{brands.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={brand._id}
					>
						<img src={brand.imageUrl} alt={brand.comp} />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(Testimonial, "testimonial");
