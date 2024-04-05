import {
  _decorator,
  Component,
  Node,
  Label,
  Button,
  SystemEvent,
  systemEvent,
  System,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameController")
export class GameController extends Component {
  // UI元素
  @property(Label)
  public scoreLabel: Label | null = null;

  @property(Button)
  private rotateButton: Button | null = null;
  @property(Button)
  private leftButton: Button | null = null;
  @property(Button)
  private rightButton: Button | null = null;
  @property(Button)
  private downButton: Button | null = null;

  // 遊戲數據
  private score: number = 0;
  // 添加更多遊戲數據如遊戲板狀態等

  onLoad() {
    this.setupInputHandlers();
  }

  setupInputHandlers() {
    SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this;
  }

  onKeyDown(event: SystemEvent.EventType.EventKeyboard) {
    switch (event.keyCode) {
      case cc.macro.KEY.left:
        // 處理左移動
        break;
      case cc.macro.KEY.right:
        // 處理右移動
        break;
      case cc.macro.KEY.up:
        // 處理旋轉
        break;
      case cc.macro.KEY.down:
        // 處理加速下落
        break;
      // 其他按鍵處理...
    }
  }
}
