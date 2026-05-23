---
layout: post
title: Passantenzahlen messen mit LORA
description: Wie viele Personen halten sich in der Innenstadt auf? Das ist eine zentrale Frage der Stadtplanung. Mit PAX und LORA versuchen wir darauf eine Antwort zu finden.
tags: [hackathon, opendata, lora]
feature_image: /post_media/open-data-day-header-online.jpg

category: Einladung
date: 2025-09-18
excerpt: "Wie viele Personen halten sich in der Innenstadt auf? Das ist eine zentrale Frage der Stadtplanung. Mit PAX und LORA versuchen wir darauf eine Antwort zu finden."
author: joni
---


## TL;DR

[Link zum Grafana Dashboard](https://grafana.cfhn.it/goto/5x9wd-iDR?orgId=1)


## Was bisher geschah
Vor etwa einem Jahr haben wir auf dem "Future City Hackathon" der Hochschule Heilbronn und der Stadt Heilbronn ein Projekt vorgestellt, mit dem wir Passantenzählungen vereinfachen und günstiger machen wollen. Das Team auf dem Hackathon bestand aus vier Personen. Zwei davon sind Mitglieder des Vereins Code for Heilbronn.

Für die Stadt Heilbronn sind die Passanten und Frequenzdaten der Innenstadt von hohem Interesse. Sie können eingesetzt werden um Wartungs- und Reinigungsintervalle zu planen aber auch um Prognosen und Trends in der Stadtentwicklung zu erstellen. An der Ecke hat ein neuer Laden eröffnet? Wie lange bleiben Besuchende einer Veranstaltung nach Ende? Diese und ähnliche Fragen können mit dem System beantwortet werden.

![Members of the hackathon team - screenshot of the pitch](/post_media/2025-09-18-lora-personenzaehlung/members-hackathon.png "Members of the hackathon team - screenshot of the pitch")

Auf dem Hackathon haben wir aus ESP32 Prototypen des Sensors gebaut. Mangels LORA Abdeckung im Gebäude des Hackathons hatten wir uns allerdings entschieden, WLAN zur Kommunikation zu verwenden und die Daten ohne LORA ausschließlich über das Internet zu übertragen. Das benötigt zwar deutlich mehr Strom, reicht für den Hackathon aber aus und demonstriert das Zählen.

Mit einer Hand voll ESP32 Devboards aus dem Maker Space der experimenta in Heilbronn konnten wir so einen funktionierenden Test aufbauen und mit Powerbanks in den Räumen zu verteilen. So konnten wir schon erste Daten sammeln und ein wenig testen.

![Devboards deployed using powerbanks at future city hackathon](/post_media/2025-09-18-lora-personenzaehlung/devboards-hackathon.png "Devboards deployed using powerbanks at future city hackathon")

Die erfassten Daten wurden dann bereits auf dem Hackathon in Grafana aufbereitet und angezeigt. So konnten wir beispielsweise sehen, wann Essen geliefert wurde und wie viele Menschen gerade am Buffett anstanden. Mit einer Heatmap konnte die Verteilung der Personen in den Räumen visualisiert werden. Der Screenshot zeigt den Zeitpunkt des Mittagessens - wobei eine große 

![Screenshot of the grafana board at future city hackathon](/post_media/2025-09-18-lora-personenzaehlung/grafana-hackathon.png "Screenshot of the grafana board at future city hackathon")

## Technischer Hintergrund und Umsetzung
Die Sensoren basieren aktuell auf einem Developmentboard von Heltec - dem Heltec Wireless Paper - mit einem ESP32 für Bluetooth und WLAN, Battery IN und SX1262 für LORA.

Jedes Bluetooth Gerät, wie zum Beispiel ein Smartphone oder eine Smartwatch, sendet in regelmäßigen Abständen sogenannte Advertisement-Packages. Das tun sie, um anderen Geräten mitzuteilen, dass sie da sind. Unser Sensor empfängt diese Packete und merkt sich die Geräteadressen. Diese  MAC-Adressen werden gehashed und für maximal eine Stunde gespeichert. So können keine Rückschlüsse auf konkrete Geräte oder Personen gezogen und auch keine Profile erstellt werden. Außerdem verlassen diese MAC Adressen auch gehashed nicht die Sensoren, da nur die Anzahl der gezählten Adressen gesendet wird.

### LORA für die Datenübertragung

Um die Stromaufnahme gering zu halten und große Distanzen zu überbrücken, kommt LORA ins Spiel. Die Sensoren verfügen über einen SX1262-Transceiver. Im Gegensatz zum WLAN, das während des Hackathons genutzt wurde, benötigt LORA nahezu keine Energie. Sie ist für das Senden kleiner Datenmengen über weite Strecken bei minimalem Stromverbrauch optimiert. Dies ermöglicht den Betrieb per Akku für bis zu 10 Monate, was für eine dauerhafte Installation in der Innenstadt essenziell ist. Zusätzlich zum geringen Stromverbrauch ist LORA in der Lage große Reichweiten zu überbrücken. So können wir die Sensoren über das gesamte Stadtgebiet verteilen.


### Nächste Schritte

In den nächsten Schritten werden wir mehr Sensoren aufhängen und diese Kontinuierlich verbessern. AUßerdem wollen wir unsere Messdaten mit vorhandenn Sensoren abgleichen und so die Genauigkeit erhöhen. Besonders im Fokus steht dabei

* Firmware-Anpassung: Die bestehende Zähl-Firmware muss weiter optimiert werden.
* Hardware: Die Hardware des Sensors soll um die Möglichkeit zur Stromgewinnung über Solarzellen erweitert werden. So können wir auch die Messintervalle verkürzen.
* Feldtest: Die Sensoren werden an verschiedenen, strategisch wichtigen Punkten in der Innenstadt installiert, um die ersten kontinuierlichen Frequenzdaten über LORA zu sammeln und die Zuverlässigkeit zu testen.

Mit den gesammelten Daten können dann noch präzisere Analysen in Grafana durchgeführt werden, um der Stadt Heilbronn wertvolle Einblicke in die Passantenfrequenz und das Stadtgeschehen zu geben.
