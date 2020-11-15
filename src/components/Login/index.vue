<template>
  <div class="login">
    <input
      type="text"
      name="username"
      placeholder="账号名/手机号/Email"
      v-model="username"
    /><br />
    <input type="password" name="password" placeholder="请输入你的密码" v-model="password" />
    <div class="btn" @click="loginGo">登录</div>
    <div class="then">
      <span @click="go('/mine/reg')">立即注册</span
      ><span @click="go('/mine/findPassword')">找回密码</span>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    loginGo() {
      this.axios.post('/api/user/login',{
        username: this.username,
        password: this.password
      }).then((res)=>{
        if(res.status === 0){
          MessageBox('提示', '登陆成功');
          this.$router.push('/mine/center')
          // MessageBox.confirm('确定执行此操作?').then(action => {
          //   this.$router.push('/mine/center')
          // })
        }else{
          MessageBox('提示', '登录失败请重试');
        }
      })
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  input {
    outline: none;
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #bdc0c5;
    padding: 0px 8px;
  }
  .btn {
    width: 90%;
    height: 40px;
    background: #ef4238;
    text-align: center;
    line-height: 40px;
    margin: 0 auto;
    color: white;
    border-radius: 6px;
    margin-top: 10px;
  }
  .then {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 0px 10px;
    color: #ef4238;
  }
}
</style>
