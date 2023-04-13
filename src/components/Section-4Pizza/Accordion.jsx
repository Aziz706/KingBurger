import * as React from "react";
import { NavLink } from "react-router-dom";
import s from "../Section-3/Section3id.module.scss";
export default function CustomizedAccordions({desc}) {
  const [comp, setComp] = React.useState(1);
  function show1(i) {
    setComp(i);
  }

  return (
    <div>
      <div className={s.accord}>
        <div className={s.accord1}>
          <NavLink
          //   className={({ isActive, isPending }) =>
          //   isPending===false ? "btn btn-danger" : isActive ? "btn btn-dark" : "btn btn-primary"
          // }
            onClick={() => show1(1)}
          >
            Desription
          </NavLink>
          <NavLink
            // className={"btn btn-outline-primary"}
            onClick={() => show1(2)}
          >
            Reviews
          </NavLink>
        </div>

        <div className={s.accord2}>
          {comp == 1 ? (
            <div>
               {desc.description}
            </div>
          ) : comp == 2 ? (
            ""
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
