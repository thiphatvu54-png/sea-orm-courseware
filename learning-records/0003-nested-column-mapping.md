# 区分实体列与 DTO 字段的映射方向

在嵌套 PartialModel 中，`#[sea_orm(from_col = "name")] brand` 的方向是“实体列 → DTO 字段”：它把 `bakery.name` 映射到 `BakeryList::brand`。用户也理解 `Option<BakeryList>` 在左连接无匹配时为 `None`。

## Evidence

用户最终准确复述了 `bakery.name → BakeryList::brand` 的来源到目标方向；第十二课完成。
