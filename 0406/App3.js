import React from 'react';

const App = () => (
    <div>
    <Header/>
    <Content/>
 </div>

); 

const Header = () => (
    <div>
    <h1>Header</h1>
 </div>

)
const Content = () =>(
    <div>
    <h2>Content</h2>
    <p>The content text!!!</p>
 </div>
)
ReactDOM.render(<Car />, document.getElementById('root'));

export default App;