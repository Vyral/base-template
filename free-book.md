---
layout: default
title: Free Book Offer from The Carter Property Group
permalink: /free-book/
---
<h3>Free Book Offer!</h3>
<p><strong>Enter your information below and we will email you about your free book.</strong></p>
<form class="contact-form" method="post" action="http://formspree.io/{{site.data.settings.client.email}}">
  <input type="text" name="name" placeholder="Name" required>
  <input type="email" name="_replyto" placeholder="Email" required>
   <input type="text" name="phone" placeholder="Cell Number" required> 
   <input type="text" name="address" placeholder="Address" required> 
  <!-- Cloud cannon settings field -->
  <div class="hidden">
    <input type="hidden" name="_to" value="{{site.data.settings.client.email}}">
    <input type="hidden" name="_subject" value="Free Book Request From Your Vyral Video Blog">
    <input type="text" name="_gotcha">
  </div>

  <input type="submit" value="Send Me My Free Book!">
</form>
