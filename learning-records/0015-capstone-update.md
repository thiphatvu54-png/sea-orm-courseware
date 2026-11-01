# 生产级更新需要租户和版本双重约束

综合练习把 `tenant_id`、`id` 和 `expected_version` 放入同一条 UPDATE 的 `WHERE`；影响行数为 0 时返回冲突，避免跨租户写入和并发覆盖。

## Evidence

快速模式下，用户确认已记住该更新模式，进入项目接口错误映射。
