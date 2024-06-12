// import axios from 'axios'
// import React, { useState } from 'react'


// const AddComplaint = () => {


//     const [data,changeData]=useState([
//         {
//             "name":"",
//             "mobile":"",
//             "address":"",
//             "pincode":"",
//             "date":"",
//             "place":"",
//             "district":"",
//             "email":"",
//             "type":"",
//             "username":"",
//             "password":"",
//             "confirmpassword":""
//         }])

//        const inputHandler=(event)=>{
//         changeData({...data,[event.target.name]:event.target.value})
//        }

//        const readValue=()=>{
//         console.log(data)
//         if(data.password==data.confirmpassword)
//             {

//         axios.get("http://localhost:8080/",data).then(
//             (response)=>{
//                 console.log(response.data)
//                 if (response.data.status=="success") {
//                     alert("success")
//                 } else {
//                     alert("error")
//                 }
//             }
//         )

//        }
//        else{
//         alert("Password doesnt match")
//        }
//     }
//   return (
//     <div>
//          <div className="container">
//             <h2 align="center">USER</h2>
//             <div className="row">
//                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                     <div className="row">
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <label htmlFor="" className="form-label">Name</label>
//                             <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
//                         </div>
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <label htmlFor="" className="form-label">Mobile No</label>
//                             <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
//                         </div>

//                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                             <label htmlFor="" className="form-label">Address</label>
//                             <textarea  id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
//                         </div>
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <label htmlFor="" className="form-label">Pincode</label>
//                             <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler}/>
//                         </div>
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <label htmlFor="" className="form-label">Date</label>
//                             <input type="text" className="form-control" name='date' value={data.date} onChange={inputHandler}/>
//                         </div>
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <label htmlFor="" className="form-label">Place</label>
//                             <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>
//                         </div>
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <label htmlFor="" className="form-label">Email</label>
//                             <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
//                         </div>
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <label htmlFor="" className="form-label">Type of Complaint</label>
//                            <select  id="" className="form-control" name='type' value={data.type} onChange={inputHandler}>
//                             <option value="Drainage">Drainage</option>
//                             <option value="Water">Water</option>
//                             <option value="Electricity">Electricity</option>
//                            </select>
//                         </div>
//                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <label htmlFor="" className="form-label">Username</label>
//                             <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
//                         </div>
//                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <label htmlFor="" className="form-label">Password</label>
//                             <input type="password"   className="form-control" name='password' value={data.password} onChange={inputHandler}/>
//                         </div>
//                         <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
//                         <label htmlFor="" className="form-label"> Confirm Password</label>

//                         <input type="password"  className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}/>

//                         </div>
//                         <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                             <button className="btn btn-success" onClick={readValue}>ADD</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }



import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddComplaint = () => {
    const [data, changeData] = useState([

        {
            "name": "",
            "mobile": "",
            "address": "",
            "pincode": "",
            "date": "",
            "place": "",
            "district": "",
            "email": "",
            "type": "",
            "username": "",
            "password": "",
            "confirmpassword": ""




        }

    ])


    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })


    }
    const readValue = () => {
        console.log(data)
        if (data.password == data.confirmpassword) {
            axios.post("http://localhost:8080/", data).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("successfully added")
                    }
                    else {
                        alert("failed")
                    }

                }
            )
        }
        else {
            alert("check password")
        }
    }

    return (
        <div>
            <h1 align="center"><u>Sign Up</u></h1>
            <div className="container">
                <div className="card" >
                    <div className="card-body">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Mobile No</label>
                                        <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <textarea id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Pincode</label>
                                        <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Date</label>
                                        <input type="text" className="form-control" name='date' value={data.date} onChange={inputHandler} />                        
                                     </div>
                                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Place</label>
                                        <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Email</label>
                                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Type of Complaint</label>                           
                                         <select id="" className="form-control" name='type' value={data.type} onChange={inputHandler}>
                                            <option value="Drainage">Drainage</option>
                                            <option value="Water">Water</option>
                                            <option value="Electricity">Electricity</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label"> confirm Password</label>
                                        <input type="password" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler} />
                                    </div>

                                    <div className="col col-12 col-sm-6 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success" onClick={readValue}>Register</button><br></br><br></br>

                                        <p>Back to Login <Link to="/">Login</Link></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddComplaint