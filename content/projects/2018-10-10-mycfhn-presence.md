---
layout: project
author:
  - patrick
  - leo
  - joas
date: "2018-10-10T00:00:00Z"
github: https://github.com/opendata-heilbronn/my-cfhn-presence
title: MyCFHN Presence
state: running # unused, leftover from old website
tags:
  - mycfhn
description: '"Wer ist gerade im Cowo" as a Service'
---

## Ausgangssituation

Die Frage, wer denn gerade im Open Space sei, wurde oft in der Telegram-Gruppe gestellt. Nach Installation eines Unifi Security Gateways als Load-Balancer Ersatz, wurde es nun möglich die Geräte im Netzwerk über eine REST-API auszulesen.

## MyCFHN

In Zukunft sollen Mitglieder von Code for Heilbronn Services über ein Mitgliederportal mit dem Namen "MyCFHN" nutzen können. Um eine einfache Erweiterung zu gewährleisten, werden die Services als Microservices mit sehr wenig Abhängigkeit untereinander umgesetzt.

## MyCFHN Presence Service

[Github Repository](https://github.com/opendata-heilbronn/my-cfhn-presence)

Als erster Service für "MyCFHN" wurde der Presence Service von Patrick umgesetzt. Dieser greift über den Unifi Controller auf die Liste der aktuell im Netzwerk vorhandenen Geräte zu. Anschließend wird in einer MongoDB nach den MAC-Addressen gesucht und Informationen über den Gerätebesitzer über eine REST API herausgegeben. Die Registrierung der MAC-Addressen erfolgt momentan noch manuell, soll aber in Zukunft über das MyCFHN Portal erledigt werden können.

## CFHN Presence Bot

[Github Repository](https://github.com/LeoDJ/CfH-Presence-Bot)

Leandro erkannte daraufhin das Potential, das eine solche API bietet und entwickelte den CFHN Presence Telegram Bot. Dieser greift regelmäßig auf die Presence API zu und gleicht den Inhalt mit dem vorigen Abruf ab. Die Liste der angekommenen und gegangenen Mitglieder werden daraufhin über Telegram an die Abonnenten verteilt.

## CFHN Presence Collector

[Github Repository](https://github.com/nickvergessen/my-cfhn-presence-collector)

Der CFHN Presence Collector von Joas ist ein weiterer Konsument der API. Dieser speichert die Anwesenheiten der Mitglieder in einer Datenbank um aus diesen Daten Statistiken zu generieren. So kann ermittelt werden, wer in der letzten Woche am längsten im Open Space war oder wer am meisten Zeit alleine verbracht hat.
