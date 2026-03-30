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
						type="BA in Data Science"
						time="Expected May 2027"
						place="University of California, Berkeley"
						info="4.0 GPA. Coursework includes Data 100 (Principles and Techniques of Data Science), CYPLAN 101 (Urban Data Analytics), and Data Product Management."
					/>

					<Details
						type="AS in Data Science"
						time="May 2025"
						place="Laney College"
						info="3.88 GPA. Built a strong foundation in statistics, programming, and data analysis before transferring to UC Berkeley."
					/>

					<Details
						type="Certificate, Full-Stack Web Development"
						time="January 2021"
						place="Bloom Institute of Technology"
						info="Completed an intensive full-stack web development program focusing on React, Redux, Node.js, and Agile methodologies. Acquired hands-on skills for building scalable web applications."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
