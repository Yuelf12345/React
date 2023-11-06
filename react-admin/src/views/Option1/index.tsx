import React from 'react'
import style from './index.module.scss'
export default function Option1() {
  return (
    <div className={style.content}>
      111
      <div className={`${style.side} ${style.leftSide}`}>
        <div className={style.card}></div>
        <div className={style.row}>
          <div className={`${style.card} ${style.small}`}>
            <label>2022</label>
            <img src="https://t3.ftcdn.net/jpg/04/85/60/70/360_F_485607028_2JW8GkFoJjdZFS4RcRwPuRBSBLpNMwzK.jpg" />
          </div>
          <div className={`${style.card} ${style.small}`}>
            <label>2023</label>
            <img src="https://images.unsplash.com/photo-1615118265620-d8decf628275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80" />
          </div>

        </div>
      </div>
      <div className={`${style.side} ${style.centerSide}`}>
        <div className={style.card}>
          <button className={style.button}>View</button>
        </div>
      </div>
      <div className={`${style.side} ${style.rightSide}`}>
        <div className={style.card}></div>
      </div>
    </div>
  )
}
