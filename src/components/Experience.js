import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null);

	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
			<LiIcon reference={ref} />

			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}>
				<h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
					{position}{" "}
					<a
						className="capitalize text-primary dark:text-primaryDark"
						href={companyLink}
						target={"_blank"}>
						@{company}
					</a>
				</h3>
				<span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
					{time} | {address}
				</span>
				<p className="font-medium w-full md:text-sm"> {work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="my-0">
			<h2 className="font-bold text-8xl mb-20 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
				Experience
			</h2>

			<div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
				<motion.div
					className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top  dark:bg-primaryDark dark:shadow-3xl"
					style={{ scaleY: scrollYProgress }}
				/>
				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						position="Founder and Lead Product Developer"
						company="Smoove"
						companyLink="https://smoove.homes"
						time="November 2022 - December 2023"
						address="Hybrid"
						work="Founded Smoove to transform the moving experience with a pioneering online platform, Smoove.homes. Spearheaded full-stack development, integrating Next.js, Twilio, Mapbox, and Firebase to deliver a seamless service from booking to payment. Collaborated on UX/UI for an intuitive user journey, and innovated operational systems using Slack and Stripe, enhancing efficiency and security. Drove continuous engagement, building a loyal community through targeted communications."
					/>

					<Details
						position="Full Stack Web Developer"
						company="Yassir"
						companyLink="https://yassir.com"
						time="March 2021 - November 2022"
						address="Remote"
						work="At Yassir, I played a pivotal role as a Full Stack Web Developer, enhancing our super app with user-driven features like an efficient ticket system for drivers, boosting service quality. Leveraged JavaScript and React.js for fluid front-end interfaces, while also fortifying back-end and database integrity. My efforts were key in fostering a culture of innovation, responding dynamically to the evolving needs of our diverse user base."
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
