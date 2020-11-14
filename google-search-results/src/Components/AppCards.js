import React, {Component} from 'react'

class AppCards extends Component{

    render(){
        return(
            <div>


            <ul class="app-cards">
                                 <li>
                                    <div class="app-card">
                                       <a href="https://twitter.com/FlatironSchool/status/1206589830257348613">
                                          <p>Go, ahead step our side of your comfort zone. 📸 An #flatironschool #changethings #mondaymotivation</p>
                                          <p class="details"><span class="app">Twitter</span><time>8 hours ago</time></p>
                                       </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="app-card">
                                       <a href="https://twitter.com/FlatironSchool/status/1206257682207969280">
                                          <p>What are our #flatirongrads earning? $74,566 = the average starting salary for our job-seeking students who took full-time...</p>
                                          <p class="details"><span class="app">Twitter</span><time>1 day ago</time></p>
                                       </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="app-card">
                                       <a href="https://twitter.com/FlatironSchool/status/1205895312260390914">
                                          <p>Some of the companies who have hired #FlatironSchool graduates: @Google, @IBM, @Facebook, @lyft, + more: https://okt.to/oC6LsU</p>
                                          <p class="details"><span class="app">Twitter</span><time>2 days ago</time></p>
                                       </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="app-card">
                                       <a href="https://twitter.com/FlatironSchool/status/1205533059925315589">
                                          <p>We’ve set the standard for the industry, releasing job placement data since 2014! See how our passionate students change...</p>
                                          <p class="details"><span class="app">Twitter</span><time>3 days ago</time></p>
                                       </a>
                                    </div>
                                 </li>
                              </ul>
            </div>
        )
    }
}

export default AppCards