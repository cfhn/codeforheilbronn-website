---
layout: project
author:
  - leo
  - vale
  - franz
date: "2018-04-16T00:00:00Z"
github: https://github.com/opendata-heilbronn/telegramBell
title: Telegram Klingel
state: finished # unused, leftover from old website
tags:
  - telegramBell
description: Ein Mitglied sprach "/klingel". Und es klingelte.
---

## Problem

Unsere Hausverwaltung nötigt uns dazu, die Haupteingangstüre nach 20:00 Uhr abgeschlossen zu halten. Die Coding Abende jeden Donnerstag gehen jedoch meist deutlich länger als 20:00 Uhr. Das bedeutet auch, dass einige Teilnehmer erst später dazu stoßen, was grundsätzlich auch kein Problem ist. Nur steht man eben nach der Uhrzeit unten vor verschlossener Türe.
Man schreibt dann in unsere Telegram Gruppe, dass man bitte hinein gelassen werden möchten. Viele der Teilnehmer sind jedoch oft so in ein Projekt vertieft, dass sie auf eine Telegram Benachrichtigung nicht sofort reagieren. So kann es vorkommen, dass man unten ein paar Minuten warten muss, bis jemand zufällig die Nachricht sieht, dass man hereingelassen wird.

## Idee

Dadurch hat sich, wie es nunmal so kommt, der Trend ergeben, den scherzhaften Befehl `/klingel` in die Gruppe zu schreiben. Daraus entstand wiederum die Idee, einen Telegram Bot zu programmieren, der auf eben diesen Befehl hört und ein akkustisches Signal oben im Open Space auslöst.

## Umsetzung

### Tonerzeugung

Wir haben uns viele Gedanken dazu gemacht, wie man am besten einen stylishen Ton erzeugt, der zugleich nicht allzu nervig ist.

#### Klingel

Zuerst haben wir eine normale Klingel getestet. Diese benötigt aber leider 8-12V AC, die man erst mit einer Schaltung aus mehreren Transistoren und einem Spannungsregler erzeugen müsste. Außerdem hat sich das Exemplar, das wir zur Verfügung hatten, sowieso nicht so toll angehört.

#### Hupe

Als zweites kam die Idee auf, bei einer alten Hupe den Blasebalg durch einen Lüfter zu ersetzen. Zum "Klingeln" würde man dann den Lüfter kurz anlaufen lassen.  
Dafür hat sich Franz dann ganz schön ins Zeug gelegt und einen Impeller designed und 3D-gedruckt. Dieser machte zwar ordentlich Wind, aber hat leider nicht genug Luftdruck aufgebaut, um die Membran der Hupe in Schwingung zu versetzen. Außerdem ist der Impeller nach einigen Minuten testen dann auch am Gehäuse gestreift, sodass diese sich verschmolzen haben.

#### Türgong

Vor Kurzem sind wir dann über ein Ebay-Kleinanzeigen Angebot eines 2-Klang-Türgongs für ein paar Euro gestolpert – Also abgeholt und direkt getestet. Der Gong funktionierte bis auf 4V DC herunter noch völlig zuverlässig, was ihn zum perfekten akkustischen Signalgeber macht.
Basierend darauf haben dann Valentin und Leandro eine Platine für die Klingel konzipiert und gelötet.

{% include figure.html image="/prj_media/2018-04-16-telegram-klingel/pcbFront.jpg" position="left sideBySide" %}
{% include figure.html image="/prj_media/2018-04-16-telegram-klingel/pcbBack.jpg" position="right sideBySide" %}

![Schaltplan](/prj_media/2018-04-16-telegram-klingel/schematic.png "Schaltplan")

Die Schaltung ist, wie man sieht, nicht allzu komplex. Sie besteht aus der Spannungsversorgung, dem ESP8266, einem MOSFET mit nötiger Beschaltung und einer Buchse zur Programmierung mit einem FTDI Modul.
Der Optokoppler dient zur Invertierung des Steuersignals für den MOSFET, da sonst der ESP8266 durch den Pulldown Widerstand an GPIO2 nicht mehr booten würde.

### Software

Der Telegram Bot läuft direkt auf dem ESP8266 WiFi Mikrocontroller und ist dadurch natürlich performance-technisch etwas eingeschränkt, allerdings ist so kein weiteres Programm auf einem Server notwendig.
Implementiert sind zudem auch ein Gruppenfilter, damit der Klingelbot nur aus unserer Gruppe heraus gesteuert werden kann und ein Anti-Spam Schutz, der pro User nur ein Mal Klingeln in einem definierten Zeitraum erlaubt (aktuell 5 Minuten).
Der fertige Code findet sich, wie üblich, im GitHub Repository (siehe Seitenleiste).

## Erweiterung

Aktuell triggert die Klingel nur auf Telegram Nachrichten.  
Die Notwendigkeit für den Bot hat sich rückblickend auch nur daraus ergeben, dass die normale Klingel für unseren Teil des fünften Stockwerks nach Auszug des Vormieters irgendwie nicht mehr existierte.
Allerdings liegt in der Zwischendecke noch so ein mehradriges Kabel, mit dem man u.a. das Türrelais schalten kann. Darin haben wir auch bereits die Signale des Klingelschalters von oben gefunden, allerdings fehlt noch das Signal von unten.
Nun könnte man die Schaltersignale selbst auslesen und damit auch die telegramBell ansteuern.

Das bleibt aber vorerst eine Idee für ein weiteres Projekt.

## Fertige Klingel

{% include figure.html image="/prj_media/2018-04-16-telegram-klingel/inside.jpg" position="left sideBySide" %}
{% include figure.html image="/prj_media/2018-04-16-telegram-klingel/wall.jpg" position="right sideBySide" %}
