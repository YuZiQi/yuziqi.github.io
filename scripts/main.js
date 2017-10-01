/*var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello Word ！';

function multiply(num1,num2)
{
    var result = num1 + num2;
    return result;
}

document.write(multiply(4,7));


document.querySelector('html').onclick = function() {

    alert('onuch ! stop poking me !');
}
*/

//图片切换
var myImage = document.querySelector('img');//获取img属性

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/firefox-icon.png'){
        myImage.setAttribute('src','../images/firefox3-icon.png');
       
    }
    else
    {
        myImage.setAttribute('src','../images/firefox-icon.png');
    }
}

// 设置欢迎页面
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName(){
    var myName = prompt('please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Mazilla is cool, ' + myName;
}

if( !localStorage.getItem('name')){
  setUserName();
}
else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mazilla is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}