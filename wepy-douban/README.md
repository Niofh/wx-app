### wepy使用总结

##### wepy文档 https://tencent.github.io/wepy/document.html#/

* 使用自定义封装组件循环是用到<repeat>组件，而且组件接受一个参数，最好是Object类型；而且组件的值最好是重复的
```
// movie最好是对象，因为只能接受一个值
 <repeat for="{{movieData.movies}}" key="index" index="index" item="movie">
          <movieTemplate :movie.sync="movie"  ></movieTemplate>
  </repeat>
```

* 父组件静态传递子组件使用 ` :star="star" `
* 父组件动态传递子组件使用 ` :star.sync="star" `
* 子组件动态改变父组件使用 ` :star.sync="star"   子：props={star:{toway:true}} `

#### wepy和VUE主要区别
http://blog.csdn.net/yaodong379/article/details/79210201
1. 二者均支持props、data、computed、components、methods、watch（wepy中是watcher）， 但wepy中的methods仅可用于页面事件绑定，其他自定义方法都要放在外层，而VUE中所有方法均放在 methods下

2. wepy中props传递需要加上.sync修饰符（类似VUE1.x）才能实现props动态更新，并且父组件再 变更传递给子组件props后要执行this.$apply()方法才能更新

3. wepy支持数据双向绑定，子组件在定义props时加上twoway:true属性值即可实现子组件修改父组 件数据

4. VUE2.x推荐使用eventBus方式进行组件通信，而在wepy中是通过broadcast，broadcast，emit，$invoke 三种方法实现通信
