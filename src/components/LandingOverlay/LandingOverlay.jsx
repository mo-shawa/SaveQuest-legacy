import React from 'react';
import styles from './LandingOverlay.module.css'

export default function LandingOverlay() {
    return <>
        <div className={styles.overlay}>
            <div className={styles.container}>
                <h1 className={styles.headline}>Hello</h1>
                <div>
                    <h2 className={styles.headline}>Wanna save some money?</h2>
                    <button className='nes-btn is-success'> Yes</button>
                </div>
            </div>
        </div>
    </>;
}
