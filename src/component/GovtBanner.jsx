import "./GovtBanner.css";
export default function GovtBanner({data}){

   const[edu,nic,indGov,myGov,samagra]=data.images;
    return(
        <div className="govt-banner-wrapper">
            <div className="govt-banner-head"><span>{data.title}</span></div>
            <div className="govt-banner-img-wrapper">
               
                <div className="edu-img">
                   <img src={edu}/>
                </div>
                <div className="nic-img">
                   <img src={nic}/>
                </div>
                <div className="ind-img">
                   <img src={indGov}/>
                </div>
                <div className="gov-img">
                   <img src={myGov}/>
                </div>
                <div className="samagra-img">
                   <img src={samagra}/>
                </div>
            </div>
        </div>
    )
}