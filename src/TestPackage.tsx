import * as React from 'react';

export interface TestPackageProps {
    className: string;
    children: React.ReactNode;
    onClick?: (e: any) => void;
}


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
