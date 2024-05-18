import React from "react";
import './chairman_message.css'
function Chairman_message(){
 
    return(
        <>
        
            <section>
                <div className="chairman-container">
               
                    <div className="chairman-img">
                        <img src={require('../../../assets/personal-loan.jpg')} alt="" style={{width:'40vw'}}/>
                    </div>
                
                <div> 
                    <p className="heading">Chairman Message</p>
                    <h3>On behalf of Mahalakshmi Co operative Bank Ltd Udupi, I heartily welcome you at our official website which is designed to assist you about the services offered by our Bank, Hope you enjoy and get benefited from it. Mahalakshmi Co-operative bank is the fastest growing bank in Coastal Karnataka and its services are spread over three districts of Coastal Karnataka. In future we have plans to extend the area of activities to the capital city Bangalore.
                   
                    <p> As a Chairman of the Bank, I wish to assure you that we are committed to offer delightful banking experience to all our regular or even casual customers. We try to compete with our past performance and constantly try to upgrade our products or services and systems or procedures. We are committed to provide the best of banking services to our esteemed customers. Last but not the least, I convey my heartfelt gratitude for the valuable contribution of all the present and past directors of the board, staff at all levels and above all the valuable shareholders, without whom the progress achieved would have been unattainable. I look forward to your continued cooperation in faster business development and progress of the bank. We always welcome customer’s feedback and useful suggestions.</p></h3>
                </div>
                </div>
            </section>
        </>
    )
}

export default Chairman_message