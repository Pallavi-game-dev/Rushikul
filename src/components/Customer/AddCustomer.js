import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState } from 'react';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function AddCustomer(props) {
console.log("props",props);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobile, setmobile] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [errors, setError] = useState({});

    const handleClose = () => {
      props.closenDailog(false);
    };
    const onSubmit=()=>{
       // Validation
        const errors= {
          firstname: "",
          lastname: "",
          mobile: "",
          address: "",
          state: "",
          city: "",
      }
        if (!firstname.trim()) {
          errors.firstname = 'First name is required';
        }
        if (!lastname.trim()) {
          errors.lastname = 'Last name is required';
        }
        if (!mobile.trim()) {
          errors.mobile = 'Mobile number is required';
        }
        if (!address.trim()) {
          errors.address = 'Address is required';
        }
        if (!state.trim()) {
          errors.state = 'State is required';
        }
        if (!city.trim()) {
          errors.city = 'City is required';
        }
        if (Object.keys(errors).length === 0) {
          console.log("ERRRRRRRRRRRRRR");
        } else {
          // Update errors state
          setError(errors);
        }
      
    }
    const errorMsg ={
      fontSize:'12px',
      color:'red'
    }
  return (
      <>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={props.open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='header'>
            Add Customer
          </DialogTitle>
      
          <DialogContent dividers>
            <form className="row g-2 needs-validation" noValidate>
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label">First name</label>
                  <input type="text" className="form-control" id="validationCustom01" value={firstname}  onChange={(e) => {setFirstname(e.target.value); errors.firstname = ''}} 
                   required/>
                  <div style={errorMsg}>{errors.firstname}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="validationCustom02" value={lastname}  onChange={(e) => {setLastname(e.target.value); errors.lastname = ''}} required/>
                  <div style={errorMsg}>{errors.lastname}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" id="validationCustom02" value={mobile}  onChange={(e) => setmobile(e.target.value)} required/>
                  <div style={errorMsg}>{errors.mobile}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Address</label>
                  <input type="text" className="form-control" id="validationCustom02" value={address}  onChange={(e) => setAddress(e.target.value)} required/>
                  <div style={errorMsg}>{errors.address}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom03" className="form-label">City</label>
                  <input type="text" className="form-control" id="validationCustom03" value={city}  onChange={(e) => setCity(e.target.value)} required/>
                  <div style={errorMsg}>{errors.city}</div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="validationCustom04" className="form-label">State</label>
                  <select className="form-select" id="validationCustom04" required value={state}  onChange={(e) => setState(e.target.value)}>
                    <option defaultValue disabled >Choose...</option>
                    <option>...</option>
                  </select>
                  <div style={errorMsg}>{errors.state}</div>
                </div>
            </form>
          </DialogContent>
          <DialogActions>
          <button className='btn btn-secondary-outline' onClick={handleClose}>Cancel</button>
          <button className='btn btn-secondary' onClick={onSubmit}>Submit</button>
        
          </DialogActions>
        </BootstrapDialog>
      </>
    );
}

export default AddCustomer
