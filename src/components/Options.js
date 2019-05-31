import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <button
                onClick={props.handleDeleteOptions}
                className='button button--link'
            >
            Remove All
            </button>
            {props.options.length === 0 && <p>Add an item to get started</p>}
            <ol>
                {props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}
            </ol>
        </div>
);

export default Options;