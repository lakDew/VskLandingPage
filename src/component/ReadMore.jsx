import { useEffect, useRef, useState } from 'react';

import "./ReadMore.css";
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';



function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      );
  
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }


export default function ReadMore({content}) {

    const ref = useRef();
    const isVisible = useIsVisible(ref);
    const [open, setOpen] = useState(false);
    const fullData=useState(content);
    const hidenData=useState(content.split(" ").slice(0,20).join(" "));

    useEffect(()=>{
      setOpen(false)
    },[isVisible])
    

    


    return (
      <>
        <div className='read-more-content' ref={ref}>
            {open && 
            <div>
                <div>{fullData}</div>
                <div className="read-more"onClick={()=>setOpen(false)}><div  className='read-text'>Read Less</div> <FaArrowLeft className='read-more-icon'/></div>
            </div>
                     
          }
           {!open && 
            <div>
                <div>{hidenData}</div>
                <div className="read-more" onClick={()=>setOpen(true)}><div className='read-text'>Read More</div> <FaArrowRight className='read-more-icon'/></div>
            </div>
                     
          }
        </div>
      </>)
}

