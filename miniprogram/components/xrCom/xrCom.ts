Page({
  data: {
    textureId: "",
    scence: {}
  },
  // 组件方法
  /**
   * name
   */
  handleAssetsProgress(event: any) {
    console.log(event);
  },
  /**
   * name
   */
  handleAssetsLoad(event: any) {
    console.log(event);
  },
  /**
   * 动态设置纹理贴图
   */
  handleReady(event: any) {
    const scence = event.detail.value; 
    scence.assets
      .loadAsset({
        type: "texture",
        assetId: "texture",
        src: "https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/waifu.png",
      })
      .then(() => {
        this.setData({
          textureId: "texture",
        });
      });
  },
});
