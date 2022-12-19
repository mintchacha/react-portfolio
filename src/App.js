import './App.css';
import Header from './components/Header';
import Main from './components/Main';

import styled from 'styled-components'

const Footer = styled.footer` 
  text-align:center;
  color:#cacaca;
  padding:20px 0;
  background:#333;
  overflow:hidden;
`


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer>
        김찬호 포트폴리오 페이지입니다.
      </Footer>
    </div>
  );
}

export default App;
