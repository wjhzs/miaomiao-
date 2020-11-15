<template>
<div class="reWrite">
        邮箱：<input type="text" name="username" placeholder="Email"><br>
        原始密码：<input type="text" name="username" placeholder="密码"><br>
        新密码：<input type="text" name="username" placeholder="密码"><br>
        确认密码<input type="text" name="username" placeholder="确认密码"><br>
        <div class="btn">修改</div>
        <div class="then">
          <span>立即登陆</span><span>立即注册</span>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.reWrite{
    input{outline: none;width: 100%; height: 50px; border: none;border-bottom: 1px solid #bdc0c5;padding: 0px 8px;}
    .btn{width: 90%;height: 40px;background: #ef4238;text-align: center;line-height: 40px;margin: 0 auto;color: white;border-radius: 6px;margin-top: 10px;}
    .then{ display: flex;justify-content: space-between;padding: 10px 10px 0px 10px;color: #ef4238;}
  }
</style>
