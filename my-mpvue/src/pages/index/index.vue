<template>

  <div class="container" @click="clickHandle('test click', $event)">
    <div>123123</div>
    <div>123123</div>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <i-button  @click="handleClick"type="primary" size="large">哈哈</i-button>
  </div>
</template>

<script>
  import card from "@/components/card";

  export default {
    data() {
      return {
        motto: "Hello World",
        userInfo: {}
      };
    },

    components: {
      card
    },

    methods: {
      handleClick() {
        const url = "../logs/logs";
        wx.navigateTo({ url });
      },
      bindViewTap() {
        const url = "../logs/logs";
        wx.navigateTo({ url });
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo;
              }
            });
          }
        });
      },
      clickHandle(msg, ev) {
        console.log("clickHandle:", msg, ev);
      }
    },

    created() {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo();
    }
  };
</script>

<style lang="stylus" scoped>
  @import "~@/css/common.styl"

  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 64px;
    height: rpx(128);
    margin: rpx(20);
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
</style>
