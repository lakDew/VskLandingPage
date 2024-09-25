
import "./About.css"
export default function About({data}){


    return(
        <div className="about-wrapper">
                 <div className="about-head"><span> {data.title}</span></div>


                 <div className="about-content-wrapper">
                       <div className="about-content">
                      {data.content}
                       </div>
                       <div className="about-video"> 
                       <iframe
                       
      width="100%"
      height="100%"
      src={data.videoLink}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> </div>
                 </div>
        </div>
    )
}