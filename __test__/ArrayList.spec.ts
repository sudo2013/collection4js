/**
 * @program: collection4js
 * @description:
 * @author: liusx
 * @email: liusx@intmes.com
 * @create: 2019-08-14 10:53
 */
import {List, ArrayList} from "../src";

//简单用例(Simple use cases)
test('Simple use cases：1', () => {
    const list: List<string> = new ArrayList<string>();

    list.add('value1')

    console.log(list.get(0))

    expect(list.get(0)).toBe('value1');
});

//集合大小（List size）
test('Map size：2', () => {
    const list: List<string> = new ArrayList<string>();

    list.add("value1");
    list.add("value2");

    console.log(list.size())

    expect(list.size()).toBe(2);
});

//删除元素（Delete Element）
test('Delete Element：null', () => {
    const list: List<string> = new ArrayList<string>();

    list.add("value1");
    list.removeIndex(0);
    //list.removeIndex(0) or list.removeObject('value1')

    console.log(list.get(0))

    expect(list.get(0)).toBe(null);
});

//排序（sort elements）
test('Sort elements', () => {
    type element = { order: number, value: string }
    const list: List<element> = new ArrayList<element>();

    list.add({order: 3, value: 'value3'})
        .add({order: 2, value: 'value2'})
        .add({order: 1, value: 'value1'}).sort(function(a:element,b:element) {
        return a.order - b.order
    }).forEach(function (value:element) {
        console.log(value.value);
    });
});

//迭代（Iterating）
test('Iterating', () => {
    const list: List<string> = new ArrayList<string>();

    list.add("value1");
    list.add("value2");
    list.add("value3");

    list.forEach(function (value) {
        console.log(value);
    });
});

//链式调用（Method chaining）
test('Method chaining', () => {
    const list: List<string> = new ArrayList<string>();

    list.add("value1")
        .add("value2")
        .add("value3")
        .forEach(function (value) {
            console.log(value);
        });
});
