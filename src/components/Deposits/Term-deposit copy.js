import React from "react";

import './Term-deposit.css'
function TermDeposit() {
    // const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

    return(
        <>
            <section>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" style={{height:'127px'}} src={require('../../assets/term-deposit6.jpg')} alt="First slide"/>
                        </div>
                        <div className="Heading_of_service">Term Deposit</div>

                    </div>
                </div>
            </section>
            <section>
                <h5>Terms deposits are an extremely safe investment and are therefore very appealing to conservative, low-risk investors. In Monthly Income Scheme Deposit, we all require certain amount for our day to day expenses and for that by investing certain lump sum amount for specific period of time.</h5>
            </section>
            <section className="details-card">
                <ul className="nav nav nav-tabs  nav-fill details-card-navbar" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="information-tab" data-bs-toggle="tab" data-bs-target="#information" type="button" role="tab" aria-controls="information" aria-selected="true">Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="inerestrate-tab" data-bs-toggle="tab" data-bs-target="#inerestrate" type="button" role="tab" aria-controls="inerestrate" aria-selected="false">% Interest Rate</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="documents-tab" data-bs-toggle="tab" data-bs-target="#documents" type="button" role="tab" aria-controls="documents" aria-selected="false">Documents </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="calculator-tab" data-bs-toggle="tab" data-bs-target="#calculator" type="button" role="tab" aria-controls="calculator" aria-selected="false">Calculator</button>
                    </li>
                </ul>
                <div className="tab-content tab-deatils" id="myTabContent">
                <div className="tab-pane fade show active"  id="information" role="tabpanel" aria-labelledby="information-tab">
                    <h3>Depositing amount for fixed period</h3>
                    <ul>
                      <h5>Period of deposit is minimum 1 Month to 36 Months</h5>  
                        <h5>Repayment with interest on maturity date</h5>
                    </ul>
                  
                </div>
                <div className="tab-pane fade" id="inerestrate" role="tabpanel" aria-labelledby="inerestrate-tab">
                <table>
                    <thead>
                        <tr>
                        <th>Days/month</th>
                        <th>Interest Rate (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>46 days to 90 days</td>
                        <td>5.00%</td>
                        </tr>
                        <tr>
                        <td>91 days to 180 days</td>
                        <td>6.00%</td>
                        </tr>
                        <tr>
                        <td>181 days to 270 days</td>
                        <td>7.00%</td>
                        </tr>
                        <tr>
                        <td>271 days to 364 days</td>
                        <td>8.00%</td>
                        </tr>
                        <tr>
                        <td>12 months complete</td>
                        <td>8.75%</td>
                        </tr>
                        <tr>
                        <td>
                            12 months complete for senior citizen / handicapped / widow /ex- army
                            person
                        </td>
                        <td><strong>9.25%</strong></td>
                        </tr>
                        <tr>
                        <td>18 months complete</td>
                        <td>9.00%</td>
                        </tr>
                        <tr>
                        <td>
                            18 months complete for senior citizen / handicapped / widow / ex- army
                            person
                        </td>
                        <td><strong>9.50%</strong></td>
                        </tr>
                        <tr>
                        <td>18 months 1 day to 60 months</td>
                        <td>8.00%</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">...</div>
                <div className="tab-pane fade" id="calculator" role="tabpanel" aria-labelledby="calculator-tab">...</div>
                </div>
            </section>
     
        </>
    )
}
export default TermDeposit;