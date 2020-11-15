<template>
<div class="reg">
        <input type="text"  placeholder="Email" v-model="email"><br>
        <input type="text"  placeholder="用户名" v-model="username"><br>
        <input type="password"  placeholder="密码" v-model="password"><br>
        <input type="password"  placeholder="确认密码" v-model="repassword"><br>
        <input type="text"  placeholder="验证码" v-model="verify">
        <div><button @click="getVerify">发送验证码</button></div>
        <div class="btn" @click="goReg">注册</div>
        <div class="then">
          <span>立即登陆</span><span>找回密码</span>
        </div>
      </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data () {
    return {
      email:'',
      username:'',
      password:'',
      repassword:'',
      verify:'',
    }
  },
  methods: {
    getVerify(){
      this.axios.get('/api/user/mail',
      {params:{email:this.email}}
      )
      .then((res)=>{
        if(res.status === 0){
          MessageBox('提示','邮件发送成功')
        }
      })
    },
    goReg(){
      if(this.password === this.repassword){
        this.axios.post('/api/user/reg',
        {
          email:this.email,
          username:this.username,
          password:this.password,
          verify:this.verify
        })
        .then((res)=>{
          // console.log(res);
          if(res.status===0){
           MessageBox.confirm('注册成功！是否前去登陆页?').then(action => {
            this.$router.push('/mine/login')
            })
          }else{
            MessageBox('提示','注册失败，请重试')
          }
        })
      }else{
        MessageBox('提示', '两次密码输入不一致');
      }
    }
  }
}
</script>

<style lang="less" scoped>
.reg{
    input{outline: none;width: 100%; height: 50px; border: none;border-bottom: 1px solid #bdc0c5;padding: 0px 8px;}
    .btn{width: 90%;height: 40px;background: #ef4238;text-align: center;line-height: 40px;margin: 0 auto;color: white;border-radius: 6px;margin-top: 10px;}
    .then{ display: flex;justify-content: space-between;padding: 10px 10px 0px 10px;color: #ef4238;}
  }
</style>
