---
layout: contact
title: Investor Workshop
permalink: /workshop/
---
<div class="whitespace"></div>

<form class="contact-form" method="post" action="https://formspree.io/{{site.data.settings.client.email}}">
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="_replyto" placeholder="Email" required>
  <textarea name="Message" placeholder="Message"></textarea>
  <!-- Cloud cannon settings field -->
  <div class="hidden">
    <input type="hidden" name="_to" value="{{site.data.settings.client.email}}">
    <input type="hidden" name="_subject" value="Workshop Seat Reservation Request">
    <input type="text" name="_gotcha">
  </div>

  <input type="submit" value="submit">
</form>
