export default class ScorePanel {
    score = 0;
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 設定限制等級
    maxLevel: number;
    // 設定幾分升級
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        // 判斷分數多少升級
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}