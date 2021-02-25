export default class Food {
    // 定義屬性表示食物對應的元素
    element: HTMLElement;

    constructor() {
        // 取得頁面中food元素並賦值給element
        this.element = document.getElementById('food')!;
    }

    // 定義一個取得食物X座標的方法
    get X() {
        return this.element.offsetLeft;
    }

    // 定義一個取得食物Y座標的方法
    get Y() {
        return this.element.offsetTop;
    }

    // 改變食物的位置
    chang() {
        // 產生隨機位置
        // 食物位置最小0 最大290 (框的長度300 - 食物大小10)
        // 蛇移動一次是一格，一格的大小是10，所以食物座標必須是10的倍數
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}