---
layout: post
title: Personenzählung auf dem Lichterfest
description: Als Verein haben wir mit Hilfe unserer Sensoren, in Kooperation mit der Stadt Heilbronn, erste Erfahrungen in der Personenzählung gemacht. Die Daten sehen vielversprechend aus.
tags: [opendata, Frequenzmessung, Bluetooth, lora]
feature_image: /post_media/open-data-day-header-online.jpg

category: Einladung
date: 2025-09-18
excerpt: "Das Lichterfest ist ein buntes Festival mitten in der Heilbronner Innenstadt. Entlang des Neckarufers gibt es viele Angebote und bunte Lichter zu bestaunen. Wir wollten wissen, wie viele
Leute dieses Spektakel in die Stadt zieht und haben zusammen mit der Stadt Heilbronn das Fest als Anlass genommen weiter Sensoren in der Innenstadt aufzuhängen."
author: joni
---


## TL;DR

[Link zum Grafana Dashboard](https://grafana.cfhn.it/d/def8b7a94opoge/lora-x?orgId=1&from=1781766228651&to=1782026689965)

[erster Artikel - Grundlagen und Ideen](/blog/2025/09/passantenzahlen-messen-mit-lora/)

## Vorgeschichte

Bereits seit einiger Zeit arbeiten wir an einem Sensornetzwerk zur Personenzählung in der Heilbronner Innenstadt. Details zur Technik und zum Ansatz sind oben verlinkt.
Seit dem hat sich einiges getan. Fokus lag dabei vor allem auf "Ease of Use" und Skalierung. Wir möchten gerne mit möglichst vielen Sensoren in der Innenstadt vertreten sein um möglichst dichte
Datenpunkte zu erhalten. Dabei arbeiten wir mit dem Arbeits und Organisationsamt der Stadt Heilbronn zusammen. Sie übernehmen dabei vor allem die innerstädtische Kommunikation und Koordination der
Freigaben. Wir als Code for Heilbronn e.V. haben aktuell die Funktion von Entwicklung und Betrieb der Sensoren.

## Neues Webportal

Ein besonderer Fokus lag die letzten Monate auf dem Webportal. Hier ging es vor allem um Funktionen wie Anlegen und Monitoren der Sensoren. Wichtigstes Feature ist dabei die Provisionierung der
Sensoren direkt über den Browser. Dabei wird auf dem Server eine angepasste Firmware für jeden Sensor generiert. Darin enthalten ist dann die SensorID und die TTN-Zugangsdaten des Sensors. Über
Web-Serial wird die Firmware dann direkt von Browser aus auf die Sensoren geschrieben und das Gerät ist fertig und einsatzbereit.

Die Idee hierbei war, dass wir so auch die Stadt Heilbronn befähigen können, eigene Sensoren zu flashen und aufzuhängen. Es muss keine Software zusätzlich installiert werden, wodurch der
Freigabeprozess massiv verkürzt werden kann. Einzig ein USB Interface muss freigegeben werden. Allerdings kann hier noch auf bestimmte Hardware limitiert werden.
