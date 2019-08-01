import React,{Component} from 'react';
import Layout from './components/Layout/Layout';
import CVBuilder from './containers/CVBuilder/CVBuilder';

import logo from './assets/img/dana.jpg';

class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          <CVBuilder/>
        </Layout>
  
      </div>
    );
  }
  
}

export default App;
