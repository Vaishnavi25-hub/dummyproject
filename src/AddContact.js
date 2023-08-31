import React from 'react';
import { useHistory } from 'react-router-dom';
class AddContact extends React.Component{
    state={
        name:"",
        email:""
    }

    add=(e)=>{
        e.preventDefault();
        if (this.state.name==="" || this.state.name==="" ){
            alert("All fields are mandatory");
            return;
        }
        console.log(this.state)
        this.props.addContactHandler(this.state)
        this.setState({name:"", email:""})
        // this.props.navigateTo("/");
        // const history=useHistory();
        // history.push("/")

    }
    render(){
        return(<div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
            <div className="field">
                <label>Name</label>
                <input type="text" name='name' placeholder='Name'
                value={this.state.name}
                 onChange={(e)=> this.setState({name:e.target.value})}/>
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" name='email' placeholder='Email'
                value={this.state.email}
                onChange={(e)=> this.setState({email:e.target.value})} />
            </div>
            <button className='ui button green'>Add</button>

        </form>
    </div>)
           
    }
}
export default AddContact;

// import React,{useState,useEffect} from 'react'

// const AddContact = () => {
//     const [user,setUser] =useState("");
//     setUser("vaish")

//     useEffect(() => {

//     }, [])

//   return (
//     <div>AddContact</div>
//   )
// }

// export default AddContact