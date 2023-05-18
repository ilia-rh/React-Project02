import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';


const htmlRoot = document.getElementById('root');
const root = createRoot(htmlRoot);


root.render(<App />);