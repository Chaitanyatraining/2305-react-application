import React from "react"

const CompFunc = (props) =>{
   const {courseName, courseDuration} = props
    return(
        <div>
            <h2>CompFunc</h2>
            <h4>Course Name: {courseName} and duration is {courseDuration}</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In doloribus accusamus autem, commodi a rem incidunt minus praesentium eaque! Culpa deserunt consequuntur neque.</p>
        </div>
    )
}

export default CompFunc
