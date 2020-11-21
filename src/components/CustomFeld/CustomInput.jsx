import React from 'react';
import { useField } from 'formik';
import s from './CustomField.module.scss';
import classNames from 'classnames';

export const CustomInput = ({className, ...props}) => {

    const [field, meta] = useField(props);


    return (
        <>
            <input
                {...field}
                {...props}

                className={classNames(className, {
                    [s.hasError]: meta.error && meta.touched
                })}
            />

            { meta.error && meta.touched && <p className={s.fieldErrors}>{meta.error}</p>}
        </>
    )
}
