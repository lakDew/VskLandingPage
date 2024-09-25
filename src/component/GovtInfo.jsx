import "./GovtInfo.css"


export default  function GovtInfo({cardData}){


    return (
        <div className="card-wrapper">

        {cardData.map((data,i)=>(
           <div key={i} className="card">
            <div  className="card-top">   
                <div className="card-img"><img src={data.img} /></div>
                </div>
            <div className="card-bottom">
           <div className="card-head">{data.head}</div>
            <div className="card-div"></div>
            <div className="card-desc">{data.desc}</div>
           </div>
          
            
  
      </div>
        ))}

       </div>
    )
}