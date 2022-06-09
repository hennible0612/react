import React from 'react'; // 애플리케이션 빌더, 엔진
import { createRoot } from 'react-dom/client'; // dom 만들것이다.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

//public/index.html 에서 root id 가진곳 root에 저장
// const root = ReactDOM.createRoot(document.getElementById('root'));
//
// root.render( //root 에 랜더링을 해라
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
