
import { NavLink } from "react-router-dom"
import "./NaveBar.css"
import { siteContent } from "../constants/content";

export default function NaveBar(){

    const {
        logo,
        menuItems,
        title: { heroTitle, heroSubtitle },
      } = siteContent.navbar;

    return(
        <div className="nav-bar" >
        <div  className="nav-bar-left">
            <div className="logo-img"><img src={logo}/></div>
             <div   className="nav-bar-head">
                {heroTitle && <div className="nav-bar-head-title"><b><span>{heroTitle}</span></b></div>}
                { heroSubtitle && <div className="nav-bar-head-sub-title"><b>{heroSubtitle}</b></div>}
             </div>
        </div>
        <div className="nav-bar-right">
            {
                menuItems.map((item,index)=>
                <NavLink className="nav-bar-link" to={item=="HOME"?"/":`/${item.toLowerCase().split(" ").join("_")}`} style={({isActive})=>isActive?{backgroundColor:"#1E40AF",padding:"7px 18px",color:"#ffffff",borderRadius:"4px"}:{}}>{item}</NavLink>
                )
            }
        </div>
       </div>
    )
}