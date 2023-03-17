// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

const stystemInfo = () => {
  // 获取系宽高
  const info = wx.getSystemInfoSync();
  const width = info.windowWidth;
  const height = info.windowHeight;
  const dpi = info.pixelRatio;

  return {
    width,
    height,
    dpi,
  };
};

Page({
  data: {
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
    type: "ar",
  },
  onLoad() {
    const { width, height, dpi } = stystemInfo();
    this.setData({
      width,
      height,
      renderHeight: height * dpi,
      renderWidth: width * dpi,
    });
  },
  handlePosition(event: any) {
    this.setData({
      pos: event.detail,
    });
  },
  /**
   * name
   */
  tab(event: { currentTarget: { dataset: { type: any } } }) {
    this.setData({
      type: event.currentTarget.dataset.type,
    });
  },
});
