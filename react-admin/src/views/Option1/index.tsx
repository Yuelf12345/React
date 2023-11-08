import React, { useState, useRef } from 'react'
import { CloseOutlined, CheckOutlined, StopOutlined } from '@ant-design/icons';

import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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

  return (
    <div className={style.content}>
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
        <div className={style.card}>
          <div className={style.column}>
            <DndProvider backend={HTML5Backend}>
              {
                memberList.map((item, index) => {
                  return (
                    <Drag
                      rowKey={item?.id}
                      index={index}
                      id={item?.id}
                      item={item}
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
                        <li><CloseOutlined /></li>
                        <li><CheckOutlined /></li>
                        <li><StopOutlined /></li>
                      </ul>
                    </Drag>
                  )
                })
              }
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