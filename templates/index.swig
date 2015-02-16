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

        <div class="clearfix">
            <h2 class="left">Posts</h2>
            <a class="button alert right" data-reveal-id="modal">Click Me For A Modal</a>
        </div>

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

{% block jsmarkup %}

    {% include 'partials/modal.swig' %}

{% endblock %}
