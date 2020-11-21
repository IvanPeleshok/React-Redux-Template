import React from 'react'
import s from './AuthForm.module.scss'
import { Formik, Form } from 'formik';
import * as yup from "yup";
import { CustomInput } from '../CustomFeld/CustomInput';
import { CustomButton } from '../CustomFeld/CustomButton';

export const LoginForm = ({ setAuthPhase, ...props }) => {

    const validationSchema = yup.object({
        username: yup.string().min(5, 'Минимальная длина 6 символов').required('Введите имя пользователя'),
        password: yup.string().min(8, 'Минимальная длина 8 символов').max(32, 'Максимальная длина 32 символа').required('Введите пароль')
    });

    return (

        <div className={s.loginPage}>

            <Formik
                validateOnChange={true}
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                enableReinitialize={true}
                setSubmitting={false}
                onSubmit={(values, { setSubmitting, resetForm }) => {

                    alert(JSON.stringify(values));
                    setSubmitting(false);
                    resetForm();

                }}
            >
                {({ isSubmitting }) => {
                    return (

                        <Form className={s.loginForm}>

                            <h2 className={s.loginTitle}>Вход в систему</h2>

                            <CustomInput
                                name={"username"}
                                placeholder={"Логин"}
                                className={s.loginInput}
                                autoComplete={"off"}
                            />

                            <CustomInput
                                name={"password"}
                                placeholder={"Пароль"}
                                className={s.loginInput}
                                autoComplete={"off"}
                            />

                            <CustomButton
                                type={"submit"}
                                className={s.loginBtn}
                                text={'Войти'}
                                isSubmitting={isSubmitting}
                            >
                            </CustomButton>

                            <button
                                className={s.authRedirect}
                                onClick={() => setAuthPhase("registration")}>
                                Регистрация
                                </button>
                        </Form>

                    )
                }}
            </Formik>

        </div>
    )
}
