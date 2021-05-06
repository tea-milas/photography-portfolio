import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import styles from './Navigation.module.scss'
import data from '../../data/Info'
import Section from '../Section/Section';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const history = useHistory();

    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
        }
    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

    let isMobile = (width <= 768);

    return (
        <Router>
            {isMobile ? <nav>
                            <h2 onClick={() => history.push("/")}>Tea Milas</h2>
                            {!isOpen && <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>≡</button>}
                            {isOpen && <div className={styles.mobile_menu}>
                                <button className={styles.close} onClick={() => setIsOpen(false)}>X</button>
                                <ul>
                                    <li onClick={() => history.push("/")}>Work</li>
                                    <li onClick={() => history.push("/contact")}>Contact</li>
                                </ul>
                            </div>
                            }
                        </nav>:
                        <nav>
                        <h2><Link to="/">Tea Milas</Link></h2>
                        <ul>
                            <li><Link to="/">Work</Link></li>
                            <li> <Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav> 
            }


            <Switch>
                {data.map(d => <Route path={`/${d.title}`}>
                                        <Section information={d} />
                                    </Route>
                    )}
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navigation
