<!DOCTYPE html>
    <!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="{{description}}" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{% block title %}{{blog.title}}{% endblock %}</title>

        <link rel="stylesheet" href="/assets/css/screen.css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,800,700,600,300' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,100,700' rel='stylesheet' type='text/css'>


        <!--[if lte IE 8]><!-->
        <script type="text/javascript" src="/assets/js/polyfills/svg4everybody.ie8.min.js"></script>
        <!--<![endif]-->

        <!--[if gt IE 8]><!-->
        <script type="text/javascript" src="/assets/js/polyfills/svg4everybody.min.js"></script>
        <!--<![endif]-->
    </head>
    <body class="{% block bodyclass %}{% endblock %}">

        <header class="page-head">

            <div class="page-head__left-block">
                <a href="/">LOGO</a>
            </div>

            <nav class="page-head__center-block">
                <ul>
                    <li class="page-head__nav-item"><a href="#">Link</a></li>
                    <li class="page-head__nav-item"><a href="#">Link</a></li>
                    <li class="page-head__nav-item"><a href="#">Link</a></li>
                </ul>
            </nav>

            <div class="page-head__right-block">
                <a class="btn" href="#">Call To Action</a>
            </div>

        </header>

        {% block content %}{% endblock %}

        <footer class="page-footer">
            <div class="table-links">
                <p class="page-footer__item page-footer__item--variant">Company Name, LLC</p>
                <p class="page-footer__item">Washington, DC</p>
                <p class="page-footer__item">
                    <a class="page-footer__link btn btn--negative" href="mailto:jon@linesandwaves.com">jon@linesandwaves.com</a>
                </p>
                <p class="page-footer__item">
                    <a class="page-footer__link btn btn--negative" href="https://twitter.com/linesandwaves">@linesandwaves</a>
                </p>
            </div>
        </footer>

        {% block scripts %}{% endblock %}

        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>