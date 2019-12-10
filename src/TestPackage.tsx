import * as React from 'react';
import { TestPackageProps } from '../index';


export const TestPackage: React.FC<TestPackageProps> = ({ className, children, onClick }) => {

    return (
        <div
            className={className}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default TestPackage;
