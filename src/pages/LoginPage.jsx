import { Form, Input} from "antd";
import { Link } from "react-router-dom";
import '../styles/LoginRegisterStyle.css'

const LoginPage = () => {
  const onfinishHandler = async (values) => {
    console.log('login',values)
  }
  return (
    <div className="form-container ">
    <Form
      layout="vertical"
      onFinish={onfinishHandler}
      className="register-form"
    >
      <h3 className="text-center">Login From</h3>

      <Form.Item label="Email" name="email">
        <Input type="email" required />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input type="password" required />
      </Form.Item>
      <Link to="/register" className="m-2">
        Not a user Register here
      </Link>
      <button className="btn btn-primary" type="submit">
        Login
      </button>
    </Form>
  </div>
  )
}

export default LoginPage