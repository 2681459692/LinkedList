/*
 * @Author: xsq
 * @Date: 2021-08-12 13:52:27
 * @Description: 双向链表节点
 */

import { LinkedNode } from "../LinkedList/LinkedNode";

export class DoubleLinkedNode<T> extends LinkedNode<T> {

    /**上一个链节点 */
    public last: DoubleLinkedNode<T>;

    /**下一个链节点 */
    public next: DoubleLinkedNode<T>;

    public constructor(element: T) {
        super(element);
        this.last = null;
        this.next = null;
    }
}