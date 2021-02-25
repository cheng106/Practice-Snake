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

        // 移動身體
        this.moveBody()

        this.head.style.left = value + 'px'
    }

    set Y(value: number) {
        if (this.Y === value) {
            return
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞牆必須死')
        }

        // 移動身體
        this.moveBody()

        this.head.style.top = value + 'px'
    }

    // 蛇增加身體
    addBody() {
        //向element中增加一個div
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 蛇身體移動
    moveBody() {
        // 將最後一節的身體位置往前一節的身體位置修改
        /*
        * 4節 = 3節
        * 3節 = 2節
        * 2節 = 蛇頭
        * */
        // 取所有蛇身體
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 取前一節身體位置
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 修改身體位置
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }

    }
}