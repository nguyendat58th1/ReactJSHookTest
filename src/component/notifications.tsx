import { Component } from "react";
import "./item.css"

let  list = [{

  text1: "Email Notification",
  text2: "Commits data and history"

},
{

  text1: "Push Notification",
  text2: "Commits data and history"

},
{

  text1: "Monthly Reports",
  text2: "Commits data and history"

},
{

  text1: "Quarter Reports",
  text2: "Commits data and history"

}]

export function Notifications() {

    return (
      <div className="card col-lg-5">
  <div className="card-header">
    Notifications
  </div>
  <div className="card-body row">
    <p>Control your notification and auto-follow setting</p>
    {list.map( (item)=> (
    <div className ="content">

          <div>
            <div className="item-left col">
            {/* //<h5 className="card-title">{item.text1}</h5> */}
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><strong>{item.text1}</strong></label><br/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{item.text2}</label>
            </div>
            <div className="item-right form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
    </div>
      ))}
  </div>
</div>

    )
}
