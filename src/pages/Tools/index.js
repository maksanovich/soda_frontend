import React, { useState, useRef, useEffect } from "react"
import { useParams } from 'react-router-dom';

import DragAndDrop from "../../components/DragAndDrop";
import { subNavData } from "../../constants/navbarConstant";

export default function Tools() {

    const params = useParams();
    const { name } = params;

    const [title, setTitle] = useState('');

    useEffect(()=>{
        for (let i = 0; i < subNavData.length; i++) {
            const item = subNavData[i];
            if(item.data.length == 0) break;
            
            for (let j = 0; j < item.data.length; j++) {
                const el = item.data[j];
                if(el.url === name){
                    setTitle(el.text);
                    return;
                }
            }
        }
    }, [name])

    return (
        <div className="bg-gray-100 py-5">
            <div className="text-center">
                <h1 className="font-black text-3xl my-4">{title}</h1>
            </div>
            <DragAndDrop />
        </div>
    )
}