/*
 * @Author: xsq
 * @Date: 2021-08-11 18:39:02
 * @Description: 单向链节点
 */

export class LinkedNode<T> {

    /**元素 */
    public element: T;

    /**下一个链节点 */
    public next: LinkedNode<T>;

    public constructor(element: T) {
        this.element = element;
        this.next = null;
    }
}