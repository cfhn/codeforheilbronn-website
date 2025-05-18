---
layout: post
title: Shortlink Service 
description: Entwicklung eines Shortlink-Services für cfhn.it
tags: 
      - cfhn.it
      - shortlink
      - nodejs
      - angular
category: Projekte  

feature_image: /uploads/post_media/2018-07-03-Shortlink-Service.png
date: 2018-07-03
author: patrick

---
Zusätzlich zur Hauptdomain `codeforheilbronn.de` besitzen wir die etwas kürzere Domain `cfhn.it`. Diese wurde bisher nur als Shortlink für die Badges verwendet. Da sich die Domain allerdings auch gut für sonstige Shortlinks anbieten würde, wollten wir dort einen Shortlink-Service einrichten.

Für diesen Zweck gibt es bereits Anwendungen, allerdings hatten diese alle mehr Funktionen, als wir für diese Domain benötigen. 

# Anforderungen

- Anfragen an `cfhn.it/{code}` sollen an das gespeicherte Ziel weitergeleitet werden.
- Falls kein gespeichertes Ziel vorhanden ist, sollen Anfragen an `codeforheilbronn.de/{code}` weitergeleitet werden.
- Shortlinks sollen per API und per Oberfläche erstellt werden können
- Nur angemeldete Anwender dürfen neue Shortlinks erstellen
- Hits sollen gezählt werden, weiteres Tracking soll nicht durchgeführt werden

# API
Die API wurde mithilfe von NodeJS und Express entwickelt. Der Quellcode ist unter [opendata-heilbronn/shortlink](https://github.com/opendata-heilbronn/shortlink) zu finden.

Unter `cfhn.it` sollen die Weiterleitungen gesendet werden, unter `shortapi.cfhn.it` soll die API zur Konfiguration laufen. Um beide Domains unterschiedlich zu behandeln, wurde die Express Middleware [vhost](https://github.com/expressjs/vhost) verwendet. 

Folgende Funktionen werden durch die API bereitgestellt:

- `GET /` - Alle Shortlinks zurückgeben
- `PUT /{code}` - Neuen Shortlink mit Code erstellen
- `GET /{code}` - Spezifischen Shortlink zurückgeben

Der PUT-Request nimmt ein JSON-Objekt mit dem Property "dest" entgegen. Die GET-Requests geben ein JSON-Objekt mit den Properties "code", "dest" und "hits" zurück.

Die Authentifizierung erfolgt mittels HTTP-Basic Authentifizierung.

# Frontend

Damit nicht jeder Benutzer einen API-Client öffnen muss, um die Shortlinks zu konfigurieren, haben wir ein Angular Frontend zu obiger API geschrieben. Der Quellcode dazu ist unter [opendata-heilbronn/shortlink-admin](https://github.com/opendata-heilbronn/shortlink-admin) zu finden.

Das Frontend ist unter [https://short.cfhn.it](https://short.cfhn.it) zu erreichen. Dort können nach der Anmeldung Shortlinks eingesehen, erstellt und bearbeitet werden.

# Ansprechpartner
Wer einen Shortlink benötigt, kann sich bei einem [Mitglied des Vorstandes](/verein#vorstand) oder beim [Infrastruktur-Verantwortlichen](https://t.me/patrick246) melden.