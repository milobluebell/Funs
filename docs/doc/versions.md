# 版本策略

---

> 本库自 1.0.0 版本后，严格采用“语义化版本号”的策略 👇

- **主版本号的升级，不保证 api 兼容性**。

- **非主版本的升级，保证 api 具备兼容性**。即"只会新增不会修改和删除 api 以及参数"。

      比如0.0.91版本中的`countdownFromDuration`函数在1.0.0版本后，因优化api设计而被更名为"countdownDuration"。原先方法已不存在。你无法调取它。

      但在0.0.91之前的版本中依然还是可以使用这个函数的。我想你应该很容易理解，0.0.91之前当然没有"countdownDuration"函数。

---

语义化版本号（Semantic Versioning 2.0.0）的介绍：

> 官方：https://semver.org/lang/zh-CN/
>
> 介绍：https://cloud.tencent.com/developer/article/1341130
