import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ListAndKeys from '../ListAndKeys'
import CompClass from '../../CompClass'
import CounterApp from '../CounterApp'
import LifeCycleMethods from '../LifeCycleMethods'
import Pagination from '../Pagination'

 const Routing = (props) => {
    const { userData } = props
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="listandkeys" element={<ListAndKeys userData={userData} />} />
            <Route path="classComp" element={<CompClass />} />
            <Route path="counterapp" element={<CounterApp />} />
            <Route path="lifecyclemethods" element={<LifeCycleMethods />} />
            <Route path="pagination" element={<Pagination />} />
        </Routes>
    </div>
  )
}
export default Routing
