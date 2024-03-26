import React, { useState } from 'react';
import AddCustomer from '../Customer/AddCustomer';
import { Card } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
const dataJson = require('../../data.json')
function Homepage() {
    const data = dataJson.customers;
    const  [openDai,setOpenDai] = useState(false);

    const openDailogAddCustomer = (arg) => {
      setOpenDai(arg);
  }
  const columns = [
    { field: 'id', headerName: 'Sr.no', width: 70 },
    {
      field: 'name',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      type: 'number',
      width: 10,
    },
    {
      field: 'account_number',
      headerName: 'Account Number',
      type: 'number',
      width: 10,
    },
   
    {
      field: 'balance',
      headerName: 'Balance',
      type: 'number',
      width: 10,
    },
   
  ];
 
  return (
    <>
    <div className='container my-3'>
      <div className='text-end'>
        <div className='col-12'>
            <button className='btn btn-secondary' onClick={() => openDailogAddCustomer(true)}>+ Add customer</button>
        </div>
        <div className=' my-4'>
          <Card>
          {/* <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          /> */}
          {/* <table className='table fs-6'>
            <thead>
                <tr>
                <th scope="col">Sr.no</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Account Number</th>
                <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {data.map((ele)=>{
                 return   <tr key={ele.id}>
                        <th scope="row">{ele.id}</th>
                        <td >{ele.name}</td>
                        <td>{ele.mobile}</td>
                        <td>{ele.account_number}</td>
                        <td>{ele.balance}</td>
                  </tr>
                })}
                
            </tbody>
            </table> */}
          </Card>
          

        </div>
      </div>
    </div>    
    <AddCustomer open={openDai} closenDailog={openDailogAddCustomer}/>    
    </>
    
  )
  
}
export default Homepage