import React from "react";
import ProfileClass from "./ProfileClass";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"veera"
        }
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    render(){
        console.log("render");
        const {name} = this.state
        const {ed} = this.props
        return(
            <div>
                <h1>{name}</h1>
                <h2>{ed}</h2>
                <ProfileClass component="p1  " />
                <ProfileClass component="p2  " />
            </div>
        )
    }
}

export default UserClass;