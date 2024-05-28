import React, { useEffect, useCallback,
  useRef,
  useState,
  } from 'react';
import './Customer.css'

import { getAllCustomer } from '../../API/endpionts';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import AddCustomer from './AddCustomer';
function Customer() {
  const gridRef = useRef(null);
  const [rowData,setcustomer] = useState([]);

  const [toggleAddCustomerForm,setAddCustomerForm] = useState(false);

  const [colDefs] = useState([
    { field: "fname", headerName: 'First Name',},
    { field: "lname", headerName: 'Last Name'},
    { field: "email", headerName: 'Email Id'},
    { field: "mobile", headerName: 'Mobile Number'},
    { field: "addharnumber", headerName: 'Aadhar Number'},
    { field: "pancard",headerName: 'Pancard Number' },
    { field: "branch_id", headerName: 'Branch Id'},
  ]);

  useEffect(()=>{
    getAllCustomer().then(res=>{
      setcustomer(res);
      
    });
  
  },[]);
  const setAddCustomerFormClosed =(flag)=>{
    setAddCustomerForm(flag)
  }
  const onGridReady = useCallback((params) => {
    if (gridRef.current) {
      gridRef.current.api.sizeColumnsToFit();
    }
  }, [gridRef]);


  return (
    <>
      <section className='customerpage-maincon'>
        <div className='pageheaderconatiner'>
            <h2>Customer List</h2>
            <button className='btn-secondary' onClick={()=>setAddCustomerForm(true)}>+ Add Customer</button>
        </div>  
      <div
          className="ag-theme-quartz" // applying the grid theme
          style={{ height:'73vh'}} // the grid will fill the size of the parent container
        >
          <AgGridReact style={{ width: '100%', height: '100%' }}
              ref={gridRef}
              onGridReady={onGridReady}
              rowData={rowData}
              columnDefs={colDefs}
          />
        </div>
        </section>
        <AddCustomer open={toggleAddCustomerForm} close={setAddCustomerFormClosed} setcustomer={setcustomer}/>
   
     
    </>
  )
}

export default Customer

