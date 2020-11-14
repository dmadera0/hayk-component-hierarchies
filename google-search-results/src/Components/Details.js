import React, { Component } from 'react'


class Details extends Component{
    
    render(){
        return(
            <ul>
            <li>
               <dt>Founder(s):</dt>
               <dd><a href="https://www.google.com/search?q=Adam+Enbar">Adam Enbar, </a><span>Avi Flombaum</span></dd>
            </li>
            <li>
               <dt>Employees:</dt>
               <dd>151-200</dd>
            </li>
            <li>
               <dt>Owner:</dt>
               <dd><a href="https://www.google.com/search?q=WeWork">WeWork</a></dd>
            </li>
            <li>
               <dt>Headquarters location:</dt>
               <dd><a href="https://www.google.com/search?q=New+York">New York, NY</a></dd>
            </li>
            <li>
               <dt>Founded:</dt>
               <dd>2012</dd>
            </li>
         </ul>
        )
    }
}
export default Details 