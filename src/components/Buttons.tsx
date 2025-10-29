import styles from '../styles/button.module.css';

function Button(
  { text }:{text : string}){return (
      <button className= {styles["user-button"]}> {text} </button>
    )
  }
export default Button;