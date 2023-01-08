import { type NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

import ProjectCard from "../../components/projectCard";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>donahue.dev</title>
        <meta name="description" content="Donahue's webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav current={"home"} ></Nav>
      <main>
      <div className="bg-[#181A1B]">
        <div className="flex flex-col items-center pt-10 pb-10">
        <div className="mb-6 font-extrabold text-6xl text-white">Hello! I'm <span className="text-[#3F94C5]">Donahue</span></div>
        <div className="text-white font-extrabold max-w-lg text-center">I am a <span className="text-[#3F94C5]">fullstack web developer</span> with experience
         in <span className="text-[#3F94C5]">Node.js</span> and <span className="text-[#3F94C5]">React</span>. 
        Skilled in both front-end and back-end development.</div>
      </div>
      </div>
      <div className="mt-4">
        <div className="max-w-7xl m-auto">
        <div>
            <div className="font-bold text-4xl">Projects & Work</div>
            <div className="flex flex-col gap-14">
            <ProjectCard title={"owo.bio - Social Media Link Aggregator"}
            description={"owo.bio gives creators a personalized page to share their social media links."}
            image={"./owo.bio.png"} techStack={["React", "TypeScript", "TailwindCSS", "NextJS", "MongoDB"]}
            visitLink="https://owo.bio"
            githubLink="https://github.com/DonahueA/owo.bio"
            />

            <ProjectCard  title={"BadParkers - Social iOS app"}
            description={"BadParkers is an iOS application I made while learning Swift. Users could share photos of bad parking and see photos others users took locally."}
            image={"./BadParkers.png"} techStack={["Swift", "Firebase", "iOS"]}
            githubLink="https://github.com/DonahueA/BadParkers"
            />

            <ProjectCard  title={"Text Tsunami - Web Game"}
            description={"Text Tsunami is a casual single player web game"}
            image={"./word-game.png"} techStack={["React", "TypeScript"]}
            visitLink="https://word.donahue.dev"
            githubLink="https://github.com/DonahueA/word-game"
            />

            </div>
            <br />
            <hr />
            <div id="blog" className="font-bold text-4xl mt-6">Blogs</div>
            <ProjectCard  title={"Training a diffusion model from scratch"}
            description={"Follow along as I train a diffusion model from scratch on a fashion dataset."}
            image={"./shoe-diffusion.png"} techStack={["Python", "PyTorch", "Jupyter"]}
            blogLink="./blog/training-diffusion-model-from-scratch"
            />
            <div>

            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
