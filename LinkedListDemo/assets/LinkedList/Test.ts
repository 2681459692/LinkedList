/*
 * @Author: xsq
 * @Date: 2021-08-11 19:56:49
 * @Description: 测试
 */

import { LinkedList } from "./LinkedList";
import { TestData } from "./TestData";

const { ccclass, property } = cc._decorator;

@ccclass
export class Test extends cc.Component {

    public onEnable(): void {
        let linkedList = new LinkedList<TestData>();

        let hero_00 = new TestData("易", 450, "无极剑圣", 0);
        let hero_01 = new TestData("李青", 4800, "盲僧", 1);
        let hero_02 = new TestData("乐芙兰", 4800, "诡术妖姬", 2);
        let hero_03 = new TestData("盖伦", 4800, "德玛西亚之力", 3);
        let hero_04 = new TestData("霞", 6300, "逆羽", 4);
        let hero_05 = new TestData("格雷福斯", 4800, "法外狂徒", 5);
        let hero_06 = new TestData("安妮", 3150, "黑暗之女", 6);

        //尾部添加
        linkedList.push(hero_01);
        linkedList.push(hero_02);
        linkedList.push(hero_03);
        linkedList.push(hero_04);
        linkedList.push(hero_05);
        linkedList.push(hero_06);
        console.log("尾部添加元素：", linkedList.getHead());

        //头部添加元素
        linkedList.insertHead(hero_00);
        console.log("头部添加一个元素：", linkedList.getHead());

        //根据索引删除
        linkedList.removeByIndex(5);
        console.log("根据索引删除：5", linkedList.getHead());
    }
}