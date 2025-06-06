---
layout: home
title: Home
hero: Collaborate and innovate for 2 days, and unleash AI's potential for education!
permalink: /
subtitle: Team up with mentors and industry leaders to transform your AI-powered vision for education into reality.
---

{% assign cards = site.home_cards | sort: "order" %}

<section class="card-grid">
  {% for card in cards %}
    {% case card.type %}
      {% when "event" %}
        {% include cards/card_event.liquid
          location=card.location
          when=card.when
          tag=card.tag
          text=card.text %}
      {% when "basic" %}
        {% include cards/card_basic.liquid
          title=card.title
          text=card.text
          sec_text=card.sec_text %}
      {% when "organizers" %}
        {% include cards/card_organizers.liquid
          title=card.title
          subtitle=card.subtitle
          organizers=card.organizers %}
      {% when "timeline" %}
        {% include cards/card_timeline.liquid
          title=card.title
          subtitle=card.subtitle
          timeline=card.timeline %}
      {% when "whyapply" %}
        {% include cards/card_whyapply.liquid
            title=card.title
            subtitle=card.subtitle
            items=card.items %}
      {% when "prizes" %}
        {% include cards/card_prizes.liquid
            title=card.title
            subtitle=card.subtitle
            prizes=card.prizes %}
      {% else %}
        <div class="card">Unknown card type: {{ card.type }}</div>
    {% endcase %}
  {% endfor %}
  <div class="page-buttons">
    <a href="https://forms.gle/3fAafWCyVxya5jf6A" class="btn primary">Apply&nbsp;here</a>
    <a href="https://forms.gle/hJ5BtdgpaFLxFvap6" class="btn secondary">Contact Us</a>
  </div>
</section>