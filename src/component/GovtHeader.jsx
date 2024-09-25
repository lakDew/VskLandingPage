
import "./GovtHeader.css";

export default function GovtHeader(){


    return(
        <div className="header-wrapper">
            <div className="header-info-left">
                <div className="date">
                    {new Date().getDate() +" "+new Date().toLocaleString('default', { month: 'short' }) + " "+ new Date().getFullYear()}
                </div>
                <div className="header-division">|</div>
                <div className="day">{new Date().toLocaleDateString("locale", { weekday: 'short' }) }</div>
                <div className="header-division">|</div>
                <div className="time">{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true })}</div>
           </div>

            <div className="header-info-right">
                <div  >Skip to main content</div>
                <div>|</div>
                <div>Screen Reader Access</div>
                <div className="text-size-wrapper">
                <div> Text Size</div>
                <div>
                    <span>-</span>
                    <span className="text-size">A</span>
                    <span>+</span>
                </div>
                </div>

                <div className="color-wrapper">
                    <div className="header-white"></div>
                    <div className="header-yellow"></div>
                    <div className="header-pink"></div>
                    <div className="header-blue"></div>
                </div>
                <div>हिन्दी में</div>
                
            </div>
        </div>
    )
}