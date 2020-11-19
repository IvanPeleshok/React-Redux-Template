import React from 'react'
import s from './Login.module.scss'
import { Formik, Form } from 'formik';
import * as yup from "yup";


export const Login = () => {

    const validationSchema = yup.object({
        login: yup.string().required('Обязательное поле'),
        password: yup.string().min(8, 'Минимальная длина 8 символов').max(32, 'Максимальная длина 32 символа').required('Обязательное поле'),
    });


    // const [err, setError] = useState('')

    return (
        <div className={s.loginPage}>
            <Formik

                validateOnChange={true}
                initialValues={{ login: '', password: '' }}
                // validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={(data) => {
                    console.log(data);
                }}
            >
                {({ isSubmitting, handleChange, handleBlur, values }) => (
                    <Form className={s.loginForm}>
                        <h2 className={s.loginTitle}>Вход в систему</h2>
                        <input name="login"
                            placeholder="Логин"
                            type="text"
                            className={s.loginInput}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.login} />

                        <input
                            className={s.loginInput}
                            name="password"
                            placeholder="Пароль"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            values={values.password}
                        />
                        <button type='submit' className={s.loginBtn}
                        // disabled={isSubmitting} 
                        >Войти
                        </button>

                        {/* <div className={s.errorBlock}>
                            <p>{err}</p>
                        </div> */}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;
