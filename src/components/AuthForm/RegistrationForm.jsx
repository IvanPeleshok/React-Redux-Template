import React from 'react'
import s from './AuthForm.module.scss'
import { Formik, Form } from 'formik';
import * as yup from "yup";
import { CustomInput } from '../CustomFeld/CustomInput';
import { CustomCheckbox } from "../CustomFeld/CustomCheckbox";
import { CustomButton } from '../CustomFeld/CustomButton';
// import { CustomTextarea } from '../CustomFeld/CustomTextarea';
// import { CustomSelect } from '../CustomFeld/CustomSelect/CustomSelect';

export const RegistrationForm = ({ setAuthPhase }) => {

    const validationSchema = yup.object({

        username: yup.string()
            .min(6, 'Минимальная длина 6 символов')
            .required('Введите имя пользователя'),

        email: yup.string()
            .email("Введите корректный email")
            .required("Введите email"),

        password1: yup.string()
            .min(8, 'Минимальная длина 8 символов')
            .max(32, 'Максимальная длина 32 символа')
            .required('Введите пароль'),

        password2: yup.string()
            .oneOf([yup.ref("password1"), null], "Пароли не совпадают")
            .required('Подтвердите пароль'),

        accept: yup.boolean()
            .required('Обязательное поле')
            .oneOf([true], 'Подтвердите согласие на обработку ваших данных'),

    });

    return (

        <div className={s.loginPage}>

            <Formik
                validateOnChange={true}
                initialValues={{
                    username: '',
                    email: '',
                    password1: '',
                    password2: '',
                    accept: false
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

                            <h2 className={s.loginTitle}>Регистрация</h2>

                            <CustomInput
                                name={"username"}
                                placeholder={"Имя пользователя"}
                                className={s.loginInput}
                                autoComplete={"off"}
                            />

                            <CustomInput
                                name={"email"}
                                placeholder={"Почта"}
                                className={s.loginInput}
                                autoComplete={"off"}
                            />

                            <CustomInput
                                name={"password1"}
                                placeholder={"Пароль"}
                                className={s.loginInput}
                                autoComplete={"off"}
                                type="password"
                            />

                            <CustomInput
                                name={"password2"}
                                placeholder={"Подтвердите пароль"}
                                className={s.loginInput}
                                autoComplete={"off"}
                                type="password"
                            />

                            <CustomCheckbox
                                name={"accept"}
                                label={"соглашение на обработку личных данных"}
                            />

                            <CustomButton
                                type={"submit"}
                                className={s.loginBtn}
                                text={'Зарегистрироваться'}
                                isSubmitting={isSubmitting}
                            >
                            </CustomButton>

                            <button
                                className={s.authRedirect}
                                onClick={() => setAuthPhase("login")}>
                                Вход
                             </button>

                        </Form>

                    )
                }}
            </Formik>

        </div>
    )
}
