/**
 * Created by yang on 2019/9/10.
 */
// import _ from 'lodash';
import { cube } from './math';
import printMe from './print.js';
import './styles.css';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello', '5 cube is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

// document.body.appendChild(component());

 let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
 document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
    printMe();
  })
}