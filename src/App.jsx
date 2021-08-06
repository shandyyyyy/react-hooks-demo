import React, { useState, useEffect } from 'react';
import useApi from './useHooks/useApi';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './router';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
// import 'zarm/dist/zarm.css'; 一次性全部引入，可在vite.config里面配置按需加载styleImport

const getList = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve([6,7,8,9,10]);
    }, 2000);
  })
}

function App(){
  // const [data, setData] = useState([1, 2, 3, 4, 5]);
  // const [query, setQuery] = useState('');
  // useEffect(async()=>{
  //   const data = await getList();
  //   console.log(data, query);
  //   setData(data);
  // }, [query])

  //use hooks 
  const [data, setQuery] = useApi();

  return (
    <div className="App">
      {
        data.map((item, index) => <div key={index}>{item}</div>)
      }
      <div><input type="text" placeholder="input some text" onChange={(e)=>setQuery(e.target.value)} /></div>
      <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
        <Router>
          <Switch>
            {
              routes.map(route => <Route exact key={route.path} path={route.path}><route.component/></Route>)
            }
          </Switch>
        </Router>
      </ConfigProvider>
    </div>
  )
}

export default App;