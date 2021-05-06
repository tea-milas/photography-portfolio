import React from 'react'
import styles from './Contact.module.scss'
import profileImg from '../../assets/img/DSC_0877.jpg'
const Contact = () => {
    return (
        <div className={styles.contact}>
            <p>Hi there!
            <br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam blanditiis accusantium quia in laudantium dicta a, porro modi tenetur aspernatur, 
                quaerat provident eum veritatis fuga magnam beatae voluptatem ipsam!</p>
            <img src={profileImg} alt="Tea" />
        </div>
    )
}

export default Contact
