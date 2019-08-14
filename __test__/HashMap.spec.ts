/**
 * @program: collection4js
 * @description:
 * @author: liusx
 * @email: liusx@intmes.com
 * @create: 2019-08-14 10:53
 */
import { Map,HashMap } from "../src";

//简单用例(Simple use cases)
test('Simple use cases：1', () => {
    const map:Map<string,number> = new HashMap<string,number>();

    map.put('key1',1)

    console.log(map.get('key1'))

    expect(map.get('key1')).toBe(1);
});

//键值对集合大小（Map size）
test('Map size：2', () => {
    const map:Map<string,string> = new HashMap<string,string>();

    map.put("key1", "value");
    map.put("key2", "value");

    console.log(map.size())

    expect(map.size()).toBe(2);
});

//删除键值对（Delete key-value pairs）
test('Delete key-value pairs：null', () => {
    const map:Map<string,string> = new HashMap<string,string>();

    map.put("key1", "value");
    map.remove("key1");

    console.log(map.get("key1"))

    expect(map.get("key1")).toBe(null);
});

//相同键覆盖(Same key coverage)
test('Same key coverage：two', () => {
    const map:Map<string,string> = new HashMap<string,string>();

    map.put("key1", "one");
    map.put("key1", "two");

    console.log(map.get("key1"))

    expect(map.get("key1")).toBe('two');
});

//迭代（Iterating）
test('Iterating', () => {
    const map:Map<number,string> = new HashMap<number,string>();

    map.put(1, "1");
    map.put(2, "2");
    map.put(3, "3");

    map.forEach(function(key, value) {
        console.log(key + " : " + value);
    });
});

//迭代（Iterating）
test('Method chaining', () => {
    const map:Map<number,string> = new HashMap<number,string>();

    map
        .put(1, "1")
        .put(2, "2")
        .put(3, "3")
        .forEach(function(value, key) {
            console.log(key + " : " + value);
        });
});
