import React from "react";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import "./Term-deposit.css";

// const data = require('./term-deposit.json');

function TermDeposit({ data }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        console.log("newValue",newValue);
        
      setValue(newValue);
    };
 
  return (
    <>
      <section>
        <h4 className="heading">{data.Titile}</h4>
      </section>
      <section>
        <h5>{data.Description}</h5>
      </section>
      <section>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}  aria-label="lab API tabs example" variant="fullWidth">
                <Tab label={data.tab1.tab_name} value="1" />
                <Tab label={data.tab2.tab_name} value="2" />
                <Tab label={data.tab3.tab_name} value="3" />
            </TabList>
            </Box>
            <TabPanel value="1">
            <div
                
                id="information"
                role="tabpanel"
                aria-labelledby="information-tab"
            >
                <div className="tab-details">
                <div>
                    <img
                    src={require("../../../assets/" + data.tab1.src)}
                    alt=""
                    className="documents-img"
                    />
                </div>
                <div>
                    <h3 style={{ marginBottom: "30px" }}>{data.tab1.title}</h3>
                    <ul style={{ listStyleType: "circle" }}>
                    {data.tab1.points.map((element, index) => (
                        <li style={{ marginBottom: "10px" }} key={index}>
                        <h5>{element.description}</h5>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>

            </TabPanel>
            <TabPanel value="2">
            <div
           
            id="inerestrate"
            role="tabpanel"
            aria-labelledby="inerestrate-tab"
          >
            <div className="tab-details">
              <div>
                <img
                  src={require("../../../assets/" + data.tab2.src)}
                  alt=""
                  className="documents-img"
                />
              </div>
              <div>
                <table className="interest-rate-table">
                  <thead>
                    <tr>
                      <th>{data.tab2.table_header_col1}</th>
                      <th>{data.tab2.table_header_col2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.tab2.points.map((element, index) => {
                      return (
                        <tr key={index}>
                          <td>{element.duration}</td>
                          <td>{element.rate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
            </TabPanel>
            <TabPanel value="3">
                 <div
         
            id="documents"
            role="tabpanel"
            aria-labelledby="documents-tab"
          >
            <div className="tab-details">
              <div>
                <img
                  src={require("../../../assets/" + data.tab3.src)}
                  alt=""
                  className="documents-img"
                />
              </div>
              <div>
                <h3 style={{ marginBottom: "30px" }}>{data.tab3.title}</h3>
                <ul>
                  {data.tab3.points.map((element, index) => {
                    return (
                      <li style={{ marginBottom: "20px" }} key={index}>
                        <h5>{element.document}</h5>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
            </TabPanel>
        </TabContext>
        </Box>
      </section>
    </>
  );
}
export default TermDeposit;
