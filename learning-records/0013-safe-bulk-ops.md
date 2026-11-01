# 批量更新与删除必须有完整过滤条件

第二十二课将使用 `update_many`/`delete_many`，强调租户、状态和时间条件必须写进 `WHERE`，并检查 `rows_affected` 防止误操作整表。

## Evidence

快速模式下，用户接受完整过滤条件和 `rows_affected` 检查是批量写操作的安全底线。
