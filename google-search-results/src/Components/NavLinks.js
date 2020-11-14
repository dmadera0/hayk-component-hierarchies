import React, {Component} from 'react'

class NavLinks extends Component{



    render(){
        return(
            <ul class="search-types">
                        <li><a class="search-type active" href="#"><i class="fa fa-search"></i><span>All</span></a></li>
                        <li><a class="search-type " href="#"><i class="fa fa-newspaper"></i><span>News</span></a></li>
                        <li><a class="search-type " href="#"><i class="fa fa-map-marked"></i><span>Maps</span></a></li>
                        <li><a class="search-type " href="#"><i class="fa fa-video"></i><span>Videos</span></a></li>
                        <li><a class="search-type " href="#"><i class="fa fa-images"></i><span>Images</span></a></li>
                        <li><a class="search-type " href="#"><i class="fa fa-ellipsis-v"></i><span>More</span></a></li>
                     </ul>
        )
    }
}





export default NavLinks