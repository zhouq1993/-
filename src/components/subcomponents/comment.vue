<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="最多bb120个字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{i+1}}楼:&nbsp;&nbsp;
          {{item.user_name}}:&nbsp;&nbsp;
          发表时间:{{item.add_time|dataFormat}}
        </div>
        <div class="cmt-body">{{item.content==="undefined"?"该用户什么都没说":item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      comments: []
    };
  },
  created() {
    this.getcomments();
  },
  methods: {
    getcomments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(res => {
          console.log(res);
          if (res.body.status == 0) {
            this.comments = this.comments.concat(res.body.message);
          }
        });
    },
    getmore() {
      this.pageindex++;
      this.getcomments();
    }
  },
  props: ["id"]
};
</script>
<style lang="scss" scoped>
h3 {
  font-size: 18px;
}
textarea {
  margin: 0;
  font-size: 12px;
  height: 85px;
}
.cmt-title {
  background-color: #ccc;
  line-height: 30px;
  font-size: 12px;
}
.cmt-body {
  line-height: 35px;
  font-size: 12px;
  text-indent: 2em;
}
</style>
