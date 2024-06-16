"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import Image from "next/image";

const RecentProject = () => {
	return (
		<div className="py-20">
			<h1 className="heading text-white">
				A small selection of{" "}
				<span className="text-purple">recent projects</span>
			</h1>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 ">
				{projects.map((item) => (
					<div className="h-64 border rounded-lg" data-aos="fade-up">

					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProject;