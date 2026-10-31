# 用 PartialModel 表达稳定的列表 DTO

用户已理解：当接口返回结构稳定、又不想手写 `select_only` 的列清单时，可以用 `DerivePartialModel` 让 DTO 字段自动定义查询列，从而降低列表查询的维护成本。

## Evidence

用户明确说明了 PartialModel 的适用条件，以及它相对手写列清单的清晰性优势。

用户进一步能指出 `id`、`email` 是查询列，使用 `.into_partial_model()` 转为 PartialModel 查询，并说明 `column_as` 用于取别名。
