import React from 'react';
import './CustomField.module.scss';

export const CustomButton = ({ text, isSubmitting, ...props }) => {
    return (
        <button {...props}>
            {isSubmitting ? 'loading' : text}
        </button>
    )
}