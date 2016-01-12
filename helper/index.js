
var Handlebars = require('handlebars');
var moment = require('moment');

module.exports = function(hexo) {
    return {
        get_upper_case: function (str) {
            return str.toUpperCase();
        },
        attach_active: function (val) {
            if (val === '/') {
                return 'active';
            };
            return '';
        },
        get_tar: function (val) {
            var re = /^(http|https):\/\/*/gi;
            var tar = re.test(val) ? "_blank" : "_self";
            return tar;
        },
        get_description: function(config) {
            return config.description ? config.description : 'A Blog Powered By Hexo';
        },
        date: function (date, options) {
            if (arguments.length === 1) {
                options = date
                date = Date.now()
            }
            return moment(date).format(options.hash.format)
        },

        isdraft: function (source) {
            return source.indexOf('_drafts/') === 0
        },

        asset: function (name) {
            if (name.slice(0, 2) === '//' || ['http:/', 'https:'].indexOf(name.slice(0, 6)) !== -1) {
                return name
            }
            if (name[0] === '/') name = name.slice(1)
            return hexo.config.root + name
        },

        abs: function (name) {
            if (name.slice(0, 2) === '//' || ['http:/', 'https:'].indexOf(name.slice(0, 6)) !== -1) {
                return name
            }
            if (name[0] === '/') name = name.slice(1)
            return hexo.config.root + name
        },

        encode: function (item) {
            return new Handlebars.SafeString(encodeURIComponent(item))
        },

        excerpt: function () {
            return new Handlebars.SafeString(this.excerpt)
        },

        url: function (options) {
            if (options.hash.absolute) {
                return this.url
            }
            return this.path
        },

        get_title: function (page) {
            if (page.title) {
                return page.title + ' | A Blog Powered By Hexo';
            }
            if (page.tag) {
                return page.tag + ' | A Blog Powered By Hexo';
            }
            return 'A Blog Powered By Hexo';
        },

        tags: function (tags, options) {
            if (arguments.length === 1) {
                options = tags
                tags = this.tags
            }
            options = options.hash;
            if (!tags || !tags.length) return;
            return new Handlebars.SafeString((options.prefix || '')+ tags.map(function (tag) {
                    return '<a class="post-tags" href="' + hexo.config.root + tag.path + '">' + tag.name + '</a>'
                }).join(options.separator || ' '))
        },

        foreach: function (context, options) {
            var ret = ''
            context.each(function (item) {
                var vals = {}
                for (var name in item) {
                    vals[name] = item[name]
                }
                ret += options.fn(vals)
                // ret += options.fn(item)
            })
            return ret;
            /*
             return context.map(function (item) {
             return options.fn(item)
             }).join('')
             */
        },

        debug: function(optionalValue) {
            console.log("Current Context");
            console.log("====================");
            console.log(this);

            if (optionalValue) {
                if ('function' === typeof optionalValue) {
                    optionalValue = optionalValue()
                }
                console.log("Value");
                console.log("====================");
                console.log(optionalValue);
            }
        }
    }
}
