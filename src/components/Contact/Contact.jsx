import React from 'react'
import styles from './Contact.module.scss'
import profileImg from '../../assets/img/DSC_0877.jpg'
const Contact = () => {
   
    return (
        <div className={styles.contact}>
            <section className={styles.contact_text}>
                <p>Hi there!
                <br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquam blanditiis accusantium quia in laudantium dicta a, porro modi tenetur aspernatur, 
                    quaerat provident eum veritatis fuga magnam beatae voluptatem ipsam!
                <br/><br/>For  collaborations / prints /  general inquiries fill the form below: </p>
                
                <form action="mailto:teamilas@gmail.com" method="post" enctype="text/plain">
                    <label for="name">Your name</label>
                    <input name="name" type="text" minLength="3" required/>
                    <label for="email">Your email</label>
                    <input name="email" type="email" required/>
                    <label for="reason">Message title</label>
                    <select name="reason">
                        <option disabled selected value> -- select an option -- </option>
                        <option>Collaboration</option>
                        <option>Prints</option>
                        <option>General inquiry</option>
                    </select>
                    <label for="message">Your message</label>
                    <textarea  name="message" minLength="30" maxLength="350" required></textarea>
                    <button type="submit"> Send message</button>
                </form>
            </section>
            <img src={profileImg} alt="Tea with a cherry tree in bloom in the background" />
        </div>
    )
}

export default Contact