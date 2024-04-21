import { _decorator, Component, Node, Collider, ICollisionEvent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CollisionDetection")
export class CollisionDetection extends Component {
  @property({ type: Node })
  targetNode: Node | null = null;

  onCollisionEnter(other: Collider, self: Collider) {
    if (other.node === this.targetNode) {
      // 當碰撞發生時，做某些操作
      console.log("Collision detected with target node!");
    }
  }

  start() {
    const collider = this.node.getComponent(Collider);
    if (collider) {
      collider.on("onCollisionEnter", this.onCollisionEnter, this);
    }
  }

  update(deltaTime: number) {
    // 在這裡可以做一些持續的碰撞檢測相關操作
  }
}
