---
layout: home
title: Catalysts
permalink: /catalysts/
nav: true
nav_order: 4
---

{% assign cards = site.catalysts_cards | sort: "order" %}

<section class="card-grid">
  {% for card in cards %}
    {% case card.type %}
      {% when "basic" %}
        {% include cards/card_basic.liquid
          title=card.title
          text=card.text
          sec_text=card.sec_text %}
      {% when "whyapply" %}
        {% include cards/card_whyapply.liquid
            title=card.title
            subtitle=card.subtitle
            items=card.items %}
      {% when "catalysts" %}
        {% include cards/card_catalysts.liquid
            title=card.title
            subtitle=card.subtitle
            people=card.people %}
      {% when "scoring" %}
        {% include cards/card_scoring.liquid
            title=card.title %}
      {% else %}
        <div class="card">Unknown card type: {{ card.type }}</div>
    {% endcase %}
  {% endfor %}
  <div class="page-buttons">
    <a href="https://forms.gle/3fAafWCyVxya5jf6A" class="btn primary">Register</a>
    <a href="https://forms.gle/hJ5BtdgpaFLxFvap6" class="btn secondary">Contact Us</a>
  </div>
</section>