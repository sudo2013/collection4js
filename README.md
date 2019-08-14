# collection4js

集合工具集，HashMap/ArrayList等


## 描述（Description）

本项目提供了一个集合类库，在NodeJs和浏览器上都能运行的类库（This project provides a collection library that runs on NodeJs and browsers.）
- `HashMap` 允许string|number类型的键，任何类型的值。(allows storage of keys/values of any type.)

## HashMap

### 构造函数重载（constructor overloads）
- `new HashMap()` 创建一个空的hashmap
- `new HashMap(map:HashMap)` 使用键值对创建一个hashmap


### 函数（methods）

- `get(key: K): V` 返回键存储的值（Returns the value stored by the key）
- `put(key: K, value: V)` this; 插入键值对（Insert key-value pairs）
- `keys(): Array<K>` 返回所有键的数组(Returns an array of all keys)
- `containsKey(key: K,):boolean` 是否包含键（Does it contain keys）
- `values(): Array<V>` //返回所有值的数组 (Returns an array of all values)
- `forEach(callbackfn: (key: K, value: V) => boolean | any, context?: any): void` 遍历这些键值对并为每对调用函数(Iterate over these key-value pairs and call functions for each pair)
 @param callbackfn 初次循环的回调，函数内 return false 终止整个循环，return 任意非 false 的值终止单次循环
 @param context 回调函数内上下文
- `remove(key: K): void` //删除键值根据键 (Delete key-value pairs by key)
- `clear(): void` 删除所有键值对(Delete all key-value pairs)
- `size(): number` 键值对集的大小(The size of key-value pairs)
- `clone(): Map<K, V>` 克隆成为一个新的键值对集合(The clone becomes a new set of key-value pairs)

#### 链式调用（Method chaining）

所有不返回内容的方法都将返回HashMap实例以支持链式调用。（All methods that do not return content will return HashMap instances to support chain calls）
    
    
### 例子（Examples）

如果您在Node中使用，则首先需要导入该类（If you use it in Node, you first need to import this class）

```js
import { HashMap } from 'collection4js';
var Collection4js = require('collection4js');
var hashMap = new Collection4js.HashMap();
//更多map待后续更新(More maps to be updated later)
```


#### 简单用例(Simple use cases)

```js
map.put("key1", "value");
```

#### 键值对集合大小（Map size）

```js
map.put("key1", "value");
map.put("key2", "value");
map.size; // -> 2
```

#### 删除键值对（Delete key-value pairs）

```js
map.put("key1", "value");
map.remove("key1");
map.get("key1"); // --> null
```

#### 相同键覆盖(Same key coverage)

```js
map.put("key1", "one");
map.put("key1", "two");
map.get("key1"); // --> "two"
```


#### 迭代（Iterating）

```js
map.put(1, "1");
map.put(2, "2");
map.put(3, "3");

map.forEach(function(key, value) {
    console.log(key + " : " + value);
});
```

#### 链式调用（Method chaining）

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

等待后续更新


## To-Do






