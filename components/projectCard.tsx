type ProjectInfo = {
    title: string,
    description: string,
    image: string,
    visitLink? : string,
    githubLink? : string,
    blogLink? : string,
    techStack: string[]
}
export default function ProjectCard(project : ProjectInfo){


    return <div>
        <div className="flex justify-between">
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
            {project.visitLink && <a href={project.visitLink} className="bg-black text-white py-2 px-10 rounded-3xl">Visit</a>}
            {project.blogLink && <a href={project.blogLink} className="bg-black text-white py-2 px-10 rounded-3xl">Read more</a>}
            {project.githubLink && <a href={project.githubLink} className="bg-white text-black border py-2 px-10  rounded-3xl border-black">Repository</a>}
        </div>
        </div>
        <div>
        <img className="drop-shadow-lg rounded-lg border" src={project.image} alt={"owo.bio homepage"}  />
        <div className="flex justify-center mt-4 align-baseline">

        
        <div className="text-sm  text-[#07458E] font-semibold flex wrap gap-2 align-baseline">
            {project.techStack.map((tech, i) => <div key={i} className="bg-[#DAE9FC] px-2 py-1">{tech}</div>)}
        </div>
        </div>
        </div>
    </div>
  </div>
}