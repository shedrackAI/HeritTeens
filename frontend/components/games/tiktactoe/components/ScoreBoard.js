import React from 'react'

import styles from '../style.module.css'

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className={styles.scoreboard}>
      <span className={`${styles.score} ${styles.x_score} ${!xPlaying && styles.inactive}`}>X = {xScore}</span>
      <span className={`${styles.score} ${styles.o_score} ${xPlaying && styles.inactive}`}>O = {oScore}</span>
    </div>
  )
}
