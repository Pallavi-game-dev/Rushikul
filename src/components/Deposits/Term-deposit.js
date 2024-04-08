import React from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
function TermDeposit() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
        <div className="containers">
            <div>
                <h1 className="heading mb-4">
                    Term Deposits
                </h1>
                <hr/>
                <p>
                    Terms deposits are an extremely safe investment and are therefore very appealing to conservative,
                    low-risk investors. In Monthly Income Scheme Deposit, we all require certain amount for our day
                    to day expenses and for that by investing certain lump sum amount for specific period of time.
                </p>
            </div>
            <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Information" value="1" />
                    <Tab label="Interest rate" value="2" />
                    <Tab label="Documents" value="3" />
                    <Tab label="Calculator" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                <h4> Depositing amount for fixed period</h4>
                    <ul>
                        <li>Period of deposit is minimum 1 Month to 36 Months</li>
                        <li>Repayment with interest on maturity date</li>
                    </ul>

                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
                <TabPanel value="4">Item FOUR</TabPanel>
                </TabContext>
                
            </div>
        </div>
        </>
    )
}
export default TermDeposit;
