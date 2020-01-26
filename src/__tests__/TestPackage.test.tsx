import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TestPackage } from '../';


it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TestPackage className={"test"}>test</TestPackage>,
        div
    );

    const comp = div.querySelector('div');
    expect(comp).toBeDefined();

    ReactDOM.unmountComponentAtNode(div);
});


