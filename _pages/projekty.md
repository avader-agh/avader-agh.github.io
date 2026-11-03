---
layout: page
title: Projekty
permalink: /projekty/
description: Projekty naukowe koła, w tym finansowane z Grantów Rektora AGH, oraz przygotowania do zawodów.
nav: true
nav_order: 2
---

Dysponujemy dronami platformowymi o modułowej budowie, dronami wyścigowymi FPV, dronami rojowymi i jednostkami szkoleniowymi, komputerami pokładowymi (Raspberry Pi 5, NVIDIA Jetson Orin Nano), drukarką 3D, klatką z systemem motion capture oraz autonomicznym pojazdem czterokołowym. **Masz własny pomysł?** [Napisz do nas](mailto:avader@student.agh.edu.pl) – pomożemy go zrealizować.

<h2 class="page-section-title">W trakcie realizacji</h2>
<div class="row row-cols-1 row-cols-md-2">
  {% for p in site.data.grants.current %}
  <div class="col mb-4">
    <div class="card h-100 avader-project-card">
      <div class="card-body">
        <h3 class="card-title">{{ p.title }}</h3>
        <p>{{ p.text }}</p>
        {% if p.funding %}<p class="avader-funding">{{ p.funding }}</p>{% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

{% assign grant_count = 0 %}{% for e in site.data.grants.rector %}{% assign grant_count = grant_count | plus: e.projects.size %}{% endfor %}

<h2 class="page-section-title has-count">Granty Rektora AGH <span class="section-count">{{ grant_count }}</span></h2>
<ol class="cv-timeline">
  {% for edition in site.data.grants.rector %}
  <li class="cv-item">
    <span class="cv-item-icon"><i class="fa-solid fa-award"></i></span>
    <div class="cv-item-body">
      <div class="cv-item-head"><h3>Edycja {{ edition.year }}</h3></div>
      <ul class="avader-grant-list">
        {% for title in edition.projects %}<li>{{ title }}</li>{% endfor %}
      </ul>
    </div>
  </li>
  {% endfor %}
</ol>
