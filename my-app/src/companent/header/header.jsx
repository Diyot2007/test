
import React, { Component } from 'react';



class Header extends Component {
    state = {
        fullName: "",
        parol: ""
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })
        console.log(this.state.fullName);
    }
    fullNameHandler = () => {
        if (typeof this.state.parol === String) {
            alert("fiefihnwsiknkenfi")
        }
    }
    parolHandler = () => {
        if (this.state.parol.length < 5) {
            alert("fiefihnwsiknkenfi")
        }
    }
    render() {
        return (
            <>

               <header.css />

                <div className="box">
                    <form action="">
                        <input type="text" name='fullNmae' value={this.state.fullName} onChange={this.changeHandler} />
                        <input type="password" name='parol' value={this.state.parol} onChange={this.changeHandler} onBlur={this.parolHandler}/>
                        <button className='btn btn-success '>send</button>
                    </form>
                </div>
            </>
        );
    }
}

export default Header;