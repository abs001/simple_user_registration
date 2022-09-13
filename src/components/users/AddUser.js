import React, { useState } from "react";

import Card from "../ui/Card";
import classes from "./AddUser.module.css";
import Button from "../ui/Button";


const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const addUserHandler = event => {
        event.preventDefault();
        console.log(enteredUserName, enteredAge)
    };
    const userNameChanged = (event) => {
        setEnteredUserName(event.target.value);
    }
    const ageNameChanged = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label>Username</label>
                <input type="text" id="username" onChange={userNameChanged}></input>
                <label>Age</label>
                <input type="number" id="age" onChange={ageNameChanged}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
};

export default AddUser;