/**
 * @program: js-collection
 * @description:
 * @author: l634666
 * @create: 2019-08-09 15:32
 */

interface MapEntry<K extends string | number, V> {

    /**
     * 获取键
     */
    getKey():K

    /**
     * 获取值
     */
    getValue():V
}

export default MapEntry
export {
    MapEntry
}
