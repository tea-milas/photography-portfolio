import React from 'react'
import styles from './Section.module.scss'

const Section = (props) => {
    const {information} = props;

    return (
        <div className={styles.section}>
            <h1>{information.title}</h1>
            <div className={styles.images}>
                {information.photos.map((p) => <img src={p} alt={information.title}/> )}   
            </div>

            <button>{">"} Next</button>
        </div>
    )
}

export default Section
