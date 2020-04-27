/**
 * @program: collection4js
 * @description:
 * @author: l634666
 * @create: 2019-08-15 09:14
 */

interface List<T> {

    /**
     * 集合大小（Collection size）
     */
    size(): number;

    /**
     * 插入元素（Insert elements）
     *
     * @param value
     */
    add(value: T): this;

    /**
     * 插入多个元素（Insert multiple elements）
     *
     * @param values
     */
    addAll(values: T[] | List<T>): this;

    /**
     * 获取元素（Get elements）
     *
     * @param index
     */
    get(index: number): T;

    /**
     * 移除指定下标的元素(Remove the specified subscript element)
     *
     * @param index
     */
    removeIndex(index: number): T;

    /**
     * 移除指定元素(Remove the specified element)
     *
     * @param obj
     */
    removeObject(obj: T): T;

    /**
     * 是否为空(Is it empty)
     */
    isEmpty(): boolean;

    /**
     * 遍历这些元素并为每对调用函数(Iterate over these element and call functions for each)
     *
     * @param callbackfn 初次循环的回调，函数内 return false 终止整个循环，return 任意非 false 的值终止单次循环
     * @param context 回调函数内上下文
     */
    forEach(callbackfn: (value: T) => boolean | any, context?: any): void;


    /**
     * 过滤这些元素并为每个元素调用函数(Filter these elements and call functions for each element)
     *
     * @param callbackfn 逐次循环的回调，函数内 return true 则加入过滤结果集
     * @param context 回调函数内上下文
     */
    filter(callbackfn: (value: T) => boolean | any, context?: any): Array<T>;

    /**
     * 清空(clear)
     */
    clear(): void;

    /**
     * 是否包含元素(Does it contain elements)
     *
     * @param obj
     */
    contains(obj: T): boolean;

    /**
     * 获取元素下标(Get element Subscripts)
     *
     * @param obj
     */
    indexOf(obj: T): number;

    /**
     * 转换为数组（Converting to array）
     */
    toArray(): Array<T>;

    /**
     * 元素排序（elements sort）
     *
     * @param sortBy 若 a 小于 b，在排序后的集合中 a 应该出现在 b 之前，则返回一个小于 0 的值。
     * 若 a 等于 b，则返回 0。若 a 大于 b，则返回一个大于 0 的值。
     * （If A is less than b, A should appear before B in the sorted set, then a value less than 0 is returned.
     * If a equals b, return 0. If A is greater than b, a value greater than 0 is returned.）
     */
    sort(sortBy: (a: T, b: T) => number): this;
}

export default List
export {
    List
}
