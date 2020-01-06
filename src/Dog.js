import React from 'react';
class Dog extends React.Component {
 render() {
 return <h2>Jest to {this.props.info.breed} mający {this.props.info.age}
lata.</h2>;
 }
}
export default Dog;
