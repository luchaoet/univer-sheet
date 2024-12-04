# 后端集成

[官方文档](https://docs.univer.ai/en-US/guides/sheets/pro-features/server/quick-start)

## 使用 docker

### 安装环境要求

- 操作系统: Linux, Mac, Windows (WSL)
- CPU: 至少 1 核
- 内存: 至少 2G, 推荐 4G (测试大数据量场景需要)
- 磁盘: 至少 10G
- Docker 版本大于等于 23
- 可访问公共网络

### 安装

执行如下命令进行安装并启动服务

```bash
bash -c "$(curl -fsSL https://get.univer.ai)"
```

### 用户认证和权限管理

Univer 本身不包含认证和授权方面的功能，需要结合自身业务进行实现。

- 在目录 `univer-server` 下创建一个 `.env.custom` 文件，并添加如下内容

  ```bash
  USIP_ENABLED=true
  ```

- 执行 `bash run.sh restart` 重启 Univer 后端服务
- 执行 `bash run.sh start-demo-usip` 启动一个简单的用户认证和权限管理示例，可通过打开 `http://localhost:8080` 进行访问

### 升级

到目录 `univer-server` 的父目录下，执行 `bash -c "$(curl -fsSL https://get.univer.ai)"` 即可升级到最新版本.

## 集成 License

免费版本的 Univer 功能比较受限，如果购买了 License，则需要将 License 集成到 Univer 后端服务中，解锁更强大的 Univer 功能。

- 访问 [License 页面](https://univer.ai/pro/license) 并登录账号
- 按照指引下载 License 文件
- 解压 License 文件，得到一个 `license.txt` 文件和 `licenseKey.txt` 文件

### 前端集成 License

1 集成相关 Pro 的功能插件，同时集成 License 插件

  ```ts
  import { UniverLicensePlugin } from '@univerjs-pro/license';
  ```

2 注册插件，确保该插件的注册顺序在所有其他插件之前

  ```ts
  const univer = new Univer(/** omitted */);
  univer.registerPlugin(UniverLicensePlugin, {
    license: `license.txt 文件内容`
  });
  ```

### 后端集成 License

1. 拷贝 `license.txt` 和 `licenseKey.txt` 文件到 `/univer-server/configs/` 目录
2. 执行 `bash run.sh` 重启 Univer 后端服务

### 验证 License

1. 查看相关受限的功能是否可用
2. 访问 `host:8000/universer-api/license/key` 查看 License 信息，验证通过应该是如下状态

  ```json
  {
    "error": {
      "code": 1,
      "message": ""
    },
    "license": "verify:true,release_type:COMMERCIAL",
    "key":""
  }
  ```
