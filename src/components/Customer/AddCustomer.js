import * as React from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState,useEffect } from 'react';
import { getBranchList } from '../../API/endpionts';
import { createCustomer } from '../../API/endpionts';
import { getAllCustomer } from '../../API/endpionts';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function AddCustomer(props) {
// console.log("props",props);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [gendar, setgendar] = useState('');
  const [aadharnumber, setaadharnumber] = useState('');
  const [address, setAddress] = useState('');
  const [pancard, setPancard] = useState('');
  const [branch, setbranch] = useState({});
  const [branchList, setbranchList] = useState([]);
  // const [formValues,setFormValues] = useState({
  //   firstname: "",
  //   lastname: "",
  //   mobile: "",
  //   email: "",
  //   address: "",
  //   branch: "",
  //   gendar:'',
  //   pancard:'',
  //   aadharnumber:''
  // })
  const [errors, setError] = useState({});
  
    const handleClose = () => {
      props.close(false);
      console.log(props.open);
    };
    const onSubmit=()=>{
       // Validation
        const errors= {
          firstname: "",
          lastname: "",
          mobile: "",
          email: "",
          address: "",
          branch: "",
          gendar:'',
          pancard:'',
          aadharnumber:''
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
        if (!branch.trim()) {
          errors.branch = 'State is required';
        }
        if (!gendar.trim()) {
          errors.gendar = 'Gendar is required';
        }
        if (!pancard.trim()) {
          errors.pancard = 'Pancard number is required';
        }
        if (!aadharnumber.trim()) {
          errors.aadharnumber = 'Addhar number is required';
        }
        if (Object.keys(errors).length === 0) {
          console.log("ERRRRRRRRRRRRRR");
        } else {
          // Update errors state
          setError(errors);
        }
        if(firstname !== ''&& lastname !== '' && mobile !==''&& address !=='' && branch !== ""){
          const body={
            fname: firstname,
            lname: lastname,
            mobile: Number(mobile),
            email: email,
            gender: gendar,
            addharnumber: Number(aadharnumber),
            address:address,
            pancard: pancard,
            branch_id:'660d1ca4196f5fd0597b85f0',
            user_id:'660d1ca4196f5fd0597b85f0'
          }
          createCustomer(body).then(res=>{
            getAllCustomer().then(ress=>{
              props.setcustomer(ress)
            })
          
          })
        }

      
    }
    const errorMsg ={
      fontSize:'12px',
      color:'red'
    }
    useEffect(()=>{
      getBranchList().then(res=>{
        setbranchList(res)
      });
    
    },[]);
  return (
      <>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={props.open}
          className='my-dialog'
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='header'>
            Add Customer
          </DialogTitle>
      
          <DialogContent dividers>
            <form className="row g-2 needs-validation" noValidate>
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label">First name</label>
                  <input type="text" className="form-control" id="validationCustom01" name='firstname' value={firstname}  onChange={(e) => {setFirstname(e.target.value); errors.firstname = ''}} 
                   required/>
                  <div style={errorMsg}>{errors.firstname}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="validationCustom02" value={lastname}  onChange={(e) => {setLastname(e.target.value); errors.lastname = ''}} required/>
                  <div style={errorMsg}>{errors.lastname}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom021" className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" id="validationCustom021" value={mobile}  onChange={(e) => {setmobile(e.target.value);errors.mobile = ''}} required/>
                  <div style={errorMsg}>{errors.mobile}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom022" className="form-label">Email Id</label>
                  <input type="text" className="form-control" id="validationCustom022" value={email}  onChange={(e) => {setemail(e.target.value);errors.email = ''}} required/>
                  <div style={errorMsg}>{errors.email}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom022" className="form-label">Aadhar Number</label>
                  <input type="text" className="form-control" id="validationCustom022" value={aadharnumber}  onChange={(e) => {setaadharnumber(e.target.value);errors.aadharnumber = ''}} required/>
                  <div style={errorMsg}>{errors.aadharnumber}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom022" className="form-label">Pancard Number</label>
                  <input type="text" className="form-control" id="validationCustom022" value={pancard}  onChange={(e) => {setPancard(e.target.value);errors.pancard = ''}} required/>
                  <div style={errorMsg}>{errors.pancard}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom045" className="form-label">Gendar</label>
                  <select className="form-select" id="validationCustom045" required value={gendar}  onChange={(e) => {setgendar(e.target.value);errors.gendar=''}}>
                      <option>Male</option>
                      <option>Female</option>
                  </select>
                  <div style={errorMsg}>{errors.state}</div>
                
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom023" className="form-label">Address</label>
                  <input type="text" className="form-control" id="validationCustom023" value={address}  onChange={(e) => {setAddress(e.target.value);errors.address=''}} required/>
                  <div style={errorMsg}>{errors.address}</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom04" className="form-label">Branch</label>
                  <select className="form-select" id="validationCustom04" required value={branch}  onChange={(e) => {setbranch(branch);errors.state=''}}>
                  <option defaultValue disabled>Choose...</option>
                    {
                      branchList.map(branch=>{
                        return(
                          <option key={branch.branch_name} value={branch._id}>{branch?.branch_name}</option>
                        )
                      })

                     }
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
