import React,{ useState } from "react";
import './style.css';




export function RatingBar() {
  const [valueHover, setValueHover] = useState(0);
  const [valueOnClick, setValueOnClick] = useState(0);
  const arr = [1,2,3,4,5,6,7,8,9,10];

  return (
  <div className="row">
    {arr.map((item)=>(
      <div className={item <= valueHover || item <= valueOnClick  ? "box-hover col" : "box col"}
      onMouseEnter={()=>setValueHover(item)} onMouseLeave={() =>setValueHover(0)}  onClick={() => setValueOnClick(item)}>
            {item}
      </div>
    ))}


</div>

  )
}

