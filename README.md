![hexo-theme-matcha](https://cloud.githubusercontent.com/assets/9530963/11295742/8f3d451a-8fa8-11e5-90d2-397af60a992d.png)

this is a fork of [hexo-theme-apollo](https://github.com/neonmori/hexo-theme-apollo)

## Install

``` bash
hexo init Blog 
cd Blog 
npm install
npm install --save hexo-renderer-handlebars
git clone https://github.com/neonmori/hexo-theme-matcha.git themes/matcha
```

## Usage

修改 `_config.yml` 的 `theme` 配置项为 `matcha`:

```yaml
theme: apollo
```

## Update

``` bash
cd themes/apollo 
git pull
```

## Customized Blocks

The tags supported by Markdown's generating mechanism are relatively simple, thus some HTML tags can be used to mark special styles, see: [custrom-blocks](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc/custom-blocks.md)。

## License

MIT
