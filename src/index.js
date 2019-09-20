/**
 * Created by yang on 2019/9/10.
 */
// import _ from 'lodash';
import { cube } from './math';
import printMe from './print.js';
import './styles.css';

function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');

  element.innerHTML = [
    'Hello', '5 cube is equal to ss' + cube(5)
  ].join('\n\n');
  btn.innerHTML = 'you you';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());

 let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
 document.body.appendChild(element);
