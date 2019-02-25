

console.log("es6");

/*

let const 块级作用域
箭头函数  ()=>{}
字符串模板
解构赋值  对象解构 数组解构
...  展开运算符 
Object.assign
class / extends
promise
async


*/ 
// 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。






// 1. ES6   ECMAScript2015  ( Jscript 和 ActionScript)
// 2. ECMAScript   条条框框规则     JavaScript   区别

// JScript typeScript javaScript

// ECMAScript是JavaScript 的规则和标准
// JavaScript是ECMAscript 的一种体现

// typescript 微软语言 ts 
 
// JavaScript = ECMAScript+ DOM + BOM  

// DOM    document  object  model      document 

// BOM     browser object model       window 

// ES6 与 ECMAScript 2015 

// 3.babel

// Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行

//Module 的语法	 严格模式
// "use strict";  

// // 变量赋值之前必须声明
// console.log(color); 
// var color = 'red';  


// 防止意外全局变量 当你的this为null或者undefined,会自动指向window(es5)
// var  a =100;
// setInterval(function(){
// 	console.log(this);
// 	console.log(this.a);
// },1000)


// function fn(){
// 	this.a = "wh1805";
// }
// window.fn();    // window() 严格  不存在 
// var f = new fn(); // this == f 
// console.log(f.a);

// with 禁止使用with  (省略属性对象)
// location = window.location     href url search 
// window.location.href  window.location.search  location.href location.url
// with(location) {console.log(href,url)}

// 拒绝重复的参数
// function demo(x,y,z,z){
// 	console.log(x,y,z);
// }



// let 块级作用域(局部作用局)   
// if(true){
//     let a = 1000;
// }
// console.log(a);


// if(false){
//     var b = 1000;    //  预解析    执行赋值 
// }
// console.log(b);



// 变量提升   var 导致变量提升  let 不会导致变量提升  
// console.log(a);   
// console.log(b);      

// var a = 100;    
// let b = 10;      // babel let 转 var 

//  var 会产生变量提升    变量在赋值之前 取值  就会产生变量提升 
//  let 不会产生变量提升 

// console.log(foo);    //  undefined

// var foo = "abc123";   // 变量提升       1        2 
// let bar = "hello"     //  开辟内存并且赋值  执行的时候才会赋值  
// function demo(){       
//     console.log(foo);   // abc123
// }
// demo();


//  浏览器解析 js代码  
//  1. 浏览器预解析    
//     浏览器一行一行读取代码     var  foo   在内存开辟 地址 ，但是只是进行声明定义 
//     foo =  ... (未定义)
//  2. js执行 赋值  
//  读取执行所有函数方法   console.log(foo)  foo=...
//  =  赋值之后才会 获取值 

//  参数作用域  》 局部作用域  》 全局作用域  

// var a = 200;
// function demo(a=2000){		
//     console.log(a);      // undefined   200    undefined    2000   2000
//      a = 88;  
//     console.log(a);   // 88     88     88       88     88 
// } 
// console.log(a)     // 200   200   200     200   200 
// demo(); 
// console.log(a);    // 200   88   200      200    200  



// let a = 100;                     
// function demo(){
// 	console.log(a);   //      undefined 
// 	let a = 1000;	    // babel  let ==> var 
// 	console.log(a);   //    1000  
// } 
// demo();
// console.log(a);     //    100


                       // 1                        2 执行 
// var  a  =  10;         // a = ...                  a = 10 
// function demo(t){      
// 	if(t){              
// 		let  a  = 100;  // a = ...                  a = ... 
// 		return a;      
// 	}else{
// 		return a;     
// 	}
// }
// console.log(demo(false))        // a = ... 



// let a  =  10;
// // //  let 声明局部变量 
// function demo(t){
// 	if(t){
// 		let a  = 100;  // 预解析  var a = ...   demo 函数开辟内存  a  ==undefined
// 		return a;
// 	}else{
// 		return a;
// 	}
// }
// // 局部作用域招不到变量就去全局作用域  去找 
// console.log(demo(false))



// var num = 0;
// var fun = test();       //  function(){ test()  }  num  = 10
// // console.log(fun);      //  undefined
// console.log(test())    //  11 
// function test(){
//     num++;
//     if(num<10){
//         // debugger    
//         test()
//     }else{
//         return num;
//     }
// }


// num =0   fun
// function test(){
//     num=1;
//     if(1<10){
//         test()   // 注意此时的 test 已经没有   任何 return 
//     }
// }
// num = 1   fun 
// function test(){
//     num=2;
//     if(2<10){
//         test()   // 注意此时的 test 已经没有  return 
//     }
// }
// num = 9  fun 
// function test(){
//     num = 10;
//     if(10<10){
//         test()
//     }
// }

// function test(){
//     if(num<10){
//         if(2<10){
//             if(3<10){
//                 if(4<10){
//                     if(5<10){
//                         if(10<10){
//                                  test()
//                         }else{}
//                     }
//                 }
//             }
//         }
//     }else{
//     }
// }



// for(var i=0;i<=10;i++){

// }
// console.log(i);
// // //  let 解决内存泄露问题 
// for(let j=0;j<10;j++){

// }
// console.log(j);


// var k=0;
// for(var i=0,j=0;i<8,j<12;i++,j++){   // ,   逗号后面执行语句 
// 	k=i+j;
// }
// // //             //    ,    ,    ||     &&
// console.log(i)    //   8    12    12     8
// console.log(j)    //   8    12    12     8
// console.log(k);   //   14   22    22     14


//  const 定义常量  默认不可以被修改

// const fruit = "apple";
// fruit = "banana";
// console.log(fruit);

// 因为数组是  引用数值类型   
// const fruit = ["apple"];
// // fruit = "aaaaa"
// fruit.push("banana"); 
// console.log(fruit); 



//  解构赋值 
// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

//  数组解构赋值  
// var a = 10;
// var b = 100;
// var c = 1000;

// const [a,b,c,d] = [10,100,1000];    // index 
// // ...mapAction(['getList'])  mapState(['mv'])
// console.log(a,b,c,d);
// console.log(b);



// function breakfast(){
// 	return ["milk","hot","apple"]
// }

// // // var fruit  = "banana";

// // // var drink = "bear";

// let [drink,foot,fruit] = breakfast();

// console.log(fruit);
// const [a,b,...c] = [100,200,300,400,500];
// console.log(a,b,c);

// 对象解构赋值  

// let {foo:foo,bar} = {foo:"foo",bar:"bar"}
// let {foo:foo1,bar:bar} = {foo:"foo",bar:"bar"}
// console.log(foo1);
// // const {mv:mv} = this.state  = {mv:[]}

// function breakfast(){
// 	return {
// 		dessert:"cake",
// 		drink:"milk",
// 		fruit:"apple"
// 	}
// }
// var foot = breakfast();
// // console.log(foot.dessert,foot.fruit);

// let {
// 	dessert:a,
// 	drink:b,
// 	fruit:c
// } = foot;
// console.log(a,b,c);

// var {
// 	dessert,
// 	drink,
// 	fruit
// } = foot;


// var {a,b,c} = this.props;  this.props = {a:1,b:2}


//  字符串模板

//  `${}`

// var fruit = "apple";
// var dessert = "cake";
// // var breakfast = "今天的早上是"+fruit+"和"+dessert;
// // var breakfast = `今天的早餐是${fruit}和${dessert}`;
// var breakfast = `今天的早餐是<b>${fruit}</b>和<b>${dessert}</b>`;
// var app = document.getElementById("app");
// app.innerHTML = breakfast;
// console.log(breakfast);
// console.log(breakfast.startsWith("今天1"));  //开头
// console.log(breakfast.endsWith("cake")); // 结束
// console.log(breakfast.includes("早餐"));    // 包含


// 对象展开  扩展运算符   ...   
// const [a,...b] = [1,2,3,4];
// console.log(a);
// console.log(b);

// var fruit = ["apple","banana"];

// var food = ["cake",...fruit,"milk"];

// console.log(food);

// var  person = {
// 	age:28,
// 	sex:"男"
// }
// let newPerson = Object.assign({},person,{nickname:"pangzuo"});   // extend  对象合并   Object.assign 对象合并
// var newPerson = {...person,username:"zuozuomu"};
// console.log(newPerson);
// let obj = { a: { b: 1 } };
// let { a:{b} } = obj;   // ...x 
// console.log(b)       // Object(a: { b: 1 })

// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x,y,z);  

// let {...banner} = this.props;

// 剩余操作符 1.不确定参数  2.参数展开

// function breakfast(dessert,drink,...fruit){
//     console.log(dessert,drink,...fruit);
//     console.log(fruit);
// }

// breakfast("cake","milk","apple","banana","orange",["watermelon","pear"],"lemon");

// function dinner(dessert,fruit,{location,restuarant}){
// 	console.log(`我今天晚上去${location} 的 ${restuarant} 吃了 ${fruit} 喝了 ${dessert}`)
// };

// dinner("cake","bear",{location:"金融港",restuarant:"老板娘"})


//  函数name 属性  

// function demo(){

// }
// {
//     demo:function(){

//     },
//     demo(){

//     }
// }



// function render(){}

// function breakfast(){}
// console.log(breakfast.name);

// var demo = function(){

// }


// console.log(demo.name);   // es6 demo  es5 " "

// let bar = function baz(){

// }

// let bar = function(){

// }


// console.log(bar.name);


// 属性方法的简洁写法  允许直接写入变量和函数 (函数自变量) 对象属性

//  key-value 

// var dessert = "cake",fruit="apple",drink="milk";

// var food = {
// 	dessert:"cake",
// 	fruit:"apple",
// 	drink:"bear"
// }

// var food2 = {
// 	dessert:dessert,
// 	fruit:fruit,
// 	drink:drink,
// 	eat:function(){
// 		console.log("eating")
// 	}
// }
// // console.log(food2);

// var food3 = {
// 	dessert,
// 	fruit,
// 	drink,
// 	eat(){
// 		console.log("eat")
// 	}
// }
// console.log(food3);

// var a = {
//     dessert:"cake"
// }
// a.dessert
// a["dessert"]
// a[dessert] 

//  属性名表达式
//  1. 标识符 当做属性名
// var breakfast = {};
// breakfast.dessert = "cake";
// console.log(breakfast);  
// var breakfast = {}
// let drink = "hot milk";
// breakfast.drink = "milk"; 
// console.log(breakfast);
// breakfast[drink] = "love milk";
// console.log(breakfast)
// console.log(breakfast['hot milk'])  
// console.log(breakfast[drink])   


//  2. 表达式当属性名   动态设置 key 
// var lastword = "last word";

// var  a = {
// 	'first word':"hello",
// 	[lastword]:"world"
// }


// console.log(a);
// console.log(a['first word'])  
// console.log(a[lastword])
// console.log(a['last word'])


//  比较2个相等 
//  es5   ==相等运算符    ===  严格相等运算符 
// 前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0
//  es6 Object.is()  它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致

// Object.is()
+0==-0
// true
// +0===-0
// true
// 0=='0'
// true
// 0==='0' 
// false
// NaN=='abc'
// false
// NaN==NaN
// false
// NaN===NaN
// false
// Object.is(1,-1)
// false
// Object.is(+0,-0)
// false
// Object.is(NaN,'abc')
// false
// Object.is(NaN,NaN);
// true
// Object.is(0,'0');
// false
// Object.is(1,-1);
// false

// Object.key   遍历对象  
// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// Object.assign    $.extend  {...obj,username:'zzzz'}
// Object.assign 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
// 相同的覆盖  不同的追加 

// var fruit = "apple";
// var breakfast = {fruit};
// 深拷贝  浅拷贝 
// var dessert = "cake";
// var foot = Object.assign({},breakfast,{dessert},{dessert:"milk"});
// console.log(foot)
// console.log(Object.assign({a:100},{b:200},{c:300}))

// var user = {
//     username:"zuzouomu",
//     age:28
// }
// {...user,{word:"daydayup",sex:"boy"}}
// var person = Object.assign({word:"daydayup",sex:"boy"},user,{age:48});
// console.log(person)


// ()=>{return "hello"}
// ()=>"hello"
// a=>a ;  
// (a,b)=>(a+b);


// 箭头函数  
//  () => {}    表示函数无返回  没有return  function(){}
//  () => "hello world"   表示函数有返回   function{ return 'hello world'}
//  a => a   function(a){return a}
// function demo(){
// 	console.log("demo")
// }

// var demo2 = (de)=>  {console.log("daydayup "+de)}

// demo2("goodgoodstudy");

// function breakfast({dessert,fruit}){
// 	return dessert + " ----   "+ fruit;
// }

// var break1 = ({dessert,fruit})=>dessert+"---"+fruit; 

// console.log(break1({dessert:"cake",fruit:"apple"}))



// list.map(function(item){

// })
// list.map((item)=>{console.log(item)})

// setInterval(()=>{
// 	console.log(new Date().getSeconds())
// },1000)

// var add = (num1,num2)=>num1+num2;

// //  参数名称不能重复 
// function add1(n1,n2){
// 	return n1+n2;
// }

// const getName = ({firstName,lastName})=>`姓:${firstName} 名:${lastName}`;

// console.log(getName({firstName:"steven",lastName:"jobs"}));


// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

//  5 箭头函数的this指向固化,因为箭头函数本身没有this,所以借用箭头函数外部代码块的this

// window.id = 100;  
// function foo(){
// 	var id = 43;
// 	//  this 
// 	//  箭头函数 没有自己的this this指向固化 指向　借用 箭头函数外部代码块 this 
// 	//  如果箭头函数外代码块 this 指向发送变化  箭头函数this就会随着变化
//     var that = this;
//     console.log(that);
// 	//  bind(this)
// 	setTimeout(()=>{ 
// 		console.log(this);  // that   // this 指向函数外部this 箭头函数没有自己this 指向 借用当前函数外部this 
// 		console.log("id=="+this.id) 
//     },1500);
    
// 	window.setTimeout(function(){
// 		console.log(this);
// 		console.log("id=="+this.id)
// 	},1500);
// }

// foo()     
// this ==>  {id:8888}  call  apply 改变this 指向
// foo.call({id:8888})      // foo.call(this)  foo.apply(this) foo.bind(this)
// foo.bind({id:9999})() 

// let bar = (id)=>{foo.call({id:id})}   //   通过箭头函数实现继承 
// new bar(8000);


//  基本数值类型 没有 null 
// console.log(null==undefined);
// console.log(null===undefined);
// console.log(NaN===NaN);
// console.log(typeof null);      // null 数值类型  原型 是 object    
// console.log(typeof undefined);     

// let Origin = function(){   // 构造器
// 	this.find  =  7;
//     this.hide =   8;
// }

// Origin.find = 10;   //  静态属性 
// Origin.hide = 100; 
// Origin.prototype.find = 1;  // 原型对象 
// Origin.prototype.hide = 2;

// let o = new Origin();

// o.find = 3;
// o.hide = 4;

// // 原型链  
// console.log(Origin.find,Origin.hide);  // 构造器 属性  
// console.log(o.find,o.hide);    

// class Origin {
// 	constructor(find,hide){  // 构造器
// 		this.find = find;
// 		this.hide = hide;
// 	}

// 	// prototype 
// 	find = 7

// 	hide = 8

// 	init(){
// 		console.log("init")
// 	}

// }
// Origin.find = 10;
// Origin.hide = 100;

// let o = new Origin();  // new 实例化 
// console.log(Origin.find,Origin.hide);
// console.log(o.find,o.hide); 
// o.init()

// 面向对象  封装  继承 多态
// ES5 定义构造函数 
// function Per(name,age,word){
// 	this.name = name;
// 	this.age = age;
// 	this.word = word;
// }
// Per.hobby = ['NBA','旅游'];

// Per.prototype.word = "努力吧,为了工作!";

// Per.prototype.say = function(){
// 	return this.name +" 说: wh1809  " + this.word
// }
// Per.prototype.walk =  function(){
// 	return this.age + " I am walk to 10000";
// }



// // let p2 = new Per("leson",18,'二傻子men...')
// // console.log(p2.word)
// // console.log(Per.hobby)
// // console.log(p2.say())
// // console.log(p2.walk())

// // ES5 
// // 继承 总结继承有哪些方式 
// function Student(name,age,word,score){
// 	this.score = score;
// 	Per.call(this,name,age,word);   // 无法得到 父类的 原型对象  call/apply 继承只能得到父类的 构造器 
// }

// // 1 获取prototype 对象复制
// // for(var i in Per.prototype){
// // 	Student.prototype[i] = Per.prototype[i];
// // }
// // 2. 直接赋值
// Student.prototype = new Per();

// Student.prototype.walk = function(){
// 	console.log("1807 为了最高的薪水而努力");  
// }
// let s1 = new Student('honghong',18,'overflow:hidden',99);

// console.log(Student.hobby);
// console.log(s1.score,s1.name);
// console.log(Student.prototype);
// console.log(s1.say());
// s1.walk();


// ES6 定义构造函数 class 
// extends 继承 
// class Person{

// 	constructor(name,age,word){
// 		this.name = name;
// 		this.age = age;
// 		this.word = word;
// 	}

// 	static hobby = ['Game','NBA']

// 	// prototype 
// 	find = "find future"

// 	say(){
// 		return this.name +" 说: wh1807" + this.word
// 	}

// }
// Person.like = ['read book']
// let p1 = new Person('zuozuomu',28,'daydayup')
// console.log(p1.word)
// console.log(Person.hobby)  // 和 this 无关 
// console.log(p1.say())

// extends 继承   直接得到 父类的 constructor 和 prototype 
//  super 当做函数使用的时候  表示指向父类的构造器  constructor  
//  spuer 当做对象 使用  表示指向父类的  prototype 原型对象   super = prototype 

// class Student extends Person{
// 	constructor(name,age,word,score){
// 		super(name,age,word);    // 指向父类的构造器     super(props,context)
// 		this.score = score;
// 	}

// 	say(){
// 		return this.find +  "---" +this.score + "---"  + super.say();
// 	}

// 	walk(){

// 	}
// }

// var s2 = new Student("little lulu",20,'起来起来',100);
// console.log(Student.hobby,Student.like);  // 静态属性  
// console.log(s2.name,s2.score);
// console.log(s2.like)
// console.log(s2.say())
// console.log(s2.find)



//  ES6 编写组件  React.Component Component 

// 1.通过 constructor super(props)  传入 props
// 2.由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，
// class的属性只能定义在class之外。所以propTypes要写在组件外部。
// 3.对于之前的getDefaultProps方法，由于props不可变，所以现在被定义为一个属性，
// 和propTypes一样，要定义在class外部。 


// 使用ES6 class语法创建组件， class中的方法不会自动将this绑定到实例中 此时this 为null
// 必须使用 .bind(this)或者 箭头函数 ＝>来进行手动绑定
// this.handleclick.bind(this)
// 箭头函数 来保存this
// ES6 语法不支持 混合函数  mixins

// import React, {Component} from "react";
// import ReactDOM, {render} from "react-dom"
// import propTypes from "prop-types"
// // class Component{
// // 	constructor(props,context){
// // 		this.props = props;
// // 	}

// // 	componentWillMount(){

// // 	}
// // 	render(){

// // 	}
// // 	componentDidMount(){

// // 	}
// // 	componentWillUpdate(){

// // 	}
// // 	shouldComponentUpdate(){

// // 	}
// // 	componentDidUpdate(){

// // 	}
// // }

// class App extends Component{
// 	constructor(){
// 		super();  // 继承得到父类的 constructor
// 		this.state = {
// 			count:1807,
// 			word:"天道酬勤 ."
// 		}

// 		this.add = this.add.bind(this);
// 	}

// 	// state = {

// 	// }

// 	componentWillMount(){

// 	}

// 	add=()=>{  // 箭头函数保存this  
// 		console.log(this);
// 		this.setState({
// 			count:++this.state.count
// 		})
// 	}

// 	render(){
// 		let {msg,title} = this.props;
// 		let {count, word}  = this.state;
// 		return (
// 			<div>
// 				<h1> class 创建 组件  extends 继承 </h1>
// 				<h2>props == {msg} -- {title }</h2>
// 				<h1 onClick={this.add}> state  == {count} -- {word}</h1>
// 			</div>
// 		)
// 	}

// 	componentDidMount(){

// 	}
// }
// App.defaultProps = {
// 	msg:"1807 daydayup",
// 	title:"Are you sleep?"
// }
// App.propTypes = {
// 	msg:propTypes.string.isRequired,
// 	title:propTypes.string
// }

// render(
// 	<App></App>,
// 	document.getElementById("app")
// )


// Promise 
let promise = new Promise(function(resolve,reject){
	// 处理相关的业务逻辑 
	if(true){
		resolve()
	}else{
		reject()
	}
})

promise.then(()=>{
	console.log("这是成功的回调");
},()=>{
	console.log("这是 error 的回调");
})

class MyPromise{

}

// async