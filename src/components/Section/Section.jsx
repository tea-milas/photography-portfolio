import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Section.module.scss";

const Section = (props) => {
  const { information } = props;
  const history = useHistory();
  const [next, setNext] = useState("Portraits");

  const nextTitle = (pageTitle) => {
    if (pageTitle === "Portraits") {
      setNext("Prom");
    } else if (pageTitle === "Prom") {
      setNext("Travel");
    } else if (pageTitle === "Travel") {
      setNext("Analog");
    } else if (pageTitle === "Analog") {
      setNext("Events");
    } else if (pageTitle === "Events") {
      setNext("Portraits");
    }
  };

  const goToNext = () => {
    history.push("/" + next);
    nextTitle(next);
  };

  useEffect(() => {
    nextTitle(information.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.section}>
      <h1>{information.title}</h1>
      <div className={styles.images}>
        {information.photos.map((p) =>
          p.img ? (
            <img src={p.img} alt={p.alt} loading="lazy" />
          ) : (
            <img src={p} alt={information.title} loading="lazy" />
          )
        )}
      </div>

      <button className={styles.home_btn} onClick={() => history.push("/")}>
        {"<"} Back
      </button>
      <button className={styles.next_btn} onClick={goToNext}>
        {next} {">"}
      </button>
    </div>
  );
};

export default Section;
