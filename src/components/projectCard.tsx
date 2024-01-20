import Carousel from "./Carousel"

type ProjectInfo = {
    title: string,
    description: string,
    images: string[],
    visitLink? : string,
    githubLink? : string,
    blogLink? : string,
    techStack: string[]
}
export default function ProjectCard(project : ProjectInfo){


    return <>
        <div className="flex justify-between flex-col sm:flex-row gap-4">
        <div className="flex flex-col justify-between">
        <div>
            <div className="font-bold text-xl mt-4">
            {project.title}
            </div>
            <div className="max-w-md mt-3">
            {project.description} 
            </div>
        </div>
        <div className="flex gap-4 align-text-bottom" style={{marginBottom: "44px"}}>
            {project.visitLink && <a href={project.visitLink} className="bg-[#181A1B] text-white py-2 px-10 rounded-3xl hover:bg-[#181A1B]/90">Visit</a>}
            {project.blogLink && <a href={project.blogLink} className="bg-[#181A1B] text-white py-2 px-10 rounded-3xl">Read more</a>}
            {project.githubLink && <a href={project.githubLink} className="bg-white text-black border py-2 px-10  rounded-3xl border-[#181A1B] hover:bg-offwhite">Repository</a>}
        </div>
        </div>
        <div>
            {/* <div style={{filter:'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',maxWidth: 638, borderRadius: 9}}>
            <Carousel images={project.images} />
            </div> */}
            <img width={638} height={361} className="drop-shadow-lg rounded-lg border" style={{borderRadius: 9}} src={project.images[0]} alt={`Preview of ${project.title}`} />
            <div className="flex justify-center mt-4 align-baseline">

            
            <div className="text-sm  text-[#07458E] font-semibold flex flex-wrap gap-2 align-baseline">
                {project.techStack.map((tech, i) => <div key={i} className="bg-[#DAE9FC] px-2 py-1">{tech}</div>)}
            </div>
            </div>
        </div>
    </div>
  </>
}