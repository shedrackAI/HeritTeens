import React from 'react';

import styles from '../style.module.css'

export const Box = ({ value, onClick }) => {
    const style = value === "X" ? styles.boxo :  styles.boxx;

    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}
