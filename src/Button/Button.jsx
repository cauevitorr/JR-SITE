import './Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({text, source}) => {
 return(
  <a href={source}>
   <input type="button" value={text}/>
  </a>
 )
}

export default Button
