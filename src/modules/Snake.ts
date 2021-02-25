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
        if (this.X === value) {
            return
        }
        // 蛇撞牆必須死
        if (value < 0 || value > 290) {
            throw new Error('蛇撞牆必須死')
        }
        this.head.style.left = value + 'px'
    }

    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞牆必須死')
        }
        this.head.style.top = value + 'px'
    }

    // 蛇增加身體
    addBody() {
        //向element中增加一個div
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
}