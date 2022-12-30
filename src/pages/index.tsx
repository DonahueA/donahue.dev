import { type NextPage } from "next";
import Head from "next/head";

import ProjectCard from "../../components/projectCard";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>donahue.dev</title>
        <meta name="description" content="Donahue's webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  className="bg-[#181A1B] text-white flex justify-center sticky top-0 z-10">
        <nav className="flex gap-8 font-bold pt-4 pb-2">
          <a className="underline"  href="/" style={{textUnderlineOffset: "4px"}}>Home</a>
          <a href="https://github.com/donahuea">GitHub</a>
          <a>Resume</a>
        </nav>
      </div>
      <main>
      <div className="bg-[#181A1B]">
        <div className="flex flex-col items-center pt-10 pb-10">
        <div className="mb-6 font-extrabold text-6xl text-white">Hello! I'm <span className="text-[#3F94C5]">Donahue</span></div>
        <div className="text-white font-extrabold max-w-lg text-center">I am a <span className="text-[#3F94C5]">fullstack web developer</span> who enjoys making good software and great designs. 
        Mostly working with <span className="text-[#3F94C5]">React</span> and <span className="text-[#3F94C5]">Node.js</span>.</div>
      </div>
      </div>
      <div className="mt-4">
        <div className="max-w-7xl m-auto">
        <div>
            <div className="font-bold text-4xl">Projects & Work</div>
            <div className="flex flex-col gap-14">
            <ProjectCard title={"owo.bio - Social Media Link Aggregator"}
            description={"owo.bio gives creators a personalized page to share their social media links."}
            image={"./owo.bio.png"} techStack={["React", "TypeScript", "TailwindCSS", "NextJS"]}
            visitLink="https://owo.bio"
            githubLink="https://github.com/DonahueA/owo.bio"
            />

            <ProjectCard  title={"BadParkers - Social iOS app"}
            description={"BadParkers is an iOS application I made while learning Swift. Users could share photos of bad parking and see photos others users took locally."}
            image={"./BadParkers.png"} techStack={["Swift", "Firebase", "iOS"]}
            githubLink="https://github.com/DonahueA/BadParkers"
            />
            </div>
            <div className="font-bold text-4xl mt-6">Skills</div>
            <div>

            </div>
          </div>
        </div>
      </div>
      </main>
      <footer  className="bg-[#181A1B] text-white mt-10 ">
        <div className="max-w-7xl m-auto flex justify-between pt-8 pb-16">
        <div>
          <div className="text-4xl">
          Let's get in touch
          </div>
          <div className="max-w-md  mt-4">

            I am open to discussing new positions and opportunities. Please share as much info as possible so we can get the most out of our first catch-up.

          </div>
        </div>
        <div>
        <div>
          <div className="text-xl">Email:</div>
          <div>donahue.avila@gmail.com</div>
        </div>
        <div>
          <div className="text-xl pt-4">Phone:</div>
          <div>+1 (612) 707-9272</div>
        </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
