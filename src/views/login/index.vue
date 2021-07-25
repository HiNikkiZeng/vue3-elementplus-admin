<template>
  <div class="login-container">
    <el-form
        class="login-form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
        auto-complete="on"
        label-position="left"
    >
     <div class="title-container">
        <h3 class="title">Vme登录界面</h3>
     </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <SvgIcon iconName="user" />
        </span>
        <el-input
          ref="userNameRef"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="off"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <SvgIcon iconName="password" />
        </span>
        <el-input
          ref="passwordRef"
          v-model="loginForm.password"
          type="password"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="off"
        />
      </el-form-item>

      <el-form-item prop="code">
        <span class="svg-container">
          <SvgIcon iconName="code" />
        </span>
        <el-input
            ref="codeRef"
            v-model="loginForm.code"
            placeholder="验证码"
            name="code"
            type="text"
            tabindex="3"
            auto-complete="off"
        />
        <span class="send-code" @click="sendCode">{{codeText}}</span>
      </el-form-item>

      <el-button
        class="login-btn"
        :loading="loading"
        type="primary"
        @click="handleLogin"
      >
          登录
      </el-button>

      <div class="tips">
          <span >username: admin</span>
          <span style="margin:0 20px;"> password: any</span>
          <span> code: any</span>
      </div>
    </el-form>
  </div>
</template>

<script >
import { reactive, toRefs, ref } from 'vue';
import { $apiLogin } from '@/api/user';
import { errorMessage } from '@/utils/ElMessage';
import { setToken } from '@/utils/auth';
import router from '@/router';

const validateUsername = (rule, value, callback) => {
  if (!value.length) {
    callback(new Error('请输入用户名'));
  } else {
    callback();
  }
};
const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error('密码不能少于6位'));
  } else {
    callback();
  }
};
const validateCode = (rule, value, callback) => {
  if (value.length === 0) {
    callback(new Error('请输入验证码'));
  } else {
    callback();
  }
};

export default {
  name: 'Login',
  setup() {
    const loginFormRef = ref();
    const userNameRef = ref();
    const passwordRef = ref();
    const codeRef = ref();

    const formMap = reactive({
      codeText: '发生验证码',
      loading: false,
      loginForm: {
        username: '',
        password: '',
        code: '',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        code: [{ required: true, trigger: 'blur', validator: validateCode }],
      },
      sendCode() {
        const codeTime = 60;
        let intervalId = null;
        let count = 0;
        if (!intervalId) {
          count = codeTime;
          intervalId = setInterval(() => {
            if (count > 0 && count <= codeTime) {
              formMap.codeText = `${count}s后重新发送`;
              count--;
            } else {
              clearInterval(intervalId);
              formMap.codeText = '发生验证码';
              intervalId = null;
            }
          }, 1000);
        }
      },
      handleLogin() {
        const { username, password } = formMap.loginForm;
        loginFormRef.value.validate(async (valid) => {
          if (valid) {
            formMap.loading = true;
            $apiLogin({
              username,
              password,
            }).then((res) => {
              if (res && res.code === 20000) {
                setToken({ token: res.token });
                router.push({ path: '/' });
              } else {
                errorMessage(res.message);
              }
              formMap.loading = false;
            });
          } else {
            return false;
          }

          return false;
        });
      },

    });
    return {
      ...toRefs(formMap),
      loginFormRef,
      userNameRef,
      passwordRef,
      codeRef,
    };
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>

$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .title-container {
    position: relative;

    .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .send-code {
    position: absolute;
    right: 19px;
    top: 6px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .login-btn{
      width:100%;
      margin-bottom:30px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

}
</style>
