import * as React from "react";
import { NavLink } from "react-router-dom";
import s from "../Section-3/Section3id.module.scss";

export default function CustomizedAccordions() {
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
               <div>
              <strong>Lorem ipsum,</strong> dolor sit amet consectetur adipisicing elit.
              Blanditiis accusantium nam, in nobis at adipisci dolorum
              architecto quasi similique reiciendis quaerat labore officiis
              doloremque. Deserunt excepturi et omnis adipisci fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque nemo illum molestias voluptas, sed distinctio perferendis sunt dolore beatae, voluptatum dolorum magni magnam qui nobis quod! Placeat, voluptas reprehenderit?
            </div>
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
