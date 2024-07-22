import { Component } from "react";

class ProfileClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"veera",
        }
        console.log(this.props.component + " constructor");
    }

    componentDidMount(){
        console.log(this.props.component + " componentDidMount");
    }

    render(){
        console.log(this.props.component + " render");
        return(
            <h1>Profile</h1>
        )
    }

}

export default ProfileClass;