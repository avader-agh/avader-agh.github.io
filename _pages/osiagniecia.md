---
layout: page
title: Osiągnięcia
permalink: /osiagniecia/
description: Nagrody i wyróżnienia członków koła w zawodach i konferencjach.
nav: true
nav_order: 1
---

{% assign by_year = site.data.achievements | group_by: "year" %}
{% for group in by_year %}

<section class="cv-section">
  <h2 class="page-section-title has-count">{{ group.name }} <span class="section-count">{{ group.items.size }}</span></h2>
  <ol class="cv-timeline">
    {% for a in group.items %}
    <li class="cv-item">
      <span class="cv-item-icon"><i class="fa-solid fa-trophy"></i></span>
      <div class="cv-item-body">
        <div class="cv-item-head"><h3>{{ a.place }} – {{ a.competition }}</h3></div>
        <div class="cv-item-org">{{ a.authors }}</div>
        {% if a.topic %}<p class="cv-item-summary">{{ a.topic }}</p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>
{% endfor %}
