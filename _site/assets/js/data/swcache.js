const resource = [
    /* --- CSS --- */
    '/rob-blog/assets/css/style.css',

    /* --- PWA --- */
    '/rob-blog/app.js',
    '/rob-blog/sw.js',

    /* --- HTML --- */
    '/rob-blog/index.html',
    '/rob-blog/404.html',

    
        '/rob-blog/categories/',
    
        '/rob-blog/tags/',
    
        '/rob-blog/archives/',
    
        '/rob-blog/about/',
    

    /* --- Favicons & compressed JS --- */
    
    
        '/rob-blog/assets/img/favicons/android-chrome-192x192.png',
        '/rob-blog/assets/img/favicons/android-chrome-512x512.png',
        '/rob-blog/assets/img/favicons/apple-touch-icon.png',
        '/rob-blog/assets/img/favicons/favicon-16x16.png',
        '/rob-blog/assets/img/favicons/favicon-32x32.png',
        '/rob-blog/assets/img/favicons/favicon.ico',
        '/rob-blog/assets/img/favicons/mstile-150x150.png',
        '/rob-blog/assets/js/dist/categories.min.js',
        '/rob-blog/assets/js/dist/commons.min.js',
        '/rob-blog/assets/js/dist/home.min.js',
        '/rob-blog/assets/js/dist/misc.min.js',
        '/rob-blog/assets/js/dist/page.min.js',
        '/rob-blog/assets/js/dist/post.min.js',
        '/rob-blog/assets/js/dist/pvreport.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
    

    'localhost:4000',

    

    'fonts.gstatic.com',
    'fonts.googleapis.com',
    'cdn.jsdelivr.net',
    'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
    
];

