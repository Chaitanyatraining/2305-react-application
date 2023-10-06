import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ListAndKeys from '../ListAndKeys'
import CompClass from '../../CompClass'
import CounterApp from '../CounterApp'

 const Routing = (props) => {
    const { userData } = props
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="listandkeys" element={<ListAndKeys userData={userData} />} />
            <Route path="classComp" element={<CompClass />} />
            <Route path="counterapp" element={<CounterApp />} />
        </Routes>
    </div>
  )
}
export default Routing
