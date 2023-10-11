import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        usersData: [],
        pageNumber: 0
    }

    getDummyUsersData = async () => {
        const response = await fetch(
            `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`, 
            {
                method: "GET",
                headers: {
                    "app-id": "633e33e98efd49504c9c7643 "
                }
            }
            )
        const {data} = await response.json()
        this.setState({usersData: data})
    }

    componentDidMount(){
        this.getDummyUsersData()
    }

    componentDidUpdate(prevsProps, prevsState){
        //update stragery
        //when the state or props is updated (componentdidupdate will be called)

        if(prevsState.pageNumber !== this.state.pageNumber){
            this.getDummyUsersData()
        }
    }

    handleButtonClick = (num) => {
        this.setState({pageNumber: num})
    }

  render() {
    console.log(this.state.usersData)
    return (
      <div>
        <h2>Pagination</h2>
        {
           this.state.usersData.length > 0 ? (
                <div className='container'>
                    <div className='row'>
                       {this.state.usersData.map((user) => (
                        <div className='col-md-6'>
                            <div className='row mt-2 border me-1'>
                                <div className='col-md-4 p-2'>
                                    <img className='img-fluid' src={user.picture} alt={user.firstName} />
                                </div>
                                <div className='col-md-8'>
                                    <p>{user.id}</p>
                                    <h4>{user.title} {user.firstName} {user.lastName}</h4>
                                </div>
                            </div>
                        </div>
                       ))}
                    </div>
                </div>
            ) : <p>Loading...</p>
        }
        {
            [1,2,3,4,5,6,7,8,9].map((num) => (
                <button className='btn btn-primary me-1 mt-3'
                onClick={() => this.handleButtonClick(num)}
                >{num}</button>
            ))
        }
      </div>
    )
  }
}

export default Pagination