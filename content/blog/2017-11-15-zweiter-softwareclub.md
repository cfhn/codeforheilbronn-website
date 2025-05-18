---
title: Zweiter Softwareclub
date: 2017-11-15
tags: 
    - softwareclub
    - events
    - javascript
    - testdriven
layout: post
category: SoftwareClub
subtitle: "Zweites Treffen des Software-Club widmete sich dem Thema 'Testdriven in JavaScript entwickeln'"
excerpt: "Alle zwei Wochen trifft sich neuerdings der Software-Club. Diese Treffen sollen der Vertiefung handwerklicher Fähigkeiten in der Softwareentwicklung dienen. Beim Treffen am 15.11.17 ging es um testgetriebene Entwicklung unter JavaScript mit Hilfe von tape."
authors: 
    - adrian
    - joni
---

## Was ist der Softwareclub?

Der Softwareclub ist ein Veranstaltungsformat von Code For Heilbronn, bei dem es vor allem um handwerkliche Fähigkeiten in der Softwareentwicklung gehen soll.

Zu Beginn eines Treffens gibt es einen Impulsvortrag zu einem bestimmten Thema, einem Best Practice, einem Framework oder ähnlichem. 
Danach gibt es z.B. Mobprogramming, Diskussionen oder freies Entwickeln.

Der Softwareclub findet alle zwei Wochen, immer in den geraden Kalenderwochen statt.

## Recap

Beim zweiten Softwareclub wurde mit Hilfe des [tape-Testingframeworks](https://github.com/substack/tape) ein Anstoß für testgetriebene Entwicklung gesetzt.

Adrian hielt dabei den Impulsvortrag zu beginn und zeigte einige Slides über die Grundsätze der testgetriebenen Entwicklung. Danach kamen direkt Codebeispiele und Mobprogramming. 



## Code

    const test = require("tape");

    function calculateSeconds(input) {
        const values = input.split(":");
        if (values.length === 1) {
            return Number(values[0]);
        } else {
            if (values.length === 2) {
                return Number(values[0]) * 3600 + Number(values[1]) * 60;
            } else {
                return Number(values[0]) * 3600 + Number(values[1]) * 60 + Number(values[2]);
            }
        }
    }

    test("first test", function (t) {
        t.plan(1);
        const result = calculateSeconds("32");
        t.equals(result, 32);
    });

    test("parse time minutes and seconds", function (t) {
        const input = "00:56:32";
        t.equals(calculateSeconds(input), 3392);
        t.end();
    });


    test("parse time hours, minutes and seconds", function (t) {
        const input = "12:56:32";
        t.equals(calculateSeconds(input), 46592);
        t.end();
    });

    test("parse time hours und minutes", function (t) {
        const input = "12:56";
        t.equals(calculateSeconds(input), 46560);
        t.end();
    });