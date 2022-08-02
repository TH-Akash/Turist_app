
import React, { useState } from "react";

const LogIn  = () =>{
    const [inputs, setInputs] = useState({name:"", email:"", password:""});

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }));
    };


    return (
        <form
        onSubmit={ (e) =>{
            e.preventDefault();
        }}      
        >
            <div class="form-group">
                <label for="exampleInputEmail1">User Name</label>
                <input
                    type="name"
                    name= "name"
                    onChange={handleChange}
                    value={inputs.name}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter User Name"
                />
                <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    name= "email"
                    onChange={handleChange}
                    value={inputs.password}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                </small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                    onChange={handleChange}
                    value={inputs.name}
                    type="password"
                    name= "password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                />
            </div>
            <div class="form-check">
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                    Check me out
                </label>
            </div>
            <button type="submit" class="btn btn-primary">
                Submit
            </button>
        </form>
    );
};
export default LogIn;
