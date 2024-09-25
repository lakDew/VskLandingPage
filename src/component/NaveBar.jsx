
import { NavLink } from "react-router-dom"
import "./NaveBar.css"

export default function NaveBar({logo,menuItem,heroTitle,heroSubTitle}){

 

    return(
        <div className="nav-bar" >
        <div  className="nav-bar-left">
            <div className="logo-img"><img src={logo}/></div>
             <div   className="nav-bar-head">
                {heroTitle && <div className="nav-bar-head-title"><b><span>{heroTitle}</span></b></div>}
                { heroSubTitle && <div className="nav-bar-head-sub-title"><b>{heroSubTitle}</b></div>}
             </div>
        </div>
        <div className="nav-bar-right">
            {
                menuItem.map((item,index)=>
                <NavLink className="nav-bar-link" to={item=="HOME"?"/":`/${item.toLowerCase()}`} style={({isActive})=>isActive?{backgroundColor:"#1E40AF",padding:"7px 18px",color:"#ffffff",borderRadius:"4px"}:{}}>{item}</NavLink>
                )
            }
        </div>
       </div>
    )
}