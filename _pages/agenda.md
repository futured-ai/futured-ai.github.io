---
layout: home
title: Agenda
permalink: /agenda/
nav: true
nav_order: 2
---

{% assign cards = site.agenda_cards | sort: "order" %}

<section class="card-grid">
  {% for card in cards %}
    {% case card.type %}
      {% when "event" %}
        {% include cards/card_event.liquid
          title=card.title
          location=card.location
          when=card.when
          tag=card.tag
          text=card.text %}
      {% when "basic" %}
        {% include cards/card_basic.liquid
          title=card.title
          text=card.text
          sec_text=card.sec_text %}
      {% when "schedule" %}
        {% include cards/card_schedule.liquid
          title=card.title
          subtitle=card.subtitle
          schedule=card.schedule %}
      {% else %}
        <div class="card">Unknown card type: {{ card.type }}</div>
    {% endcase %}
  {% endfor %}
  <div class="page-buttons">
      <a href="https://forms.gle/3fAafWCyVxya5jf6A" class="btn primary">Apply&nbsp;here</a>
      <a href="https://forms.gle/hJ5BtdgpaFLxFvap6" class="btn secondary">Contact Us</a>
  </div>
</section>