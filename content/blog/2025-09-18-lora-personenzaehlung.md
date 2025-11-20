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

Jedes Bluetooth Gerät sendet in regelmäßigen Abständen Pings 




## Technischer Hintergrund und Umsetzung

Die Sensoren basieren aktuell auf einem Developmentboard von **Heltec - dem Heltec Wireless Paper** - mit einem **ESP32** für **Bluetooth** und **WLAN**, Battery IN und **SX1262** für **LORA**. 

Jedes Bluetooth-Gerät, wie zum Beispiel ein **Smartphone** oder eine **Smartwatch**, sendet in regelmäßigen Abständen **Pings** (sogenannte **Advertisement-Pakete**) aus, um sich anderen Geräten mitzuteilen oder eine Verbindung herzustellen. Dies geschieht in der Regel über **Bluetooth Low Energy (BLE)**, eine besonders stromsparende Variante des Bluetooth-Standards, die in den meisten modernen Geräten verwendet wird.

### 🕵️‍♂️ Wie funktioniert die Passantenzählung (PAX-Counter)?

Der Sensor (der Heltec Wireless Paper) fungiert als **BLE-Scanner** (auch **PAX-Counter** genannt). Er empfängt diese von den mobilen Geräten ausgesendeten Advertisement-Pakete.

1.  **Erfassung:** Der ESP32-Chip im Heltec-Board scannt kontinuierlich das **2,4-GHz-Frequenzband** und erfasst die gesendeten **BLE-Advertisement-Pakete** von allen in der Nähe befindlichen aktiven Geräten.
2.  **Anonymisierung:** Ein wichtiges Merkmal dieser Pakete ist die **MAC-Adresse** (Media Access Control-Adresse) des sendenden Geräts. Um den **Datenschutz** zu gewährleisten und keine individuellen Bewegungsprofile zu erstellen, wird die MAC-Adresse *nicht* gespeichert. Stattdessen wird in vielen modernen Betriebssystemen (wie iOS und Android) ohnehin eine **zufällige, wechselnde MAC-Adresse** (sogenanntes **MAC Randomization**) verwendet. Zusätzlich kann der Sensor eine **anonymisierte Hash-Funktion** auf die empfangenen Adressen anwenden, um jede eindeutige Ping-Quelle *nur einmal* pro Zählintervall zu zählen, aber keine Rückschlüsse auf das tatsächliche Gerät oder die Person zuzulassen.
3.  **Zählung:** Der Sensor zählt die Anzahl der **einzigartigen** (anonymisierten) MAC-Adressen, die innerhalb eines bestimmten Zeitfensters erfasst werden. Diese Zahl dient als **Indikator** für die Anzahl der Personen im Erfassungsbereich. **Wichtig:** Da nicht jede Person ein Bluetooth-Gerät mit sich führt oder dieses aktiviert hat, liefert der PAX-Counter eine **Frequenzzahl** und keine exakte Personenzahl. Zur Kalibrierung und zur Bestimmung eines **Umrechnungsfaktors** ist oft ein Vergleich mit einer klassischen manuellen oder kamerabasierten Zählung notwendig.

---

### 📡 LORA für die Datenübertragung

Um die Stromaufnahme gering zu halten und große Distanzen zu überbrücken, kommt **LORA (Long Range)** ins Spiel, unterstützt durch den **SX1262-Transceiver**.

* **Stromsparend:** Im Gegensatz zum WLAN, das während des Hackathons genutzt wurde, ist LORA eine **LPWAN** (Low Power Wide Area Network) Technologie. Sie ist für das Senden kleiner Datenmengen über weite Strecken bei **minimalem Stromverbrauch** optimiert. Dies ermöglicht den **batteriebetriebenen** Betrieb der Sensoren über Wochen oder Monate hinweg, was für eine dauerhafte Installation in der Innenstadt essenziell ist.
* **Große Reichweite:** LORA kann im städtischen Raum Reichweiten von **bis zu 3 km** erreichen. Die erfassten Frequenzzahlen werden vom Sensor an ein zentrales **LORA-Gateway** gesendet, das oft auf einem höheren Gebäude platziert ist.
* **Datenübertragung:** Die über LORA gesendeten Datenpakete sind klein und enthalten die **anonymisierte Zählung** und die **Sensor-ID**. Das LORA-Gateway empfängt die Daten und leitet sie über das Internet (z. B. per WLAN oder Mobilfunk) an einen zentralen **LoRaWAN Network Server** weiter.



### ➡️ Nächste Schritte

Der nächste Schritt besteht nun darin, die **LORA-Abdeckung** in der Innenstadt von Heilbronn zu nutzen und die Prototypen von den Powerbanks auf eine **autarke Batterielösung** umzustellen. Durch die geringe Leistungsaufnahme von LORA kann der Betrieb ohne ständige Stromzufuhr gewährleistet werden.

* **Firmware-Anpassung:** Die bestehende Zähl-Firmware muss für die Nutzung der energiesparenden LORA-Kommunikation optimiert werden.
* **Gehäuse:** Es werden **wetterfeste Gehäuse** benötigt, um die Sensoren im Außenbereich zu montieren.
* **Feldtest:** Die Sensoren werden an verschiedenen, strategisch wichtigen Punkten in der Innenstadt installiert, um die ersten **kontinuierlichen Frequenzdaten** über LORA zu sammeln und die Zuverlässigkeit zu testen.

Mit den gesammelten Daten können dann noch präzisere Analysen in Grafana durchgeführt werden, um der Stadt Heilbronn wertvolle Einblicke in die Passantenfrequenz und das Stadtgeschehen zu geben.

---

Würdest du gerne mehr über die **Datenschutz-Implementierung** beim PAX-Counter erfahren oder die **Funktionsweise von LoRaWAN** genauer beleuchten?## Technischer Hintergrund und Umsetzung

Die Sensoren basieren aktuell auf einem Developmentboard von **Heltec - dem Heltec Wireless Paper** - mit einem **ESP32** für **Bluetooth** und **WLAN**, Battery IN und **SX1262** für **LORA**. 

Jedes Bluetooth-Gerät, wie zum Beispiel ein **Smartphone** oder eine **Smartwatch**, sendet in regelmäßigen Abständen **Pings** (sogenannte **Advertisement-Pakete**) aus, um sich anderen Geräten mitzuteilen oder eine Verbindung herzustellen. Dies geschieht in der Regel über **Bluetooth Low Energy (BLE)**, eine besonders stromsparende Variante des Bluetooth-Standards, die in den meisten modernen Geräten verwendet wird.

### 🕵️‍♂️ Wie funktioniert die Passantenzählung (PAX-Counter)?

Der Sensor (der Heltec Wireless Paper) fungiert als **BLE-Scanner** (auch **PAX-Counter** genannt). Er empfängt diese von den mobilen Geräten ausgesendeten Advertisement-Pakete.

1.  **Erfassung:** Der ESP32-Chip im Heltec-Board scannt kontinuierlich das **2,4-GHz-Frequenzband** und erfasst die gesendeten **BLE-Advertisement-Pakete** von allen in der Nähe befindlichen aktiven Geräten.
2.  **Anonymisierung:** Ein wichtiges Merkmal dieser Pakete ist die **MAC-Adresse** (Media Access Control-Adresse) des sendenden Geräts. Um den **Datenschutz** zu gewährleisten und keine individuellen Bewegungsprofile zu erstellen, wird die MAC-Adresse *nicht* gespeichert. Stattdessen wird in vielen modernen Betriebssystemen (wie iOS und Android) ohnehin eine **zufällige, wechselnde MAC-Adresse** (sogenanntes **MAC Randomization**) verwendet. Zusätzlich kann der Sensor eine **anonymisierte Hash-Funktion** auf die empfangenen Adressen anwenden, um jede eindeutige Ping-Quelle *nur einmal* pro Zählintervall zu zählen, aber keine Rückschlüsse auf das tatsächliche Gerät oder die Person zuzulassen.
3.  **Zählung:** Der Sensor zählt die Anzahl der **einzigartigen** (anonymisierten) MAC-Adressen, die innerhalb eines bestimmten Zeitfensters erfasst werden. Diese Zahl dient als **Indikator** für die Anzahl der Personen im Erfassungsbereich. **Wichtig:** Da nicht jede Person ein Bluetooth-Gerät mit sich führt oder dieses aktiviert hat, liefert der PAX-Counter eine **Frequenzzahl** und keine exakte Personenzahl. Zur Kalibrierung und zur Bestimmung eines **Umrechnungsfaktors** ist oft ein Vergleich mit einer klassischen manuellen oder kamerabasierten Zählung notwendig.

---

### 📡 LORA für die Datenübertragung

Um die Stromaufnahme gering zu halten und große Distanzen zu überbrücken, kommt **LORA (Long Range)** ins Spiel, unterstützt durch den **SX1262-Transceiver**.

* **Stromsparend:** Im Gegensatz zum WLAN, das während des Hackathons genutzt wurde, ist LORA eine **LPWAN** (Low Power Wide Area Network) Technologie. Sie ist für das Senden kleiner Datenmengen über weite Strecken bei **minimalem Stromverbrauch** optimiert. Dies ermöglicht den **batteriebetriebenen** Betrieb der Sensoren über Wochen oder Monate hinweg, was für eine dauerhafte Installation in der Innenstadt essenziell ist.
* **Große Reichweite:** LORA kann im städtischen Raum Reichweiten von **bis zu 3 km** erreichen. Die erfassten Frequenzzahlen werden vom Sensor an ein zentrales **LORA-Gateway** gesendet. Unsere Gateways sind aktuell in den Weinbergen, auf dem Dach der experimenta und auf der Hochschule Heilbronn Sontheim platziert.
* **Datenübertragung:** Die über LORA gesendeten Datenpakete sind klein und enthalten die **anonymisierte Zählung** und die **Sensor-ID**. Das LORA-Gateway empfängt die Daten und leitet sie über das Internet per TTN an unser Backend weiter.

---

### Sensoren in der Innenstadt

Seit einigen Wochen haben wir den ersten Sensor in der Heilbronner Innenstadt hängen. Die Daten werden bis in unser grafana geleitet und da dargestellt. In den nächsten Wochen sollen 10 weitere Sensoren dazu kommen. AUßerdem sollen die Daten bis in das Open Data Portal der Stadt Heilbronn geforwardet werden.

