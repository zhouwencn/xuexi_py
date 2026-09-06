# 定义业务逻辑；  
# 1. api接收请求封装成schemas的模型数据 
# 2. api方法内调用 service 执行业务 
# 3. 操作数据库，对数据库的模型models进行CRUD。 
# 4. 操作数据库会返回 models 结果。 封装成 schemas 的pydantic模型数据。
# 5. 把返回的 pydantic 模型数据，返回给 api。返回给前端响应json

# api => controller
# service => service 【操作entity 对数据库进行CRUD】
# dao => repository【python 用 ORM 框架】 这一层一般没有
# schemas => vo/dto（封装请求响应数据模型）
# models => entity（和数据库对应）
