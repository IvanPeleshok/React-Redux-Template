import React from 'react';
import { useField } from 'formik';
import s from './Login/Login.module.scss';

export const InputForm = (props) => {

    const [field, meta] = useField(props.name);
    return (
        <>
            <input
                {...field}
                {...props}
            />

            { meta.error && meta.touched && <p className={s.loginErrors}>{meta.error}</p>}
        </>
    )
}