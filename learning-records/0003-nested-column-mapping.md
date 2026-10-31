# 区分实体列与 DTO 字段的映射方向

在嵌套 PartialModel 中，`#[sea_orm(from_col = "name")] brand` 的方向是“实体列 → DTO 字段”：它把 `bakery.name` 映射到 `BakeryList::brand`。用户已理解 `Option<BakeryList>` 在左连接无匹配时为 `None`，正在巩固这一映射方向。

## Evidence

用户正确回答了 `Option` 的含义，但把 `brand` 暂时理解成实体字段；本轮已明确纠正来源列和目标字段。
