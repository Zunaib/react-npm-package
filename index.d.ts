import * as React from 'react';

export interface TestPackageProps extends React.Props<TestPackageProps> {
    className: string;
    children: React.ReactNode;
    onClick?: (e: any) => void;
}

declare class TestPackage extends React.Component<TestPackageProps, any> {
}

declare module 'test-package' {
}

export default TestPackage;