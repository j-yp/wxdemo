Page({
  data: {
    currentTabBar: 'homepage',
    currentTab: 'recommend'
  },

  handleChangeTabBar({ detail }) {
    this.setData({
      currentTabBar: detail.key
    });
  },
  handleChangeTab({ detail }) {
    this.setData({
      currentTab: detail.key
    });
  }
});