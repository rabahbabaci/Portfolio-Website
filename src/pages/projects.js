import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import airbridgeImg from "../../public/images/projects/airbridge.png";
import mtcImg from "../../public/images/projects/mtc.png";
import listiqImg from "../../public/images/projects/listiq.png";
import smooveImg from "../../public/images/projects/smoove.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github, github2, github2Label }) => {
	return (
		<article className="relative flex w-full h-auto items-center  justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-11 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4">
			<div
				className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
			/>

			<Link
				href={link}
				target={"_blank"}
				className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
				<FramerImage
					src={img}
					className="h-auto w-full"
					alt={title}
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
					priority
				/>
			</Link>

			<div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
				<span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
					{type}
				</span>
				<Link
					href={link}
					target={"_blank"}
					className="underline-offset-2 hover:underline">
					<h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
						{title}
					</h2>
				</Link>
				<p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
					{summary}
				</p>
				<div className="mt-2 flex items-center">
					<Link
						href={github}
						target={"_blank"}
						className="w-10"
						aria-label={`${title} github link`}>
						<motion.section whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
							<GithubIcon />
						</motion.section>
					</Link>
					{github2 && (
						<Link
							href={github2}
							target={"_blank"}
							className="ml-2 rounded-lg bg-dark/10 dark:bg-light/10 px-3 py-1 text-sm font-medium"
							aria-label={`${title} ${github2Label} github link`}>
							{github2Label}
						</Link>
					)}
					<Link
						href={link}
						target={"_blank"}
						className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark
             sm:px-4 sm:text-base
            "
						aria-label={title}>
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({ title, type, img, link, github }) => {
	return (
		<article
			className="relative flex h-auto w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark
      xs:p-4
      ">
			<div
				className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
			/>

			<Link
				href={link}
				target={"_blank"}
				className="w-full cursor-pointer overflow-hidden rounded-lg">
				<FramerImage
					src={img}
					alt={title}
					className="h-auto w-full"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
				/>
			</Link>

			<div className="mt-4 flex w-full flex-col items-start justify-between">
				<span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
					{type}
				</span>

				<Link
					href={link}
					target={"_blank"}
					className="underline-offset-2 hover:underline">
					<h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
						{title}
					</h2>
				</Link>
				<div className="flex w-full items-center  justify-between">
					<Link
						href={link}
						target={"_blank"}
						className="rounded text-lg
            font-medium underline md:text-base
            "
						aria-label={title}>
						Visit
					</Link>
					<Link
						href={github}
						target={"_blank"}
						className="w-8 md:w-6"
						aria-label={title}>
						<motion.section whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
							<GithubIcon />
						</motion.section>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default function Projects() {
	return (
		<>
			<Head>
				<title>Rabah&apos;s Projects | UC Berkeley Data Science & Software Engineering</title>
				<meta
					name="description"
					content="Explore projects by Rabah Babaci — from departure-time optimization engines and geospatial transit equity analysis to full-stack startups. UC Berkeley Data Science and Software Engineering."
				/>
			</Head>

			<TransitionEffect />
			<main
				className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}>
				<Layout className="pt-16">
					<AnimatedText
						text="Imagination Trumps Knowledge!"
						className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
					/>
					<div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
						<div className="col-span-12">
							<FeaturedProject
								type="Full-Stack Application"
								title="AirBridge"
								summary="A door-to-gate departure decision engine that computes personalized 'leave-home-by' times using real-time flight data, traffic estimates, TSA wait models, and terminal walking distances. Returns a segment-by-segment timeline with three confidence profiles (Safety, Sweet, Risk). Covers 10 major US airports. Built with FastAPI, PostgreSQL, Supabase auth, and a React/Vite frontend with shadcn/ui."
								img={airbridgeImg}
								link="https://airbridge.live"
								github="https://github.com/rabahbabaci/airbridge-backend"
								github2="https://github.com/rabahbabaci/airbridge-frontend"
								github2Label="Frontend Repo"
							/>
						</div>

						<div className="col-span-12">
							<FeaturedProject
								type="Geospatial Data Science"
								title="MTC Transit Access Equity"
								summary="A CYPLAN 101 project mentored by the Metropolitan Transportation Commission (MTC) evaluating time-of-day transit accessibility in Alameda County. Computes AM Peak vs. Late Night travel-time matrices using the r5py routing engine, generates isochrones, and measures job accessibility gaps for Equity Priority Communities. Includes an interactive project website with maps and animated charts."
								img={mtcImg}
								link="https://rabahbabaci.github.io/MTC-Transit_Access_Equity/"
								github="https://github.com/rabahbabaci/MTC-Transit_Access_Equity"
							/>
						</div>

						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Data Science Capstone"
								title="ListIQ"
								img={listiqImg}
								link="https://github.com/rabahbabaci/ListIQ"
								github="https://github.com/rabahbabaci/ListIQ"
							/>
						</div>

						<div className="col-span-6 sm:col-span-12">
							<Project
								type="Startup — Online Moving Platform"
								title="SMOOVE"
								img={smooveImg}
								link="https://smoove-two.vercel.app"
								github="https://github.com/rabahbabaci/Smoove"
							/>
						</div>

					</div>
				</Layout>
			</main>
		</>
	);
}
