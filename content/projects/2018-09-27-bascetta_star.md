---
layout: project
badge: /prj_media/2018-09-27-Bascetta_Star/bascetta_star_logo.png # unused, leftover from old website
author:
  - janitz
date: "2018-09-27T00:00:00Z"
feature_image: /prj_media/2018-09-27-Bascetta_Star/bascetta_star_feature_image.jpg # unused, leftover from old website
github: https://github.com/janitz/Bascetta_Star
title: Bascetta Star
state: finnished # unused, leftover from old website
tags:
  - Bascetta_Star
description: Alles ist besser mit WLAN und LEDs
---

## Projektbeschreibung

Der an Weihnachten auf dem Baum entdeckte Stern war langweilig. Deshalb wurde er nach dem Motto: "Alles ist besser mit WLAN und LEDs" erweitert. Jetzt kann er über eine Webseite gesteuert werden und verschiedene Farben und Animationen anzeigen.

## Hardware

Ein Bascetta Stern ist dreidimmensionaler Stern aus Papier mit 20 Zacken. Der Stern wird aus 30 quadratischen Blättern gefalteter und ohne Kleber zuammengesteckt. In diesem Fall wird weißes halbtransparentes Papier verwendet. Im Inneren des Sterns befindet sich ein aus Pappe gebastelter Ikosaeder. Dieser schließt die Zacken des Sterns nach innen lichtdicht ab. Dadurch vermischen sich die Farben der Zacken nicht.
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_hw1.jpg" position="left sideBySide" %}
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_hw2.jpg" position="right sideBySide" %}
Um den Stern zum Leuchten zu bringen ist auf jeder Seite des Ikosaeders eine WS2812 LED aufgeklebt. Die LEDs sind mit gelöteten Drähten miteinander verbunden.
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_hw3.jpg" position="left sideBySide" %}
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_hw4.jpg" position="right sideBySide" %}
Jede LED leuchtet jeweils einen Zacken des Sterns aus. Gesteuert werden die 20 LEDs von einem ESP8266 WLAN Modul. Das ESP8266 ist in dem Ikosaeder in der Mitte es Sterns versteckt. Aufgehängt wird der Stern an einem Kabel das gleichzeitig die Stromversorgung für den Stern bereitstellt. Die Versorgungsspannung beträgt 5V und kann daher auch mit einem USB-Ladegerät oder einer Powerbank betrieben werden.

## Software

Auf dem ESP8266 läuft eine NodeMCU Lua Firmware. Damit können Lua Skripte auf dem WLAN Modul ausgeführt werden. Die Animations und Farbsteuerung wird von einem zyklischen ablaufenden Lua Skript übernommen. Ein weiteres Lua Skript läuft paralell und macht das ESP8266 zum Webserver. Der Webserver liefert die Benutzeroberfläche des Sterns als Webseite aus und empfängt die Steuerbefehle.
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_webpage1.png" position="left sideBySide" %}
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_webpage2.png" position="right sideBySide" %}
Die Webseite wurde App-ähnlich gestaltet. Es kann eine einzelne Farbe oder auch Animationen ausgewählt werden. Im Hintergrund der Webseite wird der aktuelle Zustand des Sterns simuliert. Die Simulation von einem Javaskript im Browser in 3D berechnet und auf ein 2D Canvas gemalt.

## Fertiger Stern

{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_photo1.jpg" position="left sideBySide" %}
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_photo2.jpg" position="right sideBySide" %}
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_photo3.jpg" position="left sideBySide" %}
{% include figure.html image="/prj_media/2018-09-27-Bascetta_Star/bascetta_star_photo4.jpg" position="right sideBySide" %}
