import Carousel from "react-material-ui-carousel"
import "./ImplementationSection.css"
import ReadMore from "./ReadMore"
import { useEffect, useState } from "react"


const  chunkArray=(arr, chunkSize)=> {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

export default function ImplementationSection({data}){
 
  
    const [width,setWidth]=useState(window.innerWidth);

    const [dataItem,setdataItem]=useState([]);
    useEffect(()=>{
        window.addEventListener('resize', function() {
            setWidth(window.innerWidth)
          });
          if(width<1600) setdataItem(chunkArray(data.content,4))
          else{
            setdataItem(chunkArray(data.content,(window.innerWidth-160)/290))
        } 
        
    },[])


    useEffect(()=>{
        if(width>1600) setdataItem(chunkArray(data.content,(width-150)/290))
            else setdataItem(chunkArray(data.content,4))
    },[width])
   
   
    return(
        <div className="imp-cab-wrapper">
        <div className="imp-cab-head-one">{data.title}</div>
        <div className="imp-cab-head-two"><span>{data.subTitle}</span></div>
        <Carousel
                   swipe={true} 
                   interval={2000}  
                   animation={"slide"} 
                   duration={1000}
                 
                indicatorIconButtonProps={{
                    style: {
                        color: '#FBFEFF',
                        margin:"0px 1vw" ,
                       

                          
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        color: '#FFFFFF' ,
                        margin:"0px 1vw"  
                    }
                }}
            
                indicatorContainerProps={{
                    style: {
                        marginTop: width<1500?'6vw':"50px" 
                    
                       
                    }
            
                }}
            
                
               >
            {
                dataItem.map( (item, i) => {

                    return <div className="imp-cab-card-wrapper">
                        {
                            item.map((a,b)=>(
                                <div key={b} className="imp-cab-card">
                                <div className="imp-cab-card-img">
                                     
                                </div>
                                <div className="imp-cab-card-content-wrapper">
                   
                                <div className="imp-cab-card-head">{a.head}</div>
                                <ReadMore content={a.content}/>
                   
                                </div>
                                </div>
                            ))
                        }
                    </div>
                })
            }
            </Carousel>

       


             
        
          

           
         
        
 </div>
    )
}
