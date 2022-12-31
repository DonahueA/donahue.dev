export default function Nav(props: {current: string}) {
    return (
    <div  className="bg-[#181A1B] text-white flex justify-center sticky top-0 z-10">
    <nav className="flex gap-8 font-bold pt-4 pb-2">
      <a className={props.current == "home" ? "underline" : ""}  href="/" style={{textUnderlineOffset: "4px"}}>Home</a>
      <a className={props.current  == "blog" ? "underline" : ""}  href="#blog" style={{textUnderlineOffset: "4px"}}>Blog</a>
      <a href="https://github.com/donahuea" >GitHub</a>
      <a>Resume</a>
    </nav>
  </div>);
}