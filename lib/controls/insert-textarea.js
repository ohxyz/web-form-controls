import React from 'react';
import InsertBase from './insert-base.js';

class InsertTextArea extends InsertBase {

    constructor(props) {

        super(props);

        this.type = 'textarea';
        this.classNamePrefix = 'insert-textarea';
    }

    renderInput() {

        return React.createElement('textarea', { id: this.inputElementId,
            className: this.className,
            placeholder: this.hint,
            name: this.name,
            onBlur: this.handleBlur.bind(this),
            onChange: this.handleChange.bind(this),
            defaultValue: this.value,
            ref: elem => this.inputElement = elem
        });
    }
}

export default InsertTextArea;