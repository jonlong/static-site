{% extends 'layout.swig' %}

{% block bodyclass %}home{% endblock %}

{% extends 'layout.swig' %}

{% block content %}

<div class="row">

    <div class="text-center">

        <svg role="img" title="Logo: Diamond">
            <use xlink:href="/assets/images/icons.svg#diamond"></use>
        </svg>

    </div>

</div>

<div class="row">

    <div class="large-12 columns">

        <h2>Posts</h2>

        <ol class="post-list">

            {% for post in collections.posts %}

                <li class="post-list__item">

                    <article class="post">

                        <p class="subheader">Article Type</p>

                        <h2>
                            <a href="{{ post.path }}">{{ post.title }}</a>
                            <p>{{ post.author }}</p>
                        </h2>

                        <p>{{ post.lead | markdown }}</p>

                        <time datetime="{{post.date}}">{{ post.date | date('F j, Y') }}</time>

                    </article>

                </li>

            {% endfor %}

        </ol>

    </div>

</div>

{% endblock %}
