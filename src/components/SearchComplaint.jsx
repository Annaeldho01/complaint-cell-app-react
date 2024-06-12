import React, { useState } from 'react'
import axios from 'axios'

const SearchComplaint = () => {
    const[data,setData]=useState(
       {
        "type":""
       } 
    )

    const [result,setResult]=useState([])

// input value fetching

    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

// Search button event

    const readValue=(event)=>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then(
            (response)=>{
                setResult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }

// delete event handling

const deleteComplaint = (id)=>{
  let input={"_id":id}

axios.post("http://localhost:8080/delete",input).then(
    (response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            alert("succesfully deleted")
        } else {
            alert("something went wrong")
        }
    }
)
}


  return (
    <div>
        
        <div className="container">
        <h1 align="center">SEARCH COMPLAINT</h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Type</label>
                            <input type="text" className="form-control" name='type' value={data.type} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">

        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
    <th scope="col">NAME</th>
      <th scope="col">MOBILE</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">PINCODE</th>
      <th scope="col">DATE</th>
      <th scope="col">PLACE</th>
    </tr>
  </thead>
  <tbody>
   {result.map(
    (value,index)=>{
        return  <tr>
        <td>{value.name}</td>
            <td>{value.mobile}</td>
            <td>{value.address}</td>
            <td>{value.pincode}</td>
            <td>{value.date}</td>
            <td>{value.place}</td>
        <td><button className="btn btn-danger" onClick={()=>{deleteComplaint(value._id)}}>DELETE</button></td>
      </tr>
    }
   )}
  </tbody>
</table>
            </div>
        </div>    </div>
        </div>
  )
}

export default SearchComplaint