Page({
  data: {
    textureId: "",
    scence: {},
  },
  // 组件方法
  /**
   * 初始化
   */
  handleReady({ detail }: any) {
    this.scene = detail.value;
  },
  /**
   * handleAssetsLoaded
   * 资源加载完成
   */
  handleAssetsLoaded({ detail }: any) {
    this.scene.event.add('touchstart', () => {
      this.scene.ar.placeHere('setitem', true);
    });
  },
});
