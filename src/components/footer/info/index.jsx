import { Link, useNavigate } from "react-router-dom";

import classes from "./Info.module.css";

import { data } from "../../../utils/halpers/footer/data";
import { navigateToElement } from "../../../utils/halpers/navigateToElement/navigateToElement";

const Info = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center">
      <div
        className={`d-flex justify-content-evenly align-items-start ${classes.gap_20} ${classes.container_mobile}`}
      >
        {data.titles.map((title, index) => {
          return (
            <div key={title} className={`d-flex flex-wrap ${classes.gap_20}`}>
              <span className={`d-flex flex-wrap ${classes.title} w-100`}>
                {title}
              </span>
              <div className={`d-flex flex-wrap ${classes.gap_10}`}>
                {data.data[index].map((item, index1) => {
                  return (
                    <Link
                      key={item}
                      className={`w-100 ${classes.link}`}
                      to={`${
                        item === "Contacts"
                          ? "#contacts"
                          : data.links[index][index1]
                      }`}
                      onClick={() => {
                        item === "Contacts" &&
                          navigateToElement(navigate, "contacts");
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
