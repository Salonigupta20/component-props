import logo from './logo.svg';
import './App.css';
import Component from './Component';
import HelloPeople from './HelloPeople';

function App() {
  return (
    <>
         <h1>Hello</h1>
         <Component greeting="Good Morning" name="Saloni"></Component>
         <Component greeting="Good Afternoon" name="Shaheen"></Component>
         <HelloPeople persons= {['Batman', 'Spiderman']}/>
    </>
  );
}

export default App;
