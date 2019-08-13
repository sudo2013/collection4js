/**
 * @program: js-collection
 * @description:
 * @author: l634666
 * @create: 2019-08-09 15:32
 */

import MapEntry from '../MapEntry';

/**
 * hashmap 键值对节点
 */
class HashMapNode<K extends string | number, V> implements MapEntry<K, V> {

    constructor(key: K, value: V) {
        this._key = key;
        this._value = value;
    }

    private _key: K

    get key(): K {
        return this._key;
    }

    set key(value: K) {
        this._key = value;
    }

    private _value: V

    get value(): V {
        return this._value;
    }

    set value(value: V) {
        this._value = value;
    }

    /**
     * @see MapEntry#getKey
     */
    getKey(): K {
        return undefined;
    }

    /**
     * @see MapEntry#getValue
     */
    getValue(): V {
        return undefined;
    }

}

export default HashMapNode
export {
    HashMapNode
}
