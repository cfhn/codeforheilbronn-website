---
layout: post
title: TTN Lora Gateway 
description: Bau unsere Outdoor TTN Lora Gateways
tags: 
      - LoraWan
      - lora
feature_image: /uploads/prj_media/LoraWan_header.jpg  

category: Projekte
date: 2018-05-17
author: vale

---

Unsere Vereinsräume befinden sich im 5. Stock des Wollhauses. Neben der tollen Aussicht, eignet sich die Lage auch für eine gute Funkabdeckung über Heilbronn und Umgebung.

Also haben wir uns entschieden, zwei LoRa-Gateways aufzuhängen. Diese sollen die Erreichbarkeit des "The Things Network" in der Umgebung des Wollhauses zu ermöglichen.

Durch das "Things Network" können Sensoren bis zu 15km weit vom LoRa-Gateway entfernt Werte ins Internet senden.


# Unsere bestellten Bauteile
 
Part                             | Price                 | Order/link
---------------------------------|-----------------------|--------------------
iC880A-SPI Board                 | 120 €                 | [IMST Webshop](https://shop.imst.de/wireless-modules/lora-products/8/ic880a-spi-lorawan-concentrator-868-mhz)
Pigtail for antenna              | 6,50 €                | [IMST Webshop](https://shop.imst.de/wireless-modules/accessories/20/u.fl-to-sma-pigtail-cable-for-ic880a-spi)
Antenna                          | 6,50 € 	         | [IMST Webshop](https://shop.imst.de/wireless-modules/accessories/19/sma-antenna-for-ic880a-spi-wsa01-im880b-and-lite-gateway)
Raspberry Pi 3                   | 31,99 €               | [Amazon](https://www.amazon.de/dp/B01CD5VC92/)
MicroSD Card (4Gb or more)       | 9,99 €                | [Amazon](https://www.amazon.de/dp/B073S9SFK2/)
7x Dual female jumper wires      | 5 €                   | Aus der Bastelkiste
PoE Injektor                     | 21,99 €               | [Amazon](https://www.amazon.de//dp/B001PS9E5I/)
PoE Splitter                     | 9,99 €                | [Amazon](https://www.amazon.de/dp/B01H37XQP8/)
           
<br/>

Nachdem alle bestellten Bauteile eingetroffen sind, konnte es losgehen mit bauen/basteln.
 
![Angekommenes Material](/uploads/post_media/2018-05-17-ttn-gateway/material.jpg "Angekommenes Material")
 
Wir haben damit angefangen, einfach mal provisorisch RasperryPi und iC880a mit ein paar Jumpern zu verbinden. Um aus dem Pi nun einen TTN Gateway zu machen, haben wir die Anleitung des TTN Zürich (link) Schritt für Schritt abgearbeitet.
 

{% include figure.html image="/uploads/post_media/2018-05-17-ttn-gateway/testaufbau1.jpg" position="left sideBySide" %}
{% include figure.html image="/uploads/post_media/2018-05-17-ttn-gateway/testaufbau2.jpg" position="right sideBySide" %}

iC880a pin      | Description   | RPi physical pin
----------------|---------------|-----------------
21              | Supply 5V     | 2
22              | GND           | 6
13              | Reset         | 22
14              | SPI CLK       | 23
15              | MISO          | 21
16              | MOSI          | 19
17              | NSS           | 24

<br/>

Nachdem die Gateways nun konfiguriert waren und bei TTN als “online” angezeigt wurden, haben wir erfolgreich unseren ersten Lora Node mit dem Gateway verbinden können. Nun ging es daran,das Ganze für guten Empfang outdoor-tauglich zu machen.
 
# Gateway Goes Outdoor
 
Also fingen wir an die Gehäuse vorzubereiten. Da unsere gewählten Gehäuse schon Löcher vorbereitet haben, haben wir uns dazu entschieden, passende Adapter zu drucken um Antenne und Kabeldurchführung dicht zu befestigen.

<div style="display: flex">
{% include figure.html image="/uploads/post_media/2018-05-17-ttn-gateway/3Ddruck1.png" position="left sideBySide" %}
{% include figure.html image="/uploads/post_media/2018-05-17-ttn-gateway/3Ddruck2.png" position="right sideBySide" %}
</div>


Als die Adapter gedruckt waren, haben wir diese mit Silikon wasserdicht in die Gehäuse geklebt. Für den Fall, dass wir weitere Gateways bauen sollten, würde sich der Einsatz von Zweikomponentenkleber als Dichtmasse allerdings besser eignen.
 
![Gehäuse kleben](/uploads/post_media/2018-05-17-ttn-gateway/gehaeuse.jpg "Gehäuse kleben")
 
Während die Gehäuse trockneten, konnten wir den Pi, das iC880a Modul und den PoE Adapter auf eine Kunststoffplatte montieren. Diese haben wir mit dem Cuttermesser passend zugeschnitten und Löcher, zur Montage der Komponenten, gebohrt.
Nachdem alles montiert und nochmals auf Funktion getestet wurde, konnten wir die zwei Platten mit den Gehäusen vereinen und das Netzwerkkabel durch die Kabeldurchführung stecken.
 
<div style="display: flex">
{% include figure.html image="/uploads/post_media/2018-05-17-ttn-gateway/platte-montiert.jpg" position="left sideBySide" %}
{% include figure.html image="/uploads/post_media/2018-05-17-ttn-gateway/gateway-fertig.jpg" position="right sideBySide" %}
</div>
 
Um die einsatzbereiten Gateways nun auch außen am Wollhaus befestigen zu können, fehlte noch eine Befestigungsmöglichkeit. Nach kurzem Überlegen war klar, eine Art Haken zum Einhängen am Geländer ist die beste Lösung. Also nochmal kurz in den Baumarkt und  passendes Material besorgt.
 
![Baumarkt](/uploads/post_media/2018-05-17-ttn-gateway/baumarkt.jpg "Baumarkt")
 
2x 1m Aluminium Flachmaterial wurde das Material der Wahl. Nach ein wenig messen und anzeichen konnte das Material auf Länge geschnitten und mit Löchern versehen werden. Nun wurde es noch zu einem Haken gebogen, um es am Geländer zu befestigen.
 
![Haken zeichnung](/uploads/post_media/2018-05-17-ttn-gateway/zeichnung.png "Haken zeichnung")
 
Und schon hing der erste Heilbronner TTN Outdoor Gateway in Richtung Allee (01.03.2018).
Da der PoE Injektor noch fehlte, dauerte es ein paar Tage bis der Zweite auch draußen hing.
 

