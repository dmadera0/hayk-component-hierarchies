import React, { Component } from 'react'
import data from '../data'



function SearchResultsCounter() {
  
    
        return (
            <div>
               <p class="totals">About {data.resultCount} search results ({data.searchTime} seconds)</p> 
            </div>
        )
}


export default SearchResultsCounter
