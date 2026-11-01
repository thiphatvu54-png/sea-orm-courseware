# 根据投影需求选择关联加载 API

第十四课将比较三种边界：`find_with_related` 返回完整 Model 组合，嵌套 PartialModel 负责精确列投影，SeaORM 2.0 Entity Loader 负责按关系类型选择 join 或批量加载策略。

## Evidence

用户能根据“指定少量字段”与“需要完整父子实体”分别选择 PartialModel 和 `find_with_related`。
