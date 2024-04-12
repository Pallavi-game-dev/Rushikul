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
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" style={{height:'300px'}} src={require('../../assets/term-deposit6.jpg')} alt="First slide"/>
                        </div>
                        <div className="Heading_of_service">Term Deposit</div>

                    </div>
                </div>
            </section>
     
        </>
    )
}
export default TermDeposit;
