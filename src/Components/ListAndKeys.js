import React from 'react'

 const ListAndKeys = (props) => {
   const {userData} = props
  return (
    <div>
        <h2>ListAndKeys</h2>
        <table className='border'>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>userName</th>
                <th>Email</th>
            </tr>
            {
            userData.map((item, index) => (
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

export default ListAndKeys
