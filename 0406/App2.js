import React from 'react';

function App() {
    return (
        <div>
           <Header/>
           <Content/>
        </div>
      );
   }

function Header() {
    return (
        <div>
           <h1>Header</h1>
        </div>

      );
   }

function Content() {
    return (
        <div>
           <h2>Content</h2>
           <p>The content text!!!</p>
        </div>

      );
   }
   ReactDOM.render(<Car />, document.getElementById('root'));

export default App;