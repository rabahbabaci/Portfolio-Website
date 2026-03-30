import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

export default function Articles() {
	return (
		<>
			<Head>
				<title>Rabah&apos;s Articles</title>
				<meta
					name="description"
					content="Articles by Rabah Babaci on data science, software engineering, and building products."
				/>
			</Head>

			<TransitionEffect />

			<main
				className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}>
				<Layout className="pt-16">
					<AnimatedText
						text="Words Can Change the World!"
						className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
					/>

					<div className="flex flex-col items-center justify-center py-20">
						<p className="text-xl font-medium text-dark/75 dark:text-light/75 text-center max-w-lg">
							Coming soon &mdash; writing about data science and building
							products.
						</p>
					</div>
				</Layout>
			</main>
		</>
	);
}
