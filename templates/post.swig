{% extends 'layout.swig' %}

{% block title %}{{title}}{% endblock %}

{% block content %}

<div class="row">

    <article class="large-12 columns">

        <p class="subheader">Article Type</p>

        <h1>{{ title }}</h1>

        <time class="post__date" datetime="{{ date }}">{{ date | date('F j, Y') }}</time>

        <p>{{ lead | markdown }}</p>

        {{ contents | safe }}

        <hr>

        <p>By {{ author }}</p>

    </article>

</div>

{% endblock %}


