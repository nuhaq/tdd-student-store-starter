import * as React from "react"
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <section className="sidebar">
    
      <div className={props.isOpen ? "big-sidebar" : "big-sidebar hidden"}>
        <button onClick={props.handleOnToggle} className="big-toggle-button">big-tog</button>
      </div>
      <div className={props.isOpen ? "small-sidebar hidden" : "small-sidebar"}>
        <button onClick={props.handleOnToggle} className="small-toggle-button">small-tog</button>
      </div>



    </section>
  )
}
