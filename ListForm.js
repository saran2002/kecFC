import { useState,useEffect } from "react";
import axios from "axios";

const ListForm = () => {
    const [list,setList]=useState({
        productname:'',
        department:'',
        quantity:'',
        amount:'',
    })

    const submitform=(e)=>{
        
            e.preventDefault();
            // const headers = {
            //     'Content-type':'application/json'
            // }
            // {
            //     headers:headers
            // }
           axios.post('http://localhost:4000/lists/list',list)
            .then(res=>{
                alert(res)
            }).catch(err=>{
                console.log(err)
            })
            //alert("succefully added")
        
       

    }
    const updatefield=(e)=>{
        setList({...list,
            [e.target.name]:e.target.value})
    }
  return (
    <div className="wrapper">
        <div className="main">
        <div className='form-container'>
        <form onSubmit={submitform} className='form-group'>
            <label>Product Name</label>
            <input type='text' value={list.productname} onChange={(e)=>updatefield(e)} name="productname" className='form-control' required/><br/><br/>
            <label>Department</label>
            <input type='text' value={list.department} onChange={(e)=>updatefield(e)} name="department" className='form-control' required/><br/><br/>
            <label>Quantity</label>
            <input type='text' value={list.quantity} onChange={(e)=>updatefield(e)} name="quantity" className='form-control' required/><br/><br/>
            <label>Amount</label>
            <input type='text' value={list.amount} onChange={(e)=>updatefield(e)} name="amount" className='form-control' required/><br/><br/>
            <button className="btn btn-primary">Submit</button>

            
          
        </form>
        </div>
      </div>
    </div>
  )
}

export default ListForm
