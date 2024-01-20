'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
export default function Nav() {

  const path = usePathname();
  return (
    <div  className="bg-[#181A1B] text-white flex justify-center sticky top-0 z-10">
    <nav className="flex font-semibold ">
      <Link className={`pt-4 pb-2 px-4 hover:bg-slate-800    transition-color duration-200  ease-in ${path === '/' ? "underline" : undefined}`}  href="/"   >Home</Link>
      <Link className={`pt-4 pb-2 px-4 hover:bg-slate-800  transition-color duration-200  ease-in ${path.startsWith('/blog') ? "underline" : undefined}`}  href="/blog" >Blog</Link>
      <a className={`pt-4 pb-2 px-4 hover:bg-slate-800  transition-color duration-200  ease-in`} href="https://github.com/donahuea" >GitHub</a>
      <a className={`pt-4 pb-2 px-4 hover:bg-slate-800  transition-color duration-200  ease-in`} href="/donahue_avila_resume.pdf">Resume</a>
    </nav>
  </div>);
}