import React from 'react'
import {Route} from 'react-router'
import Home from '../Landing'
import Main from '../Main'


const routes = [
  <Route key='home-landing' path='/home/landing' component={props => <Home {...props} />} strict />,
  <Route key='main' path='/' component={props => <Main {...props} />} strict />
]

const navContent = [
  {text: 'Events', link: `/events`},
  {text: 'Community', link: `/community`},
  {text: 'Fashion', link: `/gallery`},
  {text: 'Menu', link: `/club-menu`},
  {text: 'About Us', link: `/about-us`}
]

export {
  routes,
  navContent
}
