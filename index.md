---
layout: default
title: 홈
---

# 👋 유윤의 프로젝트 블로그에 오신 걸 환영합니다

아래는 지금까지 등록된 프로젝트들입니다:

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}</li>
  {% endfor %}
</ul>