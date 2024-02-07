// 1) Contry 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹 정보를
//   리스트로 들고있다. (name 프로퍼티, idolGroups 프로퍼티)
// 2) IdolGroup 클래스는 아이돌 그룹 이름과 멤버 정보를 리스트로 들고있다.
//   (name 프로퍼티, members 프로퍼티)
// 3) Idol 클래스는 아이돌 이름과 출생년도 정보를 들고있다.
//   (name 프로퍼티, year 프로퍼티)
// 4) MaleIdol 클래스는 Idol 클래스와 동일하게
//   name, year 프로퍼티가 존재한다.
//   추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다. 라는 스트링을 반환해준다.
// 5) FemaleIdol 클래스는 Idol 클래스와 동일하게 
//   name, year 프로퍼티가 존재한다. 
//   추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다.
//   라는 스트링을 반환해준다.

// const iveMembers = [
//   {
//     name: '안유진',
//     year: 2003
//   },
//   {
//     name: '가을',
//     year: 2002
//   },
//   {
//     name: '레이',
//     year: 2004
//   },
//   {
//     name: '장원영',
//     year: 2004
//   },
//   {
//     name: '리즈',
//     year: 2004
//   },
//   {
//     name: '이서',
//     year: 2007
//   },
// ]

// const btsMembers = [
//   {
//     name: '진',
//     year: 1992
//   },
//   {
//     name: '슈가',
//     year: 1993
//   },
//   {
//     name: '제이홉',
//     year: 1994
//   },
//   {
//     name: 'RM',
//     year: 1994
//   },
//   {
//     name: '지민',
//     year: 1995
//   },
//   {
//     name: '뷔',
//     year: 1995
//   },
//   {
//     name: '정국',
//     year: 1997
//   }
// ]

// class Contry {
//   name;
//   idolGroups;

//   constructor(idolGroups, name) {
//     this.name = name;
//     this.idolGroups = idolGroups;
//   }
// }

// class IdolGroup {
//   name;
//   members;

//   constructor(name, members) {
//     this.name = name;
//     this.members = members;
//   }
// }

// class Idol {
//   name;
//   year;

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// class MaleIdol extends Idol {

//   sing() {
//     return `${this.name}이 노래를 합니다.`
//   }
// }

// class FemaleIdol extends Idol{

//   dance() {
//     return `${this.name}이 춤을 춥니다.`
//   }
// }

// const cIveMembers = iveMembers.map(x => new FemaleIdol(x['name'], x['year']));
// const cBtsMembers = btsMembers.map(x => new MaleIdol(x['name'], x['year']));

// const iveGroup = new IdolGroup('아이브', cIveMembers);

// const btsGroup = new IdolGroup('BTS', cBtsMembers);

// const korea = new Contry('대한민국', [iveGroup, btsGroup]);

// const yuJin = {
//   name: '안유진',
//   year: 2003,

//   get age() {
//     return new Date().getFullYear() - this.year;
//   },
//   set age(age) {
//     this.year = new Date().getFullYear() - age;
//   }
// }

// console.log(Object.isExtensible(yuJin));

// yuJin['position'] = 'bocal';
// console.log(yuJin);

// Object.preventExtensions(yuJin);

// console.log(Object.isExtensible(yuJin));

// yuJin['groupName'] = '아이브';

// console.log(yuJin);

// delete yuJin['position'];
// console.log(yuJin);

// // seal

// const yuJin2 = {
//   name: '안유진',
//   year: 2003,

//   get age() {
//     return new Date().getFullYear() - this.year;
//   },
//   set age(age) {
//     this.year = new Date().getFullYear() - age;
//   }
// }

// console.log(Object.isSealed(yuJin2));
// Object.seal(yuJin2);
// console.log(Object.isSealed(yuJin2));
// yuJin2['gruopName'] = '아이브';
// console.log(yuJin2);

// delete yuJin2['name'];
// console.log(yuJin2);

// Object.defineProperty(yuJin2, 'name', {
//   value: 'code',
// });

// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

// // Freezed


// const yuJin3 = {
//   name: '안유진',
//   year: 2003,

//   get age() {
//     return new Date().getFullYear() - this.year;
//   },
//   set age(age) {
//     this.year = new Date().getFullYear() - age;
//   }
// }

// console.log(Object.isFrozen(yuJin3));

// Object.freeze(yuJin3);

// console.log(Object.isFrozen(yuJin3));

// yuJin3['groupName'] = '아이브';

// console.log(yuJin3);

// delete yuJin3['name'];
// console.log(yuJin3);

// // Object.defineProperty(yuJin3, 'name', {
// //   value: 'code'
// // })

// console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

// const yuJin4 = {
//   name: '안유진',
//   year: 2003,

//   wonYoung: {
//     name: '장원영',
//     year: 2004
//   }
// };

// Object.freeze(yuJin4);
// console.log(Object.isFrozen(yuJin4));

// console.log(Object.isFrozen(yuJin4['wonYoung']));

// prototype@@@@@@@@@@@@!

// const testObj = {};
// console.log(testObj.__proto__);

// function IdolModel(name, year) {
//   this.name = name;
//   this.year = year;
// }

// console.log(IdolModel.prototype);

// console.log(IdolModel.prototype.constructor === IdolModel);
// console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin.__proto__ === IdolModel.prototype);

// console.log(testObj.__proto__ === Object.prototype);

// console.log(IdolModel.__proto__ === Function.prototype);

// console.log(Function.prototype.__proto__ === Object.prototype);

// console.log(IdolModel.prototype.__proto__ === Object.prototype);

// console.log(yuJin.toString());
// console.log(Object.prototype.toString());

// function IdolModel2(name, year) {
//   this.name = name;
//   this.year = year;

//   this.sayHello = function() {
//     return `${this.name}이 인사를 합니다.`;
//   }
// }

// const yuJin2 = new IdolModel2('안유진', 2003);
// const wonYoung2 = new IdolModel2('장원영', 2004);

// console.log(yuJin2.sayHello(), wonYoung2.sayHello());

// console.log(yuJin2.sayHello === wonYoung2.sayHello);

// console.log(yuJin2.hasOwnProperty('sayHello'));

// function IdolModel3(name, year) {
//   this.name = name;
//   this.year = year;
// }

// IdolModel3.prototype.sayHello = function() {
//   return `${this.name}이 인사를 합니다.`;
// }

// const yuJin3 = new IdolModel3('안유진', 2003);
// const wonYoung3 = new IdolModel3('장원영', 2004);

// console.log(yuJin3.sayHello());
// console.log(wonYoung3.sayHello());

// console.log(yuJin3.sayHello === wonYoung3.sayHello);
// console.log(yuJin3.hasOwnProperty('sayHello'));

// IdolModel3.sayStaticHello = function() {
//   return '안녕하세요 나는 스태틱 메소드';
// }

// function IdolModel4(name, year) {
//   this.name = name;
//   this.year = year;

//   this.sayHello = function() {
//     return '안녕 나는 인스턴스 메서드야!'
//   }
// }

// IdolModel4.prototype.sayHello = function() {
//   return '안녕 나는 프로토타입 메서드야!';
// }

// const yuJin4 = new IdolModel4('안유진', 2003);
// console.log(yuJin4.sayHello());

// getPrototypeOf, setPrototypeOf
// 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경

// function IdolModel(name, year) {
//   this.name = name;
//   this.year = year;
// }

// IdolModel.prototype.sayHello = function() {
//   return `${this.name} 인사를 합니다.`;
// }

// function FemaleIdolModel(name, year) {
//   this.name = name;
//   this.year = year;

//   this.dance = function() {
//     return `${this.name}이 춤을 춥니다.`;
//   }
// }

// const gaEul = new IdolModel('가을', 2004);
// const ray = new FemaleIdolModel('레이', 2004);

// console.log(gaEul.__proto__);
// console.log(gaEul.__proto__ === IdolModel.prototype);
// console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

// console.log(gaEul.sayHello());
// console.log(ray.dance());
// console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);

// Object.setPrototypeOf(ray, IdolModel.prototype);
// console.log(ray.sayHello());

// console.log(ray.constructor === IdolModel);
// console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// console.log(FemaleIdolModel.prototype === IdolModel.prototype);

// FemaleIdolModel.prototype = IdolModel.prototype;

// const eSeo = new FemaleIdolModel('이서', 2007);

// console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
// console.log(FemaleIdolModel.prototype === IdolModel.prototype); 

// var numberOne = 20;
// function levelOne(){
//   console.log(numberOne);
// }

// levelOne();

// function levelOne(){
//   var numberOne = 40;
//   console.log(numberOne);
// }
// levelOne();

// console.log(numberOne);

// function returnName() {
//   return this.name;
// }
// console.log(returnName());

// const yuJin3 = {
//   name: '안유진',
// }
// console.log(returnName.call(yuJin3));

// function multiply(x, y, z){
//   return `${this.name} / 결과값: ${x * y * z}`;
// }
// console.log(multiply.call(yuJin3, 3, 4, 5));

// console.log(multiply.apply(yuJin3, [3, 4, 5]));

// const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
// console.log(laterFunc());

// // function getNumber() {
// //   var number = 5; 

// //   function innerGetNumber(){
// //     return number;
// //   }

// //   return innerGetNumber();
// // }
// // console.log(getNumber());

// function getNumber() {
//   var number = 5;

//   function innerGetNumber() {
//     return number;
//   }

//   return innerGetNumber;
// }

// const runner = getNumber();

// console.log(runner());

// console.log('-------------------------------------');

// function cacheFunction() {
//   var number = 10 * 10;

//   function innerCacheFunction(newNum) {
//     return number * newNum;
//   }

//   return innerCacheFunction;
// }

// const runner2 = cacheFunction();
// console.log(runner2(20));

// console.log('-------------------------------------');

// function cacheFunction2() {
//   var number = 99;

//   function increment() {
//     number++;
//     return number;
//   }

//   return increment;
// }

// const runner3 = cacheFunction2();
// console.log(runner3());

// console.log('-------------------------------------');

// function Idol(name, year) {
//   this.name = name;
//   var _year = year;

//   this.sayNameAndYear = function() {
//     return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
//   }
// }

// const yuJin = new Idol('안유진', 2003);
// console.log(yuJin.sayNameAndYear());

// console.log(yuJin._year);

// function cacheFunction() {
//   let number = 10 * 10;

//   function innerCaheFunction(newNum) {
//     return number * newNum;
//   }

//   return innerCaheFunction;
// }

// const runner = cacheFunction();
// console.log(runner(10));

// function cacheFunction2() {
//   let number = 99;
//   function increment() {
//     number++;
//     return number;
//   }
//   return increment;
// }

// const runner2 = cacheFunction2();
// runner2();
// runner2();
// runner2();

// function Idol(name, yaer) {
//   this.name = name;
//   var _year = yaer;
//   this.sayNameAndYear = function() {
//     return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`
//   }
// }

// const yuJin = new Idol('안유진', 2003);
// console.log(yuJin.sayNameAndYear());
// console.log(yuJin._year);

// function waitAndRun() {
//   setTimeout(()=>{
//     console.log('The end');
//   }, 2000);
// }

// waitAndRun();

// function waitAndRun2() {
//   setTimeout(()=>{
//     console.log('1 callback end');
//     setTimeout(()=>{
//       console.log('2 callback end');
//       setTimeout(()=>{
//         console.log('3 callback end');
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// waitAndRun2();

// Promise
// const timeOutPromise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve('완료');
//   }, 2000);
// });

// const getPromise = seconds => new Promise((res, rej)=>{
//   setTimeout(()=>{
//     res('완료');
//   }, seconds * 1000)
// })

// getPromise(3).then((r)=>{
//   console.log(r);
//   console.log('1 clear');
//   return getPromise(10);
// }).then((r)=>{
//   console.log(r);
//   console.log('2 clear');
// })

// async, await

const getPromise =(seconds) => new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject('error');
  }, seconds * 1000);
});

async function runner() {
  try {
    const result1 = await getPromise(3);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(1);
    console.log(result3);
  } catch(e) {
    console.log(e);
  } finally {
    console.log('finally start');
  }
}

runner();


// const cart = [
//   {
//     name: '사과',
//     price: 500
//   },
//   {
//     name: '바나나',
//     price: 700
//   },
//   {
//     name: '레몬',
//     price: 300
//   },
// ]

// const result = cart.reduce((t, fruit)=>{
//   return t + fruit.price;
// }, 0);

// console.log(result);