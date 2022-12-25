import React from 'react';

import styles from '../style.module.css'

export const ResetButton = ({ resetBoard }) => {
    return (
        <button className={styles.reset_btn} onClick={resetBoard}>Reset</button>
    )
}
