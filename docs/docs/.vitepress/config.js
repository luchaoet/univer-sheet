export default {
  base: '/xquant-sheet/',
  // 站点级选项
  title: '@xquant/sheet-core',
  description: 'A spreadsheet library for web, based on univer, supports vue2 and vue3',

  themeConfig: {
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '安装', link: '/install' },
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/config' },
          { text: '单元格', link: '/cell' },
          { text: 'API', link: '/api' },
          { text: '自定义', link: '/custom' },
          { text: '权限控制', link: '/permission' },
        ]
      },
      {
        text: '发布日志',
        link: '/changelog'
      }
    ]
  }
}