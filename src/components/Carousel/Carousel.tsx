'use client'
import { Dialog } from '@headlessui/react';

import styles from './CarouselModal.module.css';
import { ArrowLeft, ArrowRight, X } from 'react-feather';
import { useEffect, useState } from 'react';

export default 
function Carousel({images}: {images: string[]}){

    
    const [currentItem, setCurrentItem] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false)


    
    return (<>
    <div style={{position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: 9}}>
    <div style={{transitionDuration: "0.5s", transitionDelay: "0", width: `${images.length * 100}%`, height: "100%", display: "flex", justifyContent:"space-around" ,transform: `translateX(-${100/images.length*currentItem}%)`}}>
        {images.map((child, index)=>
        <div key={index} style={{width: '100%', display: 'flex', justifyContent: 'center', flexBasis: 0, flexGrow: 1}}>
        <img onClick={()=>setIsFullscreen(true)} style={{minWidth:0 , maxHeight: "100%", maxWidth: "100%", objectFit: "contain", borderRadius: 9}}  src={child} />
        </div>
        )}  
        
    </div>
    <div style={{position: "absolute", color: "white", top: 0, right: 0, padding: 5}}>{`${1+currentItem}/${images.length}`}</div>
    
    <div onClick={()=>{ setCurrentItem(Math.max(currentItem -1, 0))}}  style={{cursor: "pointer", width: "60px", position: "absolute", left: 10, top: 0, height: "100%", display: currentItem == 0 ? "none" : "flex", alignItems: "center"}}>
        <div style={{ width: 40, height: 40, backgroundColor: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}> 
            <ArrowLeft color="white" />
        </div>
    </div>
    <div onClick={()=>{ setCurrentItem(Math.min(currentItem+1,images.length))}}  style={{cursor: "pointer", width: "60px", position: "absolute", right: 10, top: 0, height: "100%", display:  currentItem == images.length-1 ? "none" : "flex", alignItems: "center"}}>
        <div style={{ width: 40, height: 40, backgroundColor: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}> 
            <ArrowRight color="white" />
        </div>
    </div>


    </div>
    <div className={isFullscreen ? styles.WrapperFullscreen : styles.Hide}>
        <div style={{width: "100vw", height: "100dvh"}}>
            <div style={{position: "relative", width: "100%", height: "100%", overflow: "hidden"}}>
            <div style={{position: 'absolute', inset: 0, background: 'hsl(0deg 0% 0% / 0.75)'}}></div>

            <div style={{ transitionDuration: "0.5s", transitionDelay: "0", width: `${images.length * 100}%`, height: "100%", display: "flex", justifyContent: "space-around", transform: `translateX(-${100/images.length*currentItem}%)`}}>  
                {images.map((child, index)=><div key={index} onClick={()=>{setIsFullscreen(false)}} style={{ display: "flex", width: '100%', justifyContent: "center"}}>
                <img onClick={(e)=>{e.stopPropagation()}} style={{minWidth:0 , maxHeight: "100dvh", maxWidth: "100%", objectFit: "contain"}}   src={child} />
                </div> )}  

            </div>
            <div style={{position: "absolute", color: "#fff", top: 0, right: 0, padding: 5}}>{`${1+currentItem}/${images.length}`}</div>
            
            <div onClick={()=>setIsFullscreen(false)} style={{position: "absolute", top:0,left: 0, width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div className={styles.exit}>
                <X color='white' />
            </div>
            </div>
            <div onClick={()=>{setCurrentItem(Math.max(currentItem -1, 0))}}  style={{cursor: "pointer", width: "60px", position: "absolute", left: 10, top: 0, height: "100%", display: currentItem == 0 ? "none" : "flex", alignItems: "center"}}>
                <div style={{ width: 40, height: 40, backgroundColor: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}> 
                    <ArrowLeft color="white" />
                </div>
            </div>
            <div onClick={()=>{setCurrentItem(Math.min(currentItem+1,images.length))}}  style={{cursor: "pointer", width: "60px", position: "absolute", right: 10, top: 0, height: "100%", display:  currentItem == images.length-1 ? "none" : "flex", alignItems: "center"}}>
                <div style={{ width: 40, height: 40, backgroundColor: "black", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}> 
                    <ArrowRight color="white" />
                </div>
            </div>
            </div>
        </div>
    </div>
    </>)

}