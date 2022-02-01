import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  //this is like the pop out window
  useEffect(() => {
    modalRoot.appendChild(elRef.current); //whenever this got created, insert inside the DOM
    return () => modalRoot.removeChild(elRef.current); //then, when done, remove from the DOM
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
