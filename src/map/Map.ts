/**
 * @program: collection4js
 * @description:
 * @author: l634666
 * @create: 2019-08-09 15:32
 */

/**
 * 键值对接口约束（Key-value pair interface constraints）
 */
interface Map<K extends string | number, V> {
    /**
     * 返回键存储的值（Returns the value stored by the key）
     * @param key
     */
    get(key: K): V

    /**
     * 插入键值对（Insert key-value pairs）
     * @param key
     */
    put(key: K, value: V): this

    /**
     * 返回所有键的数组(Returns an array of all keys)
     */
    keys(): Array<K>

    /**
     * 返回所有值的数组 (Returns an array of all values)
     */
    values(): Array<V>

    /**
     * 遍历这些键值对并为每对调用函数(Iterate over these key-value pairs and call functions for each pair)
     *
     * @param callbackfn 初次循环的回调，函数内 return false 终止整个循环，return 任意非 false 的值终止单次循环
     * @param context 回调函数内上下文
     */
    forEach(callbackfn: (key: K, value: V) => boolean | any, context?: any): void

    /**
     * 删除键值根据键 (Delete key-value pairs by key)
     * @param key
     */
    remove(key: K): void

    /**
     * 删除所有键值对(Delete all key-value pairs)
     * @param key
     */
    clear(): void

    /**
     * 键值对集的大小(The size of key-value pairs)
     */
    size(): number;

    /**
     * 克隆成为一个新的键值对集合(The clone becomes a new set of key-value pairs)
     */
    clone(): Map<K, V>
}

export default Map
export {
    Map
}

