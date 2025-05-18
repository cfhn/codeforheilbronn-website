---
title: Coding Abend - Farmbot Tweaks
date: 2017-01-19
tags: 
- arduino
- farmbot
categories:
  - CodingAbend
  - FarmBot
layout: post
published: 2017-01-19
excerpt: "Der Farmbot kann nun per G-Code angesteuert werden."
author: leo
---

Am heutigen Coding Abend wurde viel an der Firmware für die Ansteuerung der Motoren des Farmbots geschraubt. 

Zu Beginn haben wir den Farmbot im Meetingraum aufgestellt, damit alle um ihn herum sitzen konnten. Der Farmbot wurde auf jeder Achse um einen zweiten Endstop erweitert, damit er genau erkennen kann, wie lang eine Achse ist.

Auch die Entwicklung der Firmware hat einen großen Schritt voran gemacht. Es wurden weitere G-Code-Befehle implementiert und das Zusammenspiel der einzelnen Achsen verbessert.

Am Ende des Tages hatten wir einen Farmbot, der sich nun genau auf seinen Achsen orientieren konnte:

<blockquote class="twitter-video" data-lang="en"><p lang="de" dir="ltr">Der Farmbot kennt nun dank zwei Endstops je Achse genau seine Grenzen - danke an <a href="https://twitter.com/_LeoDJ?ref_src=twsrc%5Etfw">@_LeoDJ</a> <a href="https://twitter.com/LabVonUndZuMeow?ref_src=twsrc%5Etfw">@LabVonUndZuMeow</a> <a href="https://twitter.com/FranzImsch?ref_src=twsrc%5Etfw">@FranzImsch</a> <a href="https://t.co/Pyu9wJBIlw">pic.twitter.com/Pyu9wJBIlw</a></p>&mdash; Code for Heilbronn e. V. (@codeforhn) <a href="https://twitter.com/codeforhn/status/822193485386235904?ref_src=twsrc%5Etfw">January 19, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
