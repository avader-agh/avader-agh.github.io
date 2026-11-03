---
layout: page
title: Członkowie
permalink: /czlonkowie/
description: Opiekunowie, zarząd i członkowie Koła Naukowego AGH AVADER.
nav: true
nav_order: 3
---

{% assign people = site.data.people %}

<h2 class="page-section-title">Opiekunowie</h2>
<ul class="avader-people">
  {% for s in people.supervisors %}
  <li><a href="{{ s.url }}" target="_blank" rel="noopener"><strong>{{ s.name }}</strong></a><a href="mailto:{{ s.email }}">{{ s.email }}</a></li>
  {% endfor %}
</ul>

<h2 class="page-section-title">Zarząd <span class="section-note">kadencja {{ people.board_term }}</span></h2>
<ul class="avader-people">
  {% for b in people.board %}
  <li><strong>{{ b.name }}</strong><span>{{ b.role }}</span><a href="mailto:{{ b.email }}">{{ b.email }}</a></li>
  {% endfor %}
</ul>

<h2 class="page-section-title">Opiekunowie sekcji</h2>
<ul class="avader-people">
  {% for l in people.section_leads %}
  <li><strong>{{ l.name }}</strong><span>{{ l.role }}</span></li>
  {% endfor %}
</ul>

<h2 class="page-section-title has-count">Członkowie <span class="section-count">{{ people.members.size }}</span></h2>
<ul class="avader-member-list">
  {% for m in people.members %}<li>{{ m }}</li>{% endfor %}
</ul>
