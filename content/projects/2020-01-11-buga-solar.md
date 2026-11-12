---
layout: project
author:
  - vale
  - leo
  - pata
date: "2020-01-11T00:00:00Z"
github: https://github.com/opendata-heilbronn/farmbot
title: BUGA Solaranlage
state: finished # unused, leftover from old website
tags:
  - buga-solar
description: Versorgung des FarmBot auf der BUGA mit Solarenergie
---

## Einführung

Beim Aufbau des Farmbots und der dafür notwendigen Infrastruktur auf der Bundesgartenschau 2019 in Heilbronn stellte sich die Frage der Stromversorgung, da während der Aufbauphase noch kein Strom aus dem Netz verfügbar war. Es gab vor Ort ein Benzinaggregat, was uns jedoch für eine Hand voll LED-Lampen ziemlich verschwenderisch vorkam.

Eine umweltfreundlichere Alternative sollte her und so wurde kurzerhand provisorisch ein Solarpanel auf's Container-Dach montiert. Die Lösung hat sich schnell bewährt und das Projekt nahm seinen Lauf.

## Ausbau

Uns wurde schnell klar, dass eine Solaranlage natürlich nicht nur zum Aufbau, sondern auch zum späteren Betrieb des FarmBot sinnvoll werden würde. Deshalb wurde diese im Laufe des BUGA-Aufbaus und der BUGA selbst um ein zweites Solarpanel, wetterfeste Montage und Verdrahtung, einen MPPT-Solarladeregler und einen größeren Batteriespeicher erweitert.

Dadurch konnten wir bis zu 160 Watt Spitzenleistung erreichen und bis zu 2,6 kWh Energie gespeichert werden. Außerdem hatten wir durch den neuen Laderegler die Möglichkeit, die Daten zum Laden/Entladen der Akkus auszulesen und zu speichern.

![Verteilerkasten der Solarpanels](/prj_media/2020-01-11-buga-solar/verteiler.jpg "Verteilerkasten der Solarpanels")

## Technische Umsetzung

Es wurden zwei 80W-Panels mit je ca. 90V Leerlaufspannung verwendet. Die Akkus waren gebrauchte Bleigel-Akkus mit je 2x 45Ah und 2x 65Ah. Als Solarladeregler kam ein Victron Energy BlueSolar 100/15 zum Einsatz.

![Schaltschrank im Aufbau](/prj_media/2020-01-11-buga-solar/schaltschrank.jpg "Schaltschrank im Aufbau")

Die serielle Schnittstelle des Ladereglers konnte per Ethernet-Seriell-Wandler direkt vom Netzwerk aus gesteuert und ausgelesen werden.

## Datenauswertung

Zur Speicherung der Daten des Solarladereglers wurde auch gleich noch ein Softwareprojekt ins Leben gerufen, der (zugegebenermaßen nicht sehr kreativ benannte) [victron-data-adapter](https://github.com/opendata-heilbronn/victron-data-adapter). Dieser fragt regelmäßig die Daten des Ladereglers ab und sendet diese an einen InfluxDB-Server.

Die so ermittelten und gespeicherten Daten konnten dann per Grafana visualisiert werden.

Alle gesammelten Daten stehen unter [github.com/opendata-heilbronn/buga-solar-data](https://github.com/opendata-heilbronn/buga-solar-data) zur Verfügung.

## Fazit

Im Laufe der BUGA (April bis Oktober 2019) wurden ca. 80 kWh Energie gespeichert und wieder verbraucht. An den meisten Tagen wurden die Akkus komplett voll geladen, wodurch ein Großteil der Solarenergie nicht genutzt wurde.

Unser Verbrauch aus dem Netz zum Betrieb des FarmBot verlief gegen null, da nur in längeren bewölkten und regnerischen Phasen überhaupt Energie aus dem Netz zugeführt werden musste.
