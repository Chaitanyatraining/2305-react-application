import React, { useEffect, useState } from 'react'

const UseEffectPagination = () => {
    const [usersData, setUsersData] = useState([])
    const [pageNumber, setPageNumber] = useState(0)

    useEffect(()=>{
        getDummyUsersData()
        return {
           //componentwillunmount 
        }
    }, [pageNumber])

    const getDummyUsersData = async () => {
        const response = await fetch(
            `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`, 
            {
                method: "GET",
                headers: {
                    "app-id": "633e33e98efd49504c9c7643 "
                }
            }
            )
        const {data} = await response.json()
        setUsersData(data)
    }

  return (
    <>
        <h2>UseEffectPagination</h2>
        {
           usersData.length > 0 ? (
                <div className='container'>
                    <div className='row'>
                       {usersData.map((user) => (
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
                onClick={() => setPageNumber(num)}
                >{num}</button>
            ))
        }
    </>
  )
}

export default UseEffectPagination