// import '../style.css';
import LinkedList from './linkedList';

const example = new LinkedList();

example.append('b');
example.prepend('a');
example.append('c');
example.append('d');
console.log(example);
console.log(example.size());
example.pop();
console.log(example.size());
console.log(example.getHead());
console.log(example.getTail());
console.log(example.at(0));
console.log(example.contains('a'));
console.log(example.contains('d'));
console.log(example.find('a'));
console.log(example.find('d'));
console.log(example.toString());
example.insertAt('0', 1);
console.log(example.toString());
example.removeAt(1);
console.log(example.toString());