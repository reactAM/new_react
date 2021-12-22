import { useState } from "react";
const deg=45;

function Btns(props){
  let [index, setIndex] = useState(0);

  function plus(){    
    setIndex(++index);
    props.frame.current.style.transform=`rotate(${index*deg}deg)`;
  }

  function minus(){   
    setIndex(--index);
    props.frame.current.style.transform=`rotate(${index*deg}deg)`;
  }

  return (
    <>
      <span className="btnPrev" onClick={plus}>PREV</span>
      <span className="btnNext" onClick={minus}>NEXT</span>
    </>
  )
}

export default Btns;