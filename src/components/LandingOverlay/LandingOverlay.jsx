import React from 'react';
import styles from './LandingOverlay.module.css'

export default function LandingOverlay() {
    return <>
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.headline}>WELCOME TO SAVEQUEST</h1>
                    <h3 className={styles.headline}>It's Save to Win!</h3>
                </div>
                <div>
                    <h2 className={styles.headline}>Click the cash to get started!</h2>
                </div>
            </div>
        </div>
    </>;
}
