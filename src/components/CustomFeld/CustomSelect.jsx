import React from 'react';
import s from './CustomField.module.scss';

import { useField } from 'formik';
import classNames from 'classnames';



export const CustomSelect = ({ className, ...props }) => {

    const [field, meta] = useField(props.name);

    return (
        <>

            <select
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