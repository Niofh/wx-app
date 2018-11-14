import Vue from "vue"
import Fly from "flyio/dist/npm/wx";
import qs from "qs";
import { ajaxBaseUrl } from "./config";

// https://wendux.github.io/dist/#/doc/flyio/interceptor 文档
const fly = new Fly();

console.log(fly)

// 配置请求基地址


// 设置超时
fly.config.timeout = 20000;

// 设置请求基地址
fly.config.baseURL = ajaxBaseUrl;


// 定义公共headers
fly.config.headers["Content-Type"] = "application/json;charset=UTF-8";


//添加请求拦截器
fly.interceptors.request.use((config) => {

  //给所有请求添加自定义header 比如token
  // request.headers["X-Tag"] = "flyio";

  if (config.form === true) {
    // form表单请求
    config.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    config.data = qs.stringify(config.data);
  } else {
    config.data = json.stringify(config.data);
  }

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return config;

});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    //只将请求结果的data字段返回
    return response.data;
  },
  (err) => {
    //发生网络错误后会走到这里
    return Promise.reject(err);
  }
);
Vue.prototype.$fly = fly; //将fly实例挂在vue原型上

export default fly;

