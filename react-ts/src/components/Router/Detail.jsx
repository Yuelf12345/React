import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
export default function Detail() {
    // const params = useParams()
    // const [params] = useSearchParams()
    const {state:{id,title}} = useLocation()
    return (
        <div>
            <h2>Deatil</h2>
            {/* <div>ID:{params.get('id')}</div>
            <div>TITLE:{params.get('title')}</div> */}
            {/* <div>ID:{params.id}</div>
            <div>TITLE:{params.title}</div> */}
            <div>ID:{id}</div>
            <div>TITLE:{title}</div>
        </div>
    )
}
