---
layout: home
title: Past Events
permalink: /pastevents/
nav: true
nav_order: 6
---

{% assign cards = site.pastevents_cards | sort: "order" %}

<section class="card-grid">
  {% for card in cards %}
    {% case card.type %}
      {% when "video" %}
        {% include cards/card_video.liquid
          title=card.title
          video=card.video %}
      {% when "quick_metrics" %}
        {% include cards/card_quick_metrics.liquid
            title=card.title
            metrics=card.metrics %}
      {% when "achievements" %}
        {% include cards/card_achievements.liquid
            title=card.title
            achievements=card.achievements %}
      {% when "winners" %}
        {% include cards/card_winners.liquid
            title=card.title
            winners=card.winners %}
      {% when "gallery" %}
        {% include cards/card_photo_gallery.liquid
            title=card.title
            photos=card.photos %}
      {% when "teams" %}
        {% include cards/card_teams_participated.liquid
            title=card.title
            description=card.description
            teams=card.teams %}
      {% when "testimonials" %}
        {% include cards/card_testimonials.liquid
            title=card.title
            description=card.description
            testimonials=card.testimonials %}
      {% when "press_mentions" %}
        {% include cards/card_press_mentions.liquid
            title=card.title
            mentions=card.mentions %}                    
      {% else %}
        <div class="card">Unknown card type: {{ card.type }}</div>
    {% endcase %}
  {% endfor %}
  <div class="page-buttons">
    <a href="https://forms.gle/hJ5BtdgpaFLxFvap6" class="btn primary">Contact Us</a>
  </div>
</section>
