/*
 * @Author: xsq
 * @Date: 2021-08-11 18:43:59
 * @Description: 单向链表
 */

import { LinkedNode } from "./LinkedNode";

export class LinkedList<T> {

    protected count: number;
    protected head: LinkedNode<T>;
    protected next: LinkedNode<T>;

    public constructor() {
        this.count = 0;
        this.head = null;
        this.next = null;
    }

    /**
     * 向链表尾部添加元素
     * @param element 要添加的元素
     */
    public push(element: T): void {
        const linkedNode = new LinkedNode(element);
        let currentNode: LinkedNode<T>;
        if (!this.head) {
            this.head = linkedNode;
        } else {
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = linkedNode;
        }
        this.count++;
    }

    /**
     * 向链表头部添加元素
     * @param element 要添加的元素
     */
    public insertHead(element: T): void {
        const linkedNode = new LinkedNode(element);
        if (!this.head) {
            this.head = linkedNode;
        } else {
            let currentNode = this.head;
            this.head = linkedNode;
            this.head.next = currentNode;
        }
        this.count++;
    }

    /**
     * 向链表指定索引位置插入元素
     * @param element 要插入的元素
     * @param index 要插入的索引位置
     * @returns 插入操作成功与否
     */
    public insert(element: T, index: number): boolean {
        if (index < 0 || index > this.count) {
            return false;
        }

        if (this.count == index) {
            this.push(element);
            return true;
        }

        const linkedNode = new LinkedNode(element);
        let lastLinkedNode = this.getLinkedNodeByIndex(index - 1);
        let nextLinkedNode = this.getLinkedNodeByIndex(index);

        if (!lastLinkedNode) {
            this.head = linkedNode;
            if (!nextLinkedNode) {
                linkedNode.next = null;
            } else {
                linkedNode.next = nextLinkedNode;
            }

            this.count++;
            return true;
        }

        lastLinkedNode.next = linkedNode;
        if (!nextLinkedNode) {
            linkedNode.next = null;
        } else {
            linkedNode.next = nextLinkedNode;
        }
        this.count++;
        return true;
    }

    /**
     * 从链表中删除指定元素
     * @param element 要删除的元素
     * @returns 删除操作成功与否
     */
    public remove(element: T): boolean {
        let index = this.indexOf(element);
        return this.removeByIndex(index);
    }

    /**
     * 从链表中删除指定索引的元素
     * @param index 索引
     * @returns 删除操作成功与否
     */
    public removeByIndex(index: number): boolean {
        if (index < 0 || index >= this.count) {
            return false;
        }

        if (this.count == 1) {
            this.clear();
            return true;
        }

        let lastLinkedNode = this.getLinkedNodeByIndex(index - 1);
        let nextLinkedNode = this.getLinkedNodeByIndex(index + 1);
        if (!lastLinkedNode) {
            if (!nextLinkedNode) {
                return false;
            }

            this.head = nextLinkedNode;
            this.count--;
            return true;
        }

        if (!nextLinkedNode) {
            lastLinkedNode.next = null;
            this.count--;
            return true;
        }

        lastLinkedNode.next = nextLinkedNode;
        this.count--;
        return true;
    }

    /**
     * 获取指定索引的链节点
     * @param index 指定索引
     * @returns 链节点
     */
    public getLinkedNodeByIndex(index: number): LinkedNode<T> {
        if (index >= this.count || index < 0) {
            return;
        }

        let currentNode = this.head;
        for (let i = 0; i < index && currentNode; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    /**
     * 获取目标元素在链表中的索引
     * @param element 目标元素
     * @returns 索引【如果为-1，则表示链表中不存在该元素】
     */
    public indexOf(element: T): number {
        if (this.count <= 0) {
            return -1;
        }

        let currentNode = this.head;
        for (let i = 0; i < this.count && currentNode; i++) {
            if (element === currentNode.element) {
                return i;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    /**获取链表的长度 */
    public size(): number {
        return this.count;
    }

    /**判断链表是否为空 */
    public isEmpty(): boolean {
        return this.count == 0;
    }

    /**清空链表 */
    public clear(): void {
        this.count = 0;
        this.head = null;
        this.next = null;
    }

    /**获取链表头部链节点 */
    public getHead(): LinkedNode<T> {
        return this.head;
    }

    /**获取链表尾部链节点 */
    public getTail(): LinkedNode<T> {
        let currentNode: LinkedNode<T> = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    /**获取链表头部元素 */
    public getHeadElement(): T {
        if (!this.head) {
            return;
        }
        return this.head.element;
    }

    /**获取链表尾部元素 */
    public getTailElement(): T {
        let currentNode: LinkedNode<T> = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        if (!currentNode) {
            return;
        }

        return currentNode.element;
    }

    /**
     * 获取指定索引位置的元素
     * @param index 索引
     * @returns 元素
     */
    public getElementByIndex(index: number): T {
        let linkedNode = this.getLinkedNodeByIndex(index);
        if (!linkedNode) {
            return;
        }

        return linkedNode.element;
    }
}