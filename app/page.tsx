import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { TracingBeam } from "@/components/ui/TackingBeam";
import { navItems } from "@/data";

export default function Home() {
	return (
		<main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto ">
			<TracingBeam>
					<FloatingNav navItems={navItems} />
					<Hero />
					<Grid />
					<RecentProject />
					<Experience />
					<Footer/>
			</TracingBeam>
		</main>
	);
}
