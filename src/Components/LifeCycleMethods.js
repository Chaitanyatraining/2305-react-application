import React, { Component } from 'react'

class LifeCycleMethods extends Component {
    constructor(){
        super()
        console.log('constructor Executed')
    }

    state = {
        userData:[]
    }

    static getDerivedStateFromProps(props, state){
        console.log('static getDerievedStateFromProps Executed')
        return null
    }

    getUsersData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.setState({userData:data})
    }

    componentDidMount(){
        this.getUsersData()
    }


  render() {
    console.log('render executed')
    return (
      <div>
        <h2>LifeCycleMethods</h2>
        <table className='border'>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>userName</th>
                <th>Email</th>
            </tr>
            {
            this.state.userData.map((item, index) => (
                <tr key={index}>
                   <td>{item.id}</td> 
                   <td>{item.name}</td> 
                   <td>{item.username}</td> 
                   <td>{item.email}</td> 
                </tr>
            ))
        }
        </table>
      </div>
    )
  }
}

export default LifeCycleMethods