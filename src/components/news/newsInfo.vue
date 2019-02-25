<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{newsInfo.add_time|dataFormat}}</span>
      <span>点击次数:{{newsInfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newsInfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  created() {
    this.getnewsInfo();
  },
  methods: {
    getnewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        console.log(res);
        if (res.body.status == 0) {
          this.newsInfo = res.body.message[0];
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 13px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
}
</style>
