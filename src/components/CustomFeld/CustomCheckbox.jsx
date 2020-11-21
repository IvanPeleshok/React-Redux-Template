import React from 'react';
import { useField } from 'formik'
import s from './CustomField.module.scss';
import classNames from 'classnames';


export const CustomCheckbox = ({ className, ...props }) => {

    const [field, meta] = useField(props, "checkbox");
    return (
        <>

            <input
                type="checkbox"
                {...field}
                {...props}
                className={classNames(className, {
                    [s.hasError]: meta.error && meta.touched
                })}
            />

            <span>{props.label}</span>

            { meta.error && meta.touched && <p className={s.fieldErrors}>{meta.error}</p>}

        </>
    )
}