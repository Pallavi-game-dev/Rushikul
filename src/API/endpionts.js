import axios from "axios";
const baseUrl = 'http://localhost:5000/api/'


export async function getAllCustomer() {
  const {data}= await axios.get(baseUrl + 'customer/getcustomer');
    return data
}
export async function getBranchList() {
  const {data}= await axios.get(baseUrl + 'branch/getbranchList');
    return data
}