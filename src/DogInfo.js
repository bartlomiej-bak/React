import React from 'react';
import Dog from './Dog.js';

class DogInfo extends React.Component {
 render() {
 const doginfo = {age: "3", breed: "Husky"};
 return (
 <div>
 <h1>Jaka to rasa psa?</h1>
 <Dog info={doginfo} />
 </div>
 );
 }
 }
 export default DogInfo;