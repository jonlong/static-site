{% extends 'layout.swig' %}

{% block bodyclass %}home{% endblock %}

{% extends 'layout.swig' %}

{% block content %}

<div class="container">

    <ol>

        {% for post in collections.posts %}

            <li>

                <article class="post">

                    <p class="post__category">Article Type</p>

                    <h2 class="post__header">
                        <a href="{{ post.path }}">{{ post.title }}</a>
                    </h2>

                    <p class="post__lead">{{ post.lead | markdown }}</p>

                    <time class="post__date" datetime="{{post.date}}">{{ post.date | date('Y') }}</time>

                    <hr>

                    <p class="post__author">{{ author }}</p>

                </article>

            </li>

        {% endfor %}

    </ol>

</div>

{% endblock %}
