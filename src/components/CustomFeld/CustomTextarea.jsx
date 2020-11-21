import React from 'react';
import s from './CustomField.module.scss';

import { useField } from 'formik';
import classNames from 'classnames';



export const CustomTextarea = ({ className, ...props }) => {

    const [field, meta] = useField(props, 'textarea');

    return (
        <>

            <textarea
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