---
layout: project
author:
  - franz
date: "2018-03-23T00:00:00Z"
feature_image: /prj_media/steckdosenleiste/teaser.jpg # unused, leftover from old website
title: Tisch-Steckdosenleisten
state: finished # unused, leftover from old website
tags:
  - Steckdosenleisten
description: Um dem Problem von herumliegenden Steckerleisten entgegenzuwirken, wurden Montagemöglichkeiten für diese 3D-gedruckt.
---

Steckdosenleisten: Entweder sie liegen auf dem Tisch herum, sind nie an ihrem Platz und sehen einfach unästhetisch aus, oder sie sind nicht da, wo man sie braucht. Die Lösung für das Problem sind solche, die sich am Tisch befestigen lassen, doch bringen die ein neues Problem mit sich: ihr Preis.
So entstand der Plan für dieses Projekt: Steckerleisten, die sich mit 3D-gedruckten Teilen am Tisch sicher und fest anbringen lassen.

Auf der Suche nach einer guten Basis für die Umsetzung des Projekts, haben sich sich die [Brennenstuhl-Leisten](https://www.amazon.de/dp/B000M2DYZE/) als die beste Wahl hierfür erwiesen, da sich die Endstücke aus Kunststoff leicht entfernen lassen und somit problemlos durch eigene Teile ersetzt werden können.

{% include figure.html image="/prj_media/steckdosenleiste/plastic_removal.png" caption="Entfernen der vorhandenen Kunststoffteile von der Aluextrusion." %}

Um die Maße zu bekommen, die für das Designen der späteren Halterung wichtig war, wurde die Aluextrusion der Steckerleisten zunächst von den bereits vorhandenen Kunststoffteilen entfernt und dann auf einem Scanner eingescannt. Diese Scans konnten dann mithilfe eines Vektorgrafikprogramms digitalisiert werden. Um zu testen, wie gut das virtuelle Abbild auf die Aluschienen der Steckerleisten passte, wurden mit dem Lasercutter mehrere Teststücke angefertigt, die jeweils Raum zum Korrigieren der Passgenauigkeit boten.

{% include figure.html image="/prj_media/steckdosenleiste/lasered_test_pieces.png" caption="Verschiedene Teststücke aus dem Lasercutter." %}

Nach der erfolgreichen Einpassung wurde dann ein 3D-gedrucktes Modell angefertigt, das auf eine Tischkante geklemmt werden sollte. Die Verbindung war allerdings sehr instabil, sodass zum Einstecken eines Steckers eine zweite Hand erforderlich war, die die Steckerleisten in Position hielten. Um dem entgegenzuwirken, wurde die CAD-Datei so modifiziert, dass die Möglichkeit der Befestigung mittels [kleinen Schraubzwingen](https://www.amazon.de/dp/B000JLSNAE) bestand.
Die Befestigung mit den Schraubzwingen ist außerordentlich stabil und für den Dauereinsatz geeignet, weshalb von diesem Prinzip einige Exemplare angefertigt wurden.

Die 3D-Druckteile können [hier](http://a360.co/2BP2JH7) heruntergeladen werden.

{% include figure.html image="/prj_media/steckdosenleiste/3D_printing.jpg" caption="Der 3D-Drucker bei der Arbeit." %}

{% include figure.html image="/prj_media/steckdosenleiste/desk_test.png" caption="3D-gedruckte Teile mit Befestigung durch eine Schraubzwinge." %}

{% include figure.html image="/prj_media/steckdosenleiste/attach_parts.png" caption="Anbringen der neu gedruckten Teile." %}
