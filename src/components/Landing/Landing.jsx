import React from 'react'
import { useHistory } from "react-router-dom";
import styles from './Landing.module.scss'
import info from '../../data/Info.js'

const Landing = () => {
    const history = useHistory();

    return (
        <div className={styles.section_title}>
            {info.map(i =>  <div className={styles.listing}>
                                <img className={styles.listing_img} src={i.img} alt={i.title} onClick={() => history.push("/"+ i.title)}/>
                                <div className={styles.listing_text}>
                                    <div className={styles.text}>
                                        <h3>{i.title}</h3>
                                    </div>
                                </div>
                            </div>
            )}                             
        </div>
    )
}

export default Landing
