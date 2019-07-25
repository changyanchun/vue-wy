import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'


Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
      phone: '手机号',
      email:'邮箱'
    }
  })
  ///^1\d{10}$/   // /^1\[345678]\d{9}$/
  VeeValidate.Validator.extend('mobile', {
    validate: value => {
      return /^1\d{10}$/.test(value)
    },
    getMessage: field => field + '手机号格式错误'
  })

  VeeValidate.Validator.extend('nobile', {
    validate: value => {
      return /^([0-9a-zA-Z]+)@[a-z0-9]{2,5}\.[a-z]{2,3}$/.test(value)
    },
    getMessage: field => field + '邮箱格式错误'
  })