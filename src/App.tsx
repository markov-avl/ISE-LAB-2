import React from 'react';
import Header from "./component/Header";
import styles from './App.module.css'
import Content from "./component/Content";

function App() {
    return (
        <div className={styles.container}>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
