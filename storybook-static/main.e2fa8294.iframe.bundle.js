;(self.webpackChunkplayground = self.webpackChunkplayground || []).push([
    [179],
    {
        './.storybook sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$': (module) => {
            function webpackEmptyContext(req) {
                var e = new Error("Cannot find module '" + req + "'")
                throw ((e.code = 'MODULE_NOT_FOUND'), e)
            }
            ;(webpackEmptyContext.keys = () => []),
                (webpackEmptyContext.resolve = webpackEmptyContext),
                (webpackEmptyContext.id = './.storybook sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'),
                (module.exports = webpackEmptyContext)
        },
        './.storybook/preview.js-generated-config-entry.js': (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
            'use strict'
            var preview_namespaceObject = {}
            __webpack_require__.r(preview_namespaceObject),
                __webpack_require__.d(preview_namespaceObject, { __namedExportsOrder: () => __namedExportsOrder, parameters: () => parameters })
            __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptor.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.for-each.js'),
                __webpack_require__('./node_modules/core-js/modules/web.dom-collections.for-each.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.get-own-property-descriptors.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.define-properties.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.define-property.js')
            var ClientApi = __webpack_require__('./node_modules/@storybook/client-api/dist/esm/ClientApi.js'),
                injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                globals = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./styles/globals.css'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(globals.Z, options)
            globals.Z && globals.Z.locals && globals.Z.locals
            __webpack_require__('./node_modules/next/image.js')
            var parameters = { actions: { argTypesRegex: '^on[A-Z].*' }, controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } } },
                __namedExportsOrder = ['parameters']
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object)
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object)
                    enumerableOnly &&
                        (symbols = symbols.filter(function (sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable
                        })),
                        keys.push.apply(keys, symbols)
                }
                return keys
            }
            function _defineProperty(obj, key, value) {
                return key in obj ? Object.defineProperty(obj, key, { value, enumerable: !0, configurable: !0, writable: !0 }) : (obj[key] = value), obj
            }
            Object.keys(preview_namespaceObject).forEach(function (key) {
                var value = preview_namespaceObject[key]
                switch (key) {
                    case 'args':
                        return (0, ClientApi.uc)(value)
                    case 'argTypes':
                        return (0, ClientApi.v9)(value)
                    case 'decorators':
                        return value.forEach(function (decorator) {
                            return (0, ClientApi.$9)(decorator, !1)
                        })
                    case 'loaders':
                        return value.forEach(function (loader) {
                            return (0, ClientApi.HZ)(loader, !1)
                        })
                    case 'parameters':
                        return (0, ClientApi.h1)(
                            (function _objectSpread(target) {
                                for (var i = 1; i < arguments.length; i++) {
                                    var source = null != arguments[i] ? arguments[i] : {}
                                    i % 2
                                        ? ownKeys(Object(source), !0).forEach(function (key) {
                                              _defineProperty(target, key, source[key])
                                          })
                                        : Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                                        : ownKeys(Object(source)).forEach(function (key) {
                                              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
                                          })
                                }
                                return target
                            })({}, value),
                            !1
                        )
                    case 'argTypesEnhancers':
                        return value.forEach(function (enhancer) {
                            return (0, ClientApi.My)(enhancer)
                        })
                    case 'argsEnhancers':
                        return value.forEach(function (enhancer) {
                            return (0, ClientApi._C)(enhancer)
                        })
                    case 'render':
                        return (0, ClientApi.$P)(value)
                    case 'globals':
                    case 'globalTypes':
                        var v = {}
                        return (v[key] = value), (0, ClientApi.h1)(v, !1)
                    case '__namedExportsOrder':
                    case 'decorateStory':
                    case 'renderToDOM':
                        return null
                    default:
                        return console.log(key + ' was not supported :( !')
                }
            })
        },
        './components/Logo.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => components_Logo })
            __webpack_require__('./node_modules/core-js/modules/es.array.is-array.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                logo_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/logo.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(logo_module.Z, options)
            const components_logo_module = logo_module.Z && logo_module.Z.locals ? logo_module.Z.locals : void 0
            var client_link = __webpack_require__('./node_modules/next/dist/client/link.js'),
                link_default = __webpack_require__.n(client_link),
                next_image = __webpack_require__('./node_modules/next/image.js'),
                image_default = __webpack_require__.n(next_image),
                react = __webpack_require__('./node_modules/react/index.js'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
                        if (null == _i) return
                        var _s,
                            _e,
                            _arr = [],
                            _n = !0,
                            _d = !1
                        try {
                            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
                        } catch (err) {
                            ;(_d = !0), (_e = err)
                        } finally {
                            try {
                                _n || null == _i.return || _i.return()
                            } finally {
                                if (_d) throw _e
                            }
                        }
                        return _arr
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return
                        if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
                        var n = Object.prototype.toString.call(o).slice(8, -1)
                        'Object' === n && o.constructor && (n = o.constructor.name)
                        if ('Map' === n || 'Set' === n) return Array.from(o)
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        )
                    })()
                )
            }
            function _arrayLikeToArray(arr, len) {
                ;(null == len || len > arr.length) && (len = arr.length)
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
                return arr2
            }
            var Logo = function Logo(props) {
                var _props$logoUrl = props.logoUrl,
                    logoUrl = void 0 === _props$logoUrl ? '' : _props$logoUrl,
                    _useState2 = _slicedToArray((0, react.useState)('100'), 2),
                    logoHeight = _useState2[0],
                    setHeight = _useState2[1],
                    _useState4 = _slicedToArray((0, react.useState)('300'), 2),
                    logoWidth = _useState4[0],
                    setWidth = _useState4[1]
                return (0, jsx_runtime.jsx)('div', {
                    className: components_logo_module.root,
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_logo_module.wrapper,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: components_logo_module.logo,
                            children: (0, jsx_runtime.jsx)(link_default(), {
                                href: '/',
                                children: (0, jsx_runtime.jsx)('a', {
                                    children: (0, jsx_runtime.jsx)(image_default(), {
                                        src: logoUrl,
                                        alt: 'logo',
                                        onLoadingComplete: function calcAspectRatio(loadedMedia) {
                                            console.log('loadedMedia', loadedMedia), setWidth(loadedMedia.naturalWidth), setHeight(loadedMedia.naturalHeight)
                                        },
                                        width: logoWidth,
                                        height: logoHeight,
                                        layout: 'responsive',
                                    }),
                                }),
                            }),
                        }),
                    }),
                })
            }
            Logo.displayName = 'Logo'
            const components_Logo = Logo
            try {
                ;(Logo.displayName = 'Logo'),
                    (Logo.__docgenInfo = {
                        description: '',
                        displayName: 'Logo',
                        props: { logoUrl: { defaultValue: null, description: '', name: 'logoUrl', required: !1, type: { name: 'string' } } },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Logo.tsx#Logo'] = {
                            docgenInfo: Logo.__docgenInfo,
                            name: 'Logo',
                            path: 'components/Logo.tsx#Logo',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './components/Nav.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => components_Nav })
            __webpack_require__('./node_modules/core-js/modules/es.array.map.js'), __webpack_require__('./node_modules/core-js/modules/es.function.name.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                nav_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/nav.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(nav_module.Z, options)
            const components_nav_module = nav_module.Z && nav_module.Z.locals ? nav_module.Z.locals : void 0
            var client_link = __webpack_require__('./node_modules/next/dist/client/link.js'),
                link_default = __webpack_require__.n(client_link),
                classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                Nav = function Nav(props) {
                    var _cn,
                        pages = props.pages,
                        _props$modLayout = props.modLayout,
                        modLayout = void 0 === _props$modLayout ? 'header' : _props$modLayout,
                        borderNum = props.borderNum,
                        themeStyles = props.themeStyles,
                        themeStylesObj = { color: themeStyles ? '' + themeStyles.textColorAccent : '#fff' },
                        navHover = '.navLink:hover{color: ' + themeStyles.altColor + '}'
                    return (0, jsx_runtime.jsx)('nav', {
                        className: components_nav_module.root,
                        children: (0, jsx_runtime.jsxs)('div', {
                            className: classnames_default()(
                                components_nav_module.wrapper,
                                ((_cn = {}),
                                (_cn[components_nav_module.footerNav] = 'footer' === modLayout),
                                (_cn[components_nav_module.headerNav] = 'header' === modLayout),
                                _cn)
                            ),
                            style: themeStylesObj,
                            children: [
                                (0, jsx_runtime.jsx)('style', { children: navHover }),
                                (0, jsx_runtime.jsx)('ul', {
                                    children: pages.map(function (item, index) {
                                        var _cn2
                                        return (0,
                                        jsx_runtime.jsx)('li', { className: classnames_default()(((_cn2 = {}), (_cn2[components_nav_module.bordered] = index === borderNum), _cn2)), children: (0, jsx_runtime.jsx)(link_default(), { href: item.slug, children: (0, jsx_runtime.jsx)('a', { className: 'navLink', children: item.name }) }) }, index)
                                    }),
                                }),
                            ],
                        }),
                    })
                }
            Nav.displayName = 'Nav'
            const components_Nav = Nav
            try {
                ;(Nav.displayName = 'Nav'),
                    (Nav.__docgenInfo = {
                        description: '',
                        displayName: 'Nav',
                        props: {
                            pages: { defaultValue: null, description: '', name: 'pages', required: !0, type: { name: 'PagesProps[]' } },
                            modLayout: {
                                defaultValue: null,
                                description: 'Layout changes based on where Nav is being called',
                                name: 'modLayout',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"header"' }, { value: '"footer"' }] },
                            },
                            navStyle: {
                                defaultValue: null,
                                description: 'Mobile style layout of component',
                                name: 'navStyle',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"layout1"' }, { value: '"layout2"' }] },
                            },
                            borderNum: {
                                defaultValue: null,
                                description: 'Determines which item to place bottom border under in Nav',
                                name: 'borderNum',
                                required: !1,
                                type: { name: 'number' },
                            },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Nav.tsx#Nav'] = { docgenInfo: Nav.__docgenInfo, name: 'Nav', path: 'components/Nav.tsx#Nav' })
            } catch (__react_docgen_typescript_loader_error) {}
        },
        './functions.ts': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { lj: () => domainImage })
            __webpack_require__('./node_modules/core-js/modules/es.array.slice.js')
            var process = __webpack_require__('./node_modules/process/browser.js'),
                bucketUrl = 'https://townsquareinteractive.s3.amazonaws.com',
                localUrl = 'elitesports.com/preview',
                env = process.env.NEXT_PUBLIC_URL_ENV,
                domain = process.env.NEXT_PUBLIC_BASE_URL
            function envCheck(api) {
                return '1' === env ? encodeURI(api + '/' + domain + '/live') : '0' === env ? encodeURI(api + '/' + domain + '/preview') : api + '/' + localUrl
            }
            function domainImage(url) {
                var assetsApi = process.env.NEXT_PUBLIC_API_URL_ASSETS || bucketUrl,
                    imageUrl = process.env.NEXT_PUBLIC_URL_ENV ? envCheck(assetsApi) + '/assets' + url : assetsApi + '/' + localUrl + '/assets' + url
                return encodeURI(imageUrl)
            }
        },
        './stories/Button.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Large: () => Large,
                    Primary: () => Primary,
                    Secondary: () => Secondary,
                    Small: () => Small,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Button_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/react/index.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.join.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                cjs_js_stories_button = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(cjs_js_stories_button.Z, options)
            cjs_js_stories_button.Z && cjs_js_stories_button.Z.locals && cjs_js_stories_button.Z.locals
            var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                _excluded = ['primary', 'size', 'backgroundColor', 'label']
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {}
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(source, excluded) {
                        if (null == source) return {}
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source)
                        for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
                        return target
                    })(source, excluded)
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 || (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]))
                }
                return target
            }
            var Button = function Button(_ref) {
                var _ref$primary = _ref.primary,
                    primary = void 0 !== _ref$primary && _ref$primary,
                    _ref$size = _ref.size,
                    size = void 0 === _ref$size ? 'medium' : _ref$size,
                    backgroundColor = _ref.backgroundColor,
                    label = _ref.label,
                    props = _objectWithoutProperties(_ref, _excluded),
                    mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
                return (0, jsx_runtime.jsx)(
                    'button',
                    Object.assign(
                        { type: 'button', className: ['storybook-button', 'storybook-button--' + size, mode].join(' '), style: { backgroundColor } },
                        props,
                        { children: label }
                    )
                )
            }
            Button.displayName = 'Button'
            try {
                ;(Button.displayName = 'Button'),
                    (Button.__docgenInfo = {
                        description: 'Primary UI component for user interaction',
                        displayName: 'Button',
                        props: {
                            primary: {
                                defaultValue: { value: 'false' },
                                description: 'Is this the principal call to action on the page?',
                                name: 'primary',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            backgroundColor: {
                                defaultValue: null,
                                description: 'What background color to use',
                                name: 'backgroundColor',
                                required: !1,
                                type: { name: 'string' },
                            },
                            size: {
                                defaultValue: { value: 'medium' },
                                description: 'How large should the button be?',
                                name: 'size',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }] },
                            },
                            label: { defaultValue: null, description: 'Button contents', name: 'label', required: !0, type: { name: 'string' } },
                            onClick: {
                                defaultValue: null,
                                description: 'Optional click handler',
                                name: 'onClick',
                                required: !1,
                                type: { name: '(() => void)' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['stories/Button.tsx#Button'] = {
                            docgenInfo: Button.__docgenInfo,
                            name: 'Button',
                            path: 'stories/Button.tsx#Button',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Button_stories = { title: 'Example/Button', component: Button, argTypes: { backgroundColor: { control: 'color' } } }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(Button, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Primary = Template.bind({})
            Primary.args = { primary: !0, label: 'Button' }
            var Secondary = Template.bind({})
            Secondary.args = { label: 'Button' }
            var Large = Template.bind({})
            Large.args = { size: 'large', label: 'Button' }
            var Small = Template.bind({})
            ;(Small.args = { size: 'small', label: 'Button' }),
                (Primary.parameters = Object.assign({ storySource: { source: '(args) => <Button {...args} />' } }, Primary.parameters)),
                (Secondary.parameters = Object.assign({ storySource: { source: '(args) => <Button {...args} />' } }, Secondary.parameters)),
                (Large.parameters = Object.assign({ storySource: { source: '(args) => <Button {...args} />' } }, Large.parameters)),
                (Small.parameters = Object.assign({ storySource: { source: '(args) => <Button {...args} />' } }, Small.parameters))
            var __namedExportsOrder = ['Primary', 'Secondary', 'Large', 'Small']
        },
        './stories/Carousel.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    OneImage: () => OneImage,
                    Text: () => Text,
                    _2Images: () => _2Images,
                    _3Images: () => _3Images,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Carousel_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.map.js')
            var lib = __webpack_require__('./node_modules/react-slick/lib/index.js'),
                injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                carousel_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/carousel.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(carousel_module.Z, options)
            const components_carousel_module = carousel_module.Z && carousel_module.Z.locals ? carousel_module.Z.locals : void 0
            var next_image = __webpack_require__('./node_modules/next/image.js'),
                image_default = __webpack_require__.n(next_image),
                classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                functions =
                    (__webpack_require__('./node_modules/slick-carousel/slick/slick.css'),
                    __webpack_require__('./node_modules/slick-carousel/slick/slick-theme.css'),
                    __webpack_require__('./functions.ts')),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
            function Carousel(props) {
                var _cn,
                    items = props.items,
                    modLayout = props.modLayout,
                    slideCount = props.slideCount,
                    autoPlay = props.autoPlay,
                    themeStyles = props.themeStyles,
                    themeStylesObj = {
                        color: '' + themeStyles.textColor,
                        borderColor: '' + themeStyles.textColor,
                        borderStyle: 'solid',
                        borderWidth: '4px 0 4px 0',
                    },
                    imageStyles = { borderColor: '' + themeStyles.promoColor, borderStyle: 'solid', borderWidth: '0 2px 0 2px' },
                    arrowBackground = '.arrowNext{background: ' + themeStyles.promoColor + '} .arrowNext:hover{background: ' + themeStyles.promoColor2 + '}'
                function setSlide() {
                    return 'images' === modLayout && items.length >= slideCount ? slideCount : 1
                }
                var settingsImage = {
                        dots: !1,
                        infinite: !0,
                        speed: 200,
                        slidesToShow: setSlide(),
                        slidesToScroll: 1,
                        nextArrow: (0, jsx_runtime.jsx)(NextArrowImage, {}),
                        prevArrow: (0, jsx_runtime.jsx)(PrevArrowImage, {}),
                        autoplay: autoPlay || !1,
                        autoplaySpeed: 2600,
                    },
                    settingsText = {
                        dots: !1,
                        infinite: !0,
                        speed: 200,
                        slidesToShow: setSlide(),
                        slidesToScroll: 1,
                        nextArrow: (0, jsx_runtime.jsx)(NextArrow, { themeStyles }),
                    }
                return (0, jsx_runtime.jsx)('div', {
                    className: components_carousel_module.root,
                    children: (0, jsx_runtime.jsxs)('div', {
                        className: classnames_default()(
                            components_carousel_module.wrapper,
                            ((_cn = {}),
                            (_cn[components_carousel_module.hasImage] = 'images' === modLayout),
                            (_cn[components_carousel_module.hasText] = 'text' === modLayout),
                            _cn)
                        ),
                        style: 'images' === modLayout ? imageStyles : themeStylesObj,
                        children: [
                            'images' === modLayout &&
                                (0, jsx_runtime.jsxs)('div', {
                                    className: components_carousel_module.slideItems,
                                    children: [
                                        (0, jsx_runtime.jsx)('style', { children: arrowBackground }),
                                        (0, jsx_runtime.jsx)(
                                            lib.Z,
                                            Object.assign({}, settingsImage, {
                                                children: items.map(function (item, index) {
                                                    return (0,
                                                    jsx_runtime.jsx)('div', { className: components_carousel_module.item, children: item.imageUrl && (0, jsx_runtime.jsx)('div', { className: components_carousel_module.imageTile, children: (0, jsx_runtime.jsx)(image_default(), { src: (0, functions.lj)(item.imageUrl), layout: 'fill', objectFit: 'cover', alt: item.altText || '', quality: '50' }) }) }, index)
                                                }),
                                            })
                                        ),
                                    ],
                                }),
                            'text' === modLayout &&
                                (0, jsx_runtime.jsx)('div', {
                                    className: components_carousel_module.slideItems,
                                    children: (0, jsx_runtime.jsx)(
                                        lib.Z,
                                        Object.assign({}, settingsText, {
                                            children: items.map(function (item, index) {
                                                return (0,
                                                jsx_runtime.jsx)('div', { className: components_carousel_module.item, children: (0, jsx_runtime.jsxs)('div', { className: components_carousel_module.text, children: [(0, jsx_runtime.jsx)('p', { children: item.text }), (0, jsx_runtime.jsx)('h3', { children: item.byline })] }) }, index)
                                            }),
                                        })
                                    ),
                                }),
                        ],
                    }),
                })
            }
            function NextArrow(props) {
                var className = props.className,
                    style = props.style,
                    onClick = props.onClick,
                    themeStyles = props.themeStyles,
                    themeStyles2 = (themeStyles.textColor, { color: '' + themeStyles.textColorAccent })
                return (0, jsx_runtime.jsx)('div', {
                    className: classnames_default()(className, components_carousel_module.nextBtn),
                    style: Object.assign({ color: '' + themeStyles.textColor }, style, { themeStyles2 }),
                    onClick,
                    children: 'next >',
                })
            }
            function NextArrowImage(props) {
                var className = props.className,
                    style = props.style,
                    onClick = props.onClick
                return (0, jsx_runtime.jsx)('div', {
                    className: classnames_default()(className, components_carousel_module.imageBtns, components_carousel_module.nextImageBtn, 'arrowNext'),
                    style: Object.assign({}, style),
                    onClick,
                })
            }
            function PrevArrowImage(props) {
                var className = props.className,
                    style = props.style,
                    onClick = props.onClick
                return (0, jsx_runtime.jsx)('div', {
                    className: classnames_default()(className, components_carousel_module.imageBtns, components_carousel_module.prevImageBtn, 'arrowNext'),
                    style: Object.assign({}, style),
                    onClick,
                })
            }
            ;(Carousel.displayName = 'Carousel'),
                (NextArrow.displayName = 'NextArrow'),
                (NextArrowImage.displayName = 'NextArrowImage'),
                (PrevArrowImage.displayName = 'PrevArrowImage')
            const components_Carousel = Carousel
            try {
                ;(Carousel.displayName = 'Carousel'),
                    (Carousel.__docgenInfo = {
                        description: '',
                        displayName: 'Carousel',
                        props: {
                            modLayout: {
                                defaultValue: null,
                                description: 'Style layout of component',
                                name: 'modLayout',
                                required: !0,
                                type: { name: 'enum', value: [{ value: '"images"' }, { value: '"text"' }] },
                            },
                            slideCount: {
                                defaultValue: null,
                                description: 'Determines how many slides to show at once',
                                name: 'slideCount',
                                required: !0,
                                type: { name: 'enum', value: [{ value: '2' }, { value: '1' }, { value: '3' }] },
                            },
                            autoPlay: {
                                defaultValue: null,
                                description: 'Slides csn automatically scroll or not move until button is pressed',
                                name: 'autoPlay',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            items: { defaultValue: null, description: '', name: 'items', required: !0, type: { name: 'SlideData[]' } },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Carousel.tsx#Carousel'] = {
                            docgenInfo: Carousel.__docgenInfo,
                            name: 'Carousel',
                            path: 'components/Carousel.tsx#Carousel',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Carousel_stories = {
                title: 'Modules/Carousel',
                component: components_Carousel,
                argTypes: {
                    slideCount: { options: [1, 2, 3], control: { type: 'radio' } },
                    modLayout: { options: ['images', 'text'], control: { type: 'radio' } },
                    autoPlay: { options: [!0, !1], control: { type: 'radio' } },
                },
            }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Carousel, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Default = Template.bind({})
            Default.args = {
                autoPlay: !0,
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
                items: [
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-1.jpg',
                        byline: '-Rupert Tolson',
                    },
                    {
                        text: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-3.jpg',
                        byline: '-Jeff Grover',
                    },
                    {
                        text: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-4.jpg',
                        byline: '-Mark Ilten',
                    },
                    {
                        text: ' proident, sunt in culpa qui officia deserunt mollit anim id est laborum. proident, sunt in culpa qui officia deserunt mollit anim id est laborum.proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        imageUrl: '/football-5.jpg',
                        byline: '-Sarah Patterson',
                    },
                ],
            }
            var Text = Template.bind({})
            Text.args = Object.assign({}, Default.args, { modLayout: 'text', slideCount: 3 })
            var OneImage = Template.bind({})
            OneImage.args = Object.assign({}, Default.args, {
                modLayout: 'images',
                slideCount: 1,
                items: [{ imageUrl: '/football-1.jpg' }, { imageUrl: '/football-2.jpg' }, { imageUrl: '/football-3.jpg' }, { imageUrl: '/football-4.jpg' }],
            })
            var _2Images = Template.bind({})
            _2Images.args = Object.assign({}, OneImage.args, { modLayout: 'images', slideCount: 2 })
            var _3Images = Template.bind({})
            ;(_3Images.args = Object.assign({}, OneImage.args, { modLayout: 'images', slideCount: 3 })),
                (Text.parameters = Object.assign({ storySource: { source: '(args) => <Carousel {...args} />' } }, Text.parameters)),
                (OneImage.parameters = Object.assign({ storySource: { source: '(args) => <Carousel {...args} />' } }, OneImage.parameters)),
                (_2Images.parameters = Object.assign({ storySource: { source: '(args) => <Carousel {...args} />' } }, _2Images.parameters)),
                (_3Images.parameters = Object.assign({ storySource: { source: '(args) => <Carousel {...args} />' } }, _3Images.parameters))
            var __namedExportsOrder = ['Text', 'OneImage', '_2Images', '_3Images']
        },
        './stories/Footer.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Plain: () => Plain,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Footer_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.map.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                footer_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/footer.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(footer_module.Z, options)
            const components_footer_module = footer_module.Z && footer_module.Z.locals ? footer_module.Z.locals : void 0
            var classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                Nav = __webpack_require__('./components/Nav.tsx'),
                Logo = __webpack_require__('./components/Logo.tsx'),
                functions = __webpack_require__('./functions.ts'),
                index_es = __webpack_require__('./node_modules/@fortawesome/free-brands-svg-icons/index.es.js'),
                free_solid_svg_icons_index_es = __webpack_require__('./node_modules/@fortawesome/free-solid-svg-icons/index.es.js'),
                react_fontawesome_index_es = __webpack_require__('./node_modules/@fortawesome/react-fontawesome/index.es.js'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                Footer = function Footer(props) {
                    var themeStylesObj = { background: '' + props.themeStyles.footerBackground, color: '' + props.themeStyles.textColorAccent },
                        phoneColor = { color: '' + props.themeStyles.altColor },
                        socialHover = '.socialLink:hover{color: ' + props.themeStyles.altColor + '}',
                        logo = props.logoUrl && (0, functions.lj)(props.logoUrl)
                    function iconConvert(str) {
                        return -1 !== str.indexOf('google')
                            ? 'google'
                            : -1 !== str.indexOf('facebook')
                            ? 'facebook'
                            : -1 !== str.indexOf('instagram')
                            ? 'instagram'
                            : -1 !== str.indexOf('twitter')
                            ? 'twitter'
                            : 'social'
                    }
                    return (0, jsx_runtime.jsx)('div', {
                        className: components_footer_module.root,
                        style: themeStylesObj,
                        children: (0, jsx_runtime.jsxs)('div', {
                            className: components_footer_module.wrapper,
                            children: [
                                (0, jsx_runtime.jsxs)('div', {
                                    className: classnames_default()(components_footer_module.block, components_footer_module.logoInfo),
                                    children: [
                                        props.logoUrl && (0, jsx_runtime.jsx)(Logo.Z, { logoUrl: logo }),
                                        (0, jsx_runtime.jsxs)('div', {
                                            className: components_footer_module.social,
                                            children: [
                                                (0, jsx_runtime.jsx)('style', { children: socialHover }),
                                                props.socialData.map(function (item, index) {
                                                    return (0,
                                                    jsx_runtime.jsx)('a', { href: item.linkUrl, rel: 'noopener noreferrer', target: '_blank', 'aria-label': iconConvert(item.linkUrl), className: 'socialLink', children: (0, jsx_runtime.jsx)(react_fontawesome_index_es.G, { icon: ((str = item.linkUrl), (icon = iconConvert(str)), 'google' === icon ? index_es.xYR : 'facebok' === icon ? index_es.neY : 'instagram' === icon ? index_es.Zzi : 'twitter' === icon ? index_es.mdU : free_solid_svg_icons_index_es.tMT) }) }, index)
                                                    var str, icon
                                                }),
                                            ],
                                        }),
                                        (0, jsx_runtime.jsx)('h3', {
                                            className: components_footer_module.phone,
                                            style: phoneColor,
                                            children: props.phoneNumber,
                                        }),
                                    ],
                                }),
                                (0, jsx_runtime.jsx)('div', {
                                    className: classnames_default()(components_footer_module.block, components_footer_module.navInfo),
                                    children: (0, jsx_runtime.jsx)(Nav.Z, {
                                        pages: props.pages,
                                        modLayout: 'footer',
                                        borderNum: props.borderNum,
                                        themeStyles: props.themeStyles,
                                    }),
                                }),
                                (0, jsx_runtime.jsx)('div', {
                                    className: classnames_default()(components_footer_module.block, components_footer_module.addInfo),
                                    children: (0, jsx_runtime.jsxs)('div', {
                                        children: [
                                            (0, jsx_runtime.jsx)('p', { children: props.addressData.street }),
                                            (0, jsx_runtime.jsx)('p', { children: props.addressData.cityState }),
                                            (0, jsx_runtime.jsx)('p', { children: props.addressData.zip }),
                                        ],
                                    }),
                                }),
                                (0, jsx_runtime.jsxs)('div', {
                                    className: classnames_default()(components_footer_module.block, components_footer_module.siteInfo),
                                    children: [
                                        (0, jsx_runtime.jsx)('p', { children: props.siteName }),
                                        (0, jsx_runtime.jsx)('p', { children: '© All rights reserved' }),
                                    ],
                                }),
                            ],
                        }),
                    })
                }
            Footer.displayName = 'Footer'
            const components_Footer = Footer
            try {
                ;(Footer.displayName = 'Footer'),
                    (Footer.__docgenInfo = {
                        description: '',
                        displayName: 'Footer',
                        props: {
                            socialData: { defaultValue: null, description: '', name: 'socialData', required: !0, type: { name: 'SocialData[]' } },
                            addressData: { defaultValue: null, description: '', name: 'addressData', required: !0, type: { name: 'AddressData' } },
                            siteName: { defaultValue: null, description: '', name: 'siteName', required: !0, type: { name: 'string' } },
                            phoneNumber: { defaultValue: null, description: '', name: 'phoneNumber', required: !0, type: { name: 'string' } },
                            pages: { defaultValue: null, description: '', name: 'pages', required: !0, type: { name: 'PagesProps[]' } },
                            logoUrl: { defaultValue: null, description: 'Image URL for logo', name: 'logoUrl', required: !1, type: { name: 'string' } },
                            borderNum: {
                                defaultValue: null,
                                description: 'Determines which item to place bottom border under in Nav',
                                name: 'borderNum',
                                required: !1,
                                type: { name: 'number' },
                            },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Footer.tsx#Footer'] = {
                            docgenInfo: Footer.__docgenInfo,
                            name: 'Footer',
                            path: 'components/Footer.tsx#Footer',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Footer_stories = { title: 'Modules/Footer', component: components_Footer }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Footer, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Default = Template.bind({})
            Default.args = {
                socialData: [
                    { linkUrl: 'https://www.google.com/' },
                    { linkUrl: 'https://www.facebook.com' },
                    { linkUrl: 'https://www.instagram.com' },
                    { linkUrl: 'https://www.twitter.com' },
                ],
                pages: [
                    { name: 'Home', slug: '/home', id: '0' },
                    { name: 'Hockey', slug: '/hockey', id: '1' },
                    { name: 'Football', slug: '/football', id: '2' },
                    { name: 'Reviews', slug: '/reviews', id: '3' },
                    { name: 'Contact', slug: '/contact', id: '5' },
                    { name: 'Other', slug: '/', id: '6' },
                ],
                borderNum: 4,
                addressData: { street: '1849 Greenyard Lane', cityState: 'Burton, Kansas', zip: '47404' },
                siteName: 'EliteSports',
                phoneNumber: '913-452-2295',
                logoUrl: '/sports.png',
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
            }
            var Plain = Template.bind({})
            ;(Plain.args = Object.assign({}, Default.args)),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <Footer {...args} />' } }, Plain.parameters))
            var __namedExportsOrder = ['Plain']
        },
        './stories/Grid.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Border: () => Border,
                    Large: () => Large,
                    Plain: () => Plain,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Grid_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.map.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                grid_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/grid.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(grid_module.Z, options)
            const components_grid_module = grid_module.Z && grid_module.Z.locals ? grid_module.Z.locals : void 0
            var next_image = __webpack_require__('./node_modules/next/image.js'),
                image_default = __webpack_require__.n(next_image),
                classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                html_react_parser = __webpack_require__('./node_modules/html-react-parser/index.mjs'),
                functions = __webpack_require__('./functions.ts'),
                react = __webpack_require__('./node_modules/react/index.js'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                Grid = function Grid(props) {
                    var items = props.items,
                        themeStyles = props.themeStyles
                    return (0, jsx_runtime.jsx)('div', {
                        className: components_grid_module.root,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: components_grid_module.wrapper,
                            children: items.map(function (item, index) {
                                return (0, react.createElement)(GridBlock, Object.assign({}, item, { key: index, themeStyles }))
                            }),
                        }),
                    })
                }
            Grid.displayName = 'Grid'
            var GridBlock = function GridBlock(props) {
                var _cn,
                    _props$headline = props.headline,
                    headline = void 0 === _props$headline ? '' : _props$headline,
                    _props$body = props.body,
                    body = void 0 === _props$body ? '' : _props$body,
                    _props$border = props.border,
                    border = void 0 !== _props$border && _props$border,
                    imageUrl = props.imageUrl,
                    linkUrl = props.linkUrl,
                    _props$btnText = props.btnText,
                    btnText = void 0 === _props$btnText ? '' : _props$btnText,
                    _props$textSize = props.textSize,
                    textSize = void 0 === _props$textSize ? 'md' : _props$textSize,
                    _props$align = props.align,
                    align = void 0 === _props$align ? 'left' : _props$align,
                    _props$altText = props.altText,
                    altText = void 0 === _props$altText ? '' : _props$altText,
                    themeStyles = props.themeStyles,
                    themeStylesObj = { color: '' + themeStyles.textColor },
                    borderStyles = { color: '' + themeStyles.textColorAccent, backgroundColor: '' + themeStyles.altColor }
                return (0, jsx_runtime.jsxs)('div', {
                    className: classnames_default()(
                        components_grid_module.block,
                        ((_cn = {}),
                        (_cn[components_grid_module.bordered] = !0 === border),
                        (_cn[components_grid_module.imageArticle] = imageUrl),
                        (_cn[components_grid_module.sm] = 'sm' === textSize),
                        (_cn[components_grid_module.md] = 'md' === textSize),
                        (_cn[components_grid_module.lg] = 'lg' === textSize),
                        (_cn[components_grid_module.center] = 'center' === align),
                        (_cn[components_grid_module.left] = 'left' === align),
                        (_cn[components_grid_module.right] = 'right' === align),
                        _cn)
                    ),
                    style: border ? borderStyles : themeStylesObj,
                    children: [
                        imageUrl &&
                            (0, jsx_runtime.jsx)('div', {
                                className: components_grid_module.imageTile,
                                children: (0, jsx_runtime.jsx)(image_default(), {
                                    src: (0, functions.lj)(imageUrl),
                                    layout: 'fill',
                                    alt: altText,
                                    objectFit: 'cover',
                                    objectPosition: 'top center',
                                    quality: '50',
                                }),
                            }),
                        (0, jsx_runtime.jsxs)('div', {
                            className: components_grid_module.textBlock,
                            children: [
                                headline && (0, jsx_runtime.jsx)('h3', { className: components_grid_module.title, children: headline }),
                                (0, jsx_runtime.jsx)('div', { className: components_grid_module.text, children: (0, html_react_parser.ZP)(body) }),
                                linkUrl &&
                                    btnText &&
                                    (0, jsx_runtime.jsx)('div', {
                                        className: components_grid_module.cta_btn,
                                        children: (0, jsx_runtime.jsx)('a', { href: linkUrl, children: btnText }),
                                    }),
                            ],
                        }),
                    ],
                })
            }
            GridBlock.displayName = 'GridBlock'
            const components_Grid = Grid
            try {
                ;(Grid.displayName = 'Grid'),
                    (Grid.__docgenInfo = {
                        description: '',
                        displayName: 'Grid',
                        props: {
                            items: { defaultValue: null, description: 'Props for each item', name: 'items', required: !0, type: { name: 'GridData[]' } },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Grid.tsx#Grid'] = {
                            docgenInfo: Grid.__docgenInfo,
                            name: 'Grid',
                            path: 'components/Grid.tsx#Grid',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Grid_stories = { title: 'Modules/Grid', component: components_Grid, argTypes: {} }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Grid, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Default = Template.bind({})
            Default.args = {
                items: [
                    {
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-1.jpg',
                        headline: 'Headline',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                    {
                        body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-3.jpg',
                        headline: 'Headline',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                    {
                        body: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-4.jpg',
                        headline: 'Headline',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                ],
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
            }
            var Plain = Template.bind({})
            Plain.args = Object.assign({}, Default.args)
            var Border = Template.bind({})
            Border.args = Object.assign({}, Default.args, {
                items: [
                    {
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-1.jpg',
                        border: !0,
                        headline: 'Headline',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                    {
                        body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-3.jpg',
                        border: !0,
                        headline: 'Headline',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                    {
                        body: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-4.jpg',
                        border: !0,
                        headline: 'Headline',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                ],
            })
            var Large = Template.bind({})
            ;(Large.args = Object.assign({}, Default.args, {
                items: [
                    {
                        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-1.jpg',
                        border: !0,
                        headline: 'Headline',
                        textSize: 'lg',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                    {
                        body: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-3.jpg',
                        border: !0,
                        textSize: 'lg',
                        headline: 'Headline',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                    {
                        body: 'dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        imageUrl: '/football-4.jpg',
                        border: !0,
                        headline: 'Headline',
                        textSize: 'lg',
                        themeStyles: {
                            promoColor: '#365070',
                            textColor: 'rgb(46, 46, 46)',
                            headingColor: 'rgb(46, 46, 46)',
                            textColorAccent: '#fff',
                            linkColor: 'rgb(230, 211, 65)',
                            accentBackgroundColor: '#000',
                            promoColor2: 'rgb(230, 211, 65)',
                            altColor: 'rgb(230, 211, 65)',
                            headerBackground: 'rgb(64,64,64)',
                            footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                            navBackground: 'rgb(64,64,64,.9)',
                        },
                    },
                ],
            })),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <Grid {...args} />' } }, Plain.parameters)),
                (Border.parameters = Object.assign({ storySource: { source: '(args) => <Grid {...args} />' } }, Border.parameters)),
                (Large.parameters = Object.assign({ storySource: { source: '(args) => <Grid {...args} />' } }, Large.parameters))
            var __namedExportsOrder = ['Plain', 'Border', 'Large']
        },
        './stories/Header.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Layout2Mobile: () => Layout2Mobile,
                    NoBgImage: () => NoBgImage,
                    NoImage: () => NoImage,
                    Plain: () => Plain,
                    Reverse: () => Reverse,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Header_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.reverse.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                header_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/header.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(header_module.Z, options)
            const components_header_module = header_module.Z && header_module.Z.locals ? header_module.Z.locals : void 0
            var next_image = __webpack_require__('./node_modules/next/image.js'),
                image_default = __webpack_require__.n(next_image),
                classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                functions = __webpack_require__('./functions.ts'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
            function Hero(props) {
                var _cn,
                    _props$reverse = props.reverse,
                    reverse = void 0 !== _props$reverse && _props$reverse,
                    _props$backgroundImag = props.backgroundImageUrl,
                    backgroundImageUrl = void 0 === _props$backgroundImag ? '' : _props$backgroundImag,
                    _props$imageUrl = props.imageUrl,
                    imageUrl = void 0 === _props$imageUrl ? '' : _props$imageUrl,
                    _props$headline = props.headline,
                    headline = void 0 === _props$headline ? '' : _props$headline,
                    _props$modLayout = props.modLayout,
                    modLayout = void 0 === _props$modLayout ? 'normal' : _props$modLayout,
                    _props$altText = props.altText,
                    altText = void 0 === _props$altText ? '' : _props$altText,
                    themeStyles = props.themeStyles,
                    themeStylesObj = { backgroundColor: '' + themeStyles.promoColor, color: '' + themeStyles.textColorAccent },
                    gutterAlt = { backgroundColor: '' + themeStyles.promoColor2 },
                    backgroundImage = (0, functions.lj)(backgroundImageUrl),
                    mainImage = (0, functions.lj)(imageUrl)
                return (0, jsx_runtime.jsx)('div', {
                    className: components_header_module.root,
                    children: (0, jsx_runtime.jsxs)('div', {
                        className: classnames_default()(
                            components_header_module.wrapper,
                            ((_cn = {}),
                            (_cn[components_header_module.reverse] = reverse),
                            (_cn[components_header_module.altLayout] = 'alt-layout' === modLayout),
                            _cn)
                        ),
                        children: [
                            (0, jsx_runtime.jsx)('div', {
                                className: components_header_module.gutter,
                                style: themeStylesObj,
                                children:
                                    backgroundImageUrl &&
                                    (0, jsx_runtime.jsx)('div', {
                                        className: components_header_module.backgroundBlock,
                                        children: (0, jsx_runtime.jsx)(image_default(), {
                                            src: backgroundImage,
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            alt: '',
                                            quality: '30',
                                        }),
                                    }),
                            }),
                            imageUrl &&
                                (0, jsx_runtime.jsx)('div', {
                                    className: components_header_module.heroImage,
                                    children: (0, jsx_runtime.jsx)(image_default(), {
                                        src: mainImage,
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        alt: altText,
                                        priority: !0,
                                        quality: '50',
                                    }),
                                }),
                            (0, jsx_runtime.jsx)('div', {
                                className: components_header_module.headline,
                                children: (0, jsx_runtime.jsxs)('div', {
                                    className: components_header_module.backgroundBlock,
                                    style: themeStylesObj,
                                    children: [
                                        backgroundImageUrl &&
                                            (0, jsx_runtime.jsx)(image_default(), {
                                                src: backgroundImage,
                                                layout: 'fill',
                                                objectFit: 'cover',
                                                alt: '',
                                                quality: '30',
                                            }),
                                        (0, jsx_runtime.jsx)('h1', { className: components_header_module.text, children: headline }),
                                    ],
                                }),
                            }),
                            (0, jsx_runtime.jsx)('div', {
                                className: classnames_default()(components_header_module.gutter, components_header_module.gutter_alt),
                                style: gutterAlt,
                                children:
                                    backgroundImageUrl &&
                                    (0, jsx_runtime.jsx)('div', {
                                        className: components_header_module.backgroundBlock,
                                        children: (0, jsx_runtime.jsx)(image_default(), {
                                            src: backgroundImage,
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            alt: '',
                                            quality: '30',
                                        }),
                                    }),
                            }),
                        ],
                    }),
                })
            }
            Hero.displayName = 'Hero'
            const Header = Hero
            try {
                ;(Hero.displayName = 'Hero'),
                    (Hero.__docgenInfo = {
                        description: '',
                        displayName: 'Hero',
                        props: {
                            headline: { defaultValue: null, description: '', name: 'headline', required: !1, type: { name: 'string' } },
                            imageUrl: { defaultValue: null, description: 'Main image file url', name: 'imageUrl', required: !1, type: { name: 'string' } },
                            altText: { defaultValue: null, description: 'Alt text for  image', name: 'altText', required: !1, type: { name: 'string' } },
                            backgroundImageUrl: {
                                defaultValue: null,
                                description: 'Background image file url',
                                name: 'backgroundImageUrl',
                                required: !1,
                                type: { name: 'string' },
                            },
                            reverse: {
                                defaultValue: null,
                                description: 'Reverse layout of header items',
                                name: 'reverse',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            modLayout: {
                                defaultValue: null,
                                description: 'Style layout change on mobile',
                                name: 'modLayout',
                                required: !0,
                                type: { name: 'enum', value: [{ value: '"normal"' }, { value: '"alt-layout"' }] },
                            },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Header.tsx#Hero'] = {
                            docgenInfo: Hero.__docgenInfo,
                            name: 'Hero',
                            path: 'components/Header.tsx#Hero',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Header_stories = { title: 'Modules/Header', component: Header }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(Header, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Default = Template.bind({})
            Default.args = {
                headline: 'Home',
                altText: 'Soccer stuff',
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
            }
            var Plain = Template.bind({})
            Plain.args = Object.assign({}, Default.args, {
                imageUrl: '/soccer-3.jpg',
                backgroundImageUrl: '/seamless-5178982.png',
                reverse: !1,
                modLayout: 'normal',
            })
            var Reverse = Template.bind({})
            Reverse.args = Object.assign({}, Plain.args, { reverse: !0 })
            var NoBgImage = Template.bind({})
            NoBgImage.args = Object.assign({}, Default.args, { imageUrl: '/soccer-3.jpg' })
            var NoImage = Template.bind({})
            NoImage.args = Object.assign({}, Default.args, { backgroundImageUrl: '/seamless-5178982.png' })
            var Layout2Mobile = Template.bind({})
            ;(Layout2Mobile.args = Object.assign({}, Plain.args, { modLayout: 'alt-layout' })),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <Header {...args} />' } }, Plain.parameters)),
                (Reverse.parameters = Object.assign({ storySource: { source: '(args) => <Header {...args} />' } }, Reverse.parameters)),
                (NoBgImage.parameters = Object.assign({ storySource: { source: '(args) => <Header {...args} />' } }, NoBgImage.parameters)),
                (NoImage.parameters = Object.assign({ storySource: { source: '(args) => <Header {...args} />' } }, NoImage.parameters)),
                (Layout2Mobile.parameters = Object.assign({ storySource: { source: '(args) => <Header {...args} />' } }, Layout2Mobile.parameters))
            var __namedExportsOrder = ['Plain', 'Reverse', 'NoBgImage', 'NoImage', 'Layout2Mobile']
        },
        './stories/Images.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    HeroNoLink: () => HeroNoLink,
                    HeroWithLink: () => HeroWithLink,
                    LinkNoText: () => LinkNoText,
                    NoLink: () => NoLink,
                    OneFull: () => OneFull,
                    Plain: () => Plain,
                    ThreeOneThird: () => ThreeOneThird,
                    TwoOneHalf: () => TwoOneHalf,
                    TwoTwoThird: () => TwoTwoThird,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Images_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
                __webpack_require__('./node_modules/core-js/modules/es.string.link.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                images_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/images.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(images_module.Z, options)
            const components_images_module = images_module.Z && images_module.Z.locals ? images_module.Z.locals : void 0
            var next_image = __webpack_require__('./node_modules/next/image.js'),
                image_default = __webpack_require__.n(next_image),
                next_link = __webpack_require__('./node_modules/next/link.js'),
                link_default = __webpack_require__.n(next_link),
                classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                functions = __webpack_require__('./functions.ts'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                Images = function Images(_ref) {
                    var items = _ref.items,
                        _ref$modLayout = _ref.modLayout,
                        modLayout = void 0 === _ref$modLayout ? '3-2/3' : _ref$modLayout,
                        _ref$gap = _ref.gap,
                        gap = void 0 !== _ref$gap && _ref$gap
                    return 3 === items.length
                        ? (0, jsx_runtime.jsx)(Images3, { items, gap, modLayout })
                        : 2 === items.length
                        ? (0, jsx_runtime.jsx)(Images2, { items, gap, modLayout })
                        : 1 === items.length
                        ? (0, jsx_runtime.jsx)(Images1, { items, gap, modLayout })
                        : (0, jsx_runtime.jsx)(ImagesPlus, { items, gap, modLayout: '4-plus' })
                },
                Images3 = function Images3(_ref2) {
                    var _cn,
                        items = _ref2.items,
                        _ref2$modLayout = _ref2.modLayout,
                        modLayout = void 0 === _ref2$modLayout ? '3-2/3' : _ref2$modLayout,
                        _ref2$gap = _ref2.gap,
                        gap = void 0 !== _ref2$gap && _ref2$gap
                    return (0, jsx_runtime.jsx)('div', {
                        className: components_images_module.root,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: components_images_module.wrapper,
                            children: (0, jsx_runtime.jsxs)('div', {
                                className: classnames_default()(
                                    components_images_module.tileBlock,
                                    ((_cn = {}), (_cn[components_images_module.gap] = gap), _cn)
                                ),
                                children: [
                                    (0, jsx_runtime.jsx)(TileImage, { itemNumber: items[0], modLayout, isMainImage: !0 }),
                                    (0, jsx_runtime.jsx)(TileImage, { itemNumber: items[1], modLayout, isMainImage: !1 }),
                                    (0, jsx_runtime.jsx)(TileImage, { itemNumber: items[2], modLayout, isMainImage: !1 }),
                                ],
                            }),
                        }),
                    })
                }
            Images3.displayName = 'Images3'
            var Images2 = function Images2(_ref3) {
                var _cn2,
                    items = _ref3.items,
                    _ref3$modLayout = _ref3.modLayout,
                    modLayout = void 0 === _ref3$modLayout ? '2-2/3' : _ref3$modLayout,
                    _ref3$gap = _ref3.gap,
                    gap = void 0 !== _ref3$gap && _ref3$gap
                return (0, jsx_runtime.jsx)('div', {
                    className: components_images_module.root,
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_images_module.wrapper,
                        children: (0, jsx_runtime.jsxs)('div', {
                            className: classnames_default()(
                                components_images_module.tileBlock,
                                ((_cn2 = {}),
                                (_cn2[components_images_module.gap] = gap),
                                (_cn2[components_images_module.tileBlock_2_half] = '2-1/2' === modLayout),
                                _cn2)
                            ),
                            children: [
                                (0, jsx_runtime.jsx)(TileImage, { itemNumber: items[0], modLayout, isMainImage: !0 }),
                                (0, jsx_runtime.jsx)(TileImage, { itemNumber: items[1], modLayout, isMainImage: !1 }),
                            ],
                        }),
                    }),
                })
            }
            Images2.displayName = 'Images2'
            var Images1 = function Images1(_ref4) {
                var _cn3,
                    items = _ref4.items,
                    _ref4$modLayout = _ref4.modLayout,
                    modLayout = void 0 === _ref4$modLayout ? '1-full' : _ref4$modLayout,
                    _ref4$gap = _ref4.gap,
                    gap = void 0 !== _ref4$gap && _ref4$gap
                return (0, jsx_runtime.jsx)('div', {
                    className: components_images_module.root,
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_images_module.wrapper,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: classnames_default()(
                                components_images_module.tileBlock,
                                ((_cn3 = {}), (_cn3[components_images_module.gap] = gap), _cn3)
                            ),
                            children: (0, jsx_runtime.jsx)(TileImage, { itemNumber: items[0], modLayout, isMainImage: !0, hero: !0 }),
                        }),
                    }),
                })
            }
            Images1.displayName = 'Images1'
            var ImagesPlus = function ImagesPlus(_ref5) {
                var _cn4,
                    items = _ref5.items,
                    _ref5$modLayout = _ref5.modLayout,
                    modLayout = void 0 === _ref5$modLayout ? '4-plus' : _ref5$modLayout,
                    _ref5$gap = _ref5.gap,
                    gap = void 0 !== _ref5$gap && _ref5$gap
                return (0, jsx_runtime.jsx)('div', {
                    className: components_images_module.root,
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_images_module.wrapper,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: classnames_default()(
                                components_images_module.tileBlock,
                                ((_cn4 = {}), (_cn4[components_images_module.gap] = gap), _cn4)
                            ),
                            children: items.map(function (item, index) {
                                return (0, jsx_runtime.jsx)(TileImage, { itemNumber: item, modLayout, isMainImage: !1 }, index)
                            }),
                        }),
                    }),
                })
            }
            ImagesPlus.displayName = 'ImagesPlus'
            var TileImage = function TileImage(_ref6) {
                var _cn5,
                    itemNumber = _ref6.itemNumber,
                    modLayout = _ref6.modLayout,
                    _ref6$isMainImage = _ref6.isMainImage,
                    isMainImage = void 0 !== _ref6$isMainImage && _ref6$isMainImage,
                    _ref6$hero = _ref6.hero,
                    hero = void 0 !== _ref6$hero && _ref6$hero
                return (0, jsx_runtime.jsx)('div', {
                    className: classnames_default()(
                        components_images_module.tileImage,
                        ((_cn5 = {}),
                        (_cn5[components_images_module.mainImage] = !0 === isMainImage && ('3-2/3' === modLayout || '2-2/3' === modLayout)),
                        (_cn5[components_images_module.mainImage2] = !0 === isMainImage && ('3-1/3' === modLayout || '2-1/2' === modLayout)),
                        (_cn5[components_images_module.mainImage1] = !0 === isMainImage && ('1-full' === modLayout || '1-hero' === modLayout)),
                        (_cn5[components_images_module.heroImage] = !0 === isMainImage && '1-hero' === modLayout),
                        (_cn5[components_images_module.sideImage] = !1 === isMainImage),
                        (_cn5[components_images_module.sideImage2_third] = !1 === isMainImage && '2-2/3' === modLayout),
                        (_cn5[components_images_module.sideImage2_half] = !1 === isMainImage && '2-1/2' === modLayout),
                        (_cn5[components_images_module.sideImage4_plus] = '4-plus' === modLayout),
                        (_cn5[components_images_module.hasBody] = itemNumber.body),
                        _cn5)
                    ),
                    children: itemNumber.linkUrl
                        ? (0, jsx_runtime.jsxs)('div', {
                              className: classnames_default()(components_images_module.linkBlock, components_images_module.linked),
                              children: [
                                  (0, jsx_runtime.jsx)(image_default(), {
                                      src: (0, functions.lj)(itemNumber.imageUrl),
                                      layout: 'fill',
                                      objectFit: 'cover',
                                      alt: itemNumber.altText,
                                      quality: '40',
                                      priority: !!hero,
                                  }),
                                  (0, jsx_runtime.jsx)(link_default(), {
                                      href: itemNumber.linkUrl,
                                      children: (0, jsx_runtime.jsxs)('a', {
                                          className: components_images_module.link,
                                          children: [
                                              itemNumber.headline
                                                  ? (0, jsx_runtime.jsx)('div', {
                                                        className: components_images_module.headline,
                                                        children: (0, jsx_runtime.jsx)('h2', { children: itemNumber.headline || '' }),
                                                    })
                                                  : itemNumber.linkText &&
                                                    (0, jsx_runtime.jsx)('div', { className: components_images_module.text, children: itemNumber.linkText }),
                                              itemNumber.body &&
                                                  (0, jsx_runtime.jsx)('div', {
                                                      className: components_images_module.description,
                                                      children: (0, jsx_runtime.jsx)('p', { children: itemNumber.body }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, jsx_runtime.jsxs)('div', {
                              className: components_images_module.linkBlock,
                              children: [
                                  (0, jsx_runtime.jsx)(image_default(), {
                                      src: (0, functions.lj)(itemNumber.imageUrl),
                                      layout: 'fill',
                                      objectFit: 'cover',
                                      alt: itemNumber.altText,
                                      quality: '40',
                                      priority: !!hero,
                                  }),
                                  itemNumber.headline
                                      ? (0, jsx_runtime.jsx)('div', {
                                            className: components_images_module.headline,
                                            children: (0, jsx_runtime.jsx)('h2', { children: itemNumber.headline || '' }),
                                        })
                                      : itemNumber.linkText &&
                                        (0, jsx_runtime.jsx)('div', { className: components_images_module.text, children: itemNumber.linkText }),
                                  itemNumber.body &&
                                      (0, jsx_runtime.jsx)('div', {
                                          className: components_images_module.description,
                                          children: (0, jsx_runtime.jsx)('p', { children: itemNumber.body }),
                                      }),
                              ],
                          }),
                })
            }
            TileImage.displayName = 'TileImage'
            const components_Images = Images
            try {
                ;(Images.displayName = 'Images'),
                    (Images.__docgenInfo = {
                        description: '',
                        displayName: 'Images',
                        props: {
                            items: { defaultValue: null, description: '', name: 'items', required: !0, type: { name: 'ImageItem[]' } },
                            modLayout: {
                                defaultValue: { value: '4-plus' },
                                description: 'Style layout of component',
                                name: 'modLayout',
                                required: !1,
                                type: {
                                    name: 'enum',
                                    value: [
                                        { value: '"3-1/3"' },
                                        { value: '"3-2/3"' },
                                        { value: '"2-2/3"' },
                                        { value: '"2-1/2"' },
                                        { value: '"1-full"' },
                                        { value: '"1-hero"' },
                                        { value: '"4-plus"' },
                                    ],
                                },
                            },
                            gap: {
                                defaultValue: { value: 'false' },
                                description: 'Space around each image',
                                name: 'gap',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Images.tsx#Images'] = {
                            docgenInfo: Images.__docgenInfo,
                            name: 'Images',
                            path: 'components/Images.tsx#Images',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Images_stories = {
                title: 'Modules/Images',
                component: components_Images,
                argTypes: { modLayout: { options: ['3-1/3', '3-2/3', '2-1/2', '2-2/3', '1-full', '1-hero'], control: { type: 'radio' } } },
            }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Images, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Plain = Template.bind({})
            Plain.args = {
                gap: !0,
                modLayout: '3-2/3',
                items: [
                    { imageUrl: '/football-2.jpg', altText: 'Pond under the Northern Lights', linkText: 'Destinations', linkUrl: '/destinations' },
                    { imageUrl: '/football-3.jpg', altText: 'The Northern Lights in a snowy landscape', linkText: 'Media', linkUrl: '/media' },
                    { imageUrl: '/football-4.jpg', altText: 'Man camping under the Northern Lights', linkText: 'Reviews', linkUrl: '/reviews' },
                ],
            }
            var ThreeOneThird = Template.bind({})
            ThreeOneThird.args = Object.assign({}, Plain.args, { modLayout: '3-1/3' })
            var TwoTwoThird = Template.bind({})
            TwoTwoThird.args = Object.assign({}, Plain.args, {
                modLayout: '2-2/3',
                items: [
                    { imageUrl: '/football-2.jpg', altText: 'Pond under the Northern Lights', linkText: 'Destinations', linkUrl: '/destinations' },
                    { imageUrl: '/football-3.jpg', altText: 'The Northern Lights in a snowy landscape', linkText: 'Media', linkUrl: '/media' },
                ],
            })
            var TwoOneHalf = Template.bind({})
            TwoOneHalf.args = Object.assign({}, TwoTwoThird.args, { modLayout: '2-1/2' })
            var OneFull = Template.bind({})
            OneFull.args = Object.assign({}, Plain.args, {
                modLayout: '1-full',
                items: [{ imageUrl: '/football-2.jpg', altText: 'Pond under the Northern Lights' }],
            })
            var HeroNoLink = Template.bind({})
            HeroNoLink.args = Object.assign({}, OneFull.args, {
                modLayout: '1-hero',
                items: [{ imageUrl: '/football-2.jpg', altText: 'Pond under the Northern Lights', headline: 'Destinations' }],
            })
            var HeroWithLink = Template.bind({})
            HeroWithLink.args = Object.assign({}, OneFull.args, {
                modLayout: '1-hero',
                items: [{ imageUrl: '/football-2.jpg', altText: 'Pond under the Northern Lights', headline: 'Destinations', linkUrl: '/destinations' }],
            })
            var NoLink = Template.bind({})
            NoLink.args = Object.assign({}, Plain.args, {
                items: [
                    { imageUrl: '/football-2.jpg', altText: 'Pond under the Northern Lights' },
                    { imageUrl: '/football-3.jpg', altText: 'The Northern Lights in a snowy landscape' },
                    { imageUrl: '/football-4.jpg', altText: 'Man camping under the Northern Lights' },
                ],
            })
            var LinkNoText = Template.bind({})
            ;(LinkNoText.args = Object.assign({}, Plain.args, {
                items: [
                    { imageUrl: '/football-2.jpg', altText: 'Pond under the Northern Lights', linkUrl: '/', headline: 'hello', linkText: 'hello' },
                    { imageUrl: '/football-3.jpg', altText: 'The Northern Lights in a snowy landscape', linkUrl: '/' },
                    { imageUrl: '/football-4.jpg', altText: 'Man camping under the Northern Lights', linkUrl: '/' },
                ],
            })),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, Plain.parameters)),
                (ThreeOneThird.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, ThreeOneThird.parameters)),
                (TwoTwoThird.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, TwoTwoThird.parameters)),
                (TwoOneHalf.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, TwoOneHalf.parameters)),
                (OneFull.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, OneFull.parameters)),
                (HeroNoLink.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, HeroNoLink.parameters)),
                (HeroWithLink.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, HeroWithLink.parameters)),
                (NoLink.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, NoLink.parameters)),
                (LinkNoText.parameters = Object.assign({ storySource: { source: '(args) => <Images {...args} />' } }, LinkNoText.parameters))
            var __namedExportsOrder = ['Plain', 'ThreeOneThird', 'TwoTwoThird', 'TwoOneHalf', 'OneFull', 'HeroNoLink', 'HeroWithLink', 'NoLink', 'LinkNoText']
        },
        './stories/Label.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Border: () => Border,
                    BorderGap: () => BorderGap,
                    Large: () => Large,
                    Plain: () => Plain,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Label_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'), __webpack_require__('./node_modules/core-js/modules/es.function.bind.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                label_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/label.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(label_module.Z, options)
            const components_label_module = label_module.Z && label_module.Z.locals ? label_module.Z.locals : void 0
            var classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                html_react_parser = __webpack_require__('./node_modules/html-react-parser/index.mjs'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
            function Label(props) {
                var _cn,
                    _cn2,
                    _props$text = props.text,
                    text = void 0 === _props$text ? '' : _props$text,
                    _props$border = props.border,
                    border = void 0 !== _props$border && _props$border,
                    _props$gap = props.gap,
                    gap = void 0 !== _props$gap && _props$gap,
                    _props$align = props.align,
                    align = void 0 === _props$align ? 'left' : _props$align,
                    _props$textSize = props.textSize,
                    textSize = void 0 === _props$textSize ? 'md' : _props$textSize,
                    themeStyles = props.themeStyles,
                    themeStylesObj = { color: '' + themeStyles.headingColor },
                    borderStyles = { color: '' + themeStyles.headingColor, borderBottom: '4px solid ' + themeStyles.headingColor }
                return (0, jsx_runtime.jsx)('div', {
                    className: components_label_module.root,
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_label_module.wrapper,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: classnames_default()(
                                ((_cn = {}),
                                (_cn[components_label_module.headline] = !0),
                                (_cn[components_label_module.bordered] = border),
                                (_cn[components_label_module.gap] = gap),
                                _cn)
                            ),
                            style: border ? borderStyles : themeStylesObj,
                            children: (0, jsx_runtime.jsx)('h2', {
                                className: classnames_default()(
                                    components_label_module.text,
                                    ((_cn2 = {}),
                                    (_cn2[components_label_module.center] = 'center' === align),
                                    (_cn2[components_label_module.left] = 'left' === align),
                                    (_cn2[components_label_module.right] = 'right' === align),
                                    (_cn2[components_label_module.lg] = 'lg' === textSize),
                                    (_cn2[components_label_module.md] = 'md' === textSize),
                                    (_cn2[components_label_module.sm] = 'sm' === textSize),
                                    _cn2)
                                ),
                                children: (0, html_react_parser.ZP)(text),
                            }),
                        }),
                    }),
                })
            }
            Label.displayName = 'Label'
            const components_Label = Label
            try {
                ;(Label.displayName = 'Label'),
                    (Label.__docgenInfo = {
                        description: '',
                        displayName: 'Label',
                        props: {
                            text: { defaultValue: null, description: '', name: 'text', required: !1, type: { name: 'string' } },
                            border: { defaultValue: null, description: 'Bottom border under text', name: 'border', required: !1, type: { name: 'boolean' } },
                            gap: { defaultValue: null, description: 'Spacing around text', name: 'gap', required: !1, type: { name: 'boolean' } },
                            align: {
                                defaultValue: null,
                                description: 'Text align style',
                                name: 'align',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }, { value: '"center"' }] },
                            },
                            textSize: {
                                defaultValue: null,
                                description: 'Size of text',
                                name: 'textSize',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }] },
                            },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Label.tsx#Label'] = {
                            docgenInfo: Label.__docgenInfo,
                            name: 'Label',
                            path: 'components/Label.tsx#Label',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Label_stories = {
                title: 'Modules/Label',
                component: components_Label,
                argTypes: {
                    textSize: { options: ['sm', 'md', 'lg'], control: { type: 'radio' } },
                    align: { options: ['left', 'right', 'center'], control: { type: 'radio' } },
                },
            }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Label, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Plain = Template.bind({})
            Plain.args = {
                text: 'text goes here',
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
                textSize: 'md',
            }
            var Large = Template.bind({})
            Large.args = Object.assign({}, Plain.args, { textSize: 'lg' })
            var Border = Template.bind({})
            Border.args = Object.assign({}, Large.args, { border: !0 })
            var BorderGap = Template.bind({})
            ;(BorderGap.args = Object.assign({}, Border.args, { align: 'center', gap: !0 })),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <Label {...args} />' } }, Plain.parameters)),
                (Large.parameters = Object.assign({ storySource: { source: '(args) => <Label {...args} />' } }, Large.parameters)),
                (Border.parameters = Object.assign({ storySource: { source: '(args) => <Label {...args} />' } }, Border.parameters)),
                (BorderGap.parameters = Object.assign({ storySource: { source: '(args) => <Label {...args} />' } }, BorderGap.parameters))
            var __namedExportsOrder = ['Plain', 'Large', 'Border', 'BorderGap']
        },
        './stories/List.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Border: () => Border,
                    Card: () => Card,
                    CardReverse: () => CardReverse,
                    Image: () => Image,
                    ImageReverse: () => ImageReverse,
                    Large: () => Large,
                    Plain: () => Plain,
                    WithButton: () => WithButton,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => List_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.reverse.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                list_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/list.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(list_module.Z, options)
            const components_list_module = list_module.Z && list_module.Z.locals ? list_module.Z.locals : void 0
            var next_image = __webpack_require__('./node_modules/next/image.js'),
                image_default = __webpack_require__.n(next_image),
                classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                html_react_parser = __webpack_require__('./node_modules/html-react-parser/index.mjs'),
                functions = __webpack_require__('./functions.ts'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
                List = function List(props) {
                    var _cn,
                        _cn2,
                        _props$headline = props.headline,
                        headline = void 0 === _props$headline ? '' : _props$headline,
                        _props$body = props.body,
                        body = void 0 === _props$body ? '' : _props$body,
                        _props$border = props.border,
                        border = void 0 !== _props$border && _props$border,
                        imageUrl = props.imageUrl,
                        linkUrl = props.linkUrl,
                        _props$btnText = props.btnText,
                        btnText = void 0 === _props$btnText ? '' : _props$btnText,
                        _props$modLayout = props.modLayout,
                        modLayout = void 0 === _props$modLayout ? 'article' : _props$modLayout,
                        _props$textSize = props.textSize,
                        textSize = void 0 === _props$textSize ? 'md' : _props$textSize,
                        _props$reverse = props.reverse,
                        reverse = void 0 !== _props$reverse && _props$reverse,
                        _props$align = props.align,
                        align = void 0 === _props$align ? 'left' : _props$align,
                        _props$altText = props.altText,
                        altText = void 0 === _props$altText ? '' : _props$altText,
                        themeStyles = props.themeStyles,
                        themeStylesObj = {
                            backgroundColor: border ? '' + themeStyles.accentBackgroundColor : 'transparent',
                            color: border ? '' + themeStyles.textColorAccent : '' + themeStyles.textColor,
                        },
                        headingColor = { color: border ? '' + themeStyles.textColorAccent : '' + themeStyles.headingColor },
                        gutterStyle = { backgroundColor: '' + themeStyles.promoColor }
                    return (0, jsx_runtime.jsx)('div', {
                        className: classnames_default()(
                            components_list_module.root,
                            ((_cn = {}),
                            (_cn[components_list_module.articleLayout] = 'article' === modLayout),
                            (_cn[components_list_module.cardLayout] = 'card' === modLayout),
                            (_cn[components_list_module.sm] = 'sm' === textSize),
                            (_cn[components_list_module.md] = 'md' === textSize),
                            (_cn[components_list_module.lg] = 'lg' === textSize),
                            (_cn[components_list_module.center] = 'center' === align),
                            (_cn[components_list_module.left] = 'left' === align),
                            (_cn[components_list_module.right] = 'right' === align),
                            (_cn[components_list_module.block] = !0),
                            _cn)
                        ),
                        children: (0, jsx_runtime.jsxs)('div', {
                            className: classnames_default()(
                                components_list_module.wrapper,
                                ((_cn2 = {}),
                                (_cn2[components_list_module.bordered] = !0 === border),
                                (_cn2[components_list_module.imageArticle] = imageUrl && 'card' != modLayout),
                                (_cn2[components_list_module.reverse] = reverse),
                                _cn2)
                            ),
                            style: themeStylesObj,
                            children: [
                                'card' == modLayout &&
                                    (0, jsx_runtime.jsxs)('div', {
                                        className: components_list_module.title,
                                        style: headingColor,
                                        children: [
                                            (0, jsx_runtime.jsx)('div', { className: components_list_module.textGutter }),
                                            (0, jsx_runtime.jsx)('div', { className: components_list_module.insideTextGutter }),
                                            (0, jsx_runtime.jsx)('div', {
                                                className: components_list_module.titleText,
                                                children: (0, jsx_runtime.jsx)('h2', { className: components_list_module.text, children: headline || '' }),
                                            }),
                                            (0, jsx_runtime.jsx)('div', {
                                                className: classnames_default()(components_list_module.textGutter, components_list_module.textGutter_2),
                                            }),
                                        ],
                                    }),
                                (0, jsx_runtime.jsxs)('div', {
                                    className: components_list_module.features,
                                    children: [
                                        'card' === modLayout &&
                                            (0, jsx_runtime.jsx)('div', {
                                                className: components_list_module.colorBlock,
                                                children: (0, jsx_runtime.jsx)('div', { className: components_list_module.colorFill, style: gutterStyle }),
                                            }),
                                        (0, jsx_runtime.jsx)('div', {
                                            className: components_list_module.imageBlock,
                                            children: (0, jsx_runtime.jsx)('div', {
                                                className: components_list_module.blockPicture,
                                                children:
                                                    imageUrl &&
                                                    (0, jsx_runtime.jsx)(image_default(), {
                                                        src: (0, functions.lj)(imageUrl),
                                                        height: '450px',
                                                        width: '600px',
                                                        layout: 'responsive',
                                                        objectFit: 'cover',
                                                        alt: altText,
                                                        quality: '50',
                                                    }),
                                            }),
                                        }),
                                        'card' != modLayout
                                            ? (0, jsx_runtime.jsxs)('div', {
                                                  className: components_list_module.allText,
                                                  children: [
                                                      (0, jsx_runtime.jsx)('div', {
                                                          className: components_list_module.title,
                                                          style: headingColor,
                                                          children: (0, jsx_runtime.jsx)('h3', { className: components_list_module.text, children: headline }),
                                                      }),
                                                      (0, jsx_runtime.jsxs)('div', {
                                                          className: components_list_module.textBlock,
                                                          children: [
                                                              (0, jsx_runtime.jsx)('div', {
                                                                  className: components_list_module.text,
                                                                  children: (0, html_react_parser.ZP)(body),
                                                              }),
                                                              linkUrl &&
                                                                  btnText &&
                                                                  (0, jsx_runtime.jsx)('div', {
                                                                      className: components_list_module.cta_btn,
                                                                      children: (0, jsx_runtime.jsx)('a', { href: linkUrl, children: btnText }),
                                                                  }),
                                                          ],
                                                      }),
                                                  ],
                                              })
                                            : (0, jsx_runtime.jsxs)('div', {
                                                  className: components_list_module.textBlock,
                                                  children: [
                                                      (0, jsx_runtime.jsx)('div', {
                                                          className: components_list_module.text,
                                                          children: (0, html_react_parser.ZP)(body),
                                                      }),
                                                      linkUrl &&
                                                          btnText &&
                                                          (0, jsx_runtime.jsx)('div', {
                                                              className: components_list_module.cta_btn,
                                                              children: (0, jsx_runtime.jsx)('a', { href: linkUrl, children: btnText }),
                                                          }),
                                                  ],
                                              }),
                                        'card' === modLayout && (0, jsx_runtime.jsx)('div', { className: components_list_module.colorBlock }),
                                    ],
                                }),
                            ],
                        }),
                    })
                }
            List.displayName = 'List'
            const components_List = List
            try {
                ;(List.displayName = 'List'),
                    (List.__docgenInfo = {
                        description: '',
                        displayName: 'List',
                        props: {
                            headline: { defaultValue: null, description: '', name: 'headline', required: !1, type: { name: 'string' } },
                            body: { defaultValue: null, description: '', name: 'body', required: !1, type: { name: 'string' } },
                            border: {
                                defaultValue: null,
                                description: 'Background border around conent and image',
                                name: 'border',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            imageUrl: {
                                defaultValue: null,
                                description: 'Optional image to go with content',
                                name: 'imageUrl',
                                required: !1,
                                type: { name: 'string' },
                            },
                            altText: {
                                defaultValue: null,
                                description: 'Text for image alt property',
                                name: 'altText',
                                required: !1,
                                type: { name: 'string' },
                            },
                            linkUrl: {
                                defaultValue: null,
                                description: 'URL to link to from optional button',
                                name: 'linkUrl',
                                required: !1,
                                type: { name: 'string' },
                            },
                            btnText: { defaultValue: null, description: '', name: 'btnText', required: !1, type: { name: 'string' } },
                            modLayout: {
                                defaultValue: null,
                                description: 'Style layout of component',
                                name: 'modLayout',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"card"' }, { value: '"article"' }] },
                            },
                            textSize: {
                                defaultValue: null,
                                description: 'Size of text',
                                name: 'textSize',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }] },
                            },
                            reverse: {
                                defaultValue: null,
                                description: 'Reverse order so image and text are swapped',
                                name: 'reverse',
                                required: !1,
                                type: { name: 'boolean' },
                            },
                            align: {
                                defaultValue: null,
                                description: 'Text align style',
                                name: 'align',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }, { value: '"center"' }] },
                            },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/List.tsx#List'] = {
                            docgenInfo: List.__docgenInfo,
                            name: 'List',
                            path: 'components/List.tsx#List',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const List_stories = {
                title: 'Modules/List',
                component: components_List,
                argTypes: {
                    textSize: { options: ['sm', 'md', 'lg'], control: { type: 'radio' } },
                    align: { options: ['left', 'right', 'center'], control: { type: 'radio' } },
                },
            }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_List, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Plain = Template.bind({})
            Plain.args = {
                headline: 'Hello',
                body: 'text goes here, text goes here, text goes here, text goes here, text goes here',
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
                textSize: 'md',
                border: !1,
                align: 'left',
            }
            var Large = Template.bind({})
            Large.args = Object.assign({}, Plain.args, { textSize: 'lg' })
            var Border = Template.bind({})
            Border.args = Object.assign({}, Large.args, { border: !0 })
            var Image = Template.bind({})
            Image.args = Object.assign({}, Large.args, { imageUrl: '/football-1.jpg' })
            var ImageReverse = Template.bind({})
            ImageReverse.args = Object.assign({}, Image.args, { reverse: !0 })
            var WithButton = Template.bind({})
            WithButton.args = Object.assign({}, Large.args, { imageUrl: '/football-1.jpg', border: !0, btnText: 'contact us', linkUrl: '/' })
            var Card = Template.bind({})
            Card.args = Object.assign({}, Large.args, { imageUrl: '/football-1.jpg', modLayout: 'card', btnText: 'contact us', linkUrl: '/' })
            var CardReverse = Template.bind({})
            ;(CardReverse.args = Object.assign({}, Card.args, { imageUrl: '/football-1.jpg', reverse: !0, btnText: 'contact us', linkUrl: '/' })),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, Plain.parameters)),
                (Large.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, Large.parameters)),
                (Border.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, Border.parameters)),
                (Image.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, Image.parameters)),
                (ImageReverse.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, ImageReverse.parameters)),
                (WithButton.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, WithButton.parameters)),
                (Card.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, Card.parameters)),
                (CardReverse.parameters = Object.assign({ storySource: { source: '(args) => <List {...args} />' } }, CardReverse.parameters))
            var __namedExportsOrder = ['Plain', 'Large', 'Border', 'Image', 'ImageReverse', 'WithButton', 'Card', 'CardReverse']
        },
        './stories/Navigation.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Plain: () => Plain,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Navigation_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.is-array.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                navigation_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/navigation.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(navigation_module.Z, options)
            const components_navigation_module = navigation_module.Z && navigation_module.Z.locals ? navigation_module.Z.locals : void 0
            var next_image = __webpack_require__('./node_modules/next/image.js'),
                image_default = __webpack_require__.n(next_image),
                Logo = __webpack_require__('./components/Logo.tsx'),
                Nav = __webpack_require__('./components/Nav.tsx'),
                classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                react = __webpack_require__('./node_modules/react/index.js'),
                functions = __webpack_require__('./functions.ts'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
                        if (null == _i) return
                        var _s,
                            _e,
                            _arr = [],
                            _n = !0,
                            _d = !1
                        try {
                            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
                        } catch (err) {
                            ;(_d = !0), (_e = err)
                        } finally {
                            try {
                                _n || null == _i.return || _i.return()
                            } finally {
                                if (_d) throw _e
                            }
                        }
                        return _arr
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return
                        if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
                        var n = Object.prototype.toString.call(o).slice(8, -1)
                        'Object' === n && o.constructor && (n = o.constructor.name)
                        if ('Map' === n || 'Set' === n) return Array.from(o)
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        )
                    })()
                )
            }
            function _arrayLikeToArray(arr, len) {
                ;(null == len || len > arr.length) && (len = arr.length)
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
                return arr2
            }
            var Navigation = function Navigation(props) {
                var _cn,
                    _props$navStyle = props.navStyle,
                    navStyle = void 0 === _props$navStyle ? 'layout1' : _props$navStyle,
                    logoUrl = props.logoUrl,
                    pages = props.pages,
                    navImage = props.navImage,
                    borderNum = props.borderNum,
                    _props$altText = props.altText,
                    altText = void 0 === _props$altText ? '' : _props$altText,
                    themeStyles = props.themeStyles,
                    _useState2 = _slicedToArray((0, react.useState)(!1), 2),
                    navCheck = _useState2[0],
                    setNav = _useState2[1],
                    navImageDomain = navImage && (0, functions.lj)(navImage),
                    logoDomain = logoUrl && (0, functions.lj)(logoUrl),
                    themeStylesObj = { background: '' + themeStyles.headerBackground, color: '' + themeStyles.textColorAccent }
                return (0, jsx_runtime.jsxs)('div', {
                    className: classnames_default()(
                        components_navigation_module.root,
                        ((_cn = {}), (_cn[components_navigation_module.layout2] = 'layout2' === navStyle), _cn)
                    ),
                    style: themeStylesObj,
                    children: [
                        (0, jsx_runtime.jsxs)('div', {
                            className: components_navigation_module.wrapper,
                            children: [
                                (0, jsx_runtime.jsx)('div', {
                                    className: components_navigation_module.logoBlock,
                                    children: logoUrl && (0, jsx_runtime.jsx)(Logo.Z, { logoUrl: logoDomain }),
                                }),
                                (0, jsx_runtime.jsx)('div', {
                                    className: components_navigation_module.burgerBlock,
                                    children: (0, jsx_runtime.jsx)(Burger, {
                                        navSwitch: function navSwitch() {
                                            setNav(!navCheck)
                                        },
                                        navCheck,
                                        themeStyles,
                                    }),
                                }),
                            ],
                        }),
                        (0, jsx_runtime.jsx)(Navbar, { navCheck, pages, navStyle, navImage: navImageDomain, borderNum, altText, themeStyles }),
                    ],
                })
            }
            Navigation.displayName = 'Navigation'
            var Navbar = function Navbar(props) {
                var _cn2,
                    _props$navCheck = props.navCheck,
                    navCheck = void 0 !== _props$navCheck && _props$navCheck,
                    _props$navStyle2 = props.navStyle,
                    navStyle = void 0 === _props$navStyle2 ? 'layout1' : _props$navStyle2,
                    navImage = props.navImage,
                    pages = props.pages,
                    borderNum = props.borderNum,
                    _props$altText2 = props.altText,
                    altText = void 0 === _props$altText2 ? '' : _props$altText2,
                    themeStyles = props.themeStyles,
                    navStyles = { background: '' + themeStyles.navBackground }
                return (0, jsx_runtime.jsx)('div', {
                    className: classnames_default()(
                        components_navigation_module.navBar,
                        ((_cn2 = {}),
                        (_cn2[components_navigation_module.visible] = navCheck),
                        (_cn2[components_navigation_module.layout2] = 'layout2' === navStyle),
                        (_cn2[components_navigation_module.hasImage] = navImage),
                        _cn2)
                    ),
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_navigation_module.wrapper,
                        children: (0, jsx_runtime.jsxs)('div', {
                            className: components_navigation_module.navDrop,
                            style: navStyles,
                            children: [
                                (0, jsx_runtime.jsx)('div', {
                                    className: components_navigation_module.navItems,
                                    children: (0, jsx_runtime.jsx)(Nav.Z, { pages, modLayout: 'header', borderNum, themeStyles }),
                                }),
                                navImage &&
                                    (0, jsx_runtime.jsx)('div', {
                                        className: components_navigation_module.imageTile,
                                        children: (0, jsx_runtime.jsx)(image_default(), {
                                            src: navImage,
                                            layout: 'fill',
                                            alt: altText,
                                            objectFit: 'cover',
                                            quality: '50',
                                        }),
                                    }),
                            ],
                        }),
                    }),
                })
            }
            Navbar.displayName = 'Navbar'
            var Burger = function Burger(props) {
                var _cn3,
                    navSwitch = props.navSwitch,
                    _props$navCheck2 = props.navCheck,
                    navCheck = void 0 !== _props$navCheck2 && _props$navCheck2,
                    burgerStyles = { background: '' + props.themeStyles.textColorAccent }
                return (0, jsx_runtime.jsx)('div', {
                    className: components_navigation_module.burger,
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_navigation_module.wrapper,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: classnames_default()(
                                components_navigation_module.burgerBtn,
                                ((_cn3 = {}), (_cn3[components_navigation_module.navActive] = navCheck), _cn3)
                            ),
                            children: (0, jsx_runtime.jsxs)('button', {
                                onClick: navSwitch,
                                'aria-label': 'toggle navigation',
                                children: [
                                    (0, jsx_runtime.jsx)('div', { style: burgerStyles }),
                                    (0, jsx_runtime.jsx)('div', { style: burgerStyles }),
                                    (0, jsx_runtime.jsx)('div', { style: burgerStyles }),
                                ],
                            }),
                        }),
                    }),
                })
            }
            Burger.displayName = 'Burger'
            const components_Navigation = Navigation
            try {
                ;(Navigation.displayName = 'Navigation'),
                    (Navigation.__docgenInfo = {
                        description: '',
                        displayName: 'Navigation',
                        props: {
                            navSwitch: { defaultValue: null, description: '', name: 'navSwitch', required: !1, type: { name: '(() => void)' } },
                            navCheck: {
                                defaultValue: null,
                                description: 'Boolean that determines if navbar being shown or hidden',
                                name: 'navCheck',
                                required: !0,
                                type: { name: 'boolean' },
                            },
                            pages: { defaultValue: null, description: '', name: 'pages', required: !0, type: { name: 'PagesProps[]' } },
                            modLayout: {
                                defaultValue: null,
                                description: 'Layout changes based on where Nav is being called',
                                name: 'modLayout',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"header"' }, { value: '"footer"' }] },
                            },
                            navStyle: {
                                defaultValue: null,
                                description: 'Mobile style layout of component',
                                name: 'navStyle',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"layout1"' }, { value: '"layout2"' }] },
                            },
                            borderNum: {
                                defaultValue: null,
                                description: 'Determines which item to place bottom border under in Nav',
                                name: 'borderNum',
                                required: !1,
                                type: { name: 'number' },
                            },
                            navImage: {
                                defaultValue: null,
                                description: 'Image that appears in navbar dropdown',
                                name: 'navImage',
                                required: !1,
                                type: { name: 'string' },
                            },
                            altText: { defaultValue: null, description: 'alt text for nav image', name: 'altText', required: !1, type: { name: 'string' } },
                            logoUrl: { defaultValue: null, description: 'Image url for logo', name: 'logoUrl', required: !1, type: { name: 'string' } },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Navigation.tsx#Navigation'] = {
                            docgenInfo: Navigation.__docgenInfo,
                            name: 'Navigation',
                            path: 'components/Navigation.tsx#Navigation',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Navigation_stories = { title: 'Modules/Navigation', component: components_Navigation }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Navigation, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Default = Template.bind({})
            Default.args = {
                navCheck: !1,
                pages: [
                    { name: 'Home', slug: '/home', id: '0' },
                    { name: 'Hockey', slug: '/hockey', id: '1' },
                    { name: 'Football', slug: '/football', id: '2' },
                    { name: 'Reviews', slug: '/reviews', id: '3' },
                    { name: 'Contact', slug: '/contact', id: '6' },
                    { name: 'Other', slug: '/', id: '7' },
                ],
                logoUrl: '/sports.png',
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
                navImage: 'football-1.jpg',
            }
            var Plain = Template.bind({})
            ;(Plain.args = Object.assign({}, Default.args)),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <Navigation {...args} />' } }, Plain.parameters))
            var __namedExportsOrder = ['Plain']
        },
        './stories/Text.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    Border: () => Border,
                    Center: () => Center,
                    Large: () => Large,
                    Plain: () => Plain,
                    Right: () => Right,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Text_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'), __webpack_require__('./node_modules/core-js/modules/es.function.bind.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                text_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/text.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(text_module.Z, options)
            const components_text_module = text_module.Z && text_module.Z.locals ? text_module.Z.locals : void 0
            var classnames = __webpack_require__('./node_modules/classnames/index.js'),
                classnames_default = __webpack_require__.n(classnames),
                html_react_parser = __webpack_require__('./node_modules/html-react-parser/index.mjs'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
            function Text(props) {
                var _cn,
                    _cn2,
                    _props$border = props.border,
                    border = void 0 !== _props$border && _props$border,
                    _props$gap = props.gap,
                    gap = void 0 !== _props$gap && _props$gap,
                    _props$align = props.align,
                    align = void 0 === _props$align ? 'left' : _props$align,
                    _props$textSize = props.textSize,
                    textSize = void 0 === _props$textSize ? 'md' : _props$textSize,
                    _props$text = props.text,
                    text = void 0 === _props$text ? '' : _props$text,
                    themeStyles = props.themeStyles,
                    themeStylesObj = { color: '' + themeStyles.textColor },
                    borderStyles = { color: '' + themeStyles.textColor, border: '4px solid ' + themeStyles.textColor }
                return (0, jsx_runtime.jsx)('div', {
                    className: components_text_module.root,
                    children: (0, jsx_runtime.jsx)('div', {
                        className: components_text_module.wrapper,
                        children: (0, jsx_runtime.jsx)('div', {
                            className: classnames_default()(
                                ((_cn = {}),
                                (_cn[components_text_module.body] = !0),
                                (_cn[components_text_module.bordered] = border),
                                (_cn[components_text_module.gap] = gap),
                                _cn)
                            ),
                            style: border ? borderStyles : themeStylesObj,
                            children: (0, jsx_runtime.jsx)('div', {
                                className: classnames_default()(
                                    components_text_module.text,
                                    ((_cn2 = {}),
                                    (_cn2[components_text_module.center] = 'center' === align),
                                    (_cn2[components_text_module.left] = 'left' === align),
                                    (_cn2[components_text_module.right] = 'right' === align),
                                    (_cn2[components_text_module.lg] = 'lg' === textSize),
                                    (_cn2[components_text_module.md] = 'md' === textSize),
                                    (_cn2[components_text_module.sm] = 'sm' === textSize),
                                    _cn2)
                                ),
                                children: (0, html_react_parser.ZP)(text),
                            }),
                        }),
                    }),
                })
            }
            Text.displayName = 'Text'
            const components_Text = Text
            try {
                ;(Text.displayName = 'Text'),
                    (Text.__docgenInfo = {
                        description: '',
                        displayName: 'Text',
                        props: {
                            border: { defaultValue: null, description: 'Bottom border under text', name: 'border', required: !1, type: { name: 'boolean' } },
                            gap: { defaultValue: null, description: 'Spacing around text', name: 'gap', required: !1, type: { name: 'boolean' } },
                            align: {
                                defaultValue: null,
                                description: 'Text align style',
                                name: 'align',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }, { value: '"center"' }] },
                            },
                            textSize: {
                                defaultValue: null,
                                description: 'Size of text',
                                name: 'textSize',
                                required: !1,
                                type: { name: 'enum', value: [{ value: '"sm"' }, { value: '"md"' }, { value: '"lg"' }] },
                            },
                            text: { defaultValue: null, description: '', name: 'text', required: !0, type: { name: 'string' } },
                            themeStyles: {
                                defaultValue: null,
                                description: 'Global site styles',
                                name: 'themeStyles',
                                required: !0,
                                type: { name: 'ThemeStyles' },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Text.tsx#Text'] = {
                            docgenInfo: Text.__docgenInfo,
                            name: 'Text',
                            path: 'components/Text.tsx#Text',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Text_stories = {
                title: 'Modules/Text',
                component: components_Text,
                argTypes: {
                    textSize: { options: ['sm', 'md', 'lg'], control: { type: 'radio' } },
                    align: { options: ['left', 'right', 'center'], control: { type: 'radio' } },
                },
            }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Text, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Plain = Template.bind({})
            Plain.args = {
                text: 'hello',
                themeStyles: {
                    promoColor: '#365070',
                    textColor: 'rgb(46, 46, 46)',
                    headingColor: 'rgb(46, 46, 46)',
                    textColorAccent: '#fff',
                    linkColor: 'rgb(230, 211, 65)',
                    accentBackgroundColor: '#000',
                    promoColor2: 'rgb(230, 211, 65)',
                    altColor: 'rgb(230, 211, 65)',
                    headerBackground: 'rgb(64,64,64)',
                    footerBackground: 'linear-gradient(rgb(54,80,112, 0.6) 0%, rgb(54,80,112) 23%)',
                    navBackground: 'rgb(64,64,64,.9)',
                },
                textSize: 'md',
            }
            var Large = Template.bind({})
            Large.args = Object.assign({}, Plain.args, { textSize: 'lg' })
            var Right = Template.bind({})
            Right.args = Object.assign({}, Large.args, { align: 'right' })
            var Center = Template.bind({})
            Center.args = Object.assign({}, Large.args, { align: 'center' })
            var Border = Template.bind({})
            ;(Border.args = Object.assign({}, Center.args, { border: !0 })),
                (Plain.parameters = Object.assign({ storySource: { source: '(args) => <Text {...args} />' } }, Plain.parameters)),
                (Large.parameters = Object.assign({ storySource: { source: '(args) => <Text {...args} />' } }, Large.parameters)),
                (Right.parameters = Object.assign({ storySource: { source: '(args) => <Text {...args} />' } }, Right.parameters)),
                (Center.parameters = Object.assign({ storySource: { source: '(args) => <Text {...args} />' } }, Center.parameters)),
                (Border.parameters = Object.assign({ storySource: { source: '(args) => <Text {...args} />' } }, Border.parameters))
            var __namedExportsOrder = ['Plain', 'Large', 'Right', 'Center', 'Border']
        },
        './stories/Video.stories.tsx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    External: () => External,
                    __namedExportsOrder: () => __namedExportsOrder,
                    default: () => Video_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.is-array.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.from.js')
            var injectStylesIntoStyleTag = __webpack_require__('./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'),
                injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
                styleDomAPI = __webpack_require__('./node_modules/style-loader/dist/runtime/styleDomAPI.js'),
                styleDomAPI_default = __webpack_require__.n(styleDomAPI),
                insertBySelector = __webpack_require__('./node_modules/style-loader/dist/runtime/insertBySelector.js'),
                insertBySelector_default = __webpack_require__.n(insertBySelector),
                setAttributesWithoutAttributes = __webpack_require__('./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js'),
                setAttributesWithoutAttributes_default = __webpack_require__.n(setAttributesWithoutAttributes),
                insertStyleElement = __webpack_require__('./node_modules/style-loader/dist/runtime/insertStyleElement.js'),
                insertStyleElement_default = __webpack_require__.n(insertStyleElement),
                styleTagTransform = __webpack_require__('./node_modules/style-loader/dist/runtime/styleTagTransform.js'),
                styleTagTransform_default = __webpack_require__.n(styleTagTransform),
                video_module = __webpack_require__(
                    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/video.module.scss'
                ),
                options = {}
            ;(options.styleTagTransform = styleTagTransform_default()),
                (options.setAttributes = setAttributesWithoutAttributes_default()),
                (options.insert = insertBySelector_default().bind(null, 'head')),
                (options.domAPI = styleDomAPI_default()),
                (options.insertStyleElement = insertStyleElement_default())
            injectStylesIntoStyleTag_default()(video_module.Z, options)
            const components_video_module = video_module.Z && video_module.Z.locals ? video_module.Z.locals : void 0
            var lazy = __webpack_require__('./node_modules/react-player/lazy/index.js'),
                react = __webpack_require__('./node_modules/react/index.js'),
                jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js')
            function _slicedToArray(arr, i) {
                return (
                    (function _arrayWithHoles(arr) {
                        if (Array.isArray(arr)) return arr
                    })(arr) ||
                    (function _iterableToArrayLimit(arr, i) {
                        var _i = null == arr ? null : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator']
                        if (null == _i) return
                        var _s,
                            _e,
                            _arr = [],
                            _n = !0,
                            _d = !1
                        try {
                            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0);
                        } catch (err) {
                            ;(_d = !0), (_e = err)
                        } finally {
                            try {
                                _n || null == _i.return || _i.return()
                            } finally {
                                if (_d) throw _e
                            }
                        }
                        return _arr
                    })(arr, i) ||
                    (function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return
                        if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
                        var n = Object.prototype.toString.call(o).slice(8, -1)
                        'Object' === n && o.constructor && (n = o.constructor.name)
                        if ('Map' === n || 'Set' === n) return Array.from(o)
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen)
                    })(arr, i) ||
                    (function _nonIterableRest() {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        )
                    })()
                )
            }
            function _arrayLikeToArray(arr, len) {
                ;(null == len || len > arr.length) && (len = arr.length)
                for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
                return arr2
            }
            var Video = function Video(props) {
                var videoUrl = props.videoUrl,
                    _props$modLayout = props.modLayout,
                    modLayout = void 0 === _props$modLayout ? 'local' : _props$modLayout,
                    _useState2 = _slicedToArray((0, react.useState)(!0), 2),
                    isSSR = _useState2[0],
                    setIsSSR = _useState2[1]
                return (
                    (0, react.useEffect)(function () {
                        setIsSSR(!1)
                    }, []),
                    (0, jsx_runtime.jsx)('div', {
                        className: components_video_module.root,
                        children:
                            !isSSR &&
                            (0, jsx_runtime.jsx)('div', {
                                className: components_video_module.wrapper,
                                children: (0, jsx_runtime.jsxs)('div', {
                                    className: components_video_module.videoBlock,
                                    children: [
                                        'ext' === modLayout &&
                                            (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                                children: (0, jsx_runtime.jsx)(lazy.Z, { url: videoUrl, light: !0, controls: !0 }),
                                            }),
                                        'local' === modLayout &&
                                            (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                                children: (0, jsx_runtime.jsx)(lazy.Z, { url: videoUrl, controls: !0 }),
                                            }),
                                    ],
                                }),
                            }),
                    })
                )
            }
            Video.displayName = 'Video'
            const components_Video = Video
            try {
                ;(Video.displayName = 'Video'),
                    (Video.__docgenInfo = {
                        description: '',
                        displayName: 'Video',
                        props: {
                            videoUrl: { defaultValue: null, description: 'Video URL for logo', name: 'videoUrl', required: !0, type: { name: 'string' } },
                            modLayout: {
                                defaultValue: null,
                                description: 'Style layout of component',
                                name: 'modLayout',
                                required: !0,
                                type: { name: 'enum', value: [{ value: '"ext"' }, { value: '"local"' }] },
                            },
                        },
                    }),
                    'undefined' != typeof STORYBOOK_REACT_CLASSES &&
                        (STORYBOOK_REACT_CLASSES['components/Video.tsx#Video'] = {
                            docgenInfo: Video.__docgenInfo,
                            name: 'Video',
                            path: 'components/Video.tsx#Video',
                        })
            } catch (__react_docgen_typescript_loader_error) {}
            const Video_stories = { title: 'Modules/Video', component: components_Video }
            var Template = function Template(args) {
                return (0, jsx_runtime.jsx)(components_Video, Object.assign({}, args))
            }
            Template.displayName = 'Template'
            var Default = Template.bind({})
            Default.args = { videoUrl: 'https://youtu.be/cTCgU4Vz0rE', modLayout: 'ext' }
            var External = Template.bind({})
            ;(External.args = Object.assign({}, Default.args)),
                (External.parameters = Object.assign({ storySource: { source: '(args) => <Video {...args} />' } }, External.parameters))
            var __namedExportsOrder = ['External']
        },
        './storybook-init-framework-entry.js': (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js')
        },
        './stories/Introduction.stories.mdx': (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                __webpack_require__.d(__webpack_exports__, {
                    __namedExportsOrder: () => __namedExportsOrder,
                    __page: () => __page,
                    default: () => Introduction_stories,
                })
            __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
                __webpack_require__('./node_modules/core-js/modules/es.array.index-of.js'),
                __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
                __webpack_require__('./node_modules/core-js/modules/es.function.bind.js'),
                __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
                __webpack_require__('./node_modules/react/index.js')
            var esm = __webpack_require__('./node_modules/@mdx-js/react/dist/esm.js'),
                dist_esm = __webpack_require__('./node_modules/@storybook/addon-docs/dist/esm/index.js')
            const code_brackets = {
                    src: 'static/media/code-brackets.b174d86c.svg',
                    height: 48,
                    width: 48,
                    blurDataURL: 'static/media/code-brackets.b174d86c.svg',
                },
                colors = { src: 'static/media/colors.d8002bff.svg', height: 48, width: 48, blurDataURL: 'static/media/colors.d8002bff.svg' },
                comments = { src: 'static/media/comments.99a445bb.svg', height: 48, width: 48, blurDataURL: 'static/media/comments.99a445bb.svg' },
                direction = { src: 'static/media/direction.aa124ee4.svg', height: 48, width: 48, blurDataURL: 'static/media/direction.aa124ee4.svg' },
                flow = { src: 'static/media/flow.8dcedb2a.svg', height: 48, width: 48, blurDataURL: 'static/media/flow.8dcedb2a.svg' },
                assets_plugin = { src: 'static/media/plugin.738c41b2.svg', height: 48, width: 48, blurDataURL: 'static/media/plugin.738c41b2.svg' },
                repo = { src: 'static/media/repo.77297c5c.svg', height: 48, width: 48, blurDataURL: 'static/media/repo.77297c5c.svg' },
                stackalt = { src: 'static/media/stackalt.5cf1d85a.svg', height: 48, width: 48, blurDataURL: 'static/media/stackalt.5cf1d85a.svg' }
            var _excluded = ['components']
            function _extends() {
                return (
                    (_extends = Object.assign
                        ? Object.assign.bind()
                        : function (target) {
                              for (var i = 1; i < arguments.length; i++) {
                                  var source = arguments[i]
                                  for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
                              }
                              return target
                          }),
                    _extends.apply(this, arguments)
                )
            }
            function _objectWithoutProperties(source, excluded) {
                if (null == source) return {}
                var key,
                    i,
                    target = (function _objectWithoutPropertiesLoose(source, excluded) {
                        if (null == source) return {}
                        var key,
                            i,
                            target = {},
                            sourceKeys = Object.keys(source)
                        for (i = 0; i < sourceKeys.length; i++) (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
                        return target
                    })(source, excluded)
                if (Object.getOwnPropertySymbols) {
                    var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
                    for (i = 0; i < sourceSymbolKeys.length; i++)
                        (key = sourceSymbolKeys[i]),
                            excluded.indexOf(key) >= 0 || (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]))
                }
                return target
            }
            var layoutProps = {}
            function MDXContent(_ref) {
                var components = _ref.components,
                    props = _objectWithoutProperties(_ref, _excluded)
                return (0, esm.kt)(
                    'wrapper',
                    _extends({}, layoutProps, props, { components, mdxType: 'MDXLayout' }),
                    (0, esm.kt)(dist_esm.h_, { title: 'Example/Introduction', mdxType: 'Meta' }),
                    (0, esm.kt)(
                        'style',
                        null,
                        "\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "
                    ),
                    (0, esm.kt)('h1', null, 'Welcome to Storybook'),
                    (0, esm.kt)(
                        'p',
                        null,
                        "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
                        (0, esm.kt)('strong', { parentName: 'p' }, 'stories'),
                        ' to revisit during development, testing, or QA.'
                    ),
                    (0, esm.kt)(
                        'p',
                        null,
                        'Browse example stories now by navigating to them in the sidebar.\nView their code in the ',
                        (0, esm.kt)('inlineCode', { parentName: 'p' }, 'stories'),
                        ' directory to learn how they work.\nWe recommend building UIs with a ',
                        (0, esm.kt)(
                            'a',
                            { parentName: 'p', href: 'https://componentdriven.org' },
                            (0, esm.kt)('strong', { parentName: 'a' }, 'component-driven')
                        ),
                        ' process starting with atomic components and ending with pages.'
                    ),
                    (0, esm.kt)('div', { className: 'subheading' }, 'Configure'),
                    (0, esm.kt)(
                        'div',
                        { className: 'link-list' },
                        (0, esm.kt)(
                            'a',
                            { className: 'link-item', href: 'https://storybook.js.org/docs/react/addons/addon-types', target: '_blank' },
                            (0, esm.kt)('img', { src: assets_plugin, alt: 'plugin' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'Presets for popular tools'), 'Easy setup for TypeScript, SCSS and more.')
                        ),
                        (0, esm.kt)(
                            'a',
                            { className: 'link-item', href: 'https://storybook.js.org/docs/react/configure/webpack', target: '_blank' },
                            (0, esm.kt)('img', { src: stackalt, alt: 'Build' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'Build configuration'), 'How to customize webpack and Babel')
                        ),
                        (0, esm.kt)(
                            'a',
                            { className: 'link-item', href: 'https://storybook.js.org/docs/react/configure/styling-and-css', target: '_blank' },
                            (0, esm.kt)('img', { src: colors, alt: 'colors' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'Styling'), 'How to load and configure CSS libraries')
                        ),
                        (0, esm.kt)(
                            'a',
                            {
                                className: 'link-item',
                                href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
                                target: '_blank',
                            },
                            (0, esm.kt)('img', { src: flow, alt: 'flow' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'Data'), 'Providers and mocking for data libraries')
                        )
                    ),
                    (0, esm.kt)('div', { className: 'subheading' }, 'Learn'),
                    (0, esm.kt)(
                        'div',
                        { className: 'link-list' },
                        (0, esm.kt)(
                            'a',
                            { className: 'link-item', href: 'https://storybook.js.org/docs', target: '_blank' },
                            (0, esm.kt)('img', { src: repo, alt: 'repo' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'Storybook documentation'), 'Configure, customize, and extend')
                        ),
                        (0, esm.kt)(
                            'a',
                            { className: 'link-item', href: 'https://storybook.js.org/tutorials/', target: '_blank' },
                            (0, esm.kt)('img', { src: direction, alt: 'direction' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'In-depth guides'), 'Best practices from leading teams')
                        ),
                        (0, esm.kt)(
                            'a',
                            { className: 'link-item', href: 'https://github.com/storybookjs/storybook', target: '_blank' },
                            (0, esm.kt)('img', { src: code_brackets, alt: 'code' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'GitHub project'), 'View the source and add issues')
                        ),
                        (0, esm.kt)(
                            'a',
                            { className: 'link-item', href: 'https://discord.gg/storybook', target: '_blank' },
                            (0, esm.kt)('img', { src: comments, alt: 'comments' }),
                            (0, esm.kt)('span', null, (0, esm.kt)('strong', null, 'Discord chat'), 'Chat with maintainers and the community')
                        )
                    ),
                    (0, esm.kt)(
                        'div',
                        { className: 'tip-wrapper' },
                        (0, esm.kt)('span', { className: 'tip' }, 'Tip'),
                        'Edit the Markdown in',
                        ' ',
                        (0, esm.kt)('code', null, 'stories/Introduction.stories.mdx')
                    )
                )
            }
            ;(MDXContent.displayName = 'MDXContent'), (MDXContent.isMDXComponent = !0)
            var __page = function __page() {
                throw new Error('Docs-only story')
            }
            __page.parameters = { docsOnly: !0 }
            var Meta = { title: 'Example/Introduction', includeStories: ['__page'] },
                mdxStoryNameToKey = {}
            ;(Meta.parameters = Meta.parameters || {}),
                (Meta.parameters.docs = Object.assign({}, Meta.parameters.docs || {}, {
                    page: function page() {
                        return (0, esm.kt)(dist_esm.aT, { mdxStoryNameToKey, mdxComponentAnnotations: Meta }, (0, esm.kt)(MDXContent, null))
                    },
                }))
            const Introduction_stories = Meta
            var __namedExportsOrder = ['__page']
        },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/carousel.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.carousel_root__Llz_t{width:100%;margin-bottom:30px}.carousel_root__Llz_t .carousel_wrapper__Wxvth{max-width:1200px;margin:0 auto;box-sizing:border-box}@media(min-width: 576px){.carousel_root__Llz_t .carousel_wrapper__Wxvth{width:80%;margin:0 auto}}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_slideItems__DCrcu .carousel_item__m_w8Y{display:flex;justify-content:center;align-items:center}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_slideItems__DCrcu .carousel_item__m_w8Y .carousel_text__33qJC{padding-top:0;margin:0 auto}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_slideItems__DCrcu .carousel_item__m_w8Y .carousel_text__33qJC p{font-style:italic}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_slideItems__DCrcu .carousel_item__m_w8Y div div{line-height:0 !important}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_slideItems__DCrcu .carousel_imageTile___5yzp{position:relative;aspect-ratio:1.3333333333}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasImage__Orcbg{line-height:0 !important}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71{padding:0 20px 20px 20px;line-height:auto}@media(min-width: 576px){.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71{padding:0}}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_item__m_w8Y{margin-bottom:20px}@media(min-width: 576px){.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_item__m_w8Y{padding:0}}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_item__m_w8Y h3{font-weight:normal}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_nextBtn__KlMGi{font-size:20px;line-height:auto;width:100%;text-align:right;position:static}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_nextBtn__KlMGi:before{display:none}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_prevBtn__xLAZN{display:none !important}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_nextBtn__KlMGi:before{color:#000}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_slick-arrow__xzxrk.carousel_slick-next__6QKyB.carousel_nextImageBtm__qlhyD{right:0 !important}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_slideItems__DCrcu{margin:15px auto}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_slideItems__DCrcu .carousel_slick-next__6QKyB{right:0 !important}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_slick-slider__WlO8N button{left:0}.carousel_root__Llz_t .carousel_wrapper__Wxvth.carousel_hasText____t71 .carousel_slick-slider__WlO8N button:before{color:#fff}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq{z-index:999;height:30px;width:30px}@media(min-width: 576px){.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq{height:50px;width:30px}}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq:before{color:#fff;font-size:30px}@media(min-width: 576px){.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq:before{display:none}}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq.carousel_nextImageBtn__807M0{right:0}@media(min-width: 576px){.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq.carousel_nextImageBtn__807M0{clip-path:polygon(100% 50%, 0 0, 0 100%);right:-30px}}.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq.carousel_prevImageBtn__kBjX6{left:0}@media(min-width: 576px){.carousel_root__Llz_t .carousel_wrapper__Wxvth .carousel_imageBtns__hZNGq.carousel_prevImageBtn__kBjX6{clip-path:polygon(0 50%, 100% 0, 100% 100%);left:-30px}}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/carousel.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                        ],
                        names: [],
                        mappings:
                            'AAOA,sBCII,UAAA,CACA,kBAHiB,CDCjB,+CACI,gBEPS,CFQT,aAAA,CACA,qBAAA,CGiBJ,yBHpBA,+CAOQ,SEdI,CFeJ,aAAA,CAAA,CAIA,iGACI,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,uHACI,aAAA,CACA,aAAA,CACA,yHACI,iBAAA,CAKJ,yGACI,wBAAA,CAKZ,sGACI,iBAAA,CACA,yBEvCG,CF2CX,wEACI,wBAAA,CAKJ,uEAGI,wBAAA,CACA,gBAAA,CG5BR,yBHwBI,uEAOQ,SAAA,CAAA,CAGJ,6FACI,kBEzDV,CCsBF,yBHkCQ,6FAIQ,SAAA,CAAA,CAGJ,gGACI,kBAAA,CAIR,gGACI,cAAA,CAEA,gBAAA,CACA,UAAA,CACA,gBAAA,CACA,eAAA,CAEA,uGACI,YAAA,CAIR,gGACI,uBAAA,CAGJ,uGACI,UAAA,CAGJ,4JACI,kBAAA,CAGJ,mGACI,gBAAA,CAEA,+HACI,kBAAA,CAKJ,4GACI,MAAA,CAEA,mHACI,UAAA,CAMhB,0EACI,WAAA,CACA,WArHA,CAsHA,UAtHA,CGyBR,yBH0FI,0EAMQ,WAAA,CACA,UA1HJ,CAAA,CA8HA,iFACI,UAAA,CACA,cAhIJ,CGyBR,yBHqGQ,iFAIQ,YAAA,CAAA,CAIR,uGACI,OAAA,CG9GZ,yBH6GQ,uGAGQ,wCAAA,CACA,WAAA,CAAA,CAIR,uGACI,MAAA,CGtHZ,yBHqHQ,uGAGQ,2CAAA,CACA,UAAA,CAAA',
                        sourcesContent: [
                            '.root{width:100%;margin-bottom:30px}.root .wrapper{max-width:1200px;margin:0 auto;box-sizing:border-box}@media(min-width: 576px){.root .wrapper{width:80%;margin:0 auto}}.root .wrapper .slideItems .item{display:flex;justify-content:center;align-items:center}.root .wrapper .slideItems .item .text{padding-top:0;margin:0 auto}.root .wrapper .slideItems .item .text p{font-style:italic}.root .wrapper .slideItems .item div div{line-height:0 !important}.root .wrapper .slideItems .imageTile{position:relative;aspect-ratio:1.3333333333}.root .wrapper.hasImage{line-height:0 !important}.root .wrapper.hasText{padding:0 20px 20px 20px;line-height:auto}@media(min-width: 576px){.root .wrapper.hasText{padding:0}}.root .wrapper.hasText .item{margin-bottom:20px}@media(min-width: 576px){.root .wrapper.hasText .item{padding:0}}.root .wrapper.hasText .item h3{font-weight:normal}.root .wrapper.hasText .nextBtn{font-size:20px;line-height:auto;width:100%;text-align:right;position:static}.root .wrapper.hasText .nextBtn:before{display:none}.root .wrapper.hasText .prevBtn{display:none !important}.root .wrapper.hasText .nextBtn:before{color:#000}.root .wrapper.hasText .slick-arrow.slick-next.nextImageBtm{right:0 !important}.root .wrapper.hasText .slideItems{margin:15px auto}.root .wrapper.hasText .slideItems .slick-next{right:0 !important}.root .wrapper.hasText .slick-slider button{left:0}.root .wrapper.hasText .slick-slider button:before{color:#fff}.root .wrapper .imageBtns{z-index:999;height:30px;width:30px}@media(min-width: 576px){.root .wrapper .imageBtns{height:50px;width:30px}}.root .wrapper .imageBtns:before{color:#fff;font-size:30px}@media(min-width: 576px){.root .wrapper .imageBtns:before{display:none}}.root .wrapper .imageBtns.nextImageBtn{right:0}@media(min-width: 576px){.root .wrapper .imageBtns.nextImageBtn{clip-path:polygon(100% 50%, 0 0, 0 100%);right:-30px}}.root .wrapper .imageBtns.prevImageBtn{left:0}@media(min-width: 576px){.root .wrapper .imageBtns.prevImageBtn{clip-path:polygon(0 50%, 100% 0, 100% 100%);left:-30px}}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'carousel_root__Llz_t',
                        wrapper: 'carousel_wrapper__Wxvth',
                        slideItems: 'carousel_slideItems__DCrcu',
                        item: 'carousel_item__m_w8Y',
                        text: 'carousel_text__33qJC',
                        imageTile: 'carousel_imageTile___5yzp',
                        hasImage: 'carousel_hasImage__Orcbg',
                        hasText: 'carousel_hasText____t71',
                        nextBtn: 'carousel_nextBtn__KlMGi',
                        prevBtn: 'carousel_prevBtn__xLAZN',
                        'slick-arrow': 'carousel_slick-arrow__xzxrk',
                        'slick-next': 'carousel_slick-next__6QKyB',
                        nextImageBtm: 'carousel_nextImageBtm__qlhyD',
                        'slick-slider': 'carousel_slick-slider__WlO8N',
                        imageBtns: 'carousel_imageBtns__hZNGq',
                        nextImageBtn: 'carousel_nextImageBtn__807M0',
                        prevImageBtn: 'carousel_prevImageBtn__kBjX6',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/footer.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.footer_root__UvkxN{width:100%}.footer_root__UvkxN .footer_wrapper__ZA8Tc{max-width:1200px;margin:0 auto;grid-template-columns:repeat(4, 1fr);padding:30px;padding-top:70px}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc{display:grid;width:80%}}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc{padding-top:50px}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh{text-align:center;margin-bottom:40px}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh{text-align:left;margin-bottom:0}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh p{margin:10px 0 10px 0}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk{grid-column:1/2;font-size:13px}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk{font-size:15px}}@media(min-width: 992px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk{font-size:20px}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk div{margin:0 auto;text-align:center}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6{display:flex;margin:20px 0;justify-content:space-around;align-items:center;font-weight:bold;font-size:20px}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6{font-size:20px}}@media(min-width: 992px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6{font-size:35px}}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6{justify-content:space-between;margin:0}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6 a{flex:25 0 0;text-align:center;max-width:25px}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6 a{padding:10px;max-width:15px}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6 a:first-of-type{padding-left:0}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6 a:last-of-type{padding-right:0}}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_social__Kkx_6 a{padding:10px;max-width:25px}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_phone__U0iUh{font-size:20px;margin:0}@media(min-width: 576px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_phone__U0iUh{font-size:20px}}@media(min-width: 1200px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_logoInfo__LYPRk .footer_phone__U0iUh{font-size:30px}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_navInfo__pP36Q{grid-column:2/4;padding:0 20px 0 20px}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_navInfo__pP36Q{width:70%;margin:0 auto;padding:0}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_addInfo__jedMI{grid-column:4/5;line-height:1;font-size:15px}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_addInfo__jedMI{display:flex;justify-content:flex-end;font-size:15px}}@media(min-width: 992px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_addInfo__jedMI{font-size:23px}}.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_siteInfo__CAC_W{grid-row:5/7;line-height:1;font-size:15px}@media(min-width: 576px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_siteInfo__CAC_W{font-size:10px}}@media(min-width: 768px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_siteInfo__CAC_W{font-size:15px}}@media(min-width: 992px){.footer_root__UvkxN .footer_wrapper__ZA8Tc .footer_block__i8Zqh.footer_siteInfo__CAC_W{font-size:18px}}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/footer.module.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                            'webpack://./styles/utils.scss',
                        ],
                        names: [],
                        mappings:
                            'AAKA,oBACI,UAAA,CAKA,2CACI,gBCRS,CDST,aAAA,CAOA,oCAAA,CACA,YAAA,CACA,gBAAA,CEeJ,yBF1BA,2CAKQ,YAAA,CACA,SCdI,CAAA,CCkCZ,yBF1BA,2CAcQ,gBAAA,CAAA,CAGJ,gEACI,iBAAA,CACA,kBAAA,CEOR,yBFTI,gEAKQ,eAAA,CACA,eAAA,CAAA,CAGJ,kEACI,oBAAA,CAGJ,uFACI,eAAA,CGQZ,cFnBiB,CCMjB,yBFIQ,uFGYJ,cFrBY,CAAA,CCYhB,yBFHQ,uFGeJ,cFvBY,CAAA,CDYJ,2FACI,aAAA,CACA,iBAAA,CAGJ,6GACI,YAAA,CACA,aAAA,CACA,4BAAA,CACA,kBAAA,CG4BhB,gBAAA,CACA,cF5CgB,CCFhB,yBFaY,6GGoCR,cF/CY,CAAA,CCKhB,yBFMY,6GGwCR,cFlDY,CAAA,CCHhB,yBFaY,6GAQQ,6BAAA,CACA,QAAA,CAAA,CAGJ,+GACI,WAAA,CACA,iBAAA,CACA,cAAA,CE5BpB,yBFyBgB,+GAMQ,YAAA,CACA,cAAA,CAEA,6HACI,cAAA,CAGJ,4HACI,eAAA,CAAA,CEvC5B,yBFyBgB,+GAmBQ,YAAA,CACA,cAAA,CAAA,CASZ,4GAEI,cC5DA,CD6DA,QAAA,CEhEhB,yBF6DY,4GAMQ,cChEJ,CAAA,CCkBhB,0BFwCY,4GAUQ,cCnEJ,CAAA,CDwER,sFACI,eAAA,CACA,qBAAA,CEvEZ,yBFqEQ,sFAKQ,SAAA,CACA,aAAA,CACA,SAAA,CAAA,CAIR,sFACI,eAAA,CACA,aAAA,CACA,cAAA,CEnFZ,yBFgFQ,sFAMQ,YAAA,CACA,wBAAA,CACA,cAAA,CAAA,CEjFhB,yBFyEQ,sFAYQ,cAAA,CAAA,CAIR,uFACI,YAAA,CACA,aAAA,CACA,cAAA,CE1GZ,yBFuGQ,uFAMQ,cAAA,CAAA,CEtGhB,yBFgGQ,uFAUQ,cAAA,CAAA,CEnGhB,yBFyFQ,uFAcQ,cAAA,CAAA',
                        sourcesContent: [
                            '.root{width:100%}.root .wrapper{max-width:1200px;margin:0 auto;grid-template-columns:repeat(4, 1fr);padding:30px;padding-top:70px}@media(min-width: 768px){.root .wrapper{display:grid;width:80%}}@media(min-width: 768px){.root .wrapper{padding-top:50px}}.root .wrapper .block{text-align:center;margin-bottom:40px}@media(min-width: 768px){.root .wrapper .block{text-align:left;margin-bottom:0}}.root .wrapper .block p{margin:10px 0 10px 0}.root .wrapper .block.logoInfo{grid-column:1/2;font-size:13px}@media(min-width: 768px){.root .wrapper .block.logoInfo{font-size:15px}}@media(min-width: 992px){.root .wrapper .block.logoInfo{font-size:20px}}.root .wrapper .block.logoInfo div{margin:0 auto;text-align:center}.root .wrapper .block.logoInfo .social{display:flex;margin:20px 0;justify-content:space-around;align-items:center;font-weight:bold;font-size:20px}@media(min-width: 768px){.root .wrapper .block.logoInfo .social{font-size:20px}}@media(min-width: 992px){.root .wrapper .block.logoInfo .social{font-size:35px}}@media(min-width: 768px){.root .wrapper .block.logoInfo .social{justify-content:space-between;margin:0}}.root .wrapper .block.logoInfo .social a{flex:25 0 0;text-align:center;max-width:25px}@media(min-width: 768px){.root .wrapper .block.logoInfo .social a{padding:10px;max-width:15px}.root .wrapper .block.logoInfo .social a:first-of-type{padding-left:0}.root .wrapper .block.logoInfo .social a:last-of-type{padding-right:0}}@media(min-width: 768px){.root .wrapper .block.logoInfo .social a{padding:10px;max-width:25px}}.root .wrapper .block.logoInfo .phone{font-size:20px;margin:0}@media(min-width: 576px){.root .wrapper .block.logoInfo .phone{font-size:20px}}@media(min-width: 1200px){.root .wrapper .block.logoInfo .phone{font-size:30px}}.root .wrapper .block.navInfo{grid-column:2/4;padding:0 20px 0 20px}@media(min-width: 768px){.root .wrapper .block.navInfo{width:70%;margin:0 auto;padding:0}}.root .wrapper .block.addInfo{grid-column:4/5;line-height:1;font-size:15px}@media(min-width: 768px){.root .wrapper .block.addInfo{display:flex;justify-content:flex-end;font-size:15px}}@media(min-width: 992px){.root .wrapper .block.addInfo{font-size:23px}}.root .wrapper .block.siteInfo{grid-row:5/7;line-height:1;font-size:15px}@media(min-width: 576px){.root .wrapper .block.siteInfo{font-size:10px}}@media(min-width: 768px){.root .wrapper .block.siteInfo{font-size:15px}}@media(min-width: 992px){.root .wrapper .block.siteInfo{font-size:18px}}',
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'footer_root__UvkxN',
                        wrapper: 'footer_wrapper__ZA8Tc',
                        block: 'footer_block__i8Zqh',
                        logoInfo: 'footer_logoInfo__LYPRk',
                        social: 'footer_social__Kkx_6',
                        phone: 'footer_phone__U0iUh',
                        navInfo: 'footer_navInfo__pP36Q',
                        addInfo: 'footer_addInfo__jedMI',
                        siteInfo: 'footer_siteInfo__CAC_W',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/grid.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.grid_root__oXftA{width:100%;margin-bottom:30px}.grid_root__oXftA .grid_wrapper__GdltW{display:flex;gap:40px;max-width:1200px;margin:0 auto;flex-direction:column;flex-wrap:wrap}@media(min-width: 576px){.grid_root__oXftA .grid_wrapper__GdltW{width:80%}}@media(min-width: 768px){.grid_root__oXftA .grid_wrapper__GdltW{flex-direction:row}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T{flex-grow:1;box-sizing:border-box;padding:0 20px;width:100%}@media(min-width: 576px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T{padding:0}}@media(min-width: 768px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T{padding:0;flex-basis:28%}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T .grid_imageTile__gZhfE{position:relative;aspect-ratio:1.7777777778;width:100%}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T .grid_textBlock__DzdVb .grid_cta_btn__HzQ7F{margin-top:20px}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T .grid_textBlock__DzdVb .grid_cta_btn__HzQ7F a{font-weight:bold;text-transform:uppercase}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T .grid_textBlock__DzdVb .grid_cta_btn__HzQ7F a:after{padding:10px;content:">";color:#e6d341}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T .grid_textBlock__DzdVb .grid_title__OMKKO{margin:0}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T .grid_textBlock__DzdVb .grid_text__HNfGy{margin:10px 0}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_left__KukLY .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_left__KukLY .grid_title__OMKKO,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_left__KukLY .grid_cta_btn__HzQ7F{text-align:left}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_right__J_98s .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_right__J_98s .grid_title__OMKKO,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_right__J_98s .grid_cta_btn__HzQ7F{text-align:right}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_center__xvB3u .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_center__xvB3u .grid_title__OMKKO,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_center__xvB3u .grid_cta_btn__HzQ7F{text-align:center}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_sm__FCTvk .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_sm__FCTvk .grid_cta_btn__HzQ7F{font-size:13px}@media(min-width: 768px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_sm__FCTvk .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_sm__FCTvk .grid_cta_btn__HzQ7F{font-size:15px}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_sm__FCTvk .grid_textBlock__DzdVb .grid_title__OMKKO{font-weight:bold;font-size:20px}@media(min-width: 1200px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_sm__FCTvk .grid_textBlock__DzdVb .grid_title__OMKKO{font-size:35px}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_cta_btn__HzQ7F{font-size:13px}@media(min-width: 768px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_cta_btn__HzQ7F{font-size:15px}}@media(min-width: 992px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_cta_btn__HzQ7F{font-size:20px}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_textBlock__DzdVb .grid_title__OMKKO{font-weight:bold;font-size:20px}@media(min-width: 768px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_textBlock__DzdVb .grid_title__OMKKO{font-size:20px}}@media(min-width: 992px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_md__relMW .grid_textBlock__DzdVb .grid_title__OMKKO{font-size:35px}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_cta_btn__HzQ7F{font-size:13px}@media(min-width: 768px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_cta_btn__HzQ7F{font-size:20px}}@media(min-width: 992px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_textBlock__DzdVb .grid_text__HNfGy,.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_cta_btn__HzQ7F{font-size:30px}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_textBlock__DzdVb .grid_title__OMKKO{font-weight:bold;font-size:20px}@media(min-width: 768px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_textBlock__DzdVb .grid_title__OMKKO{font-size:35px}}@media(min-width: 992px){.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_lg__mq2pk .grid_textBlock__DzdVb .grid_title__OMKKO{font-size:50px}}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_bordered__74yMr{padding:20px}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_bordered__74yMr .grid_cta_btn__HzQ7F>a:after{color:#fff}.grid_root__oXftA .grid_wrapper__GdltW .grid_block__lGZ0T.grid_imageArticle__T97Te .grid_textBlock__DzdVb .grid_title__OMKKO{padding-top:20px}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/grid.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                        ],
                        names: [],
                        mappings:
                            'AAKA,kBCMI,UAAA,CACA,kBAHiB,CDDjB,uCACI,YAAA,CACA,QAAA,CACA,gBEPS,CFQT,aAAA,CACA,qBAAA,CACA,cAAA,CGgBJ,yBHtBA,uCASQ,SEdI,CAAA,CCkCZ,yBH7BA,uCAaQ,kBAAA,CAAA,CAGJ,0DACI,WAAA,CACA,qBAAA,CACA,cAAA,CACA,UAAA,CGER,yBHNI,0DAOQ,SAAA,CAAA,CGMZ,yBHbI,0DAWQ,SAAA,CACA,cAAA,CAAA,CAGJ,iFACI,iBAAA,CACA,yBEnCI,CFoCJ,UAAA,CAIA,sGClBZ,eCpBE,CDsBF,wGACI,gBAAA,CACA,wBAAA,CAEA,8GACI,YAAA,CACA,WAAA,CACA,aChBA,CF6BI,oGACI,QAAA,CAGJ,mGACI,aAAA,CAKJ,kTAGI,eAAA,CAKJ,qTAGI,gBAAA,CAKJ,wTAGI,iBAAA,CAKJ,gNCzCZ,cCZiB,CCMjB,yBH+CY,gNCtCR,cCdY,CAAA,CFyDJ,mHChBZ,gBAAA,CACA,cCnCgB,CCYhB,0BHsCY,mHCZR,cCrCY,CAAA,CFsDJ,gNC5CZ,cCnBiB,CCMjB,yBHyDY,gNCzCR,cCrBY,CAAA,CCYhB,yBHkDY,gNCtCR,cCvBY,CAAA,CFkEJ,mHCjBZ,gBAAA,CACA,cC5CgB,CCFhB,yBH8DY,mHCbR,cC/CY,CAAA,CCKhB,yBHuDY,mHCTR,cClDY,CAAA,CFgEJ,gNC5CZ,cC7BiB,CCMjB,yBHmEY,gNCzCR,cC9BY,CAAA,CCWhB,yBH4DY,gNCtCR,cChCY,CAAA,CF2EJ,mHCdZ,gBAAA,CACA,cCzDgB,CCFhB,yBHwEY,mHCVR,cC3DY,CAAA,CCIhB,yBHiEY,mHCPR,cC7DY,CAAA,CFyER,+EAEI,YE5GV,CF+Gc,4GACI,UAAA,CAOJ,6HACI,gBAAA',
                        sourcesContent: [
                            '.root{width:100%;margin-bottom:30px}.root .wrapper{display:flex;gap:40px;max-width:1200px;margin:0 auto;flex-direction:column;flex-wrap:wrap}@media(min-width: 576px){.root .wrapper{width:80%}}@media(min-width: 768px){.root .wrapper{flex-direction:row}}.root .wrapper .block{flex-grow:1;box-sizing:border-box;padding:0 20px;width:100%}@media(min-width: 576px){.root .wrapper .block{padding:0}}@media(min-width: 768px){.root .wrapper .block{padding:0;flex-basis:28%}}.root .wrapper .block .imageTile{position:relative;aspect-ratio:1.7777777778;width:100%}.root .wrapper .block .textBlock .cta_btn{margin-top:20px}.root .wrapper .block .textBlock .cta_btn a{font-weight:bold;text-transform:uppercase}.root .wrapper .block .textBlock .cta_btn a:after{padding:10px;content:">";color:#e6d341}.root .wrapper .block .textBlock .title{margin:0}.root .wrapper .block .textBlock .text{margin:10px 0}.root .wrapper .block.left .textBlock .text,.root .wrapper .block.left .title,.root .wrapper .block.left .cta_btn{text-align:left}.root .wrapper .block.right .textBlock .text,.root .wrapper .block.right .title,.root .wrapper .block.right .cta_btn{text-align:right}.root .wrapper .block.center .textBlock .text,.root .wrapper .block.center .title,.root .wrapper .block.center .cta_btn{text-align:center}.root .wrapper .block.sm .textBlock .text,.root .wrapper .block.sm .cta_btn{font-size:13px}@media(min-width: 768px){.root .wrapper .block.sm .textBlock .text,.root .wrapper .block.sm .cta_btn{font-size:15px}}.root .wrapper .block.sm .textBlock .title{font-weight:bold;font-size:20px}@media(min-width: 1200px){.root .wrapper .block.sm .textBlock .title{font-size:35px}}.root .wrapper .block.md .textBlock .text,.root .wrapper .block.md .cta_btn{font-size:13px}@media(min-width: 768px){.root .wrapper .block.md .textBlock .text,.root .wrapper .block.md .cta_btn{font-size:15px}}@media(min-width: 992px){.root .wrapper .block.md .textBlock .text,.root .wrapper .block.md .cta_btn{font-size:20px}}.root .wrapper .block.md .textBlock .title{font-weight:bold;font-size:20px}@media(min-width: 768px){.root .wrapper .block.md .textBlock .title{font-size:20px}}@media(min-width: 992px){.root .wrapper .block.md .textBlock .title{font-size:35px}}.root .wrapper .block.lg .textBlock .text,.root .wrapper .block.lg .cta_btn{font-size:13px}@media(min-width: 768px){.root .wrapper .block.lg .textBlock .text,.root .wrapper .block.lg .cta_btn{font-size:20px}}@media(min-width: 992px){.root .wrapper .block.lg .textBlock .text,.root .wrapper .block.lg .cta_btn{font-size:30px}}.root .wrapper .block.lg .textBlock .title{font-weight:bold;font-size:20px}@media(min-width: 768px){.root .wrapper .block.lg .textBlock .title{font-size:35px}}@media(min-width: 992px){.root .wrapper .block.lg .textBlock .title{font-size:50px}}.root .wrapper .block.bordered{padding:20px}.root .wrapper .block.bordered .cta_btn>a:after{color:#fff}.root .wrapper .block.imageArticle .textBlock .title{padding-top:20px}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'grid_root__oXftA',
                        wrapper: 'grid_wrapper__GdltW',
                        block: 'grid_block__lGZ0T',
                        imageTile: 'grid_imageTile__gZhfE',
                        textBlock: 'grid_textBlock__DzdVb',
                        cta_btn: 'grid_cta_btn__HzQ7F',
                        title: 'grid_title__OMKKO',
                        text: 'grid_text__HNfGy',
                        left: 'grid_left__KukLY',
                        right: 'grid_right__J_98s',
                        center: 'grid_center__xvB3u',
                        sm: 'grid_sm__FCTvk',
                        md: 'grid_md__relMW',
                        lg: 'grid_lg__mq2pk',
                        bordered: 'grid_bordered__74yMr',
                        imageArticle: 'grid_imageArticle__T97Te',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/header.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.header_root__oDlju{width:100%;margin-bottom:30px}.header_root__oDlju .header_wrapper__7NE8A{display:flex;justify-content:center;margin:0 auto;height:200px;width:100%;position:relative;flex-direction:column}@media(min-width: 360px){.header_root__oDlju .header_wrapper__7NE8A{flex-direction:row}}@media(min-width: 576px){.header_root__oDlju .header_wrapper__7NE8A{height:300px}}.header_root__oDlju .header_wrapper__7NE8A .header_gutter__8Omv1{flex:10 0 0;height:100%;display:none;max-width:100%}@media(min-width: 768px){.header_root__oDlju .header_wrapper__7NE8A .header_gutter__8Omv1{display:block}}.header_root__oDlju .header_wrapper__7NE8A .header_heroImage__TGtbA{position:relative;height:100%;flex:50 0 0;max-width:900px}@media(min-width: 768px){.header_root__oDlju .header_wrapper__7NE8A .header_heroImage__TGtbA{flex:60 0 0}}.header_root__oDlju .header_wrapper__7NE8A .header_headline__ZCNmw{display:flex;justify-content:center;align-items:center;height:100%;flex:50 0 0;z-index:9;max-width:100%}@media(min-width: 768px){.header_root__oDlju .header_wrapper__7NE8A .header_headline__ZCNmw{max-width:300px}}@media(min-width: 768px){.header_root__oDlju .header_wrapper__7NE8A .header_headline__ZCNmw{flex:20 0 0}}.header_root__oDlju .header_wrapper__7NE8A .header_headline__ZCNmw .header_backgroundBlock__EuTE8 .header_text__Q6Iz_{font-weight:bold;z-index:9999999;font-size:18px;text-align:center;position:absolute;font-weight:bold;font-size:20px}@media(min-width: 1200px){.header_root__oDlju .header_wrapper__7NE8A .header_headline__ZCNmw .header_backgroundBlock__EuTE8 .header_text__Q6Iz_{font-size:35px}}@media(min-width: 768px){.header_root__oDlju .header_wrapper__7NE8A .header_headline__ZCNmw .header_backgroundBlock__EuTE8 .header_text__Q6Iz_{padding:10px}}.header_root__oDlju .header_wrapper__7NE8A .header_backgroundBlock__EuTE8{z-index:999;position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.header_root__oDlju .header_wrapper__7NE8A .header_backgroundBlock__EuTE8 img{opacity:.2}@media(min-width: 360px){.header_root__oDlju .header_wrapper__7NE8A.header_reverse__WHusp{flex-direction:row-reverse}}.header_root__oDlju .header_wrapper__7NE8A.header_altLayout__vrAc4{flex-direction:column}@media(min-width: 768px){.header_root__oDlju .header_wrapper__7NE8A.header_altLayout__vrAc4{flex-direction:row}}.header_root__oDlju .header_wrapper__7NE8A.header_altLayout__vrAc4 .header_gutter_alt__INAav{display:block}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/header.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/breakpoints.scss',
                            'webpack://./styles/variables.scss',
                        ],
                        names: [],
                        mappings:
                            'AASA,oBCEI,UAAA,CACA,kBAHiB,CDIjB,2CACI,YAAA,CACA,sBAAA,CACA,aAAA,CACA,YAAA,CACA,UAAA,CACA,iBAAA,CACA,qBAAA,CEGJ,yBFVA,2CAUQ,kBAAA,CAAA,CEOR,yBFjBA,2CAcQ,YAAA,CAAA,CAGJ,iEACI,WAAA,CAEA,WAAA,CACA,YAAA,CACA,cAAA,CEER,yBFPI,iEAQQ,aAAA,CAAA,CAIR,oEACI,iBAAA,CACA,WAAA,CACA,WAAA,CACA,eAxCK,CE+Bb,yBFKI,oEAOQ,WAAA,CAAA,CAIR,mEACI,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,WAAA,CACA,WAAA,CACA,SAAA,CAEA,cAAA,CEzBR,yBFgBI,mEAWQ,eAzDD,CAAA,CE8BX,yBFgBI,mEAeQ,WAAA,CAAA,CAIA,sHACI,gBAAA,CACA,eAAA,CAEA,cGtCC,CHuCD,iBAAA,CACA,iBAAA,CCLhB,gBAAA,CACA,cEnCgB,CDYhB,0BFqBY,sHCKR,cErCY,CAAA,CDHhB,yBFmCY,sHASQ,YAAA,CAAA,CAOhB,0EACI,WAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,8EACI,UAAA,CE3EZ,yBFgFI,iEAGQ,0BAAA,CAAA,CAKR,mEACI,qBAAA,CE3ER,yBF0EI,mEAGQ,kBAAA,CAAA,CAEJ,6FACI,aAAA',
                        sourcesContent: [
                            '.root{width:100%;margin-bottom:30px}.root .wrapper{display:flex;justify-content:center;margin:0 auto;height:200px;width:100%;position:relative;flex-direction:column}@media(min-width: 360px){.root .wrapper{flex-direction:row}}@media(min-width: 576px){.root .wrapper{height:300px}}.root .wrapper .gutter{flex:10 0 0;height:100%;display:none;max-width:100%}@media(min-width: 768px){.root .wrapper .gutter{display:block}}.root .wrapper .heroImage{position:relative;height:100%;flex:50 0 0;max-width:900px}@media(min-width: 768px){.root .wrapper .heroImage{flex:60 0 0}}.root .wrapper .headline{display:flex;justify-content:center;align-items:center;height:100%;flex:50 0 0;z-index:9;max-width:100%}@media(min-width: 768px){.root .wrapper .headline{max-width:300px}}@media(min-width: 768px){.root .wrapper .headline{flex:20 0 0}}.root .wrapper .headline .backgroundBlock .text{font-weight:bold;z-index:9999999;font-size:18px;text-align:center;position:absolute;font-weight:bold;font-size:20px}@media(min-width: 1200px){.root .wrapper .headline .backgroundBlock .text{font-size:35px}}@media(min-width: 768px){.root .wrapper .headline .backgroundBlock .text{padding:10px}}.root .wrapper .backgroundBlock{z-index:999;position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.root .wrapper .backgroundBlock img{opacity:.2}@media(min-width: 360px){.root .wrapper.reverse{flex-direction:row-reverse}}.root .wrapper.altLayout{flex-direction:column}@media(min-width: 768px){.root .wrapper.altLayout{flex-direction:row}}.root .wrapper.altLayout .gutter_alt{display:block}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'header_root__oDlju',
                        wrapper: 'header_wrapper__7NE8A',
                        gutter: 'header_gutter__8Omv1',
                        heroImage: 'header_heroImage__TGtbA',
                        headline: 'header_headline__ZCNmw',
                        backgroundBlock: 'header_backgroundBlock__EuTE8',
                        text: 'header_text__Q6Iz_',
                        reverse: 'header_reverse__WHusp',
                        altLayout: 'header_altLayout__vrAc4',
                        gutter_alt: 'header_gutter_alt__INAav',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/images.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.images_root__9FN2N{margin-top:20px;width:100%;margin-bottom:30px}.images_root__9FN2N .images_wrapper__vI6Fi{max-width:1200px;width:100%;margin:0 auto}@media(min-width: 576px){.images_root__9FN2N .images_wrapper__vI6Fi{width:80%}}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734{display:grid;grid-template-columns:repeat(3, 1fr)}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734.images_gap__8Awyh{gap:5px}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734.images_tileBlock_2_half__aLVUE{grid-template-columns:repeat(2, 1fr)}}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8{position:relative;min-height:100%;width:100%;height:100%}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_mainImage__mUGoI{grid-row:1/3;grid-column:1/3;aspect-ratio:1.3333333333}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_linkBlock__MqruG{position:relative;min-height:100%;width:100%;height:100%;overflow:hidden}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_linkBlock__MqruG .images_link__vWL_m{width:100%;height:100%;position:absolute}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_linkBlock__MqruG.images_linked__f2qQI a{background:rgba(0,0,0,.3)}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_linkBlock__MqruG.images_linked__f2qQI img{filter:grayscale(100)}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_linkBlock__MqruG.images_linked__f2qQI:hover img{filter:grayscale(0)}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_linkBlock__MqruG.images_linked__f2qQI .images_text__4LBvM:after{padding:10px;content:">";color:#e6d341}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_mainImage2__rUjTW{grid-row:1/2;grid-column:1/2;aspect-ratio:1.3333333333}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_sideImage__NQWcr{aspect-ratio:1.3333333333}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_sideImage2_third__g7_4U{grid-row:1/3;aspect-ratio:unset}}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_sideImage2_half__UVW_b{grid-row:1/2}}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_text__4LBvM{color:#fff;padding:10px;font-size:20px;position:absolute;bottom:0;right:0;font-weight:bold;width:auto;height:auto;z-index:99}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_headline___BWok{position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:100%;z-index:99;background:rgba(0,0,0,.3)}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_headline___BWok h2{color:#fff;padding:10px;font-size:20px;text-align:center}@media(min-width: 1200px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_headline___BWok h2{font-size:35px}}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_description__ORgdB{position:absolute;width:100%;background-color:rgba(0,0,0,.5);z-index:99}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_description__ORgdB{bottom:-150px}}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_description__ORgdB p{color:#fff;padding:10px;text-align:center;bottom:0;font-size:13px}@media(min-width: 360px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_description__ORgdB p{font-size:15px}}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_description__ORgdB p{font-size:13px}}@media(min-width: 992px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8 .images_description__ORgdB p{font-size:15px}}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_hasBody__xNAUi:hover .images_description__ORgdB{bottom:0;transition-duration:.5s !important;transition-timing-function:ease-in !important}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_hasBody__xNAUi:hover .images_text__4LBvM{bottom:auto;transition-duration:.5s !important;transition-timing-function:ease-in !important}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_hasBody__xNAUi:hover .images_headline___BWok{align-items:flex-start}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_hasBody__xNAUi:hover .images_headline___BWok h3{margin:0;padding:10px}}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_mainImage1__l0OmA{aspect-ratio:1.3333333333}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_mainImage1__l0OmA{grid-row:1/3;grid-column:1/4}}.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_mainImage1__l0OmA.images_heroImage__VaR3Y{aspect-ratio:1.3333333333}@media(min-width: 576px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_mainImage1__l0OmA.images_heroImage__VaR3Y{aspect-ratio:3}}@media(min-width: 768px){.images_root__9FN2N .images_wrapper__vI6Fi .images_tileBlock__ID734 .images_tileImage__RppK8.images_mainImage1__l0OmA .images_headline___BWok h3{font-size:50px}}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/images.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                        ],
                        names: [],
                        mappings:
                            'AASA,oBACI,eAAA,CCCA,UAAA,CACA,kBAHiB,CDIjB,2CACI,gBEVS,CFWT,UAAA,CACA,aAAA,CGcJ,yBHjBA,2CAMQ,SEhBI,CAAA,CCkCZ,yBHfI,oEAEQ,YAAA,CACA,oCAAA,CAEA,sFACI,OAAA,CAGJ,mGACI,oCAAA,CAAA,CAIR,6FACI,iBAAA,CACA,eAAA,CACA,UAAA,CACA,WAAA,CAEA,qHACI,YAAA,CACA,eAAA,CACA,yBAvCZ,CA0CQ,sHACI,iBAAA,CACA,eAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CAEA,0IACI,UAAA,CACA,WAAA,CACA,iBAAA,CAIA,6IACI,yBAAA,CAGJ,+IACI,qBAAA,CAGJ,qJACI,mBAAA,CAGJ,qKACI,YAAA,CACA,WAAA,CACA,aExDhB,CF8DI,sHACI,YAAA,CACA,eAAA,CACA,yBAhFZ,CAmFQ,qHACI,yBApFZ,CG+BJ,yBHyDY,4HAEQ,YAAA,CACA,kBAAA,CAAA,CG5DpB,yBHgEY,2HAEQ,YAAA,CAAA,CAIR,iHACI,UAAA,CACA,YAAA,CACA,cE7EA,CF8EA,iBAAA,CACA,QAAA,CACA,OAAA,CACA,gBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CAGJ,qHACI,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,yBAAA,CAEA,wHACI,UAAA,CACA,YAAA,CACA,cE9FJ,CF+FI,iBAAA,CGnFpB,0BH+EgB,wHAOQ,cEjGR,CAAA,CFsGJ,wHACI,iBAAA,CACA,UAAA,CACA,+BAAA,CACA,UAAA,CG7GhB,yBHyGY,wHAOQ,aAAA,CAAA,CAGJ,0HACI,UAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,cE9HH,CCRjB,yBHiIgB,0HAQQ,cEhIR,CAAA,CCKhB,yBHmHgB,0HAWQ,cEpIP,CAAA,CCajB,yBH4GgB,0HAeQ,cEvIR,CAAA,CCKhB,yBHwIoB,oJACI,QAAA,CACA,kCAAA,CACA,6CAAA,CAEJ,6IACI,WAAA,CACA,kCAAA,CACA,6CAAA,CAGJ,iJACI,sBAAA,CAEA,oJACI,QAAA,CACA,YAAA,CAAA,CAOhB,sHACI,yBA/LZ,CG+BJ,yBH+JY,sHAGQ,YAAA,CACA,eAAA,CAAA,CAIJ,8IACI,yBAvMhB,CGwBJ,yBH8KgB,8IAGQ,cAxMnB,CAAA,CG8BL,yBHgLwB,iJACI,cE7KZ,CAAA',
                        sourcesContent: [
                            '.root{margin-top:20px;width:100%;margin-bottom:30px}.root .wrapper{max-width:1200px;width:100%;margin:0 auto}@media(min-width: 576px){.root .wrapper{width:80%}}@media(min-width: 768px){.root .wrapper .tileBlock{display:grid;grid-template-columns:repeat(3, 1fr)}.root .wrapper .tileBlock.gap{gap:5px}.root .wrapper .tileBlock.tileBlock_2_half{grid-template-columns:repeat(2, 1fr)}}.root .wrapper .tileBlock .tileImage{position:relative;min-height:100%;width:100%;height:100%}.root .wrapper .tileBlock .tileImage.mainImage{grid-row:1/3;grid-column:1/3;aspect-ratio:1.3333333333}.root .wrapper .tileBlock .tileImage .linkBlock{position:relative;min-height:100%;width:100%;height:100%;overflow:hidden}.root .wrapper .tileBlock .tileImage .linkBlock .link{width:100%;height:100%;position:absolute}.root .wrapper .tileBlock .tileImage .linkBlock.linked a{background:rgba(0,0,0,.3)}.root .wrapper .tileBlock .tileImage .linkBlock.linked img{filter:grayscale(100)}.root .wrapper .tileBlock .tileImage .linkBlock.linked:hover img{filter:grayscale(0)}.root .wrapper .tileBlock .tileImage .linkBlock.linked .text:after{padding:10px;content:">";color:#e6d341}.root .wrapper .tileBlock .tileImage.mainImage2{grid-row:1/2;grid-column:1/2;aspect-ratio:1.3333333333}.root .wrapper .tileBlock .tileImage.sideImage{aspect-ratio:1.3333333333}@media(min-width: 768px){.root .wrapper .tileBlock .tileImage.sideImage2_third{grid-row:1/3;aspect-ratio:unset}}@media(min-width: 768px){.root .wrapper .tileBlock .tileImage.sideImage2_half{grid-row:1/2}}.root .wrapper .tileBlock .tileImage .text{color:#fff;padding:10px;font-size:20px;position:absolute;bottom:0;right:0;font-weight:bold;width:auto;height:auto;z-index:99}.root .wrapper .tileBlock .tileImage .headline{position:absolute;display:flex;align-items:center;justify-content:center;width:100%;height:100%;z-index:99;background:rgba(0,0,0,.3)}.root .wrapper .tileBlock .tileImage .headline h2{color:#fff;padding:10px;font-size:20px;text-align:center}@media(min-width: 1200px){.root .wrapper .tileBlock .tileImage .headline h2{font-size:35px}}.root .wrapper .tileBlock .tileImage .description{position:absolute;width:100%;background-color:rgba(0,0,0,.5);z-index:99}@media(min-width: 768px){.root .wrapper .tileBlock .tileImage .description{bottom:-150px}}.root .wrapper .tileBlock .tileImage .description p{color:#fff;padding:10px;text-align:center;bottom:0;font-size:13px}@media(min-width: 360px){.root .wrapper .tileBlock .tileImage .description p{font-size:15px}}@media(min-width: 768px){.root .wrapper .tileBlock .tileImage .description p{font-size:13px}}@media(min-width: 992px){.root .wrapper .tileBlock .tileImage .description p{font-size:15px}}@media(min-width: 768px){.root .wrapper .tileBlock .tileImage.hasBody:hover .description{bottom:0;transition-duration:.5s !important;transition-timing-function:ease-in !important}.root .wrapper .tileBlock .tileImage.hasBody:hover .text{bottom:auto;transition-duration:.5s !important;transition-timing-function:ease-in !important}.root .wrapper .tileBlock .tileImage.hasBody:hover .headline{align-items:flex-start}.root .wrapper .tileBlock .tileImage.hasBody:hover .headline h3{margin:0;padding:10px}}.root .wrapper .tileBlock .tileImage.mainImage1{aspect-ratio:1.3333333333}@media(min-width: 768px){.root .wrapper .tileBlock .tileImage.mainImage1{grid-row:1/3;grid-column:1/4}}.root .wrapper .tileBlock .tileImage.mainImage1.heroImage{aspect-ratio:1.3333333333}@media(min-width: 576px){.root .wrapper .tileBlock .tileImage.mainImage1.heroImage{aspect-ratio:3}}@media(min-width: 768px){.root .wrapper .tileBlock .tileImage.mainImage1 .headline h3{font-size:50px}}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'images_root__9FN2N',
                        wrapper: 'images_wrapper__vI6Fi',
                        tileBlock: 'images_tileBlock__ID734',
                        gap: 'images_gap__8Awyh',
                        tileBlock_2_half: 'images_tileBlock_2_half__aLVUE',
                        tileImage: 'images_tileImage__RppK8',
                        mainImage: 'images_mainImage__mUGoI',
                        linkBlock: 'images_linkBlock__MqruG',
                        link: 'images_link__vWL_m',
                        linked: 'images_linked__f2qQI',
                        text: 'images_text__4LBvM',
                        mainImage2: 'images_mainImage2__rUjTW',
                        sideImage: 'images_sideImage__NQWcr',
                        sideImage2_third: 'images_sideImage2_third__g7_4U',
                        sideImage2_half: 'images_sideImage2_half__UVW_b',
                        headline: 'images_headline___BWok',
                        description: 'images_description__ORgdB',
                        hasBody: 'images_hasBody__xNAUi',
                        mainImage1: 'images_mainImage1__l0OmA',
                        heroImage: 'images_heroImage__VaR3Y',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/label.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.label_root__8BzhA{width:100%;margin-bottom:20px}.label_root__8BzhA .label_wrapper__e7m1D{max-width:1200px;margin:0 auto;width:100%;margin-top:10px}@media(min-width: 576px){.label_root__8BzhA .label_wrapper__e7m1D{width:80%}}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF{width:100%;box-sizing:border-box}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5{margin:0;text-transform:uppercase;padding-left:20px}@media(min-width: 576px){.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5{padding-left:0}}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_center__t5ZsZ{text-align:center}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_left__0P2gu{text-align:left}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_right__w2ddG{text-align:right}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_sm__RmWsa{font-weight:bold;font-size:20px}@media(min-width: 1200px){.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_sm__RmWsa{font-size:35px}}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_md__o_3_L{font-weight:bold;font-size:20px}@media(min-width: 768px){.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_md__o_3_L{font-size:20px}}@media(min-width: 992px){.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_md__o_3_L{font-size:35px}}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_lg__jGcUt{font-weight:bold;font-size:20px}@media(min-width: 768px){.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_lg__jGcUt{font-size:35px}}@media(min-width: 992px){.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF .label_text__R_yP5.label_lg__jGcUt{font-size:50px}}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF.label_gap__8h2Fa{width:90%;margin:0 auto}@media(min-width: 576px){.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF.label_gap__8h2Fa{padding:20px;width:100%}}.label_root__8BzhA .label_wrapper__e7m1D .label_headline__l_wJF.label_gap__8h2Fa .label_text__R_yP5{padding-left:0}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/label.module.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                            'webpack://./styles/utils.scss',
                        ],
                        names: [],
                        mappings:
                            'AAIA,mBACI,UAAA,CACA,kBCEE,CAAA,yCDCE,gBCLS,CDMT,aAAA,CACA,UAAA,CACA,eAAA,CEkBJ,yBFtBA,yCAOQ,SCZI,CAAA,CDeR,gEACI,UAAA,CACA,qBAAA,CAEA,mFACI,QAAA,CAEA,wBAAA,CACA,iBClBV,CCsBF,yBFRQ,mFAOQ,cAAA,CAAA,CAGJ,uGACI,iBAAA,CAGJ,qGACI,eAAA,CAGJ,sGACI,gBAAA,CAGJ,mGG6BZ,gBAAA,CACA,cFnCgB,CCYhB,0BFPY,mGGiCR,cFrCY,CAAA,CDQJ,mGGkCZ,gBAAA,CACA,cF5CgB,CCFhB,yBFWY,mGGsCR,cF/CY,CAAA,CCKhB,yBFIY,mGG0CR,cFlDY,CAAA,CDYJ,mGG2CZ,gBAAA,CACA,cFzDgB,CCFhB,yBFeY,mGG+CR,cF3DY,CAAA,CCIhB,yBFQY,mGGkDR,cF7DY,CAAA,CDoBR,iFACI,SAAA,CACA,aAAA,CEjCZ,yBF+BQ,iFAIQ,YCzDd,CD0Dc,UAAA,CAAA,CAGJ,oGACI,cAAA',
                        sourcesContent: [
                            '.root{width:100%;margin-bottom:20px}.root .wrapper{max-width:1200px;margin:0 auto;width:100%;margin-top:10px}@media(min-width: 576px){.root .wrapper{width:80%}}.root .wrapper .headline{width:100%;box-sizing:border-box}.root .wrapper .headline .text{margin:0;text-transform:uppercase;padding-left:20px}@media(min-width: 576px){.root .wrapper .headline .text{padding-left:0}}.root .wrapper .headline .text.center{text-align:center}.root .wrapper .headline .text.left{text-align:left}.root .wrapper .headline .text.right{text-align:right}.root .wrapper .headline .text.sm{font-weight:bold;font-size:20px}@media(min-width: 1200px){.root .wrapper .headline .text.sm{font-size:35px}}.root .wrapper .headline .text.md{font-weight:bold;font-size:20px}@media(min-width: 768px){.root .wrapper .headline .text.md{font-size:20px}}@media(min-width: 992px){.root .wrapper .headline .text.md{font-size:35px}}.root .wrapper .headline .text.lg{font-weight:bold;font-size:20px}@media(min-width: 768px){.root .wrapper .headline .text.lg{font-size:35px}}@media(min-width: 992px){.root .wrapper .headline .text.lg{font-size:50px}}.root .wrapper .headline.gap{width:90%;margin:0 auto}@media(min-width: 576px){.root .wrapper .headline.gap{padding:20px;width:100%}}.root .wrapper .headline.gap .text{padding-left:0}',
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'label_root__8BzhA',
                        wrapper: 'label_wrapper__e7m1D',
                        headline: 'label_headline__l_wJF',
                        text: 'label_text__R_yP5',
                        center: 'label_center__t5ZsZ',
                        left: 'label_left__0P2gu',
                        right: 'label_right__w2ddG',
                        sm: 'label_sm__RmWsa',
                        md: 'label_md__o_3_L',
                        lg: 'label_lg__jGcUt',
                        gap: 'label_gap__8h2Fa',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/list.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.list_root__e7h97{width:100%;margin-bottom:30px}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM{max-width:1200px;margin:15px auto;width:100%}@media(min-width: 576px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM{width:80%}}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3{width:100%;display:flex;flex-direction:column;box-sizing:border-box;align-items:center}@media(min-width: 768px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3{flex-direction:row}}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35{position:relative;width:100%;max-width:100%;height:100%;align-self:flex-start;display:none}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35 img{width:100%}@media(min-width: 768px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35{width:50%;height:auto}}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh{align-self:flex-start;display:flex;flex-direction:column;padding:20px}@media(min-width: 576px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh{padding:0}}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_title__MLBFL{margin-bottom:20px;line-height:1.3}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_title__MLBFL .list_text__DNipj{line-height:1.3;margin-top:30px;margin-bottom:0}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_title__MLBFL .list_text__DNipj::before{content:"";display:block;height:0;width:0;margin-top:calc((1 - 1.3)*.8em)}@media(min-width: 768px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_title__MLBFL .list_text__DNipj{margin-top:0}}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_textBlock__N6Dc8 .list_text__DNipj{margin-top:0}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_cta_btn__nkRJY{margin-top:20px}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_cta_btn__nkRJY a{font-weight:bold;text-transform:uppercase}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM .list_features__cI6q3 .list_allText__rWHqh .list_cta_btn__nkRJY a:after{padding:10px;content:">";color:#e6d341}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM.list_imageArticle__vuCzF .list_imageBlock__WVL35{display:block}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM.list_imageArticle__vuCzF .list_allText__rWHqh{justify-content:flex-start}@media(min-width: 576px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM.list_imageArticle__vuCzF .list_allText__rWHqh{padding-left:20px}}@media(min-width: 768px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM.list_imageArticle__vuCzF .list_allText__rWHqh{width:50%}}@media(min-width: 768px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM.list_reverse__D6amu .list_features__cI6q3{flex-direction:row-reverse}}@media(min-width: 576px){.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM.list_reverse__D6amu .list_allText__rWHqh{padding-right:20px;padding-left:0}}.list_root__e7h97.list_articleLayout__eYmP2 .list_wrapper__tHtMM.list_bordered___lygg .list_features__cI6q3{padding:20px}@media(min-width: 576px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM{width:80%;margin:0 auto}}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM{width:100%}}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL{display:flex;flex-direction:row;margin-top:20px;margin-bottom:10px}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_text__DNipj{margin-bottom:0}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_textGutter__ysqKl{flex:10 0 0}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_insideTextGutter__4vTsX{flex:20 0 0;max-width:300px}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_titleText__f_rvT{display:flex;align-self:flex-start}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_titleText__f_rvT{align-self:flex-start;flex:60 0 0;max-width:900px}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_titleText__f_rvT .list_text__DNipj{padding-left:20px;width:100%;padding:10px 0 10px 20px;margin-top:0}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_titleText__f_rvT .list_text__DNipj{margin-left:auto;flex:60 0 0}}@media(min-width: 576px)and (max-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_title__MLBFL .list_titleText__f_rvT .list_text__DNipj{padding:10px 0 10px 0}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3{display:flex;flex-direction:column}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3{flex-direction:row}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_colorBlock__pMUq9{flex:10 0 0;display:none}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_colorBlock__pMUq9{display:block}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_colorBlock__pMUq9 .list_colorFill__S_nnY{aspect-ratio:.6666666667;height:25vw/1.3333333333}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35{flex:20 0 0;background-color:#3232bf;align-self:flex-start;max-width:300px;width:25vw}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35 .list_blockPicture__VAGTa{width:100%;position:relative}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35 .list_blockPicture__VAGTa{aspect-ratio:1.3333333333}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35 .list_blockPicture__VAGTa img{width:100% !important;object-fit:cover}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_imageBlock__WVL35 .list_blockPicture__VAGTa img{position:absolute;top:0;left:0;height:100%;width:100%}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8{display:flex;flex-direction:column;justify-content:flex-start;max-width:900px}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8{flex:60 0 0;position:relative}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8 .list_text__DNipj{padding-top:0;padding:20px;margin-top:0}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8 .list_text__DNipj{line-height:1.3;padding:0;padding-left:20px}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8 .list_text__DNipj::before{content:"";display:block;height:0;width:0;margin-top:calc((1 - 1.3)*.8em)}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8 .list_cta_btn__nkRJY{margin-top:20px;padding-left:20px}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8 .list_cta_btn__nkRJY a{font-weight:bold;text-transform:uppercase}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8 .list_cta_btn__nkRJY a:after{padding:10px;content:">";color:#e6d341}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_textBlock__N6Dc8 .list_cta_btn__nkRJY{margin-left:20px;padding:0}}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_bordered___lygg .list_textBlock__N6Dc8 .list_text__DNipj{padding:20px}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_bordered___lygg .list_textBlock__N6Dc8 .list_cta_btn__nkRJY{padding-bottom:20px}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_reverse__D6amu .list_features__cI6q3,.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_reverse__D6amu .list_title__MLBFL{flex-direction:row-reverse}}@media(min-width: 1500px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM .list_features__cI6q3 .list_colorBlock__pMUq9 .list_colorFill__S_nnY{height:225px;aspect-ratio:auto}}@media(min-width: 768px){.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_reverse__D6amu .list_features__cI6q3{flex-direction:row-reverse}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_reverse__D6amu .list_title__MLBFL{flex-direction:row-reverse}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_reverse__D6amu .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_reverse__D6amu .list_textBlock__N6Dc8 .list_text__DNipj{padding-left:0 !important;padding-right:20px !important}.list_root__e7h97.list_cardLayout__5fIyM .list_wrapper__tHtMM.list_reverse__D6amu .list_cta_btn__nkRJY{margin-left:0 !important}}.list_root__e7h97.list_left__1sIwn .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_left__1sIwn .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_left__1sIwn .list_title__MLBFL .list_text__DNipj,.list_root__e7h97.list_left__1sIwn .list_allText__rWHqh,.list_root__e7h97.list_left__1sIwn .list_cta_btn__nkRJY{text-align:left}.list_root__e7h97.list_right__ZtX_r .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_right__ZtX_r .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_right__ZtX_r .list_title__MLBFL .list_text__DNipj,.list_root__e7h97.list_right__ZtX_r .list_allText__rWHqh,.list_root__e7h97.list_right__ZtX_r .list_cta_btn__nkRJY{text-align:right}.list_root__e7h97.list_center__H_o_b .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_center__H_o_b .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_center__H_o_b .list_title__MLBFL .list_text__DNipj,.list_root__e7h97.list_center__H_o_b .list_allText__rWHqh,.list_root__e7h97.list_center__H_o_b .list_cta_btn__nkRJY{text-align:center}.list_root__e7h97.list_sm__sm3dY .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_sm__sm3dY .list_cta_btn__nkRJY{font-size:13px}@media(min-width: 768px){.list_root__e7h97.list_sm__sm3dY .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_sm__sm3dY .list_cta_btn__nkRJY{font-size:15px}}.list_root__e7h97.list_sm__sm3dY .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_sm__sm3dY .list_title__MLBFL .list_text__DNipj{font-weight:bold;font-size:20px}@media(min-width: 1200px){.list_root__e7h97.list_sm__sm3dY .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_sm__sm3dY .list_title__MLBFL .list_text__DNipj{font-size:35px}}.list_root__e7h97.list_md__ffDwm .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_md__ffDwm .list_cta_btn__nkRJY{font-size:13px}@media(min-width: 768px){.list_root__e7h97.list_md__ffDwm .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_md__ffDwm .list_cta_btn__nkRJY{font-size:15px}}@media(min-width: 992px){.list_root__e7h97.list_md__ffDwm .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_md__ffDwm .list_cta_btn__nkRJY{font-size:20px}}.list_root__e7h97.list_md__ffDwm .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_md__ffDwm .list_title__MLBFL .list_text__DNipj{font-weight:bold;font-size:20px}@media(min-width: 768px){.list_root__e7h97.list_md__ffDwm .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_md__ffDwm .list_title__MLBFL .list_text__DNipj{font-size:20px}}@media(min-width: 992px){.list_root__e7h97.list_md__ffDwm .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_md__ffDwm .list_title__MLBFL .list_text__DNipj{font-size:35px}}.list_root__e7h97.list_lg__4MsI0 .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_lg__4MsI0 .list_cta_btn__nkRJY{font-size:13px}@media(min-width: 768px){.list_root__e7h97.list_lg__4MsI0 .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_lg__4MsI0 .list_cta_btn__nkRJY{font-size:20px}}@media(min-width: 992px){.list_root__e7h97.list_lg__4MsI0 .list_textBlock__N6Dc8 .list_text__DNipj,.list_root__e7h97.list_lg__4MsI0 .list_cta_btn__nkRJY{font-size:30px}}.list_root__e7h97.list_lg__4MsI0 .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_lg__4MsI0 .list_title__MLBFL .list_text__DNipj{font-weight:bold;font-size:20px}@media(min-width: 768px){.list_root__e7h97.list_lg__4MsI0 .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_lg__4MsI0 .list_title__MLBFL .list_text__DNipj{font-size:35px}}@media(min-width: 992px){.list_root__e7h97.list_lg__4MsI0 .list_titleText__f_rvT .list_text__DNipj,.list_root__e7h97.list_lg__4MsI0 .list_title__MLBFL .list_text__DNipj{font-size:50px}}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/list.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                        ],
                        names: [],
                        mappings:
                            'AA+VA,kBCpVI,UAAA,CACA,kBAHiB,CD4BjB,iEACI,gBElCS,CFmCT,gBAAA,CACA,UAAA,CGVJ,yBHOA,iEAMQ,SExCI,CAAA,CF2CR,uFACI,UAAA,CA1BR,YAAA,CACA,qBAAA,CA2BQ,qBAAA,CACA,kBAAA,CGbR,yBHSI,uFAtBA,kBAAA,CAAA,CA4BI,+GACI,iBAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CACA,qBAAA,CACA,YAAA,CAEA,mHACI,UAAA,CGxBhB,yBHeQ,+GAYQ,SAAA,CACA,WAAA,CAAA,CAIR,4GACI,qBAAA,CACA,YAAA,CACA,qBAAA,CAEA,YElEV,CCsBF,yBHuCQ,4GASQ,SAAA,CAAA,CAOJ,+HACI,kBE9Ed,CF+Ec,eAlFR,CAoFQ,iJACI,eArFZ,CAuFY,eAAA,CACA,eAAA,CC3EpB,yJACI,UAAA,CACA,aAAA,CACA,QAAA,CACA,OAAA,CACA,+BAAA,CEcJ,yBHoDgB,iJAOQ,YAAA,CAAA,CAKZ,qJACI,YAAA,CAOJ,iICjFZ,eCpBE,CDsBF,mIACI,gBAAA,CACA,wBAAA,CAEA,yIACI,YAAA,CACA,WAAA,CACA,aChBA,CF+FA,kHACI,aAAA,CAGJ,+GACI,0BAAA,CG3FZ,yBH0FQ,+GAGQ,iBEnHd,CAAA,CC6BF,yBHmFQ,+GAMQ,SAAA,CAAA,CGzFhB,yBH+FQ,2GAEQ,0BAAA,CAAA,CGxGhB,yBH2GQ,0GAEQ,kBEnId,CFoIc,cAAA,CAAA,CAQR,4GACI,YE7IV,CCsBF,yBHgIA,8DAEQ,SE7JI,CF8JJ,aAAA,CAAA,CG5HR,yBHyHA,8DAMQ,UAAA,CAAA,CG/HR,yBHkII,iFAEQ,YAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CAEA,mGACI,eAAA,CAAA,CAIR,yGACI,WAAA,CAGJ,+GACI,WAAA,CACA,eAzKO,CA4KX,wGACI,YAAA,CACA,qBAAA,CGzJZ,yBHuJQ,wGAKQ,qBAAA,CACA,WAAA,CACA,eAlLK,CAAA,CAqLT,0HAEI,iBEhMd,CFiMc,UAAA,CACA,wBAAA,CACA,YAAA,CGtKhB,yBHiKY,0HAQQ,gBAAA,CACA,WAAA,CAAA,CAGJ,+CAZJ,0HAaQ,qBAAA,CAAA,CAKhB,oFAnMJ,YAAA,CACA,qBAAA,CGeA,yBHmLI,oFAhMA,kBAAA,CAAA,CAmMI,4GACI,WAAA,CACA,YAAA,CGxLZ,yBHsLQ,4GAKQ,aAAA,CAAA,CAGJ,mIAEI,wBAAA,CACA,wBA1NL,CGyBX,yBHqMQ,4GAEQ,WAAA,CACA,wBEvNR,CFwNQ,qBAAA,CACA,eA/NG,CAgOH,UArON,CAAA,CAuOE,sIACI,UAAA,CACA,iBAAA,CG/MhB,yBH6MY,sIAKQ,yBAjPhB,CAAA,CAoPY,0IACI,qBAAA,CACA,gBAAA,CGvNpB,yBHqNgB,0IAKQ,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CAAA,CAMhB,2GACI,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,eA5PS,CGoBrB,yBHoOQ,2GAOQ,WAAA,CACA,iBAAA,CAAA,CAGJ,6HACI,aAAA,CACA,YE9Qd,CF+Qc,YAAA,CGlPhB,yBH+OY,6HAKQ,eApRZ,CAsRY,SAAA,CACA,iBEpRlB,CDUF,qIACI,UAAA,CACA,aAAA,CACA,QAAA,CACA,OAAA,CACA,+BAAA,CAAA,CDyQQ,gICpQZ,eCpBE,CF2Rc,iBE3Rd,CDsBF,kIACI,gBAAA,CACA,wBAAA,CAEA,wIACI,YAAA,CACA,WAAA,CACA,aChBA,CCgBR,yBH2PY,gIAKQ,gBE7RlB,CF8RkB,SAAA,CAAA,CASZ,4HACI,YExSV,CF0SM,+HACI,mBE3SV,CC6BF,yBHmRQ,6MAGQ,0BAAA,CAAA,CGpPhB,0BH2PQ,mIACI,YApTC,CAqTD,iBAAA,CAAA,CG/RZ,yBHqSY,wGACI,0BAAA,CAEJ,qGACI,0BAAA,CAGJ,sPAEI,yBAAA,CACA,6BAAA,CAGJ,uGACI,wBAAA,CAAA,CAsBZ,gVAKI,eAAA,CAKJ,qVAKI,gBAAA,CAKJ,0VAKI,iBAAA,CAKJ,gICjWJ,cCZiB,CCMjB,yBHuWI,gIC9VA,cCdY,CAAA,CFiXZ,gJCxUJ,gBAAA,CACA,cCnCgB,CCYhB,0BH8VI,gJCpUA,cCrCY,CAAA,CF+WZ,gICrWJ,cCnBiB,CCMjB,yBHkXI,gIClWA,cCrBY,CAAA,CCYhB,yBH2WI,gIC/VA,cCvBY,CAAA,CF2XZ,gJC1UJ,gBAAA,CACA,cC5CgB,CCFhB,yBHuXI,gJCtUA,cC/CY,CAAA,CCKhB,yBHgXI,gJClUA,cClDY,CAAA,CF0XZ,gICtWJ,cC7BiB,CCMjB,yBH6XI,gICnWA,cC9BY,CAAA,CCWhB,yBHsXI,gIChWA,cChCY,CAAA,CFqYZ,gJCxUJ,gBAAA,CACA,cCzDgB,CCFhB,yBHkYI,gJCpUA,cC3DY,CAAA,CCIhB,yBH2XI,gJCjUA,cC7DY,CAAA',
                        sourcesContent: [
                            '.root{width:100%;margin-bottom:30px}.root.articleLayout .wrapper{max-width:1200px;margin:15px auto;width:100%}@media(min-width: 576px){.root.articleLayout .wrapper{width:80%}}.root.articleLayout .wrapper .features{width:100%;display:flex;flex-direction:column;box-sizing:border-box;align-items:center}@media(min-width: 768px){.root.articleLayout .wrapper .features{flex-direction:row}}.root.articleLayout .wrapper .features .imageBlock{position:relative;width:100%;max-width:100%;height:100%;align-self:flex-start;display:none}.root.articleLayout .wrapper .features .imageBlock img{width:100%}@media(min-width: 768px){.root.articleLayout .wrapper .features .imageBlock{width:50%;height:auto}}.root.articleLayout .wrapper .features .allText{align-self:flex-start;display:flex;flex-direction:column;padding:20px}@media(min-width: 576px){.root.articleLayout .wrapper .features .allText{padding:0}}.root.articleLayout .wrapper .features .allText .title{margin-bottom:20px;line-height:1.3}.root.articleLayout .wrapper .features .allText .title .text{line-height:1.3;margin-top:30px;margin-bottom:0}.root.articleLayout .wrapper .features .allText .title .text::before{content:"";display:block;height:0;width:0;margin-top:calc((1 - 1.3)*.8em)}@media(min-width: 768px){.root.articleLayout .wrapper .features .allText .title .text{margin-top:0}}.root.articleLayout .wrapper .features .allText .textBlock .text{margin-top:0}.root.articleLayout .wrapper .features .allText .cta_btn{margin-top:20px}.root.articleLayout .wrapper .features .allText .cta_btn a{font-weight:bold;text-transform:uppercase}.root.articleLayout .wrapper .features .allText .cta_btn a:after{padding:10px;content:">";color:#e6d341}.root.articleLayout .wrapper.imageArticle .imageBlock{display:block}.root.articleLayout .wrapper.imageArticle .allText{justify-content:flex-start}@media(min-width: 576px){.root.articleLayout .wrapper.imageArticle .allText{padding-left:20px}}@media(min-width: 768px){.root.articleLayout .wrapper.imageArticle .allText{width:50%}}@media(min-width: 768px){.root.articleLayout .wrapper.reverse .features{flex-direction:row-reverse}}@media(min-width: 576px){.root.articleLayout .wrapper.reverse .allText{padding-right:20px;padding-left:0}}.root.articleLayout .wrapper.bordered .features{padding:20px}@media(min-width: 576px){.root.cardLayout .wrapper{width:80%;margin:0 auto}}@media(min-width: 768px){.root.cardLayout .wrapper{width:100%}}@media(min-width: 768px){.root.cardLayout .wrapper .title{display:flex;flex-direction:row;margin-top:20px;margin-bottom:10px}.root.cardLayout .wrapper .title .text{margin-bottom:0}}.root.cardLayout .wrapper .title .textGutter{flex:10 0 0}.root.cardLayout .wrapper .title .insideTextGutter{flex:20 0 0;max-width:300px}.root.cardLayout .wrapper .title .titleText{display:flex;align-self:flex-start}@media(min-width: 768px){.root.cardLayout .wrapper .title .titleText{align-self:flex-start;flex:60 0 0;max-width:900px}}.root.cardLayout .wrapper .title .titleText .text{padding-left:20px;width:100%;padding:10px 0 10px 20px;margin-top:0}@media(min-width: 768px){.root.cardLayout .wrapper .title .titleText .text{margin-left:auto;flex:60 0 0}}@media(min-width: 576px)and (max-width: 768px){.root.cardLayout .wrapper .title .titleText .text{padding:10px 0 10px 0}}.root.cardLayout .wrapper .features{display:flex;flex-direction:column}@media(min-width: 768px){.root.cardLayout .wrapper .features{flex-direction:row}}.root.cardLayout .wrapper .features .colorBlock{flex:10 0 0;display:none}@media(min-width: 768px){.root.cardLayout .wrapper .features .colorBlock{display:block}}.root.cardLayout .wrapper .features .colorBlock .colorFill{aspect-ratio:.6666666667;height:25vw/1.3333333333}@media(min-width: 768px){.root.cardLayout .wrapper .features .imageBlock{flex:20 0 0;background-color:#3232bf;align-self:flex-start;max-width:300px;width:25vw}}.root.cardLayout .wrapper .features .imageBlock .blockPicture{width:100%;position:relative}@media(min-width: 768px){.root.cardLayout .wrapper .features .imageBlock .blockPicture{aspect-ratio:1.3333333333}}.root.cardLayout .wrapper .features .imageBlock .blockPicture img{width:100% !important;object-fit:cover}@media(min-width: 768px){.root.cardLayout .wrapper .features .imageBlock .blockPicture img{position:absolute;top:0;left:0;height:100%;width:100%}}.root.cardLayout .wrapper .features .textBlock{display:flex;flex-direction:column;justify-content:flex-start;max-width:900px}@media(min-width: 768px){.root.cardLayout .wrapper .features .textBlock{flex:60 0 0;position:relative}}.root.cardLayout .wrapper .features .textBlock .text{padding-top:0;padding:20px;margin-top:0}@media(min-width: 768px){.root.cardLayout .wrapper .features .textBlock .text{line-height:1.3;padding:0;padding-left:20px}.root.cardLayout .wrapper .features .textBlock .text::before{content:"";display:block;height:0;width:0;margin-top:calc((1 - 1.3)*.8em)}}.root.cardLayout .wrapper .features .textBlock .cta_btn{margin-top:20px;padding-left:20px}.root.cardLayout .wrapper .features .textBlock .cta_btn a{font-weight:bold;text-transform:uppercase}.root.cardLayout .wrapper .features .textBlock .cta_btn a:after{padding:10px;content:">";color:#e6d341}@media(min-width: 768px){.root.cardLayout .wrapper .features .textBlock .cta_btn{margin-left:20px;padding:0}}.root.cardLayout .wrapper.bordered .textBlock .text{padding:20px}.root.cardLayout .wrapper.bordered .textBlock .cta_btn{padding-bottom:20px}@media(min-width: 768px){.root.cardLayout .wrapper.reverse .features,.root.cardLayout .wrapper.reverse .title{flex-direction:row-reverse}}@media(min-width: 1500px){.root.cardLayout .wrapper .features .colorBlock .colorFill{height:225px;aspect-ratio:auto}}@media(min-width: 768px){.root.cardLayout .wrapper.reverse .features{flex-direction:row-reverse}.root.cardLayout .wrapper.reverse .title{flex-direction:row-reverse}.root.cardLayout .wrapper.reverse .titleText .text,.root.cardLayout .wrapper.reverse .textBlock .text{padding-left:0 !important;padding-right:20px !important}.root.cardLayout .wrapper.reverse .cta_btn{margin-left:0 !important}}.root.left .textBlock .text,.root.left .titleText .text,.root.left .title .text,.root.left .allText,.root.left .cta_btn{text-align:left}.root.right .textBlock .text,.root.right .titleText .text,.root.right .title .text,.root.right .allText,.root.right .cta_btn{text-align:right}.root.center .textBlock .text,.root.center .titleText .text,.root.center .title .text,.root.center .allText,.root.center .cta_btn{text-align:center}.root.sm .textBlock .text,.root.sm .cta_btn{font-size:13px}@media(min-width: 768px){.root.sm .textBlock .text,.root.sm .cta_btn{font-size:15px}}.root.sm .titleText .text,.root.sm .title .text{font-weight:bold;font-size:20px}@media(min-width: 1200px){.root.sm .titleText .text,.root.sm .title .text{font-size:35px}}.root.md .textBlock .text,.root.md .cta_btn{font-size:13px}@media(min-width: 768px){.root.md .textBlock .text,.root.md .cta_btn{font-size:15px}}@media(min-width: 992px){.root.md .textBlock .text,.root.md .cta_btn{font-size:20px}}.root.md .titleText .text,.root.md .title .text{font-weight:bold;font-size:20px}@media(min-width: 768px){.root.md .titleText .text,.root.md .title .text{font-size:20px}}@media(min-width: 992px){.root.md .titleText .text,.root.md .title .text{font-size:35px}}.root.lg .textBlock .text,.root.lg .cta_btn{font-size:13px}@media(min-width: 768px){.root.lg .textBlock .text,.root.lg .cta_btn{font-size:20px}}@media(min-width: 992px){.root.lg .textBlock .text,.root.lg .cta_btn{font-size:30px}}.root.lg .titleText .text,.root.lg .title .text{font-weight:bold;font-size:20px}@media(min-width: 768px){.root.lg .titleText .text,.root.lg .title .text{font-size:35px}}@media(min-width: 992px){.root.lg .titleText .text,.root.lg .title .text{font-size:50px}}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'list_root__e7h97',
                        articleLayout: 'list_articleLayout__eYmP2',
                        wrapper: 'list_wrapper__tHtMM',
                        features: 'list_features__cI6q3',
                        imageBlock: 'list_imageBlock__WVL35',
                        allText: 'list_allText__rWHqh',
                        title: 'list_title__MLBFL',
                        text: 'list_text__DNipj',
                        textBlock: 'list_textBlock__N6Dc8',
                        cta_btn: 'list_cta_btn__nkRJY',
                        imageArticle: 'list_imageArticle__vuCzF',
                        reverse: 'list_reverse__D6amu',
                        bordered: 'list_bordered___lygg',
                        cardLayout: 'list_cardLayout__5fIyM',
                        textGutter: 'list_textGutter__ysqKl',
                        insideTextGutter: 'list_insideTextGutter__4vTsX',
                        titleText: 'list_titleText__f_rvT',
                        colorBlock: 'list_colorBlock__pMUq9',
                        colorFill: 'list_colorFill__S_nnY',
                        blockPicture: 'list_blockPicture__VAGTa',
                        left: 'list_left__1sIwn',
                        right: 'list_right__ZtX_r',
                        center: 'list_center__H_o_b',
                        sm: 'list_sm__sm3dY',
                        md: 'list_md__ffDwm',
                        lg: 'list_lg__4MsI0',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/logo.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.logo_root__B__TF .logo_wrapper__18tFw .logo_logo__IIVDo{width:100%;position:relative}.logo_root__B__TF .logo_wrapper__18tFw .logo_logo__IIVDo span{max-height:30px !important}@media(min-width: 352px){.logo_root__B__TF .logo_wrapper__18tFw .logo_logo__IIVDo span{max-height:40px !important}}@media(min-width: 500px){.logo_root__B__TF .logo_wrapper__18tFw .logo_logo__IIVDo span{max-height:60px !important}}@media(min-width: 920px){.logo_root__B__TF .logo_wrapper__18tFw .logo_logo__IIVDo span{max-height:100px !important}}.logo_root__B__TF .logo_wrapper__18tFw .logo_logo__IIVDo span img{height:100% !important;min-width:0 !important;width:auto !important}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./components/logo.module.scss'],
                        names: [],
                        mappings:
                            'AAOQ,yDACI,UAAA,CACA,iBAAA,CAEA,8DACI,0BAAA,CACA,yBAFJ,8DAGQ,0BAAA,CAAA,CAEJ,yBALJ,8DAMQ,0BAAA,CAAA,CAGJ,yBATJ,8DAUQ,2BAAA,CAAA,CAGJ,kEACI,sBAAA,CACA,sBAAA,CACA,qBAAA',
                        sourcesContent: [
                            '.root .wrapper .logo{width:100%;position:relative}.root .wrapper .logo span{max-height:30px !important}@media(min-width: 352px){.root .wrapper .logo span{max-height:40px !important}}@media(min-width: 500px){.root .wrapper .logo span{max-height:60px !important}}@media(min-width: 920px){.root .wrapper .logo span{max-height:100px !important}}.root .wrapper .logo span img{height:100% !important;min-width:0 !important;width:auto !important}',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = { root: 'logo_root__B__TF', wrapper: 'logo_wrapper__18tFw', logo: 'logo_logo__IIVDo' })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/nav.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.nav_root__Os0VC{width:100%}.nav_root__Os0VC .nav_wrapper__WqtGc ul{padding:0;margin:0}.nav_root__Os0VC .nav_wrapper__WqtGc ul li{text-decoration:none;list-style-type:none;padding:10px;font-size:13px}@media(min-width: 768px){.nav_root__Os0VC .nav_wrapper__WqtGc ul li{font-size:15px}}@media(min-width: 992px){.nav_root__Os0VC .nav_wrapper__WqtGc ul li{font-size:20px}}.nav_root__Os0VC .nav_wrapper__WqtGc ul li.nav_bordered__pT7zy{margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #fff}@media(min-width: 360px){.nav_root__Os0VC .nav_wrapper__WqtGc ul{columns:2}}.nav_root__Os0VC .nav_wrapper__WqtGc.nav_headerNav__5W0lI li{text-align:left;padding:10px}.nav_root__Os0VC .nav_wrapper__WqtGc.nav_headerNav__5W0lI ul{columns:2}.nav_root__Os0VC .nav_wrapper__WqtGc.nav_footerNav__FP3mQ li{padding:5px}@media(max-width: 768px){.nav_root__Os0VC .nav_wrapper__WqtGc.nav_footerNav__FP3mQ li{font-size:20px;padding:10px}}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/nav.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                        ],
                        names: [],
                        mappings:
                            'AAKA,iBACI,UAAA,CAGI,wCACI,SAAA,CACA,QAAA,CAEA,2CACI,oBAAA,CACA,oBAAA,CACA,YAAA,CCkCZ,cCnBiB,CCMjB,yBHxBQ,2CCwCJ,cCrBY,CAAA,CCYhB,yBH/BQ,2CC2CJ,cCvBY,CAAA,CFbJ,+DACI,kBAAA,CACA,mBAAA,CACA,4BAAA,CAAA,yBAdZ,wCAmBQ,SAAA,CAAA,CAKJ,6DACI,eAAA,CACA,YAAA,CAGJ,6DACI,SAAA,CAKJ,6DACI,WAAA,CAEA,yBAHJ,6DAIQ,cEfA,CFgBA,YAAA,CAAA',
                        sourcesContent: [
                            '.root{width:100%}.root .wrapper ul{padding:0;margin:0}.root .wrapper ul li{text-decoration:none;list-style-type:none;padding:10px;font-size:13px}@media(min-width: 768px){.root .wrapper ul li{font-size:15px}}@media(min-width: 992px){.root .wrapper ul li{font-size:20px}}.root .wrapper ul li.bordered{margin-bottom:20px;padding-bottom:20px;border-bottom:1px solid #fff}@media(min-width: 360px){.root .wrapper ul{columns:2}}.root .wrapper.headerNav li{text-align:left;padding:10px}.root .wrapper.headerNav ul{columns:2}.root .wrapper.footerNav li{padding:5px}@media(max-width: 768px){.root .wrapper.footerNav li{font-size:20px;padding:10px}}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'nav_root__Os0VC',
                        wrapper: 'nav_wrapper__WqtGc',
                        bordered: 'nav_bordered__pT7zy',
                        headerNav: 'nav_headerNav__5W0lI',
                        footerNav: 'nav_footerNav__FP3mQ',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/navigation.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.navigation_root__7JGuf{width:100%;position:fixed;top:0;z-index:99999999999999}.navigation_root__7JGuf .navigation_wrapper__9sQQj{display:flex;max-width:1200px}@media(min-width: 576px){.navigation_root__7JGuf .navigation_wrapper__9sQQj{width:80%;margin:0 auto}}.navigation_root__7JGuf .navigation_wrapper__9sQQj .navigation_logoBlock__XhbTX{flex-grow:2;z-index:9999999999;padding:10px !important}@media(min-width: 576px){.navigation_root__7JGuf .navigation_wrapper__9sQQj .navigation_logoBlock__XhbTX{width:80%}}.navigation_root__7JGuf .navigation_wrapper__9sQQj .navigation_logoBlock__XhbTX img{margin:0 !important}.navigation_root__7JGuf .navigation_wrapper__9sQQj .navigation_burgerBlock__Dtg2r{flex-grow:1;display:flex;justify-content:flex-end;align-items:center}.navigation_root__7JGuf.navigation_layout2__SteJM{position:static}.navigation_root__7JGuf .navigation_navBar__FCELi{width:100%;z-index:99;display:none}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj{z-index:9999;display:flex;align-items:center;justify-content:center}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6{display:flex;justify-content:center;align-items:center;position:fixed;z-index:9999;top:0;width:100%;margin:0 auto;padding:20px;box-sizing:border-box;max-width:1200px;padding-top:50px}@media(min-width: 576px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6{width:80%}}@media(min-width: 500px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6{padding-top:60px}}@media(min-width: 500px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6{padding-top:80px}}@media(min-width: 920px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6{padding-top:120px}}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_navItems__999iG{display:flex;justify-content:flex-start;align-self:flex-start;padding:10px;flex-wrap:wrap}@media(min-width: 576px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_navItems__999iG{padding-left:20px}}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_navItems__999iG a{text-align:center}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_navItems__999iG>div{max-width:450px;margin-left:0}@media(min-width: 1200px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_navItems__999iG>div{max-width:550px}}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_imageTile__y6H8a{flex:30 0 0;padding:20px;position:relative;aspect-ratio:1.3333333333;display:none;align-self:flex-start;margin-top:10px}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_imageTile__y6H8a img{max-width:100%}@media(min-width: 576px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_imageTile__y6H8a{flex:30 0 0}}@media(min-width: 360px){.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_imageTile__y6H8a{display:block}}.navigation_root__7JGuf .navigation_navBar__FCELi .navigation_wrapper__9sQQj .navigation_navDrop__J9CY6 .navigation_imageTile__y6H8a span{margin-top:10px !important}.navigation_root__7JGuf .navigation_navBar__FCELi.navigation_hasImage__et8CD .navigation_navItems__999iG{flex:50 0 0;justify-content:center}.navigation_root__7JGuf .navigation_navBar__FCELi.navigation_visible__Gkdgd{display:block}.navigation_root__7JGuf .navigation_navBar__FCELi.navigation_layout2__SteJM .navigation_navDrop__J9CY6{position:absolute;top:0}.navigation_root__7JGuf .navigation_burger__3qite{z-index:99999}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj{height:100%}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq{z-index:9999999}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq div{position:relative;width:25px;height:2px;border-radius:3px;margin-top:4px}@media(min-width: 576px){.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq div{width:40px;height:4px;border-radius:3px;margin-top:5px}}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq button{background-color:rgba(0,0,0,0);border:none}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq button:hover{cursor:pointer}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq.navigation_navActive__hdXUc div:first-of-type{transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transition:transform .5s ease-in-out;top:6px}@media(min-width: 576px){.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq.navigation_navActive__hdXUc div:first-of-type{top:11px}}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq.navigation_navActive__hdXUc div:nth-child(2){opacity:0}.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq.navigation_navActive__hdXUc div:last-of-type{transform:rotate(-5deg);-webkit-transform:rotate(45deg);transition:transform .5s ease-in-out;top:-6px}@media(min-width: 576px){.navigation_root__7JGuf .navigation_burger__3qite .navigation_wrapper__9sQQj .navigation_burgerBtn__B7_aq.navigation_navActive__hdXUc div:last-of-type{top:-6px}}',
                    '',
                    {
                        version: 3,
                        sources: ['webpack://./components/navigation.module.scss', 'webpack://./styles/variables.scss', 'webpack://./styles/breakpoints.scss'],
                        names: [],
                        mappings:
                            'AAKA,wBACI,UAAA,CACA,cAAA,CACA,KAAA,CACA,sBAAA,CAGA,mDACI,YAAA,CACA,gBCVS,CC0Bb,yBFlBA,mDAIQ,SCbI,CDcJ,aAAA,CAAA,CAGJ,gFACI,WAAA,CAGA,kBAAA,CACA,uBAAA,CEKR,yBFVI,gFAQQ,SCzBA,CAAA,CD4BJ,oFACI,mBAAA,CAIR,kFACI,WAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA,CAKR,kDACI,eAAA,CAIJ,kDACI,UAAA,CACA,UAAA,CACA,YAAA,CAEA,6EACI,YAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAEA,wGACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,YAAA,CAEA,KAAA,CACA,UAAA,CACA,aAAA,CACA,YC/DV,CDiEU,qBAAA,CACA,gBCtEC,CD2ED,gBC7DG,CCYf,yBF+BQ,wGAeQ,SCzEJ,CAAA,CD6EA,yBAnBJ,wGAoBQ,gBChED,CAAA,CDmEH,yBAvBJ,wGAwBQ,gBCrED,CAAA,CDuEH,yBA1BJ,wGA2BQ,iBCzEH,CAAA,CD4ED,oIACI,YAAA,CACA,0BAAA,CACA,qBAAA,CACA,YAAA,CACA,cAAA,CElEhB,yBF6DY,oIAQQ,iBAAA,CAAA,CAGJ,sIACI,iBAAA,CAGJ,wIACI,eAAA,CACA,aAAA,CEzDpB,0BFuDgB,wIAKQ,eAAA,CAAA,CAKZ,qIACI,WAAA,CACA,YAAA,CACA,iBAAA,CACA,yBCnHD,CDoHC,YAAA,CACA,qBAAA,CACA,eAAA,CAEA,yIACI,cAAA,CEhGpB,yBFsFY,qIAcQ,WAAA,CAAA,CE3GpB,yBF6FY,qIAkBQ,aAAA,CAAA,CAGJ,0IACI,0BAAA,CAOZ,yGACI,WAAA,CACA,sBAAA,CAIR,4EACI,aAAA,CAGJ,uGACI,iBAAA,CACA,KAAA,CAIR,kDACI,aAAA,CAEA,6EACI,WAAA,CAEA,0GACI,eAAA,CAEA,8GACI,iBAAA,CAGA,UAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CEnJhB,yBF4IY,8GAUQ,UAAA,CACA,UAAA,CACA,iBAAA,CACA,cAAA,CAAA,CAIR,iHACI,8BAAA,CACA,WAAA,CAEA,uHACI,cAAA,CAIJ,wJACI,wBAAA,CACA,gCAAA,CACA,oCAAA,CACA,OAAA,CE1KpB,yBFsKgB,wJAOQ,QAAA,CAAA,CAIR,uJACI,SAAA,CAGJ,uJACI,uBAAA,CACA,+BAAA,CACA,oCAAA,CACA,QAAA,CEzLpB,yBFqLgB,uJAOQ,QAAA,CAAA',
                        sourcesContent: [
                            '.root{width:100%;position:fixed;top:0;z-index:99999999999999}.root .wrapper{display:flex;max-width:1200px}@media(min-width: 576px){.root .wrapper{width:80%;margin:0 auto}}.root .wrapper .logoBlock{flex-grow:2;z-index:9999999999;padding:10px !important}@media(min-width: 576px){.root .wrapper .logoBlock{width:80%}}.root .wrapper .logoBlock img{margin:0 !important}.root .wrapper .burgerBlock{flex-grow:1;display:flex;justify-content:flex-end;align-items:center}.root.layout2{position:static}.root .navBar{width:100%;z-index:99;display:none}.root .navBar .wrapper{z-index:9999;display:flex;align-items:center;justify-content:center}.root .navBar .wrapper .navDrop{display:flex;justify-content:center;align-items:center;position:fixed;z-index:9999;top:0;width:100%;margin:0 auto;padding:20px;box-sizing:border-box;max-width:1200px;padding-top:50px}@media(min-width: 576px){.root .navBar .wrapper .navDrop{width:80%}}@media(min-width: 500px){.root .navBar .wrapper .navDrop{padding-top:60px}}@media(min-width: 500px){.root .navBar .wrapper .navDrop{padding-top:80px}}@media(min-width: 920px){.root .navBar .wrapper .navDrop{padding-top:120px}}.root .navBar .wrapper .navDrop .navItems{display:flex;justify-content:flex-start;align-self:flex-start;padding:10px;flex-wrap:wrap}@media(min-width: 576px){.root .navBar .wrapper .navDrop .navItems{padding-left:20px}}.root .navBar .wrapper .navDrop .navItems a{text-align:center}.root .navBar .wrapper .navDrop .navItems>div{max-width:450px;margin-left:0}@media(min-width: 1200px){.root .navBar .wrapper .navDrop .navItems>div{max-width:550px}}.root .navBar .wrapper .navDrop .imageTile{flex:30 0 0;padding:20px;position:relative;aspect-ratio:1.3333333333;display:none;align-self:flex-start;margin-top:10px}.root .navBar .wrapper .navDrop .imageTile img{max-width:100%}@media(min-width: 576px){.root .navBar .wrapper .navDrop .imageTile{flex:30 0 0}}@media(min-width: 360px){.root .navBar .wrapper .navDrop .imageTile{display:block}}.root .navBar .wrapper .navDrop .imageTile span{margin-top:10px !important}.root .navBar.hasImage .navItems{flex:50 0 0;justify-content:center}.root .navBar.visible{display:block}.root .navBar.layout2 .navDrop{position:absolute;top:0}.root .burger{z-index:99999}.root .burger .wrapper{height:100%}.root .burger .wrapper .burgerBtn{z-index:9999999}.root .burger .wrapper .burgerBtn div{position:relative;width:25px;height:2px;border-radius:3px;margin-top:4px}@media(min-width: 576px){.root .burger .wrapper .burgerBtn div{width:40px;height:4px;border-radius:3px;margin-top:5px}}.root .burger .wrapper .burgerBtn button{background-color:rgba(0,0,0,0);border:none}.root .burger .wrapper .burgerBtn button:hover{cursor:pointer}.root .burger .wrapper .burgerBtn.navActive div:first-of-type{transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transition:transform .5s ease-in-out;top:6px}@media(min-width: 576px){.root .burger .wrapper .burgerBtn.navActive div:first-of-type{top:11px}}.root .burger .wrapper .burgerBtn.navActive div:nth-child(2){opacity:0}.root .burger .wrapper .burgerBtn.navActive div:last-of-type{transform:rotate(-5deg);-webkit-transform:rotate(45deg);transition:transform .5s ease-in-out;top:-6px}@media(min-width: 576px){.root .burger .wrapper .burgerBtn.navActive div:last-of-type{top:-6px}}',
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'navigation_root__7JGuf',
                        wrapper: 'navigation_wrapper__9sQQj',
                        logoBlock: 'navigation_logoBlock__XhbTX',
                        burgerBlock: 'navigation_burgerBlock__Dtg2r',
                        layout2: 'navigation_layout2__SteJM',
                        navBar: 'navigation_navBar__FCELi',
                        navDrop: 'navigation_navDrop__J9CY6',
                        navItems: 'navigation_navItems__999iG',
                        imageTile: 'navigation_imageTile__y6H8a',
                        hasImage: 'navigation_hasImage__et8CD',
                        visible: 'navigation_visible__Gkdgd',
                        burger: 'navigation_burger__3qite',
                        burgerBtn: 'navigation_burgerBtn__B7_aq',
                        navActive: 'navigation_navActive__hdXUc',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/text.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.text_root__v2Jtv{width:100%;margin-bottom:30px}.text_root__v2Jtv .text_wrapper__BnMp8{width:80%;max-width:1200px;margin:0 auto}@media(min-width: 576px){.text_root__v2Jtv .text_wrapper__BnMp8{width:80%}}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob{width:100%;margin:0}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob ul{margin:10px}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_center__5P9Pt{text-align:center}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_center__5P9Pt li{list-style-position:inside}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_left__Od9qt{text-align:left}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_right__FZuCg{text-align:right}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_right__FZuCg li{list-style-position:inside}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_sm___5HRB{font-size:13px}@media(min-width: 768px){.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_sm___5HRB{font-size:15px}}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_md__P0vif{font-size:13px}@media(min-width: 768px){.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_md__P0vif{font-size:15px}}@media(min-width: 992px){.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_md__P0vif{font-size:20px}}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_lg__QQjFv{font-size:13px}@media(min-width: 768px){.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_lg__QQjFv{font-size:20px}}@media(min-width: 992px){.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm .text_text__Vtdob.text_lg__QQjFv{font-size:30px}}.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm.text_bordered__Tb0rJ{padding:30px}@media(min-width: 576px){.text_root__v2Jtv .text_wrapper__BnMp8 .text_body__hzFsm.text_gap__b_7PY{padding:20px}}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/text.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                        ],
                        names: [],
                        mappings:
                            'AAIA,kBCOI,UAAA,CACA,kBAHiB,CDFjB,uCACI,SELQ,CFMR,gBELS,CFMT,aAAA,CGoBJ,yBHvBA,uCAMQ,SEVI,CAAA,CFcJ,2EACI,UAAA,CACA,QAAA,CAEA,8EACI,WAAA,CAGJ,8FACI,iBAAA,CAEA,iGACI,0BAAA,CAIR,4FACI,eAAA,CAGJ,6FACI,gBAAA,CAEA,gGACI,0BAAA,CAIR,0FCFZ,cCZiB,CCMjB,yBHQY,0FCCR,cCdY,CAAA,CFiBJ,0FCCZ,cCnBiB,CCMjB,yBHYY,0FCIR,cCrBY,CAAA,CCYhB,yBHKY,0FCOR,cCvBY,CAAA,CFoBJ,0FCOZ,cC7BiB,CCMjB,yBHgBY,0FCUR,cC9BY,CAAA,CCWhB,yBHSY,0FCaR,cChCY,CAAA,CFwBR,8EAEI,YAAA,CG9BZ,yBHiCQ,yEAEQ,YAAA,CAAA',
                        sourcesContent: [
                            '.root{width:100%;margin-bottom:30px}.root .wrapper{width:80%;max-width:1200px;margin:0 auto}@media(min-width: 576px){.root .wrapper{width:80%}}.root .wrapper .body .text{width:100%;margin:0}.root .wrapper .body .text ul{margin:10px}.root .wrapper .body .text.center{text-align:center}.root .wrapper .body .text.center li{list-style-position:inside}.root .wrapper .body .text.left{text-align:left}.root .wrapper .body .text.right{text-align:right}.root .wrapper .body .text.right li{list-style-position:inside}.root .wrapper .body .text.sm{font-size:13px}@media(min-width: 768px){.root .wrapper .body .text.sm{font-size:15px}}.root .wrapper .body .text.md{font-size:13px}@media(min-width: 768px){.root .wrapper .body .text.md{font-size:15px}}@media(min-width: 992px){.root .wrapper .body .text.md{font-size:20px}}.root .wrapper .body .text.lg{font-size:13px}@media(min-width: 768px){.root .wrapper .body .text.lg{font-size:20px}}@media(min-width: 992px){.root .wrapper .body .text.lg{font-size:30px}}.root .wrapper .body.bordered{padding:30px}@media(min-width: 576px){.root .wrapper .body.gap{padding:20px}}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = {
                        root: 'text_root__v2Jtv',
                        wrapper: 'text_wrapper__BnMp8',
                        body: 'text_body__hzFsm',
                        text: 'text_text__Vtdob',
                        center: 'text_center__5P9Pt',
                        left: 'text_left__Od9qt',
                        right: 'text_right__FZuCg',
                        sm: 'text_sm___5HRB',
                        md: 'text_md__P0vif',
                        lg: 'text_lg__QQjFv',
                        bordered: 'text_bordered__Tb0rJ',
                        gap: 'text_gap__b_7PY',
                    })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[10].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[10].use[4]!./components/video.module.scss':
            (module, __webpack_exports__, __webpack_require__) => {
                'use strict'
                __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
                var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/sourceMaps.js'
                    ),
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                    ),
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                        './node_modules/css-loader/dist/runtime/api.js'
                    ),
                    ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                        _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                    )
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    '.video_root__spG6P{width:100%;margin-bottom:30px}.video_root__spG6P .video_wrapper__fB6cE{max-width:1200px}@media(min-width: 576px){.video_root__spG6P .video_wrapper__fB6cE{width:80%;margin:0 auto}}.video_root__spG6P .video_wrapper__fB6cE .video_videoBlock__dRtJe>div:first-child{width:100% !important;max-width:100%;aspect-ratio:1.7777777778;height:auto !important}',
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./components/video.module.scss',
                            'webpack://./styles/utils.scss',
                            'webpack://./styles/variables.scss',
                            'webpack://./styles/breakpoints.scss',
                        ],
                        names: [],
                        mappings:
                            'AAKA,mBCMI,UAAA,CACA,kBAHiB,CDFjB,yCACI,gBEJS,CC0Bb,yBHvBA,yCAIQ,SERI,CFSJ,aAAA,CAAA,CAIA,kFACI,qBAAA,CACA,cAAA,CACA,yBEbI,CFcJ,sBAAA',
                        sourcesContent: [
                            '.root{width:100%;margin-bottom:30px}.root .wrapper{max-width:1200px}@media(min-width: 576px){.root .wrapper{width:80%;margin:0 auto}}.root .wrapper .videoBlock>div:first-child{width:100% !important;max-width:100%;aspect-ratio:1.7777777778;height:auto !important}',
                            "@use '../styles/variables.scss';\r\n@use './styles/breakpoints.scss';\r\n\r\n@mixin useFlex {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n$root-bottom-margin: 30px;\r\n@mixin root {\r\n    width: 100%;\r\n    margin-bottom: $root-bottom-margin;\r\n}\r\n\r\n//mixin for cropping space from top of text\r\n\r\n@mixin lhCrop($line-height) {\r\n    &::before {\r\n        content: '';\r\n        display: block;\r\n        height: 0;\r\n        width: 0;\r\n        margin-top: calc((1 - #{$line-height}) * 0.8em);\r\n    }\r\n}\r\n\r\n@mixin cta_btn {\r\n    margin-top: variables.$gap;\r\n\r\n    a {\r\n        font-weight: bold;\r\n        text-transform: uppercase;\r\n\r\n        &:after {\r\n            padding: 10px;\r\n            content: '>';\r\n            color: variables.$linkColor;\r\n        }\r\n    }\r\n}\r\n/*Font size mixins */\r\n@mixin text-sizes-sm {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n}\r\n@mixin text-sizes-md {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-sm;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n}\r\n@mixin text-sizes-lg {\r\n    font-size: variables.$text-size-body-xsm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-body-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-body-lg;\r\n    }\r\n}\r\n\r\n/*-------------------------------*/\r\n\r\n@mixin headline-sizes-sm {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.xl {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-md {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-sm;\r\n    }\r\n\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n}\r\n\r\n@mixin headline-sizes-lg {\r\n    font-weight: bold;\r\n    font-size: variables.$text-size-head-sm;\r\n\r\n    @include breakpoints.md {\r\n        font-size: variables.$text-size-head-md;\r\n    }\r\n    @include breakpoints.lg {\r\n        font-size: variables.$text-size-head-lg;\r\n    }\r\n}\r\n\r\n/*-----------------------------------*/\r\n",
                            "@use 'sass:math';\r\n\r\n/* Global variables */\r\n$content-width: 80%;\r\n$max-main-width: 1200px;\r\n$aspect-ratio-4_3: math.div(4, 3);\r\n$aspect-ratio-16_9: math.div(16, 9);\r\n$aspect-ratio-3_4: math.div(3, 4);\r\n$gap: 20px;\r\n$logo-size: 100px;\r\n$logo-size-2: 60px;\r\n$logo-size-3: 40px;\r\n$logo-size-4: 30px;\r\n$logo-padding: 10px;\r\n$head-padding: 4px;\r\n$layout-padding: $logo-size + ($logo-padding * 2);\r\n$layout-padding-2: $logo-size-2 + ($logo-padding * 2);\r\n$layout-padding-3: $logo-size-3 + ($logo-padding * 2);\r\n$layout-padding-4: $logo-size-4 + ($logo-padding * 2);\r\n\r\n/*Colors*/\r\n$linkColor: rgb(230, 211, 65);\r\n$promoColor: rgb(50, 50, 191);\r\n//$dark-accent-color: #040941;\r\n$dark-accent-color: #000;\r\n$altColor: #f68a33;\r\n$textColorAccent: #fff;\r\n$textColor-main: rgb(46, 46, 46);\r\n$label-color: rgb(104, 104, 104);\r\n\r\n/*Text sizes*/\r\n$text-size-body-xsm: 13px;\r\n$text-size-body-sm: 15px;\r\n$text-size-body-md: 20px;\r\n$text-size-body-lg: 30px;\r\n$text-size-body-xlg: 45px;\r\n\r\n/*Headlines*/\r\n$text-size-head-xsm: 18px;\r\n$text-size-head-sm: 20px;\r\n$text-size-head-md: 35px;\r\n$text-size-head-lg: 50px;\r\n$text-size-head-xl: 70px;\r\n",
                            '// Extra small screens\r\n$screen-xs-min: 360px;\r\n\r\n// Small tablets and large smartphones (landscape view)\r\n$screen-sm-min: 576px;\r\n\r\n// Small tablets (portrait view)\r\n$screen-md-min: 768px;\r\n\r\n// L Tablets and small desktops\r\n$screen-lg-min: 992px;\r\n\r\n// XL Large tablets and desktops\r\n$screen-xl-min: 1200px;\r\n\r\n// XXL Large tablets and desktops\r\n$screen-xxl-min: 1366px;\r\n\r\n// XXXL For those creazy designers\r\n$screen-xxxl-min: 1920px;\r\n\r\n// Extra Small devices\r\n@mixin xs {\r\n    @media (min-width: #{$screen-xs-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Small devices\r\n@mixin sm {\r\n    @media (min-width: #{$screen-sm-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Medium devices\r\n@mixin md {\r\n    @media (min-width: #{$screen-md-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Large devices\r\n@mixin lg {\r\n    @media (min-width: #{$screen-lg-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Extra large devices\r\n@mixin xl {\r\n    @media (min-width: #{$screen-xl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super Extra large devices\r\n@mixin xxl {\r\n    @media (min-width: #{$screen-xxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// Super mega huge\r\n@mixin xxxl {\r\n    @media (min-width: #{$screen-xxxl-min}) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin custom($size) {\r\n    @media (min-width: $size) {\r\n        @content;\r\n    }\r\n}\r\n',
                        ],
                        sourceRoot: '',
                    },
                ]),
                    (___CSS_LOADER_EXPORT___.locals = { root: 'video_root__spG6P', wrapper: 'video_wrapper__fB6cE', videoBlock: 'video_videoBlock__dRtJe' })
                const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
            },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css': (
            module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/css-loader/dist/runtime/sourceMaps.js'
                ),
                _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                ),
                _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './node_modules/css-loader/dist/runtime/api.js'
                ),
                ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                )
            ___CSS_LOADER_EXPORT___.push([
                module.id,
                ".storybook-button {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n.storybook-button--primary {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n.storybook-button--secondary {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n.storybook-button--small {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\r\n",
                '',
                {
                    version: 3,
                    sources: ['webpack://./stories/button.css'],
                    names: [],
                    mappings:
                        'AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB',
                    sourcesContent: [
                        ".storybook-button {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n.storybook-button--primary {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n.storybook-button--secondary {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n.storybook-button--small {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n.storybook-button--medium {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n.storybook-button--large {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\r\n",
                    ],
                    sourceRoot: '',
                },
            ])
            const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
        },
        './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./styles/globals.css': (
            module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict'
            __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ })
            var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    './node_modules/css-loader/dist/runtime/sourceMaps.js'
                ),
                _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
                ),
                _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    './node_modules/css-loader/dist/runtime/api.js'
                ),
                ___CSS_LOADER_EXPORT___ = __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(
                    _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
                )
            ___CSS_LOADER_EXPORT___.push([
                module.id,
                'body {\n    padding: 0;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n/* \n\n* {\n    box-sizing: border-box;\n} */\n',
                '',
                {
                    version: 3,
                    sources: ['webpack://./styles/globals.css'],
                    names: [],
                    mappings: 'AAAA;IACI,UAAU;IACV,SAAS;IACT,8IAA8I;AAClJ;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;AACA;;;;GAIG',
                    sourcesContent: [
                        'body {\n    padding: 0;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n/* \n\n* {\n    box-sizing: border-box;\n} */\n',
                    ],
                    sourceRoot: '',
                },
            ])
            const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___
        },
        './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
            (module, __unused_webpack_exports, __webpack_require__) => {
                var map = {
                    './Button.stories.tsx': './stories/Button.stories.tsx',
                    './Carousel.stories.tsx': './stories/Carousel.stories.tsx',
                    './Footer.stories.tsx': './stories/Footer.stories.tsx',
                    './Grid.stories.tsx': './stories/Grid.stories.tsx',
                    './Header.stories.tsx': './stories/Header.stories.tsx',
                    './Images.stories.tsx': './stories/Images.stories.tsx',
                    './Label.stories.tsx': './stories/Label.stories.tsx',
                    './List.stories.tsx': './stories/List.stories.tsx',
                    './Navigation.stories.tsx': './stories/Navigation.stories.tsx',
                    './Text.stories.tsx': './stories/Text.stories.tsx',
                    './Video.stories.tsx': './stories/Video.stories.tsx',
                }
                function webpackContext(req) {
                    var id = webpackContextResolve(req)
                    return __webpack_require__(id)
                }
                function webpackContextResolve(req) {
                    if (!__webpack_require__.o(map, req)) {
                        var e = new Error("Cannot find module '" + req + "'")
                        throw ((e.code = 'MODULE_NOT_FOUND'), e)
                    }
                    return map[req]
                }
                ;(webpackContext.keys = function webpackContextKeys() {
                    return Object.keys(map)
                }),
                    (webpackContext.resolve = webpackContextResolve),
                    (module.exports = webpackContext),
                    (webpackContext.id =
                        './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$')
            },
        './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$': (
            module,
            __unused_webpack_exports,
            __webpack_require__
        ) => {
            var map = { './Introduction.stories.mdx': './stories/Introduction.stories.mdx' }
            function webpackContext(req) {
                var id = webpackContextResolve(req)
                return __webpack_require__(id)
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'")
                    throw ((e.code = 'MODULE_NOT_FOUND'), e)
                }
                return map[req]
            }
            ;(webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map)
            }),
                (webpackContext.resolve = webpackContextResolve),
                (module.exports = webpackContext),
                (webpackContext.id =
                    './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$')
        },
        '?4f7e': () => {},
        './generated-stories-entry.cjs': (module, __unused_webpack_exports, __webpack_require__) => {
            'use strict'
            ;(module = __webpack_require__.nmd(module)),
                (0, __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js').configure)(
                    [
                        __webpack_require__(
                            './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$'
                        ),
                        __webpack_require__(
                            './stories sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
                        ),
                        __webpack_require__('./.storybook sync ^\\.[\\\\/](?:(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'),
                    ],
                    module,
                    !1
                )
        },
    },
    (__webpack_require__) => {
        var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
        __webpack_require__.O(
            0,
            [892],
            () => (
                __webpack_exec__('./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'),
                __webpack_exec__('./node_modules/@storybook/core-client/dist/esm/globals/globals.js'),
                __webpack_exec__('./storybook-init-framework-entry.js'),
                __webpack_exec__('./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'),
                __webpack_exec__('./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'),
                __webpack_exec__('./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js'),
                __webpack_exec__('./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js'),
                __webpack_exec__('./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'),
                __webpack_exec__('./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js'),
                __webpack_exec__('./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js'),
                __webpack_exec__('./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js'),
                __webpack_exec__('./node_modules/storybook-addon-next/dist/preview.js-generated-config-entry.js'),
                __webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
                __webpack_exec__('./generated-stories-entry.cjs')
            )
        )
        __webpack_require__.O()
    },
])
