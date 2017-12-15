import React from 'react';
import InsertDateByNumber from './insert-date-by-number.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class InsertDateByNumberWrapper extends FormElementWrapper {

    renderMain() {

        return (

            <InsertDateByNumber />
        );
    }
}

export default InsertDateByNumberWrapper;