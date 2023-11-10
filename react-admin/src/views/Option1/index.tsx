import React, { useState, useRef, useEffect } from 'react'
import { CloseOutlined, CheckOutlined, StopOutlined } from '@ant-design/icons';

import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { List } from 'antd';
import VirtualList from 'rc-virtual-list';

//@ts-ignore
import { cloneDeep } from "lodash";
import style from './index.module.scss'
export default function Option1() {
  const [memberList, setMemberList] = useState([
    {
      id: 1,
      url: "https://t3.ftcdn.net/jpg/04/85/60/70/360_F_485607028_2JW8GkFoJjdZFS4RcRwPuRBSBLpNMwzK.jpg",
      text: 'Elaine Benes',
      other: 'Writer'
    },
    {
      id: 2,
      url: 'https://eu.ui-avatars.com/api/?name=George%20Costanza&size=250',
      text: 'George Costanza',
      other: 'Architect'
    },
    {
      id: 3,
      url: 'https://eu.ui-avatars.com/api/?name=Elaine%20Benes&size=250',
      text: 'Cosmo Kramer',
      other: 'New York Man of Mystery'
    },
    {
      id: 4,
      url: 'https://eu.ui-avatars.com/api/?name=Elaine%20Benes&size=250',
      text: 'Cosmo Kramer',
      other: 'New York Man of Mystery'
    },
    {
      id: 5,
      url: 'https://eu.ui-avatars.com/api/?name=Elaine%20Benes&size=250',
      text: 'Cosmo Kramer',
      other: 'New York Man of Mystery'
    }
  ])

  const changePosition = (dragIndex: any, hoverIndex: any) => {
    const data = cloneDeep(memberList)
    const temp = data[dragIndex];
    data[dragIndex] = data[hoverIndex];
    data[hoverIndex] = temp;
    console.log("交换完成---", data);
    setMemberList(data);
  };
  useEffect(() => {
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    const container = document.querySelector('#slider__box');
    const btn = document.querySelector('#slider__btn');
    const color: any = document.querySelector('#slider__color');
    const tooltip: any = document.querySelector('#slider__tooltip');
    const clock = () => {
      let today = new Date();
      let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
      let m = today.getMinutes(); // 0 - 59
      let s = today.getSeconds(); // 0 - 59
      h *= 30; // 12 * 30 = 360deg
      m *= 6;
      s *= 6; // 60 * 6 = 360deg
      rotation(hours, h);
      rotation(minutes, m);
      rotation(seconds, s);
      setTimeout(clock, 500);
    }
    const rotation = (target: any, val: any) => {
      target.style.transform = `rotate(${val}deg)`;
    }
    clock()

    const dragElement = (target: any, btn: any) => {
      target.addEventListener('mousedown', (e: any) => {
        onMouseMove(e);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
      const onMouseMove = (e: any) => {
        e.preventDefault();
        let targetRect = target.getBoundingClientRect();
        let x = e.pageX - targetRect.left + 10;
        if (x > targetRect.width) { x = targetRect.width };
        if (x < 0) { x = 0 };
        btn.x = x - 10;
        btn.style.left = btn.x + 'px';
        let percentPosition = (btn.x + 10) / targetRect.width * 100;
        color.style.width = percentPosition + "%";
        tooltip.style.left = btn.x - 5 + 'px';
        tooltip.style.opacity = 1;
        tooltip.textContent = Math.round(percentPosition) + '%';
      };
      const onMouseUp = (e: any) => {
        window.removeEventListener('mousemove', onMouseMove);
        tooltip.style.opacity = 0;
        btn.addEventListener('mouseover', function () {
          tooltip.style.opacity = 1;
        });
        btn.addEventListener('mouseout', function () {
          tooltip.style.opacity = 0;
        });
      };
    };

    dragElement(container, btn);
  }, [])
  const handleView = () => {
    console.log('open');
  }
  return (
    <div className={style.content}>
      <div className={`${style.side} ${style.leftSide}`}>
        <div className={style.card}>
          <div className={style.clock}>
            <div id='hours' className={`${style.hand} ${style.hours}`}></div>
            <div id='minutes' className={`${style.hand} ${style.minutes}`}></div>
            <div id='seconds' className={`${style.hand} ${style.seconds}`}></div>
            <div className={style.point}></div>
            <div className={style.marker}>
              <span className={style.marker__1}></span>
              <span className={style.marker__2}></span>
              <span className={style.marker__3}></span>
              <span className={style.marker__4}></span>
            </div>
          </div>
          <div className={style.slider}>
            <div id='slider__box' className={style.slider__box}>
              <span id="slider__btn" className={style.slider__btn}></span>
              <span id='slider__color' className={style.slider__color}></span>
              <span id='slider__tooltip' className={style.slider__tooltip}>50%</span>
            </div>
          </div>
        </div>
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
          <button className={style.button} onClick={handleView}>View</button>
        </div>
      </div>
      <div className={`${style.side} ${style.rightSide}`}>
        <div className={style.card}>
          <div className={style.column}>
            <DndProvider backend={HTML5Backend}>
              <List>
                <VirtualList
                  data={memberList}
                  height={370}
                  itemHeight={1}
                  itemKey="id"
                >
                  {(item: any, index: any) => (
                    <List.Item key={item.id}>
                      <Drag
                        rowKey={item?.id}
                        index={index}
                        id={item?.id}
                        item={item}
                        key={item.id}
                        changePosition={changePosition}
                      >
                        <div>
                          <div className={style.row}>
                            <img className={style.avatar} src={item.url} alt={item.text} />
                            <b>{item.text}</b>
                          </div>
                          <p>{item.other}</p>
                        </div>
                        <ul className={style.links}>
                          <li><CheckOutlined /></li>
                          <li><CloseOutlined /></li>
                          <li><StopOutlined /></li>
                        </ul>
                      </Drag>
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </DndProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

const Drag = (props: any) => {
  const {
    id = "",
    index = "",
    changePosition = () => { },
    children,
  } = props;
  const ref: any = useRef(null);
  const [, drop] = useDrop({
    accept: "DragDropBox",
    hover: (item: any, monitor: any) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      changePosition(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "DragDropBox",
    item: { id, type: "DragDropBox", index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const changeRef = drag(drop(ref));

  return (
    <div
      //@ts-ignore
      ref={changeRef}
      className={style.member}
    >
      {children}
    </div>
  );
};