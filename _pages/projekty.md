---
layout: page
title: Projekty
permalink: /projekty/
description: Projekty naukowe koła, w tym finansowane z Grantów Rektora AGH, oraz przygotowania do zawodów.
nav: true
nav_order: 2
---

Dysponujemy dronami platformowymi o modułowej budowie, dronami wyścigowymi FPV, dronami rojowymi i jednostkami szkoleniowymi, komputerami pokładowymi (Raspberry Pi 5, NVIDIA Jetson Orin Nano), drukarką 3D, klatką z systemem motion capture oraz autonomicznym pojazdem czterokołowym.

<div class="avader-gallery">
  {% for img in site.data.grants.equipment %}
    <figure>
      <img src="{{ img.file | prepend: '/assets/img/projects/' | relative_url }}" alt="{{ img.alt }}" loading="lazy">
      <figcaption>{{ img.alt }}</figcaption>
    </figure>
  {% endfor %}
</div>

**Wszystko zaczyna się od dobrego pomysłu!** Masz własną wizję i szukasz miejsca, by wcielić ją w życie, a może chcesz dołączyć do któregoś z istniejących projektów? [Napisz do nas](mailto:avader@student.agh.edu.pl) – zapraszamy do Koła Naukowego AVADER.

<h2 class="page-section-title">W trakcie realizacji</h2>
{% for p in site.data.grants.current %}
<div class="card mb-4 avader-project-card">
  <div class="card-body">
    <h3 class="card-title">{{ p.title }}</h3>
    {% if p.subtitle %}<p class="avader-project-subtitle">{{ p.subtitle }}</p>{% endif %}
    <p>{{ p.text }}</p>
    {% if p.images %}
    <div class="avader-gallery">
      {% for img in p.images %}<figure><img src="{{ img | prepend: '/assets/img/projects/' | relative_url }}" alt="{{ p.title }}" loading="lazy"></figure>{% endfor %}
    </div>
    {% endif %}
    {% if p.funding %}
    <div class="avader-funding">
      <h4>Finansowanie projektu</h4>
      <p>{{ p.funding }}</p>
      {% if p.funding_logos %}
      <div class="avader-funding-logos">
        {% for logo in p.funding_logos %}<img src="{{ logo | prepend: '/assets/img/projects/' | relative_url }}" alt="" loading="lazy">{% endfor %}
      </div>
      {% endif %}
      {% if p.banner %}<img class="avader-funding-banner" src="{{ p.banner | prepend: '/assets/img/projects/' | relative_url }}" alt="Dofinansowano ze środków budżetu państwa – {{ p.title }}" loading="lazy">{% endif %}
    </div>
    {% endif %}
  </div>
</div>
{% endfor %}

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
