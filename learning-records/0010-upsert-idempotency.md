# 用唯一键和 Upsert 实现幂等写入

第十九课将用唯一键定义幂等边界：`DO NOTHING` 只创建一次，`DO UPDATE` 在重复请求时同步最新字段。

## Evidence

快速模式下，用户接受重复注册与资料同步分别使用 `DO NOTHING` 和 `DO UPDATE` 的核心判断。
