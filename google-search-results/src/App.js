import React, { Component } from 'react'
import PrimaryNavigation from './Components/PrimaryNavigation'
import NavLinks from './Components/NavLinks'
import ConfigurationLink from './Components/ConfigurationLink'
import SearchResult from './Components/SearchResult'
import DeepLink from './Components/DeepLink'
import AppCards from './Components/AppCards'
import QuestionAnswer from './Components/QuestionAnswers'
import ImageBar from './Components/ImageBar'
import Details from './Components/Details'
import Profiles from './Components/Profiles'
import RelatedSearch from './Components/RelatedSearch'
import data from './data'
import SearchResultsCounter from './Components/SearchResultsCounter'


import "./App.css"

export default class App extends Component {
    state = data
    
    render(){
        return (
             <div class="App">
               <header>
                  <PrimaryNavigation/>
                  <nav class="secondary-navigation">
                     <NavLinks/>
                     <ConfigurationLink/> 
                  </nav>
               </header>
               <main>
                  <section class="search-results">
                  <SearchResultsCounter/>
                     <ul>
                        <li>
                           <div class="search-result">
                              <SearchResult/>
                                 <DeepLink/>
                           </div>
                        </li>
                        <li>
                           <div class="question-answers">
                              <h3>People also ask</h3>
                              <QuestionAnswer/>
                           </div>
                        </li>
                        <li>
                           <div class="search-result">
                              <h3><a href="https://twitter.com/FlatironSchool">Flatiron School (@FlatironSchool) · Twitter</a></h3>
                              <p class="url">https://twitter.com/FlatironSchool<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeBAMAAAC2z6FgAAAAGFBMVEVkvvhYr/JVrfBVre9Vre9VrO9Vre9WrvBx/gorAAAACHRSTlMBH2uOvv/mScIv72gAAADCSURBVHgBXdC1EgIxFIXhszKzJV7jNQ4lTo2d0KMlzvMzN6vZr/zjQUK+V4WWRaBIcopCG9YtKN6FpOozC48PaCVqWwsOt9Au1HpzOORUisXABDapZKkTlL0/qipxmgBYkuQoGyZZ8aV2jZPl0JAF7PPFSHJpGlR0xchOUtNIW0mukTYQAyZMIKxke0CsGNtD+zJ2gOaYW6X2V9kgWcN4XWRpnCd+Qbkh4A1TO32ia8l3m3dXHUQaFKcHErx6r/tE5A/jFW72lWOzsAAAAABJRU5ErkJggg==" alt="Twitter" /></p>
                              <p class="description">The school of the future where students don't pay until they're earning income.</p>
                              <AppCards/>
                                 
                           </div>
                        </li>
                     </ul>
                  </section>
                  <section class="search-highlights">
                     <header>
                        <div class="image-bar">
                           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABwCAMAAABsH8+0AAAAk1BMVEX///9NTVYAs+Y7O0ZJSVJDQ02FhYo/P0lGRlDd3d5ycng5OUX19fa2trjExMa5ubwwMDympqkoKDbR0dNXV2CgoKSvr7Ll5ebu7u5qanEAr+V8fIKLi5AAquPo9fzG6PdDu+hiYmnT7fmXl5sfHy8UFCef2/Pz+/5dwuuL0/C24vVrye2s3fQJCSF7y+4AAAoAAAAo0QJ9AAAI90lEQVR4nO2aiXKjOBCGwSAOi9gyYIONnQnBmcyV2X3/p1t1twDZ4fTu+Njir5qJIgnSH+jobmEYkyZNmjRp0qRJkyZNmnSnekZp5ffb2nOxXkDfsPg8g/KPGxt0oZ4Ps9ls9wvL33eyPHu9sUUX6qtm/DcofnvQoaUZ/wrF3fdbW3SZnsH42W8s/4CXc3jQkaUbjy9nd2ODLtVPBKEyTvuft7XnYmnGf8HylxsbdKFe0XjaOWjxfb6xRRfq+6wy/vkFig86st5p8cUyLb5fb2zRhdKNx53x8KC74S80nqbFyyMvvmj8DIvvh9NtPdgsNT0ZRvokfyzO74C9nhKD2rULImqDC3zVsoj8VLs0eSqyrFgk6tcF9AqwGD3RhcOlGY8746xefP03qxYX8u6hZYn87AbpBzSHG4PaawnHMGQb30rTNkd1F25uN9WljsmZ57k8XtPvmZB/JqqK9hgONH5H2zrujC/14usLU5MnDbXkj/nZHRYcW/cGtddisio0TXsuQZ7qFpub9NDTmJV1PMMqh1X333umHY8B+T2rjP+0+BKITfJYC8jKxV4ZgHDZUZlr2+45iO152AoNUhmjOqiyNiWIKbDRGQlCxpPD+GVX74w1SLwt1QLikOm5HOgRdM5tdVW+PgWxt46TxWA3h9GfhPAi872DVccKRDGNBHndncVU+uILIHaWlmoGCbYE4vnyF9krWILNTgDFUxB3BebHNg06Y82gTd7Vz0s2BMF3OxpENx6XrxetkUC0iiaQJJbPX/6zyjUG5oy3V798AjF8MNaVhUwScZzZK1nFihLENP0LQHDjoMWXAl59Wx8EEjHZRxpFZvaDJPD8Q/km5xJEJCdXEAiOrZEguvGfo/VBIHIkefula3rbYSAIEAYKJG0AMdl4ENzWldtOi6/unwwCKZjpFb40xfrPQOA9jQTRovXnz9H6IBA5ea1lINC4QSCwOFRDq/mN7MeC6DsHLr6Hk5hqEIjAKSv/V1ty7xyJaa/oALG36UgQ3Xg94NVB5hHKbwFJ6F3E9WzvAdnI/RPmUwsILhxyBRwH8vssWldhiQ4iPQpQWLSAgBEcTSiN7wIJkg1uiJsOELl6sGwkCE51FVMdzrZ148TXYusWEDnX7RyfMxrcBWK6YSjQn4nTdpA5DNPjOF/rtSdVqoG4bW9EPjnmkC150gNSeo1vMJvaQeT/1qIYA6IZrwe8ZyAxyGx5I6lcgywZqfhyxLBoGEiO860dRP4VO5Me3HCQvlQprVoJKm0GgTUI/AzYr/miB8QVglXrYCtIkObk9AwG0Y3XA94zEK3iMwhGID6ZRcOve9XaM+VLdYDAvMMhOBTkJFW6a4jWB4CAq2tmjuPEVUsnCDRayx6QSIwD0fO8OO1/jwfZMy1gEv0gMBTtvAfEcMeB9KZKB4DEthbbkpPSvSFm5KB0gxTuGJAfmvE/64B3HAgMAo+BzDK66AaBjR3HVheI740B0fK8782p0n4QcFC8+R7klj5INwgEuJ5jtMYj2JuizoEgJw7jrN4ZR4HAXKenalTm9/haGNGD/c0RIvkHazYcZECqtBHE3gZVDI9/ULnvW08Z0QMCayuGxVCgdwPPny91EExMDAT52hWtd4CYdog6wtoDT5XWKly/0EnpAYnkGASnhoxlZrF3vXLFq0BwERkI0pEq7QZR8jJyUMo/t5JtzO8HwZidQ2mL4weXCZMXpyBwt2Eg74ezkdVwtt4L4pvq6YL9llqOoGC3g2AeDOdGmrvlzbhTZhoVSDJ4aP067A4HFVN9k6XDp8VX2vkhRKjP7ehNVAq39PtR5W2joyyD/UtZGZb4f8lyDrnfuudGdgwRNN2GzLNtzw33NM/mIfWW2obSMRsC8voFhFPkHYsNR9KBL5WcV5SSDSn8DPS286vKMvZM6zqfimnhZNl+o25hJPWVad1p0qRJk0bIL3Iu4r22gCSruSXsbKGWGoiq9uTEymK2pNp0mdmC54V2XbqZM+HmG1WFvcedEv4bZcwFZ8H1irJmZVrgUjBLJU2O4MJj8UkwJmiviGLsZFvVzmgscw5VnuXRGeIaem+M6yjYVqd8QpEUVYrItvHZitKbpd0bQZaiire42hqfQrPexqECTuysa4Hg8aDtIg36UYaPXgW+JpPhQULYAIKejOcy6OXiYEtMug5vhVniq4LgKd98s8bjMny0uQc+0HqTwTAJo2aQNdLuNyvoTccNe6wq6Fb2/MogiVAuX1SlFnCAwBQFBx6DoQYQaHPBRh8y7yE0svLdpDgU/euCgB9LI6PgrvXm6/4wlYImkDQvEwyQwUWXOAjpsMDAAMy0ouuCQCBLwejSWS0iONblKqoj0+aNIOUJCDwAj95NWvamMxB+ZRAIkaozTlQNYpTPuBMEQuE7AEnQ2ECr0UA+OBf5g4Bgxs9ymkEWUbRoXrXuEGQF38tw7a9pIKVqkOX9glCijNeWt4EU6/V6BXvLnYIY/hF9isphagGRW7YU7H73CmIs0Kdw47QbpNLdghiLI7lVQScIftF13yDSzUCv3Q66QOYg2NDvGMRIbXSU9h0gsR8EAZ4Y3DOIEczx8GPZAXLv+0hJYoLzbp6C4Iewfb7WnYEo0/xTF8Xi/GFcFMh/4o9CGfSYTmNQxDx8wyJEHxBGPSaIAZNc4F9PSxAxDgTiEev2IGAGfRaEkUlpEEZ6XRHitjrmrM4J6164v5YgT9cBoS8Q8EsTmyY7GsQg1nI8dS7VErPje1vA9Ud4EdXXvvipBPQHEFYsSEmrDf+N8HMAYXuQpsLl11iDHRaP4esYSis0gOADYCJ2IQpg87INqiysAiJMNTH8qs06/ukhRt/vkwSmNxMTXSryq9DEprwWfb1PSToLg35MSJRVx7QEUfrzQ2zBVcrQ4yqpG7Ey+WjN0SVuyjSm2/Kw0VPfPhmpWRru2XS4flUQOcqF6zErzKt0sz8/cua5XKhzv7/DMLQQZPMRhh+UWU0dwc+uSxy4DqpoQqw/wkofJxmOP6RoVRTLk8mYLoti3ZtHX3y6zlisi/Uybek/adKkSZMmTZo0adKk/6X+AVQJ0f7LsXtWAAAAAElFTkSuQmCC" class="lead-image" alt="lead" />
                           <ImageBar/>
                        </div>
                        <section class="overview">
                           <div>
                              <h2>Flatiron School</h2>
                              <p>Educational organization</p>
                           </div>
                           <a href="#"><i class="fa fa-share-alt"></i></a>
                        </section>
                     </header>
                     <main>
                        <section class="details">
                           <p class="description">Flatiron School is an educational organization founded in 2012 by Adam Enbar and Avi Flombaum. The organization is based in New York City and teaches software engineering, computer programming, data science, UX/UI design, and cybersecurity analytics.</p>
                           <Details/>
                        </section>
                        <section class="profiles">
                           <h3>Profiles</h3>
                           <Profiles/>
                        </section>
                        <section class="related-searches">
                           <h3>People also search for</h3>
                           <RelatedSearch/>
                        </section>
                     </main>
                  </section>
               </main>
            </div>           
        )
    }
}
