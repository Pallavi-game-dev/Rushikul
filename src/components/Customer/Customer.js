import React from "react";
import './Customer.css';
const cardJson = require('../../cardJson.json');
function Customer() {
    const cardList = cardJson.customer_section;
  return (
    <>
    <div className="container my-3">
        <h2>Hello</h2>
        <div className="row">
            {
                cardList.map((element)=>{
                return  <div className="col-md-4 my-2" key={element.heading}>
                    <div className="card card-bg shadow-sm">
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h5 className="card-title">{element.heading}</h5>
                        <span className="card-text ">{element.balance}</span>
                        <p className="card-text ">{element.description}</p>
                        <a href="/" className="btn btn-secondary">see more </a>
                    </div>
                </div>
                </div>

                })
            }
        
        </div>
    </div>
  
    
    </>
  );
}
export default Customer;
