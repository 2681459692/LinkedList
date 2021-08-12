/*
 * @Author: xsq
 * @Date: 2021-08-12 10:50:47
 * @Description: 测试数据
 */

export class TestData {

    /**姓名 */
    public name: string;

    /**价格 */
    public price: number;

    /**称号 */
    public nickname: string;

    /**编号 */
    public index: number;

    public constructor(name: string, price: number, nickname: string, index: number) {
        this.name = name;
        this.price = price;
        this.nickname = nickname;
        this.index = index;
    }
}