let instance = {};
// const Curt = Vue.extend(Message);
const showMessage = (tip, title, option) => {
  return new Promise((resolve, reject) => {
    const propsData = {tip, title, ...option};
    // console.log(propsData);
    console.log({propsData});
    // instance = new Curt({propsData}).$mount();
    instance.resolve = resolve;
    instance.reject = reject;
    // document.body.appendChild(instance.$el);
  });
};

const confirm = (tip, title, optios) => showMessage(tip, title, optios);

instance.$confirm = confirm;
instance.callback = function (action) {
  if (action === "confirm") {
    instance.resolve(action);
  } else {
    instance.reject(action);
  }

  // 执行完就销毁对象
  instance = null;
};


click = () => {
  instance.callback && instance.callback.call(instance, "confirm");
};


instance.$confirm("haha", "111", {a: 1, b: 2})
  .then(() => {
    console.log("确定");
  }).catch(() => {
  console.log("取消");
});

