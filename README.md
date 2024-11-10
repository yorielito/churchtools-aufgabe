# Wie wir die Webanwendung starten können?

1. Klonen Sie das folgende Repository:
- https://github.com/yorielito/churchtools-aufgabe.git

2. Öffnen Sie den Ordner "churchtools-aufgabe"

3. Führen Sie den Command "npm install" aus

4. Führen Sie den Command "npm run dev" aus.

=> Sie müssen Zugriff auf die API haben oder diese zulassen.


# Wie ist die Anwendung aufgebaut?
- Da die App klein ist, ist die Ordnerstruktur nach Typ organisiert


# Warum wurde welches Framework eingesetzt?
  * TailwindCSS: Ermöglicht Ihnen, der Anwendung schneller Stile zuzuweisen. Ohne ihn könnte man nicht Flowbite benutzen.
  * Flowbite ist eine Komponenten Bibliothek.


# Welche Schwierigkeiten gab es bei der Implementierung?
  * Die Verbindung mit der API: 
   - Die Sitzung ist zeitlich begrenzt und ich habe nicht die nötige Zeit, um die Aufgabe auf einmal zu erledigen.
   - Deshalb gibt es Funktionalitäten, die ich nicht testen konnte, zum Beispiel, das Anlegen einer neuen Person (Post), das Bearbeiten ihrer Daten(update) und das Filtern.

  * Da ich zum ersten Mal mit Vuejs arbeite, war es eine Herausforderung, die Aufgabe mit diesem Framework umzusetzen, aber es war eine gute Erfahrung.


# Welche Ideen gibt es, um die Webanwendung noch zu verbessern?
  * Es kann in jeder Hinsicht verbessert werden, vom Stil (UI) bis zur Funktionalität (UX).
    
    UI:
    - Bessere Typografie, Größe und Farben.
    - Fügen eine Header und eine Footer hinzu.

    UX:
    - Speichern die Daten so, dass bei jedem erneuten Laden der Seite keine API-Anfragen gestellt werden, möglicherweise mithilfe des Caches.
    - Machen die Filterergebnisse dauerhaft, damit sie beim Aktualisieren der Seite nicht verloren gehen.

    Clean Code:
    - Trennen die Funktionalität der Komponenten in einer separaten Datei, beispielsweise in einem Hook. Auf diese Weise belassen wir die Komponente so rein wie möglich, damit wir sie wiederverwenden können.


# Auf welchen Teil des Codes bin ich besonders stolz?
    - Da es das erste Mal ist, dass ich mit Vuejs arbeite, bin ich auf den gesamten Code stolz, obwohl es noch viel zu verbessern gibt.


# Notiz: 
    - Aufgrund der kurzen Zeit, die für die Erledigung der Aufgaben zur Verfügung stand, und des Problems mit der API-Sitzung konnte ich die folgenden Funktionalitäten nicht testen: Post, Update und den Filter.