import React from "react";
import { createRoot } from 'react-dom/client';
import App from '../App';

it('shows a comment box', () => {
    const root = createRoot(document.createElement('div'));

    root.render(<App />);

    root.unmount();
});