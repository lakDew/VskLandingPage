
import Carousel from "react-material-ui-carousel"

import "./AnnouncementSection.css"
export default function AnnouncementSection({data}){


    return(
        <div className="an-sp-wrapper">
        <div>
        <div className="an-sp-head-one">{data.title}</div>
        <div className="an-sp-head-two"><span>{data.subTitle}</span></div>
        </div>


        <div className="an-sp-card-wrapper">
            <div className="an-sp-card-left">
                <div className="an-sp-card-left-head">{data.spotLight.title}</div>

                <div className="an-sp-card-left-img-wrapper">
                <Carousel
                navButtonsWrapperProps={{ 
                    style: {
                        
                        top: 'unset',
                        
                        opacity:"0.5",
                        bottom:'0'
                    }
                }} 
                
               
            

                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: '#838383,',
                        borderRadius:"5px",
                        height: "3vw",
                        width:"2vw"

                    }
                }}

                navButtonsAlwaysVisible={true}
                indicators={false}
                animation={"slide"}
                >
                {
                data.spotLight.img.map( (item, i) => 
                    (<div key={i} className="an-sp-card-left-img"><img src={item}/></div>) )
                }
              </Carousel>
                </div>

                
                <div className="an-sp-card-content">
                    <ul>
                  {data.spotLight.listItem.map((data,i)=>(<li>{data}</li>))}
                  </ul>
                </div>
            </div>


            <div className="an-sp-card-middle">
                <div className="an-sp-card-middle-head">{data.announcement.title}</div>

                <div className="an-sp-card-left-img-wrapper">
                <Carousel
                navButtonsWrapperProps={{ 
                    style: {
                        
                        top: 'unset',
                        margin:"2px",
                        opacity:"0.5",
                        bottom:'0',
                        
                    }
                }} 
                
               
            

                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: '#838383,',
                        borderRadius:"5px",
                        height: "3vw",
                        width:"2vw"

                    }
                }}

                navButtonsAlwaysVisible={true}
                indicators={false}
                animation={"slide"}
                >
                {
                data.announcement.img.map( (item, i) => 
                    (<div key={i} className="an-sp-card-left-img"><img src={item}/></div>) )
                }
              </Carousel>
                </div>

                <div className="an-sp-card-content">
                    <ul>
                  {data.announcement.listItem.map((data,i)=>(<li>{data}</li>))}
                  </ul>
                </div>
            </div>

            <div className="an-sp-card-right">

                <div className="an-sp-card-right-first">
                    <div className="an-sp-card-right-first-head">{data.stateGovtWebSite.title}</div>
                    <div className="an-sp-card-content">
                    <ul>
                  {data.stateGovtWebSite.listItem.map((data,i)=>(<li>{data}</li>))}
                  </ul>
                </div>
                </div>
                

                <div className="an-sp-card-right-second">
                    <div className="an-sp-card-right-second-head">{data.stateTeacherDetails.title}</div>
                    <div className="an-sp-card-content">
                    <ul>
                  {data.stateTeacherDetails.listItem.map((data,i)=>(<li>{data}</li>))}
                  </ul>
                </div>
                </div>

                <div className="an-sp-card-right-third">
                    <div className="an-sp-card-right-third-head">{data.stateSchoolDetails.title}</div>
                    <div className="an-sp-card-content">
                    <ul>
                  {data.stateSchoolDetails.listItem.map((data,i)=>(<li>{data}</li>))}
                  </ul>
                </div>
                </div>

            </div>
        </div>
   </div>
    )
}