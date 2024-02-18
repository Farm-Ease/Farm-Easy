import { useNavigate } from 'react-router-dom';
import './Service.css';
function Services(){
    let services=require("../../service/service.json");
    var parser=require('cookie-parse');
    const navigate=useNavigate();
    return(
        <>
        <div id="SERVICES">
            <h1>SERVICES</h1>
             <div className='services'>
            {
                services.map((item)=>(
                   
                    <div key={item.id} className='service'>
                        <div className='image'><img src={item.imageLink} alt="loading.."/></div>
                        <div className='heading' onClick={()=>{
                                                                if(item.id===1){
                                                                    navigate("/weather");
                                                                }
                                                                else if(item.id===2){
                                                                    navigate("/apmc");
                                                                }
                                                                else if(item.id===3){
                                                                    navigate("/schemes");
                                                                }
                                                                else if(item.id===4){
                                                                    navigate("/counselling");
                                                                }
                                                            }}><h1>{item.heading}</h1></div>
                        <div className='subheading'><p>{item.subheading}</p></div>
                        
                    </div>
                   
                ))
            }
            </div>
        </div>
        </>
    )
}
export default Services;