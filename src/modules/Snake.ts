export default class Snake {
    // 取得蛇頭的元素
    head: HTMLElement;
    // 蛇體(包括蛇頭)
    bodies: HTMLCollection
    // 取得蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 取得蛇的座標(蛇頭座標)
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    // 設定蛇的座標(蛇頭座標)
    set X(value: number) {
        this.head.style.left = value + 'px'
    }

    set Y(value: number) {
        this.head.style.top = value + 'px'
    }

    // 蛇增加身體
    addBody() {
        //向element中增加一個div
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}