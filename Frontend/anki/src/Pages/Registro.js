import { Formik, Form, Field } from "formik"
import styles from "./Registro.module.css"
import * as yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Registro() {

    const navigate = useNavigate()

    const handleRegister = (values) => {
        console.log(values)
        axios.post("http://localhost:8888/Anki/User/Registro", {
            name: values.name,
            email: values.email,
            senha: values.senha
        }).then((response) => {
            console.log(response)
            navigate("/")
        })
    }

    const validationRegister = yup.object().shape({
        name: yup.string().required("Este campo é obrigatório"),
        email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
        senha: yup.string().required("Este campo é obrigatório").min(8, "A senha deve ter 8 caracteres"),
        senha2: yup.string().oneOf([yup.ref("senha")], "Senhas não são iguais")
    })

    return (
        <div className={styles.container}>
            <h1>Cadastro</h1>
            <Formik initialValues={{}}
                onSubmit={handleRegister}
                validationSchema={validationRegister}>

                <Form className={styles.registerform} >
                    <Field name="name" placeholder="Insira seu nome" className={styles.form_field}></Field>
                    <Field className={styles.form_field} name="email" placeholder="Insira seu email"></Field>
                    <Field className={styles.form_field} name="senha" placeholder="Insira sua senha"></Field>
                    <Field className={styles.form_field} name="senha2" placeholder="Confirme sua senha"></Field>
                    <button type="submit" className={styles.submit}>Cadastrar</button>
                </Form>
            </Formik>
        </div>)
}