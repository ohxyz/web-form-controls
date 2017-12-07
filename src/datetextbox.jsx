import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import TextBox from './textbox.jsx';
import utils from './utils.js';

const COMPONENT_NAME = 'datetextbox';

// Todo: allow to set min and max for dates
class DateTextBox extends BasicFormComponent {

    constructor( props ) {

        super( props );

        this.className = COMPONENT_NAME;
        this.classNamePrefix = COMPONENT_NAME;
        this.type = utils.setDefault( props.type, 'text' );
    }

    renderDelimiter() {

        return <span className={ this.classNamePrefix + '-delimiter' }>&#47;</span>;
    }

    renderMain() {

        return (

            <div className={ this.classNamePrefix + '-main' }>
                <TextBox classNamePrefix={ this.classNamePrefix }
                         hint="DD"
                         type={ this.type }
                />
                { this.renderDelimiter() }
                <TextBox classNamePrefix={ this.classNamePrefix }
                         hint="MM"
                         type={ this.type }
                />
                { this.renderDelimiter() }
                <TextBox classNamePrefix={ this.classNamePrefix }
                         hint="YYYY"
                         type={ this.type }
                />
            </div>
        );
    }
}

export default DateTextBox;