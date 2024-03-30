import { useState,useEffect } from "react"
import axios from 'axios'
//import t4 from "../newfolder/comp/cashi2.jpeg";

 function  View2(){
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
                        <td>Food</td>
                        <td>mobile</td>
                        <td>quantity</td>
                        <td>veg</td>
                        <td>time</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                {
                datas.map((user)=>(
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.food}</td>
                        <td>{user.mobile}</td>
                        <td>{user.amount}</td>
                        <td>{user.veg}</td>
                        <td>{user.time}</td>
                        <td>
                            <button  onClick={(e)=>{
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


 export default View2