<!DOCTYPE html>
    <!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
    <!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"> <![endif]-->
    <!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
    <!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="{{ description }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{% block title %}{{ blog.title }}{% endblock %}</title>

        <link rel="stylesheet" href="/assets/css/screen.css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,800,700,600,300' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,100,700' rel='stylesheet' type='text/css'>
    </head>

    <body>

        <header class="page-head row">

            <div class="large-3 columns">
                <img src="http://placehold.it/400x100&text=Logo">
            </div>

            <nav class="large-9 columns">
                <ul class="button-group right">
                    <li>
                        <a class="button" href="#">Link</a>
                    </li>

                    <li>
                        <a class="button" href="#">Link</a>
                    </li>

                    <li>
                        <a class="button" href="#">Link</a>
                    </li>
                </ul>
            </nav>

        </header>

        {% block content %}{% endblock %}

        <footer class="page-footer row">

            <hr />

            <ul class="inline-list right">

                <li>Company Name, LLC</li>

                <li>Washington, DC</li>

                <li>
                    <a href="mailto:jon@linesandwaves.com">jon@linesandwaves.com</a>
                </li>

                <li>
                    <a href="https://twitter.com/linesandwaves">@linesandwaves</a>
                </li>

            </ul>

        </footer>

        {% block scripts %}{% endblock %}

        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','{{ site.analyticsUA }}');ga('send','pageview');
        </script>
    </body>
</html>