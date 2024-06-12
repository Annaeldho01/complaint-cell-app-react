import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData]=useState([
    
            ])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view").then(
            (response)=>{
                    changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>fetchData(),[])
  return (
    <div>
        
        <h3 align="center">VIEW COMPLAINT</h3>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-dark table-striped">
 
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">MOBILE</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">PINCODE</th>
      <th scope="col">DATE</th>
      <th scope="col">PLACE</th>
      <th scope="col">DISTRICT</th>
      <th scope="col">EMAIL</th>
      <th scope="col">TYPE</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <td>{value.name}</td>
            <td>{value.mobile}</td>
            <td>{value.address}</td>
            <td>{value.pincode}</td>
            <td>{value.date}</td>
            <td>{value.place}</td>
            <td>{value.district}</td>
            <td>{value.email}</td>
            <td>{value.type}</td>
          </tr>
        }
    )}
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll