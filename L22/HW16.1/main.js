console.log('Lection 14');


// function Parent(name) {
//     this.name = name;
// }

// function Child(name) {
//     Parent.call(this, name);
//     // super(name)

//     this.age = 10;
// }

// Child.prototype = Object.create(Parent.prototype);
// // Child.prototype = new Parent();


// const child1 = new Child('Vasya');
// console.log(child1);

// ------------------------------------------------------

// let counter = 0;
// class Factory {
//     constructor(color) {
//         this.type = 'shoes';
//         this.model = 't1';
//         this.color = color;
//         counter++;
//     }

//     getCount() {
//         return 102;
//     }

//     static getCountOfShoes() {
//         return counter;
//     }
// }

// const s1 = new Factory('red');
// const s2 = new Factory('red');
// const s3 = new Factory('red');
// const s4 = new Factory('red');


// ------------------------------------------------------