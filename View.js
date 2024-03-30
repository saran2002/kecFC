import { useState,useEffect } from "react"
import axios from 'axios'
//import t4 from "../newfolder/comp/cashi2.jpeg";

 function  View(){
        const [datas,setDatas] = useState([])
       
        let users=[]
        const data = (e)=>{
            try{
     
                axios.get('http://localhost:4000/lists/display')
                .then(res=>{
                    users=res.data;
                    setDatas(users)
                })

            }catch(err){

                console.log(err)

            }
        }
      useEffect(()=>{
        data();
      },[datas])

      const deleteid=(id)=>{
        axios.delete(`http://localhost:4000/lists/delete/${id}`)
        .then(
            setDatas(
                datas.filter((val)=>{
                    return val._id !== id;
                })
            )
        )
        alert("successfully deleted ")
      }

        return(
            <><div>

            <table className="table" >
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Department</td>
                        <td>Quantity</td>
                        <td>Amount</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                {
                datas.map((user)=>(
                    <tr>
                        <td>{user.productname}</td>
                        <td>{user.department}</td>
                        <td>{user.quantity}</td>
                        <td>{user.amount}</td>
                        <td>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                deleteid(user._id)
                            }}>
                             Delete
                            </button>
                        </td>
                    </tr>
                ))
            }

                </tbody>

            </table>
            </div>
            </>
        )
 }


 export default View