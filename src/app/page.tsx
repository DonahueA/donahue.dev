import { type NextPage } from "next";
import ProjectCard from "../components/projectCard";



const Home: NextPage = () => {
  return (
    <>
      <main>
      <div className="bg-[#181A1B]">
        <div className="flex flex-col items-center pt-10 pb-10 text-center">
          <div className="mb-6 font-semibold text-6xl text-white">Hello! I'm <span className="text-[#3F94C5]">Donahue</span></div>
          <div className="text-white font-semibold max-w-lg text-center">I am a <span className="text-[#3F94C5]">fullstack web developer</span> with experience
          in <span className="text-[#3F94C5]">Node.js</span> and <span className="text-[#3F94C5]">React</span>. 
          Skilled in both front-end and back-end development.</div>
      </div>
      </div>
      <div className="mt-4 text-offblack">
        <div className="max-w-7xl m-auto p-4">
        <div>
            <div className="font-bold text-4xl">Projects</div>
            <div className="flex flex-col gap-14">

            <ProjectCard  title={"konekt.gg - Social web app"}
            description={"A social media app for Valorant. Find friends to chat and play with."}
            images={["./konekt/1.webp","./konekt/1.webp", "./konekt/2.webp", './konekt/3.webp']} techStack={["TypeScript", "Next.js", "PostgresSQL"]}
            visitLink="https://konekt.gg"
            // githubLink="https://github.com/DonahueA/BadParkers"
            />

            <ProjectCard title={"owo.bio - Social Media Link Aggregator"}
            description={"owo.bio gives creators a personalized page to share their social media links."}
            images={["./owo.bio.png"]} techStack={["React", "TypeScript", "TailwindCSS", "NextJS", "MongoDB"]}
            visitLink="https://owo.bio"
            githubLink="https://github.com/DonahueA/owo.bio"
            />


            <ProjectCard  title={"Text Tsunami - Web Game"}
            description={"Text Tsunami is a casual single player web game"}
            images={["./word-game.png"]} techStack={["React", "TypeScript"]}
            visitLink="https://word.donahue.dev"
            githubLink="https://github.com/DonahueA/word-game"
            />

            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
};

export default Home;
