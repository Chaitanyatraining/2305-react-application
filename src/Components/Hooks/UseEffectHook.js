import React, {useEffect, useState} from 'react'

const UseEffectHook = () => {
     const [userData, setUserData] = useState([])

    useEffect(()=>{
        //it is similar to componentdidMount
       getusersData()
    }, [])

    const getusersData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUserData(data)
    }

  return (
    <div>UseEffectHook</div>
  )
}

export default UseEffectHook