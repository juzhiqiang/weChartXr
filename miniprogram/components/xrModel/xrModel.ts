Page({
  data: {
    textureId: "",
    scence: {},
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
  handleReady(event: any) {
    this.scence  = event.detail.value;
  },
  /**
   * name
   */
  handleTouch(event) {
    console.log("触摸了头盔");
  },
  /**
   * handleTick 请求动画帧
   */
  handleTick(event) {
  },
});
