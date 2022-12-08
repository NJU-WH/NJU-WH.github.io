let pjaxSelectors = [
    'title',
    '#config-diff',
    '#body-wrap',
    '#rightside-config-hide',
    '#rightside-config-show',
    '.js-pjax'
]

if (false) {
    pjaxSelectors.unshift('meta[property="og:image"]', 'meta[property="og:title"]', 'meta[property="og:url"]')
}

var pjax = new Pjax({
    elements: 'a:not([target="_blank"])',
    selectors: pjaxSelectors,
    cacheBust: false,
    analytics: false,
    scrollRestoration: false
})

document.addEventListener('pjax:complete', function() {
    window.refreshFn()

    document.querySelectorAll('script[data-pjax]').forEach(item => {
        const newScript = document.createElement('script')
        const content = item.text || item.textContent || item.innerHTML || ""
        Array.from(item.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value))
        newScript.appendChild(document.createTextNode(content))
        item.parentNode.replaceChild(newScript, item)
    })

    GLOBAL_CONFIG.islazyload && window.lazyLoadInstance.update()

    typeof chatBtnFn === 'function' && chatBtnFn()
    typeof panguInit === 'function' && panguInit()

    // google analytics
    typeof gtag === 'function' && gtag('config', '', { 'page_path': window.location.pathname });

    // baidu analytics
    typeof _hmt === 'object' && _hmt.push(['_trackPageview', window.location.pathname]);

    typeof loadMeting === 'function' && document.getElementsByClassName('aplayer').length && loadMeting()

    // Analytics
    if (false) {
        MtaH5.pgv()
    }

    // prismjs
    typeof Prism === 'object' && Prism.highlightAll()

    typeof preloader === 'object' && preloader.endLoading()
})

document.addEventListener('pjax:error', (e) => {
    if (e.request.status === 404) {
        pjax.loadUrl('/404.html')
    }
})

document.addEventListener('pjax:success', (e) => {
    categoriesBarActive()
    tagPageActive()
    onlyHome()
    addNavBackgroundInit()
})