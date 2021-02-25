import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 控制其它的類別
export default class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 蛇的移動方向(按鍵方向)
    direction: string = 'Right'

    // 紀錄遊戲是否結束
    isLive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()

        this.init()
    }


    // 遊戲初始化
    init() {
        // 綁定鍵盤案下的事件 (bind方法回傳的是綁定 this 後的原函數)
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 執行蛇移動的方法
        this.run()
    }

    // 鍵盤按下函數
    keydownHandler(event: KeyboardEvent) {
        //TODO: 檢查event.key的值是否正確

        //修改direction
        this.direction = event.key
    }

    // 蛇的移動
    run() {
        // 根據方向(this.direction)改變位置
        /*
        * 上: top減少
        * 下: top增加
        * 左: left減少
        * 右: left增加
        * */
        //取得蛇的座標
        let x = this.snake.X;
        let y = this.snake.Y;

        // 根據蛇的大小決定移動距離
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10;
                break;
            case "ArrowRight":
            case "Right":
                x += 10;
                break;
        }

        // 檢查蛇是否吃到食物
        this.checkEat(x, y)

        // 修改蛇的移動座標
        try {
            this.snake.X = x
            this.snake.Y = y
        } catch (e) {
            alert(e.message + ' (GAME OVER)')
            this.isLive = false
        }

        // 讓蛇持續移動
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 檢查蛇是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.food.X && y === this.food.Y) {
            // 食物位置再隨機產生
            this.food.chang();
            // 分數增加
            this.scorePanel.addScore()
            // 蛇增加一節身體
            this.snake.addBody()
        }
    }
}