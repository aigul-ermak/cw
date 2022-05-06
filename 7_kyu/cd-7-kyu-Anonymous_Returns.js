/*
When a function is called by itself it is bound to the global context; the this variable of the function will be bound to the global object.

When the getNameFunc function is called on the alpha object the value of the name variable outside of the object is returned: "The Window".

We do not want this, we want the value of the name property inside the alpha object to be returned.

Fix getNameFunc so the right value is returned.

For more information: Binding

Link: https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript

 */


name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return function() {
            return this.name;
        }.bind(this);
    }
};
let a = alpha.getNameFunc()()


console.log(a)


