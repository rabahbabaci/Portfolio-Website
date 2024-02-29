import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/landing.png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta
					name="description"
					content="Explore Rabah Babaci's Web Development portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="index, follow" />
			</Head>

			<TransitionEffect />

			<article
				className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}>
				<Layout className="!pt-0 md:!pt-16 sm:!pt-16">
					<div className="flex w-full items-start justify-between md:flex-col">
						<div className="w-1/2 lg:hidden md:inline-block md:w-full mr-2 sm:mr-0">
							<Image
								src={profilePic}
								alt="Rabah profile picture"
								className="h-auto w-full"
								sizes="100vw"
								loading="eager"
								priority
							/>
						</div>

						<div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
							<AnimatedText
								text="Turning vision into reality with code and design."
								className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
							/>
							<p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
								Dedicated to transforming concepts into reality, I excel as a
								Full Stack Developer, crafting seamless digital experiences.
								Delve into my portfolio of diverse projects, where creativity
								meets functionality in the realm of software development.
							</p>

							<div className="mt-2 flex items-center self-start lg:self-center">
								<Link
									href="https://www.canva.com/design/DAF8QP9RjU0/KmgEIBWt6v0egTa4KlhSpA/view?utm_content=DAF8QP9RjU0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
									target={"_blank"}
									className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
									download>
									Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
								</Link>

								<Link
									href="mailto:4rabah@gmail.com"
									target="_blank"
									className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base">
									Contact
								</Link>
							</div>
						</div>
					</div>
				</Layout>

				<div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
					<Image
						className="relative h-auto w-full"
						src={lightBulb}
						alt="light bulb"
					/>
				</div>
			</article>
		</>
	);
}
