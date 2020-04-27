# collection4js

[In Chinese 中文版](README_ZH.md)

collection tools，HashMap/ArrayList etc.


## Description

This project provides a collection library that runs on NodeJs and browsers.
- `HashMap` Allow string | number type keys, any type of value.
- `ArrayList` Allow any type of value.

### Method chaining

All methods that do not return content will return instances to support chain calls
  
## HashMap

### constructor overloads
- `new HashMap()` Create an empty HashMap
- `new HashMap(map:HashMap)` Create a HashMap using key value pairs


### methods

- `get(key: K): V` Returns the value stored by the key
- `put(key: K, value: V):this;` Insert key-value pairs
- `keys(): Array<K>` Returns an array of all keys
- `containsKey(key: K):boolean` Does it contain keys
- `values(): Array<V>` Returns an array of all values
- `forEach(callbackfn: (key: K, value: V) => boolean | any, context?: any): void` Iterate over these key-value pairs and call functions for each pair.
 @param callbackfn The callback of the loop. Return false in the function terminates the entire loop. Any value of return that is not false terminates a single loop
 @param context Context within callback function
- `remove(key: K): void` Delete key-value pairs by key
- `clear(): void` Delete all key-value pairs
- `size(): number` The size of key-value pairs
- `clone(): Map<K, V>` The clone becomes a new set of key-value pairs
- `isEmpty(): boolean` Is it a set of null key-value pairs
    
### Examples

If you use it in Node, you first need to import this class

```js
import { HashMap } from 'collection4js';
var Collection4js = require('collection4js');
var hashMap = new Collection4js.HashMap();
//More maps or list to be updated later
```


#### Simple use cases

```js
map.put("key1", "value");
```

#### Map size

```js
map.put("key1", "value");
map.put("key2", "value");
map.size; // -> 2
```

#### Delete key-value pairs

```js
map.put("key1", "value");
map.remove("key1");
map.get("key1"); // --> null
```

#### Same key coverage

```js
map.put("key1", "one");
map.put("key1", "two");
map.get("key1"); // --> "two"
```


#### Iterating

```js
map.put(1, "1");
map.put(2, "2");
map.put(3, "3");

map.forEach(function(key, value) {
    console.log(key + " : " + value);
});
```

#### Method chaining

```js
map
  .put(1, "1")
  .put(2, "2")
  .put(3, "3")
  .forEach(function(value, key) {
      console.log(key + " : " + value);
  });
```

## LinkedHashMap

等待后续更新


## ArrayList

### constructor overloads
- `new ArrayList()` Create an empty ArrayList
- `new ArrayList(list?: List<T> | Array<T>)` Create an ArrayList using an array or an existing collection


### methods
- `size(): number` Collection size
- `add(value: T): this` Insert elements
- `addAll(values: T[] | List<T>): this` Insert multiple elements
- `get(index: number): T` Get element
- `removeIndex(index: number): T` Remove the specified subscript element
- `removeObject(obj: T): T` Remove the specified element
- `isEmpty(): boolean` Is it empty
- `filter(callbackfn: (value: T) => boolean | any, context?: any): void` Filter these elements and call functions for each element.
    @param callbackfn The callback is repeated one by one, and return true in the function is added to the filter result set
    @param context Context within callback function
- `forEach(callbackfn: (value: T) => boolean | any, context?: any): void` Iterate over these element and call functions for each.
    @param callbackfn The callback of the loop. Return false in the function terminates the entire loop. Any value of return that is not false terminates a single loop
    @param context Context within callback function
- `clear(): void` clear
- `contains(obj: T): boolean` Does it contain elements
- `indexOf(obj: T): number` Get element Subscripts
- `toArray(): Array<T>` Converting to array
- `sort(sortBy: (a: T, b: T) => number): this` elements sort
    @param sortBy If A is less than b, A should appear before B in the sorted set, then a value less than 0 is returned.
    If a equals b, return 0. If A is greater than b, a value greater than 0 is returned.


### Examples

If you use it in Node, you first need to import this class

```js
import { ArrayList } from 'collection4js';
var Collection4js = require('collection4js');
var arrayList = new Collection4js.ArrayList();
var arrayList2 = new ArrayList();
//More lists to be updated later
```

#### Simple use cases
```js
list.add('value1')
console.log(list.get(0))
```

#### List size
```js
list.add("value1");
list.add("value2");
console.log(list.size())
```

### Delete Element
```js
list.add("value1");
list.removeIndex(0);
//list.removeIndex(0) or list.removeObject('value1')

console.log(list.get(0))
```

#### sort elements
```js
list.add({order: 3, value: 'value3'})
    .add({order: 2, value: 'value2'})
    .add({order: 1, value: 'value1'})
    .sort(function(a,b) {
        return a.order - b.order
    }).forEach(function (value) {
        console.log(value.value)
    });
```

#### Iterating
```js
list.add("value1");
list.add("value2");
list.add("value3");

list.forEach(function (value) {
    console.log(value);
})
```

#### Method chaining
```js
list.add("value1")
     .add("value2")
     .add("value3")
     .forEach(function (value) {
        console.log(value);
     });
```

## To-Do






