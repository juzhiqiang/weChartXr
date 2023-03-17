Page({
  data: {
    textureId: "",
  },
  // 组件方法
  /**
   * name
   */
  handleAssetsProgress(event: any) {},
  /**
   * name
   */
  handleAssetsLoad(event: any) {},
  /**
   * 初始化
   */
  handleReady({ detail }: any) {
    this.scene = detail.value;
    const xrFrameSystem = wx.getXrFrameSystem();
    this.camera = this.scene
      .getElementById("camera")
      .getComponent(xrFrameSystem.Camera);
    this.helmet = {
      el: this.scene.getElementById("helmet"),
      color: "rgba(44, 44, 44, 0.5)",
    };
    this.miku = {
      el: this.scene.getElementById("miku"),
      color: "rgba(44, 44, 44, 0.5)",
    };
    this.tmpV3 = new xrFrameSystem.Vector3();
  },
  /**
   * name
   */
  handleTouch(event: any) {
    console.log("触摸了头盔");
  },
  /**
   * handleTick 请求动画帧
   */
  handleTick(event: any) {
    this.miku && this.getScreenPosition(this.miku);
  },
  // 获取屏幕坐标
  getScreenPosition(value: any) {
    const { el, color } = value;
    const xrFrameSystem = wx.getXrFrameSystem();
    this.tmpV3.set(el.getComponent(xrFrameSystem.Transform).worldPosition);
    const clipPos = this.camera.convertWorldPositionToClip(this.tmpV3);
    const { frameWidth, frameHeight } = this.scene;
    const x = ((clipPos.x + 1) / 2) * frameWidth;
    const y = (1 - (clipPos.y + 1) / 2) * frameHeight;
    // 消息通信
    this.triggerEvent("testPosition", [x, y]);
  },
});
