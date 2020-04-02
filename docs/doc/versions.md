# 版本策略

---

> 本库自 1.0.0 版本后，严格采用“语义化版本号”的策略 👇

- **主版本号的升级，不保证 api 兼容性**。

- **非主版本的升级，保证 api 具备兼容性**。即"只会新增不会修改和删除 api 以及参数"。

      比如0.0.91版本中的countdownDuration函数在1.0.0版本中被更名为"countdownDuration"，原先方法已不存在。你无法通过es6.import调取它。

      但在0.1.1版本中依然还是可以使用这个函数的。我想你应该能想到，那个版本当然没有"countdownDuration"函数。

---

语义化版本号（Semantic Versioning 2.0.0）的介绍：

> 官方：https://semver.org/lang/zh-CN/
>
> 介绍：https://cloud.tencent.com/developer/article/1341130
