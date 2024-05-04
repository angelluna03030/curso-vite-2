import { useEffect, useRef } from "react";

const EjemploUseRef = () => {
    const ref = useRef()
  useEffect(() => {
   
    console.log({
        with : ref.current.clientWidth,
        height : ref.current.clientHeight
    });
  }, []);
  // biome-ignore lint/correctness/noChildrenProp: <explanation>
  return (
    <>
      <div className="div" ref={ref}>index</div>
      <div className="div">index</div>
      <div className="div">index</div>
    </>
  );
};

export default EjemploUseRef;
