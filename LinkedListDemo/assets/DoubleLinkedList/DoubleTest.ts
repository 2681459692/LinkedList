/*
 * @Author: xsq
 * @Date: 2021-08-12 14:57:15
 * @Description: 双向链表测试
 */

import { TestData } from "../LinkedList/TestData";
import { DoubleLinkedList } from "./DoubleLinkedList";

const { ccclass, property } = cc._decorator;

@ccclass
export class DoubleTest extends cc.Component {

    public onEnable(): void {
        let doubleLinkedList = new DoubleLinkedList<TestData>();

        let hero_01 = new TestData("嘉文", 4800, "德玛西亚皇子", 0);
        let hero_02 = new TestData("德莱厄斯", 6300, "诺克萨斯之手", 1);
        let hero_03 = new TestData("奈德丽", 6300, "狂野女猎手", 2);
        let hero_04 = new TestData("杰斯", 6300, "未来守护者", 3);
        let hero_05 = new TestData("殇之木乃伊", 1350, "阿木木", 4);

        doubleLinkedList.push(hero_01);
        doubleLinkedList.push(hero_02);
        doubleLinkedList.push(hero_03);
        doubleLinkedList.push(hero_04);
        doubleLinkedList.push(hero_05);

        doubleLinkedList.insert(hero_03, 0);
        console.log(doubleLinkedList.getHead());
    }
}