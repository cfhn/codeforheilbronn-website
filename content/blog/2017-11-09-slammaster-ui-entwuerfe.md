---
title: Slammaster UI Entwürfe
date: 2017-11-09
tags: 
    - Poetry Slam
    - electron
    - slammaster
layout: post
category: Projekte
subtitle: Erste UI-Entwürfe für den neuen Slammaster
excerpt: Zusammen mit Tino aus Mannheim haben wir die ersten Schritte zum neuen Slammaster genommen. Zu dritt haben wir ausdiskutiert, wie die Oberfläche des neuen Tools grob aufgebaut sein soll. Erste Zeilen Code wurden auch schon geschrieben.
authors: 
    - joni
---

## Allgemeines

Die UI im Backend wir nach Material Design entworfen.
Ein Farbschema mit 3 Farben soll frei einstellbar sein. Dazu gibt es eine Grundfarbe, eine Akzentfarbe und eine Hintergrundfarbe.


## Masken

Die Anwendung wird aus verschiedenen Masken bestehen. Davon ist ein Teil zum pflegen der "Stammdaten" und einige sind der "Player", der auch bei einem Event eingesetzt wird.

### Stamdaten "Veranstaltung"

### Stammdaten "Gruppen"

### Stammdaten "Poeten"

Hier können neue Poeten angelegt und bestehende bearbeitet werden. Das passiert überlicherweise in Vorbereitung auf einen Slam.

![Stammdaten Poeten](/post_media/slammaster-stammdaten-poeten.png "Stammdaten Poeten")

### Ansicht "Player"

Der Player soll die Komponente sein, die während einer Veranstaltung maßgeblich genutzt wird.
Sie besteht aus einer Reihe Screens, die nacheinander abgefahren werden und live gesteuert werden können.
Dabei ist auf der linken Seite der Stream der Screens und auf der rechten Seite ein Editor mit dem Parameter des jeweiligen Screens geändert werden können.

Im Beispiel ist die Folie für einen Poeten offen. Dort können im Laufe der Veranstaltung die Punkte eingetragen werden und dann animiert auf dem Projektor angezeigt werden.

![Player](/post_media/slammaster-player.png "Player")
