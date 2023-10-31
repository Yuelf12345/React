import React, { Component } from 'react'
import styles from  './index.module.scss' // 局部引入
import {Button} from 'antd'
import {UpOutlined} from '@ant-design/icons'
export default class Comp1 extends Component {
  render() {
    return (
      <div className={styles.comp}>
        <Button>Comp</Button>
        <UpOutlined />
      </div>
    )
  }
}