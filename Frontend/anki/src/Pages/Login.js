import styles from "./Login.module.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Login() {

    const navigate = useNavigate()

    const handleLogin = (values) => {
        axios.post("http://localhost:8888/Anki/User/Login", {
            email: values.email,
            senha: values.senha
        }).then((response) => {
            localStorage.setItem("_userlog", JSON.stringify(response))
            navigate("/")
            window.location.reload();
        }
        )
    }

    const validationLogin = yup.object().shape({
        email: yup.string().email("Não é um email").required(),
        senha: yup.string().min(8, "Senha inválida, deve-se ter mais de 8 caracteres")
    })

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <Formik initialValues={{}}
                onSubmit={handleLogin}
                validationSchema={validationLogin}>

                <Form className={styles.registerform} >
                    <Field className={styles.form_field} name="email" placeholder="Insira seu email"></Field>
                    <Field className={styles.form_field} name="senha" placeholder="Insira sua senha"></Field>
                    <button type="submit" className={styles.submit}>Entrar</button>
                </Form>
            </Formik>
        </div>
    )
}