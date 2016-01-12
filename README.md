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

Change `_config.yml` > `theme` -> `matcha`:

```yaml
theme: matcha
```

## Update

``` bash
cd themes/matcha 
git pull
```

## Customized Blocks

The tags supported by Markdown's generating mechanism are relatively simple, thus some HTML tags can be used to mark special styles, see: [custrom-blocks](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc/custom-blocks.md)。

## License

MIT
