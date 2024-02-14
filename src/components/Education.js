import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
			<AboutIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}>
				<h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
					{type}
				</h3>
				<span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
					{time} | {place}
				</span>
				<p className="font-medium w-full md:text-sm">{info}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="my-40">
			<h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
				Education
			</h2>

			<div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
				<motion.div
					className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
					style={{ scaleY: scrollYProgress }}
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4">
					<Details
						type="Full-Stack Web Development Bootcamp"
						time="2019-2021"
						place="Bloom Institute of Technology"
						info="Completed a Full-Stack Web Development bootcamp at Bloomtech Institute, focusing on React, Redux, and Agile methodologies. Acquired hands-on skills for creating scalable web apps and adapting to the tech industry's pace."
					/>

					<Details
						type="Bachelors of Civil Engineering Technology Technician"
						time="2012-2016"
						place="Université Mouloud Mammeri Tizi-Ouzou Algeria"
						info="Completed Civil Engineering Technology program, focusing on structural design, construction management, and CAD. Gained key analytical and problem-solving skills, bridging engineering principles with software development. Prepared for tech industry challenges through practical learning."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
