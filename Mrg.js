import { useState,useEffect } from "react";
import axios from "axios";

const Mrg = () => {
    const [list,setList]=useState({
        name:'',
        mobile:'',
        food:'',
        amount:'',
        veg:'',
        time:'',
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
    <div >
      <center>
        <div>
        <div className='form-container'>
        <form onSubmit={submitform} className='form-group' style={{width:"30%"}}>
            <h1>Breakfast  Order</h1>
            <label>User Name</label>
            <input type='text' value={list.name} onChange={(e)=>updatefield(e)} name="name" className='form-control' required/><br/><br/>
            <label>Enter Your Food Name</label>
            <input type='text' value={list.food} onChange={(e)=>updatefield(e)} name="food" className='form-control' required/><br/><br/>
            <label>Mobile Number</label>
            <input type='text' value={list.mobile} onChange={(e)=>updatefield(e)} name="mobile" className='form-control' required/><br/><br/>
            <label>Amount</label>
            <input type='text' value={list.amount} onChange={(e)=>updatefield(e)} name="amount" className='form-control' required/><br/><br/>
            <label>veg</label>
            <input type='text' value={list.veg} onChange={(e)=>updatefield(e)} name="veg" className='form-control' required/><br/><br/>
            <label>time</label>
            <input type='text' value={list.time} onChange={(e)=>updatefield(e)} name="time" className='form-control' required/><br/><br/>
            <button >Submit</button>

            
          
        </form>
        </div>
      </div>
      </center>
    </div>
  )
}

export default Mrg
