---
layout: page
title: Logo
permalink: /logo/
description: Logotypy Koła Naukowego AGH AVADER do pobrania – do plakatów, prezentacji, publikacji i social mediów.
nav: true
nav_order: 4
---

Do druku najlepiej użyć wersji PDF – są wektorowe i skalują się bez utraty jakości. Kliknij podgląd, aby otworzyć plik w pełnym rozmiarze.

<div class="avader-logos">
  {% for logo in site.data.logos %}
    {% capture png %}/assets/img/{{ logo.file }}.png{% endcapture %}
    <div class="avader-logo-card">
      <a class="avader-logo-preview" href="{{ png | relative_url }}" target="_blank" rel="noopener">
        <img src="{{ png | relative_url }}" alt="{{ logo.name }}" loading="lazy">
      </a>
      <h3>{{ logo.name }}</h3>
      <p>{{ logo.desc }}</p>
      <div class="avader-logo-dl">
        <a href="{{ png | relative_url }}" download><i class="fa-solid fa-download"></i> PNG</a>
        {% if logo.pdf %}
          <a href="{{ '/assets/img/' | append: logo.file | append: '.pdf' | relative_url }}" download><i class="fa-solid fa-download"></i> PDF</a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
