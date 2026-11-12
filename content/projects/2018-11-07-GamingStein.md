---
layout: project
author: franz
date: "2018-11-07T00:00:00Z"
github: https://github.com/FranzImsch/GamingStein
title: GamingStein
state: finished # unused, leftover from old website
tags:
  - gamingstein
description: Telegram-basierte Tischlampe mit Selenit als Diffusor.
---

## Überblick

Der GamingStein [ˈɡɛɪ̯mɪŋ|ʃtaɪ̯n] ist ein Stück Selenit, das auf einen Holzuntergrund montiert und mit LEDs ausgestattet ist. Durch die faserige Struktur des Selenits lässt sich mit einer verschiedenfarbigen Beleuchtung von unten eine Art Lichtleitereffekt erzielen, sodass der Eindruck entsteht, nur der obere Teil des Steins würde leuchten – jedoch ohne Leuchtmittel. Schon die alten Römer wussten um diesen Effekt, sodass schon im Jahre 75 vom "durchsichtigen Stein" berichtet wurde, der seinen Einsatz als Fensterscheibe oder Lampe fand.
Durch den WiFi-fähigen Microcontroller in der Holzplattform lässt sich eine einfache Steuerung der verschiedenen Farbschemata mit Smartphone, Tablet, Computer, usw. realisieren.

![GamingStein in orange](/prj_media/2018-11-07-GamingStein/GamingStein_complete.jpg)
Mit den RGB-LEDs lassen sich alle möglichen Farben, die durch additive Farbmischung entstehen können, anzeigen.

## Hardware

Folgende Komponenten kamen für das Projekt zum Einsatz:

- Ein Selenit,
- ein Stück Edelholz als Plattform (Speierling, 48\*48\*8mm),
- ein ESP-12F,
- ein AMS1117,
- fünf WS2812B LEDs,
- passende Kondensatoren und Widerstände,
- ein USB-Kabel und etwa ein halber Meter Kupferlackdraht.

Zum Flashen des Chips ist noch ein Serial-Adapter notwendig.  
Die Holzplattform wurde mit der [Fräse im FabLab](https://github.com/opendata-heilbronn/Wiki/wiki/CNC-Fräse) hergestellt, indem mittig ein Loch gefräst wurde, in das sowohl ESP und LEDs reinpassen. Mit einem Bohrer wurde dann noch ein Loch in eine Seite gebohrt, wodurch das USB-Kabel zur Stromversorgung geführt wurde. Der Selenit wurde mit Sekundenkleber befestigt, sodass eine nachträgliche Programmierung nur per OTA möglich ist.  
Die LEDs wurden direkt mit der Stromversorgung verbunden, lediglich der ESP wird durch den Linearregler mit 3.3v versorgt. Der genaue elektronische Aufbau kann dem Schaltplan entnommen werden.

![Schaltplan](/prj_media/2018-11-07-GamingStein/GamingSteinSchematic.png "Schaltplan")

## Software

Außer der Software auf dem ESP ist für den Betrieb nichts weiter notwendig. Natürlich ist die Rechenleistung des Chips recht schwach, sodass die Nachrichten auch mal ein paar Sekunden Verarbeitungszeit in Anspruch nehmen können.  
Sicherlich kann der Code deutlich effizienter gestaltet werden, beispielsweise durch die Nutzung eines Servers – feel free.  
Durch die geringe Rechenleistung und die deshalb sehr langsame Mainloop des ESPs musste ein Interrupt-Timer genutzt werden, um die Animationen flüssig darstellen zu können. Es können mehrere WLAN-Netzwerke einprogrammiert werden, sodass kein ständiges neu-flashen nötig ist, wenn der GamingStein zu einer anderen Lokation gebracht wird.
