import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s" alt="clients" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s" alt="clients" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s" alt="clients" />
            <h4>John Doe</h4>
            <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
