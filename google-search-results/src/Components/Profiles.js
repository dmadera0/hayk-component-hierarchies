import React, {Component } from 'react'

class Profiles extends Component{

    render(){
        return(
            <ul>
            <li>
               <div class="external-link">
                  <a href="https://twitter.com/flatironschool">
                     <figure><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABZUlEQVR4AWLQWfWQpmjUAjxo1IJRC2wBpJTDQkVRFIafKBujZrnGjbNd84wHiJNs27btrm3rrFbW1T73m20u/yMsW0cBg6zue5XCYLFQcC41JK0I3PsYaWvC+BkugYFljrbmWPp/H/86FOnhB2hGZbTg/dBhFoEBhsoEAO23Su9+5s/9nA0R/ANtXEgNJTtiAgObfB28gZaKt8Wen2ZarhRgjVL8nagGmetC+IFMb5lgqOtOZAtsLVgjcIhFZqD+RLYj0IFzGCwUcRctc7XgNNcyA7GBhAW+EWvnHK3XCjqDhg3OUpvAEegFTgAdA+nrwnuF4zCw7DSlwqOPscRxUAmtiYqY5NDXImz/6mPprlAP1sDgcjdFLokdCkPGW6Kstmbhtoim2IWNsRsvFXNsjURvBmvgiMROc11S0+BhVvmhFAUDhewrISgbg4/qlyUdeEnl+sBk7SOgfcBSb3jWaKMWjFoAABKespvtvzYlAAAAAElFTkSuQmCC" alt="Twitter" /></figure>
                     <p>Twitter</p>
                  </a>
               </div>
            </li>
            <li>
               <div class="external-link">
                  <a href="https://www.linkedin.com/school/the-flatiron-school/">
                     <figure><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACtklEQVR4AeyVA5AkQRREZ862bTMcZ9u2wzrbtm3bWNvmaW3b3rzKRa+NOWVEDoqvqv//LZPtUpoubC2cLIxKMveyku1UmkYAG2EoyFYESFEgQIos346dX7K7YiFyN8iFB17Sxx4NRxzVdcbYO6aotke5cgB42sFXDGDjF4FM+UbGY+5TK9FXKQBKOKTtjNz68CMAdQ+oVjyAXPicoRtyS8M5GA0PqRGwgm9gxxdMf2SBkNhEZCoxORXbVH9CXllBWHOvCla9sQNPbegRit3qDmhyWL1SYkCKA7kIxvoH1MBrr5KZllJ/IWnK3zskZ/SXEIDB1vm0trAO6K5ndNCYN5DRz9tgWxdhfnc8pQ2madXdSmDb7CeWWPfOHite22LoDWMegiDFj4GJ983hFBLD9IOPcEB0AjZ8+S6daIeaAwJFG/v8ouJh4ROB3uf1sFHpB34GRSMmMRlJKalISE5hLEHJIRCjbptAXlyAmY8tEZ2QjOzaK4qSbHs6AItTdhHwvpU3N0ZB+hYQhcGXDTi//AFSUtNPW5SY3lX3KJc7gKSwuESYeIXByDMM4XFJyC1bv0i0PKbJoCx/ALewWMwSwccApZe9skFwTAKyiXEjPYZyBziq48zUlVK09j4VvLL3Q3ZFxCdh/D0z7lG+AHFJKVj03DrHwhxHqOzimjMeWZQ/QKQ42ZQH5jkW5u896o7IJmYJa0T5A/BqJ+S6Wv7eqebwH+A/QOUBTMwHYFdpAaY9tACrVqyYECPMOr9d1UF6Gx7QcgLb2McxfCOOu2uaB2CLyk/EJ6WPo4PEmtOLqgOsZK2Pa4IDSUvPeWKFXud1pRre94Ie5jy1kvqnC+AWxzTYn2Odnud0MSdjDM0i1ObXOvDVBQjNEFciMJrhKHJwH5FmDgIPfNds4DuniO75P3r6HNY9BwATNI1Cu+uNpgAAAABJRU5ErkJggg==" alt="LinkedIn" /></figure>
                     <p>LinkedIn</p>
                  </a>
               </div>
            </li>
            <li>
               <div class="external-link">
                  <a href="https://www.instagram.com/flatironschool/">
                     <figure><img src="data:image/png;base64,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" alt="Instagram" /></figure>
                     <p>Instagram</p>
                  </a>
               </div>
            </li>
         </ul>    
        )
    }
}

export default Profiles