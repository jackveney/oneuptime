import React, { FunctionComponent, ReactElement } from 'react';

export interface ComponentProps {
    title: string;
    description: string;
}

const RowLabel: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    return (
        // rectangle div with curved corners and text inside in tailwindcss

        <div>
            <div className='text-sm text-gray-600'>{props.title}</div>
            <div className='text-xs text-gray-500'>{props.description}</div>
        </div>
    );
};

export default RowLabel;
