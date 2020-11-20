import React from 'react'
import s from './Login.module.scss'
import { Formik, Form } from 'formik';
import * as yup from "yup";
import { InputForm } from '../InputForm';


export const Login = () => {

    const validationSchema = yup.object({
        login: yup.string().min(1, 'Минимальная длина 6 символов').required('Обязательное поле'),
        password: yup.string().min(1, 'Минимальная длина 8 символов').max(32, 'Максимальная длина 32 символа').required('Обязательное поле'),
    });

    return (
        <div className={s.loginPage}>
            <Formik
                validateOnChange={true}
                initialValues={{ login: '', password: '' }}
                validationSchema={validationSchema}
                enableReinitialize={true}
                setSubmitting={false}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {(isSubmitting) => {
                    return (
                        <Form className={s.loginForm}>
                            <h2 className={s.loginTitle}>Вход в систему</h2>

                            <InputForm
                                name={"login"}
                                placeholder={"Логин"}
                                className={s.loginInput}
                                autoComplete={"off"}
                            />

                            <InputForm
                                name={"password"}
                                placeholder={"Пароль"}
                                className={s.loginInput}
                                autoComplete={"off"}
                            />


                            <button type='submit' className={s.loginBtn}
                                // disabled={isSubmitting}
                            >Войти
                            </button>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Login;
