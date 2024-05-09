import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Term-deposit.css'
function TermDeposit() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
            <section>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" style={{height:'300px'}} src={require('../../assets/term-deposit6.jpg')} alt="First slide"/>
                        </div>
                        <div className="Heading_of_service">Term Deposit</div>

                    </div>
                </div>
            </section>
            <section>
                <h1>Terms deposits are an extremely safe investment and are therefore very appealing to conservative, low-risk investors. In Monthly Income Scheme Deposit, we all require certain amount for our day to day expenses and for that by investing certain lump sum amount for specific period of time.</h1>
            </section>
            <section>
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
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
                <div className="tab-content justify-content-center" id="myTabContent">
                <div className="tab-pane fade show active d-flex flex-column align-items-center gap-3"  id="information" role="tabpanel" aria-labelledby="information-tab">
                    <h3>Depositing amount for fixed period</h3>
                    <ul>
                      <li>Period of deposit is minimum 1 Month to 36 Months</li>  
                        <li>Repayment with interest on maturity date</li>
                    </ul>
                  
                </div>
                <div className="tab-pane fade" id="inerestrate" role="tabpanel" aria-labelledby="inerestrate-tab">...</div>
                <div className="tab-pane fade" id="documents" role="tabpanel" aria-labelledby="documents-tab">...</div>
                <div className="tab-pane fade" id="calculator" role="tabpanel" aria-labelledby="calculator-tab">...</div>
                </div>
            </section>
     
        </>
    )
}
export default TermDeposit;
