{% extends 'layout.swig' %}

{% block title %}{{title}}{% endblock %}

{% block content %}

<div class="container">

    <article class="post">

        <p class="post__category">Article Type</p>

        <h1 class="post__header">{{ title }}</h1>

        <p class="post__lead">{{ lead | markdown }}</p>

        <time class="post__date" datetime="{{ date }}">{{ date | date('Y') }}</time>

        {{ contents | safe }}

        <hr>

        <p class="post__author">{{ author }}</p>

    </article>

</div>

{% endblock %}


