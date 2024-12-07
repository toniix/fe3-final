import Form from '../Components/Form'
import {contact} from '../styles/components.module.css'

const Contact = () => {
  return (
    <div className={contact}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact