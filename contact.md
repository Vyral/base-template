---
layout: default
title: Contact
permalink: /contact/
---
<div class="whitespace"></div>
<form class="contact-form" method="post" action="http://formspree.io/{{site.data.settings.client.email}}">
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="_replyto" placeholder="Email" required>
  <textarea name="Message" placeholder="Message"></textarea>
  <!-- Cloud cannon settings field -->
  <div class="hidden">
    <input type="hidden" name="_to" value="{{site.data.settings.client.email}}">
    <input type="hidden" name="_subject" value="Contact Message From Your {{site.data.settings.title}}">
    <input type="text" name="_gotcha">
  </div>

  <input type="submit" value="submit">
</form>
