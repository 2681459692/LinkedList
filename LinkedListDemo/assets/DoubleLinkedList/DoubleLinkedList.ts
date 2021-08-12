/*
 * @Author: xsq
 * @Date: 2021-08-12 13:58:08
 * @Description: 双向链表
 */

import { LinkedList } from "../LinkedList/LinkedList";
import { DoubleLinkedNode } from "./DoubleLinkedNode";

export class DoubleLinkedList<T> extends LinkedList<T> {

    protected head: DoubleLinkedNode<T>;
    protected last: DoubleLinkedNode<T>;
    protected next: DoubleLinkedNode<T>;

    public constructor() {
        super();
        this.last = null;
    }

    public push(element: T): void {
        const doubleLinkedNode = new DoubleLinkedNode(element);
        let currentNode: DoubleLinkedNode<T>;
        if (!this.head) {
            this.head = doubleLinkedNode;
        } else {
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = doubleLinkedNode;
            doubleLinkedNode.last = currentNode;
        }
        this.count++;
    }

    public insertHead(element: T): void {
        const linkedNode = new DoubleLinkedNode(element);
        if (!this.head) {
            this.head = linkedNode;
        } else {
            let currentNode = this.head;
            this.head = linkedNode;
            this.head.next = currentNode;
            currentNode.last = this.head;
        }
        this.count++;
    }

    public insert(element: T, index: number): boolean {
        if (index < 0 || index > this.count) {
            return false;
        }

        if (this.count == index) {
            this.push(element);
            return true;
        }

        const linkedNode = new DoubleLinkedNode(element);
        let lastLinkedNode = this.getLinkedNodeByIndex(index - 1);
        let nextLinkedNode = this.getLinkedNodeByIndex(index);

        if (!lastLinkedNode) {
            this.head = linkedNode;
            if (!nextLinkedNode) {
                linkedNode.next = null;
            } else {
                linkedNode.next = nextLinkedNode;
                nextLinkedNode.last = linkedNode;
            }

            this.count++;
            return true;
        }

        lastLinkedNode.next = linkedNode;
        linkedNode.last = lastLinkedNode;
        if (!nextLinkedNode) {
            linkedNode.next = null;
        } else {
            linkedNode.next = nextLinkedNode;
            nextLinkedNode.last = linkedNode;
        }
        this.count++;
        return true;
    }

    public removeByIndex(index: number): boolean {
        if (index < 0 || index >= this.count) {
            return false;
        }

        if (this.count == 1) {
            this.clear();
            return true;
        }

        let currentNode = this.getLinkedNodeByIndex(index);
        if (!currentNode) {
            return false;
        }

        let lastLinkedNode = currentNode.last;
        let nextLinkedNode = currentNode.next;

        if (!lastLinkedNode) {
            if (!nextLinkedNode) {
                return false;
            }

            this.head = nextLinkedNode;
            nextLinkedNode.last = null;
            this.count--;
            return true;
        }

        if (!nextLinkedNode) {
            lastLinkedNode.next = null;
            this.count--;
            return true;
        }

        lastLinkedNode.next = nextLinkedNode;
        nextLinkedNode.last = lastLinkedNode;
        this.count--;
        return true;
    }

    public getLinkedNodeByIndex(index: number): DoubleLinkedNode<T> {
        if (index >= this.count || index < 0) {
            return;
        }

        let currentNode = this.head;
        for (let i = 0; i < index && currentNode; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    public getHead(): DoubleLinkedNode<T> {
        return this.head;
    }

    public getTail(): DoubleLinkedNode<T> {
        let currentNode: DoubleLinkedNode<T> = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    public clear(): void {
        this.count = 0;
        this.head = null;
        this.last = null;
        this.next = null;
    }
}