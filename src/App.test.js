import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
var data = new FormData();
data.append("value",'a');
data.append("authenticity_token",'7PWas1A2BA2okRsH2KcXgW1B6+2mBBnl+EXuPeEGe+Qj6FkSwsgMJ5HV43boCtaQmx62qYBq1n0AAtxK3PqVgQ==');
fetch("https://github.com/signup_check/username",{
    method:"post",
    headers:{
      "Accept": '*/*',
        "Content-type":"application/x-www-form-urlencoded"
    },
    body: data
})
.then(function(data){
    console.log("请求成功，JSON解析后的响应数据为:",data);
})
.catch(function(err){
    console.log("Fetch错误:"+err);
});