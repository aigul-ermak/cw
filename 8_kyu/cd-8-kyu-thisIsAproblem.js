/*
We want to create a constructor function 'NameMe',
which takes first name and last name as parameters.
The function combines the first and last names and saves the value in "name" property.

We already implemented that function, but when we actually run the code, the "name" property is accessible,
but the "firstName" and "lastName" is not accessible.
All the properties should be accessible.
Can you find what's wrong with it?
A test fixture is also available

Link: https://www.codewars.com/kata/547c71fdc5b2b38db1000098/train/javascript

 */


function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.name = `${first} ${last}`;
}

console.log(NameMe('Anna', 'Hueston'))
