/**
 * @program: collection4js
 * @description:
 * @author: l634666
 * @create: 2019-08-09 15:32
 */

import Map from '../Map';
import MapEntry from '../MapEntry';
import HashMapNode from './HashMapNode';
import MapEntrySet from '../MapEntrySet';

/**
 * hashmap 键值对
 */
class HashMap<K extends string | number, V> implements Map<K, V> {

    /**
     * 数据集大小
     */
    private _size: number = 0;
    /**
     * 数据表
     */
    // @ts-ignore
    private readonly _table: {[key: K]: HashMapNode<K, V> } = {};
    /**
     * 键值存储数组
     * TODO：暂时没有实现
     */
    private readonly entrySet: MapEntrySet<MapEntry<K, V>> = null

    /**
     *
     * @param m
     */
    constructor(m?: Map<K, V>) {
        if (m != null && typeof m !== 'undefined' && typeof m === 'object') {
            this._$putMap(m)
        }
    }

    /**
     * @see Map#clear
     */
    clear(): void {
        if (this._size > 0) {
            for (const key in this._table) {
                // @ts-ignore
                delete this._table[key];
            }
        }
    }

    /**
     * @see Map#size
     */
    size(): number {
        return this._size
    }

    /**
     * @see Map#clone
     */
    clone(): Map<K, V> {
        const newMap: HashMap<K, V> = new HashMap(this);
        return newMap;
    }

    /**
     * @see Map#forEach
     */
    forEach(callbackfn: (key: K, value: V) => boolean | undefined, context?: any): void {
        if (this._size > 0) {
            let res: boolean = true;
            for (const key in this._table) {
                const value: V = this._$getValue(key as any)
                res = callbackfn.call(context || this, key, value);

                if (res === false) {
                    break;
                }
            }
        }
    }

    /**
     * @see Map#get
     */
    get(key: K): V {
        return this._$getValue(key);
    }

    /**
     * @see Map#keys
     */
    keys(): Array<K> {
        const keys: Array<K> = []
        this.forEach((key, value): boolean | any => {
            keys.push(key);
        })
        return keys;
    }

    /**
     * @see Map#put
     */
    put(key: K, value: V): this {
        this._$putValue(key, value)
        return this;
    }

    /**
     * @see Map#remove
     */
    remove(key: K): V {
        return this._$removeValue(key)
    }

    /**
     * @see Map#values
     */
    values(): Array<V> {
        const values: Array<V> = []
        this.forEach((key, value): boolean | any => {
            values.push(value);
        })
        return values;
    }

    /**
     * 插入键值对
     * @param key
     * @param value
     * @private
     */
    private _$putValue(key: K, value: V): void {
        const node: HashMapNode<K, V> = new HashMapNode(key, value)

        // @ts-ignore
        this._table[key] = node

        //键值对集大小+1
        ++this._size
    }

    /**
     * 插入键值对
     * @param key
     * @param value
     * @private
     */
    private _$putMap(m: Map<K, V>): void {
        const me = this
        if (m.size() > 0) {
            m.forEach((key, value): boolean | any => {
                me._$putValue(key, value)
            })
        }
    }

    /**
     * 获取键对应的值
     * @param key
     * @private
     */
    private _$getValue(key: K): V {
        let value: V = null

        if (this._size && this._table.hasOwnProperty(key)) {
            // @ts-ignore
            const node = this._table[key]
            // @ts-ignore
            value = node.value
        }

        return value
    }

    /**
     * 删除键值对根据键
     *
     * @param key
     * @private
     */
    private _$removeValue(key: K): V {
        let value: V = null

        if (this._size && this._table.hasOwnProperty(key)) {
            // @ts-ignore
            const node = this._table[key]
            value = node.value

            // @ts-ignore
            delete this._table[key]
        }

        //键值对集大小11
        --this._size

        return value
    }
}

export default HashMap
export {
    HashMap
}
