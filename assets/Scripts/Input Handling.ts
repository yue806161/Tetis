import { _decorator, Component, Label, EventKeyboard, input, Input } from "cc";
const { ccclass, property } = _decorator;

@ccclass("InputHandling")
export class InputHandling extends Component {
  @property(Label)
  public scoreLabel: Label | null = null;

  private score: number = 0;
  //cocos creator version: 3.8.2
  //todo:tetris game controller(keyboard input handling) script
  //todo:add keyboard input handling for moving the tetrominoes and rotating them(spacebar and arrow keys)
  //todo:add keyboard input handling for setting and pausing the game(Esc key)

  onLoad() {
    this.setupInputHandlers();
  }

  start() {}

  setupInputHandlers() {}

  onWKeyDown() {
    this.moveTetromino(0, -1);
  }

  onDestroy() {}
}
