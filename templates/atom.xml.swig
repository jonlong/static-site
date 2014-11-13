<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en">
  <id>http://sample.github.com/</id>
  <title>Jon Long</title>
  <subtitle>Title</subtitle>
  <link href="{{ BASE_URL }}atom.xml" rel="self" type="application/atom+xml" />
  <link href="{{ BASE_URL }}" rel="alternate" type="text/html" />
  <updated>{{ now | date('c') }}</updated>
  <author>
    <name>Jon Long</name>
  </author>
  <rights>© {{ now|date('Y') }} Jon Long</rights>
  {% for post in posts %}
  <entry xml:lang="{{ post.lang }}">
    <id>{{ BASE_URL }}{{ post.path }}</id>
    <link href="{{ BASE_URL }}{{ post.path }}" rel="alternate" type="text/html" />
    <title>{{ post.title }}</title>
    <published>{{ post.date|date('c') }}</published>
    <author>
      <name>Jon Long</name>
    </author>
    <content type="html">
      {{ post.untemplatized.toString() | escape }}
    </content>
    {% for category in post.tags %}
    <category term="{{ category }}" />
    {% endfor %}
  </entry>
  {% endfor %}
</feed>