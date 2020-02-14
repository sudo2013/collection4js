/**
 * @program: collection4js
 * @description:
 * @author: l634666
 * @create: 2019-08-15 11:24
 */
import List from '../List';

/**
 * ArrayList（阵列列表）
 */
class ArrayList<T> implements List<T> {

    /**
     * 数据集大小
     */
    private _size: number = 0;
    /**
     * 元素集
     */
    private readonly _elements: Array<T> = [];


    constructor(list?: List<T> | Array<T>) {
        if (list != null && typeof list !== 'undefined') {
            this._$addValues(list)
        }
    }

    /**
     * @see List#add
     */
    add(value: T): this {
        this._$addValue(value);
        return this;
    }

    /**
     * @see List#addAll
     */
    addAll(values: T[] | List<T>): this {
        return this._$addValues(values);
    }

    /**
     * @see List#clear
     */
    clear(): void {
        if (this._size > 0) {
            this._elements.splice(0, this._size);
        }

        this._size = 0;
    }

    /**
     * @see List#contains
     */
    contains(obj: T): boolean {
        return this.indexOf(obj) > -1;
    }

    /**
     * @see List#forEach
     */
    forEach(callbackfn: (value: T) => (boolean | any), context?: any): void {
        if (this._size) {
            let res: boolean = true;

            for (let i: number = 0; i < this._size; i++) {
                const value: T = this._$getValue(i)
                res = callbackfn.call(context || this, value);

                if (res === false) {
                    break;
                }
            }
        }
    }

    /**
     * @see List#get
     */
    get(index: number): T {
        return this._$getValue(index);
    }

    /**
     * @see List#indexOf
     */
    indexOf(obj: T): number {
        for (let i: number = 0; i < this._size; i++) {
            if (this._elements[i] === obj) {
                return i
            }
        }
        return -1
    }

    /**
     * @see List#isEmpty
     */
    isEmpty(): boolean {
        return this._size == 0;
    }

    /**
     * @see List#removeIndex
     */
    removeIndex(index: number): T {
        return this._$removeValue(index);
    }

    /**
     * @see List#removeObject
     */
    removeObject(obj: T): T {
        const index = this.indexOf(obj)
        return this._$removeValue(index);
    }

    /**
     * @see List#size
     */
    size(): number {
        return this._size;
    }

    /**
     * @see List#toArray
     */
    toArray(): Array<T> {
        return [].concat(this._elements);
    }

    /**
     * @see List#sort
     */
    sort(sortBy: (a: T, b: T) => number): this {
        this._elements.sort(sortBy)
        return this;
    }

    /**
     * 获取元素
     * @private
     */
    private _$getValue(index: number) {
        let value: T = null;

        if (index > -1 && this._size > index) {
            //放入数组
            value = this._elements[index]
        }

        return value;
    }

    /**
     * 放入多个元素
     * @private
     */
    private _$addValues(values: List<T> | Array<T>): this {
        if (values instanceof Array) {
            for (let i = 0; i < values.length; i++) {
                this._$addValue(values[i]);
            }
        } else if (values instanceof ArrayList) {
            values.forEach(value => {
                this._$addValue(value)
            })
        }

        return this;
    }

    /**
     * 放入元素
     * @private
     */
    private _$addValue(value: T) {
        //放入元素
        this._elements.push(value)

        //元素集大小+1
        ++this._size;
    }

    /**
     * 移除元素
     * @private
     */
    private _$removeValue(index: number): T {
        let value: T = null;

        if (index > -1 && this._size > index) {
            value = this._elements[index]

            //移除元素
            this._elements.splice(index, 1);

            //元素集大小-1
            --this._size;
        }

        return value;
    }
}

export default ArrayList
export {
    ArrayList
}
