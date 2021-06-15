import React from 'react'
import PropTypes from 'prop-types'
import {Layout, Carousel} from 'antd'
import 'antd/dist/antd.css'
import {Map} from 'immutable'
import {Content, Footer, Header} from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'


const Main = ({appProps, ...props}) => {
  return (
    <Layout style={{background: 'url("https")'}}>
      <Header style={{color: '#fff', fontFamily: 'Impact', backgroundColor: '#000'}}>
        Header
      </Header>
      <Content>
        <Carousel autoplay fade>
          <img key='' src='https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg' alt='background' />
          <img key='' src='https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg' alt='background' />
        </Carousel>
      </Content>
      <Footer style={{color: '#fff', fontFamily: 'Impact', backgroundColor: '#000'}}>
        Footer
      </Footer>
    </Layout>
  )
}

Main.propTypes = {
  appProps: PropTypes.instanceOf(Map)
}

Main.defaultProps = {
  appProps: Map()
}

export default Main
