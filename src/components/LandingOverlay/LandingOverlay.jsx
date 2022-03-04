import React from 'react';
import styles from './LandingOverlay.module.css'

export default function LandingOverlay() {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div>
                    <div className="nes-container is-rounded" style={{ background: "#00000080" }}>
                        <h1 className={styles.headline}>WELCOME TO SAVEQUEST</h1>
                        <h3 className={styles.subtitle}>It's Save to Win!</h3>
                    </div>
                </div>
                <div>
                    <section className="message -left">
                        <div className="nes-balloon">
                            <p>Click the dollar to get started!</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
