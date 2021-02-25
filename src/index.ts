import './style/index.less'
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'

const food = new Food();


const scorePanel = new ScorePanel();
for (let i = 0; i < 200; i++) {
    scorePanel.addScore()
}



