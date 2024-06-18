const fragen = [
    { 
        question: "Welcher Datentyp wird verwendet, um ganze Zahlen in Python zu speichern?", 
        answers: [
            { text: "float", correct: false }, 
            { text: "str", correct: false }, 
            { text: "int", correct: true }, 
            { text: "bool", correct: false }
        ] 
    },
    { 
        question: "Was ist das Ergebnis des Ausdrucks `7 % 3` in Python?", 
        answers: [
            { text: "1", correct: false }, 
            { text: "2", correct: false }, 
            { text: "4", correct: false }, 
            { text: "1", correct: true }
        ] 
    },
    { 
        question: "Welche Aussage über Strings in Python ist korrekt?", 
        answers: [
            { text: "Strings sind veränderbar (mutable).", correct: false }, 
            { text: "Strings können mit dem `+` Operator verknüpft werden.", correct: true }, 
            { text: "Strings können nur einzelne Zeichen enthalten.", correct: false }, 
            { text: "Strings können nicht in Schleifen iteriert werden.", correct: false }
        ] 
    },
    { 
        question: "Was ist der Zweck der `len()` Funktion in Python?", 
        answers: [
            { text: "Sie gibt den Datentyp eines Objekts zurück.", correct: false }, 
            { text: "Sie konvertiert einen String in eine Zahl.", correct: false }, 
            { text: "Sie gibt die Länge (Anzahl der Elemente) eines Objekts zurück.", correct: true }, 
            { text: "Sie sortiert die Elemente einer Liste.", correct: false }
        ] 
    },
    { 
        question: "Welche Anweisung wird verwendet, um eine bedingte Ausführung in Python zu implementieren?", 
        answers: [{ text: "for", correct: false }, { text: "while", correct: false }, 
            { text: "if", correct: true }, 
            { text: "def", correct: false }
        ] 
    },
    { 
        question: "Was ist der Unterschied zwischen einer Liste und einem Tupel in Python?", 
        answers: [
            { text: "Listen können nur Zahlen enthalten, Tupel können beliebige Datentypen enthalten.", correct: false }, 
            { text: "Listen sind geordnet, Tupel sind ungeordnet.", correct: false }, 
            { text: "Listen sind veränderbar (mutable), Tupel sind unveränderbar (immutable).", correct: true }, 
            { text: "Es gibt keinen Unterschied zwischen Listen und Tupeln.", correct: false }] },
    { 
        question: "Welche Schleifenart wird verwendet, um einen Codeblock wiederholt auszuführen, solange eine Bedingung wahr ist?", 
        answers: [
            { text: "for-Schleife", correct: false }, 
            { text: "while-Schleife", correct: true }, 
            { text: "if-Anweisung", correct: false }, 
            { text: "def-Anweisung", correct: false }
        ] 
    },
    { 
        question: "Was ist der Zweck der `range()` Funktion in Python?", 
        answers: [
            { text: "Sie gibt eine Liste von zufälligen Zahlen zurück.", correct: false }, 
            { text: "Sie gibt eine unveränderbare Sequenz von Zahlen zurück.", correct: true }, 
            { text: "Sie sortiert die Elemente einer Liste.", correct: false }, 
            { text: "Sie entfernt doppelte Elemente aus einer Liste.", correct: false }
        ] 
    },
    { 
        question: "Welche Anweisung wird verwendet, um eine Funktion in Python zu definieren?", 
        answers: [
            { text: "func", correct: false }, 
            { text: "function", correct: false }, 
            { text: "define", correct: false }, 
            { text: "def", correct: true }
        ] 
    },
    {
        question: "Was sind Argumente einer Funktion in Python?", 
        answers: [
            { text: "Die Werte, die beim Aufruf der Funktion übergeben werden.", correct: true }, 
            { text: "Die Variablen, die innerhalb der Funktion definiert werden.", correct: false }, 
            { text: "Die Anweisungen, die innerhalb der Funktion ausgeführt werden.", correct: false }, 
            { text: "Die Rückgabewerte der Funktion.", correct: false }
        ] 
    },
    { 
        question: "Was ist der Unterschied zwischen einem Parameter und einem Argument in Python?", 
        answers: [
            { text: "Es gibt keinen Unterschied, die Begriffe sind synonym.", correct: false }, 
            { text: "Parameter werden beim Aufruf der Funktion verwendet, Argumente bei der Definition.", correct: false }, 
            { text: "Parameter werden bei der Definition der Funktion verwendet, Argumente beim Aufruf.", correct: true }, 
            { text: "Parameter sind veränderbar, Argumente sind unveränderbar.", correct: false }] },
    { 
        question: "Was ist der Zweck der `return` Anweisung in einer Python-Funktion?", 
        answers: [
            { text: "Sie beendet die Ausführung der Funktion und gibt einen Wert zurück.", correct: true }, 
            { text: "Sie startet die Funktion erneut.", correct: false }, 
            { text: "Sie definiert eine neue Variable innerhalb der Funktion.", correct: false }, 
            { text: "Sie löst eine Ausnahme aus.", correct: false }
        ] 
    },
    { 
        question: "Was ist eine Klasse in der objektorientierten Programmierung (OOP)?", 
        answers: [
            { text: "Eine Instanz eines Objekts.", correct: false }, 
            { text: "Ein Bauplan oder eine Vorlage für die Erstellung von Objekten.", correct: true }, 
            { text: "Eine Sammlung von Funktionen.", correct: false }, 
            { text: "Ein Datentyp, der nur Zahlen speichern kann.", correct: false }
        ] 
    },
    { 
        question: "Was ist ein Objekt in der objektorientierten Programmierung (OOP)?", 
        answers: [
            { text: "Ein Bauplan oder eine Vorlage für die Erstellung von Klassen.", correct: false }, 
            { text: "Eine Instanz einer Klasse.", correct: true }, 
            { text: "Eine Sammlung von Klassen.", correct: false }, 
            { text: "Ein Datentyp, der nur Zeichenketten speichern kann.", correct: false }
        ] 
    },
    { 
        question: "Was ist Vererbung in der objektorientierten Programmierung (OOP)?", 
        answers: [
            { text: "Die Fähigkeit eines Objekts, mehrere Formen anzunehmen.", correct: false }, 
            { text: "Die Fähigkeit einer Klasse, Eigenschaften und Methoden von einer anderen Klasse zu erben.", correct: true }, 
            { text: "Die Fähigkeit einer Funktion, sich selbst aufzurufen.", correct: false }, 
            { text: "Die Fähigkeit eines Programms, mehrere Aufgaben gleichzeitig auszuführen.", correct: false }
        ] 
    },
    { 
        question: "Was ist Polymorphie in der objektorientierten Programmierung (OOP)?", 
        answers: [
            { text: "Die Fähigkeit eines Objekts, mehrere Formen anzunehmen.", correct: true }, 
            { text: "Die Fähigkeit einer Klasse, Eigenschaften und Methoden von einer anderen Klasse zu erben.", correct: false }, 
            { text: "Die Fähigkeit einer Funktion, sich selbst aufzurufen.", correct: false }, 
            { text: "Die Fähigkeit eines Programms, mehrere Aufgaben gleichzeitig auszuführen.", correct: false }] },
    { 
        question: "Was ist der Zweck der `__init__` Methode in einer Python-Klasse?", 
        answers: [
            { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse gelöscht wird.", correct: false }, 
            { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse erstellt wird.", correct: true }, 
            { text: "Sie definiert die Vererbungsbeziehung zwischen Klassen.", correct: false }, 
            { text: "Sie gibt den Namen der Klasse zurück.", correct: false }
        ] 
    },
    { 
        question: "Was ist ein Modul in Python?", 
        answers: [
            { text: "Eine Datei, die Python-Code enthält.", correct: true }, 
            { text: "Ein Datentyp, der nur Funktionen enthalten kann.", correct: false }, 
            { text: "Ein Objekt, das von einer Klasse erstellt wird.", correct: false }, 
            { text: "Eine Anweisung, die eine Schleife beendet.", correct: false }
        ] 
    },
    { 
        question: "Was ist der Zweck der `import` Anweisung in Python?", 
        answers: [
            { text: "Sie definiert eine neue Funktion.", correct: false }, 
            { text: "Sie beendet die Ausführung eines Programms.", correct: false }, 
            { text: "Sie lädt den Code eines Moduls, damit er verwendet werden kann.", correct: true }, 
            { text: "Sie erstellt ein neues Objekt.", correct: false }
        ] 
    },
    { 
        question: "Welche Anweisung wird verwendet, um alle Funktionen und Klassen aus einem Modul zu importieren?", 
        answers: [
            { text: "import * from modulname", correct: true }, 
            { text: "import modulname.*", correct: false }, 
            { text: "from modulname import all", correct: false }, 
            { text: "import all from modulname", correct: false }
        ] 
    },
    { 
        question: "Was ist eine Ausnahme (Exception) in Python?", 
        answers: [
            { text: "Ein Fehler, der während der Ausführung eines Programms auftritt.", correct: true }, 
            { text: "Eine spezielle Art von Funktion.", correct: false }, 
            { text: "Ein Datentyp, der nur Wahrheitswerte speichern kann.", correct: false }, 
            { text: "Eine Anweisung, die eine Schleife beendet.", correct: false }
        ] 
    },
    { 
        question: "Welche Anweisung wird verwendet, um Ausnahmen in Python zu behandeln?", 
        answers: [
            { text: "try...except", correct: true }, 
            { text: "if...else", correct: false }, 
            { text: "for...in", correct: false }, 
            { text: "while...else", correct: false }
        ] 
    },
    { 
      question: "Was ist der Zweck der `with` Anweisung in Python?", 
      answers: [
        { text: "Sie dient zur Definition einer neuen Funktion.", correct: false },
        { text: "Sie ermöglicht die automatische Ressourcenverwaltung.", correct: true }, 
        { text: "Sie dient zur Erstellung einer neuen Klasse.", correct: false },
        { text: "Sie wird verwendet, um Ausnahmen zu behandeln.", correct: false }
      ] 
    },
    { 
      question: "Welche Methode wird verwendet, um ein Element am Ende einer Liste hinzuzufügen?", 
      answers: [
        { text: "append()", correct: true },
        { text: "insert()", correct: false }, 
        { text: "add()", correct: false },
        { text: "push()", correct: false }
      ] 
    },
    { 
      question: "Was ist der Unterschied zwischen flacher und tiefer Kopie in Python?", 
      answers: [
        { text: "Flache Kopien erstellen eine unabhängige Kopie des Objekts.", correct: false },
        { text: "Tiefe Kopien erstellen eine Kopie, die auf dasselbe Objekt verweist.", correct: false }, 
        { text: "Flache Kopien erstellen eine Kopie, die auf dasselbe Objekt verweist, während tiefe Kopien eine unabhängige Kopie des Objekts und aller darin enthaltenen Objekte erstellen.", correct: true },
        { text: "Es gibt keinen Unterschied zwischen flacher und tiefer Kopie.", correct: false }
      ] 
    },
    { 
      question: "Was ist der Zweck des `self` Parameters in Python-Klassenmethoden?", 
      answers: [
        { text: "Er repräsentiert die Klasse selbst.", correct: false },
        { text: "Er repräsentiert die Instanz der Klasse (das Objekt).", correct: true }, 
        { text: "Er wird verwendet, um auf globale Variablen zuzugreifen.", correct: false },
        { text: "Er wird verwendet, um Ausnahmen zu behandeln.", correct: false }
      ] 
    },
    { 
      question: "Welche Aussage über Dictionaries in Python ist korrekt?", 
      answers: [
        { text: "Dictionaries sind geordnete Sammlungen von Elementen.", correct: false },
        { text: "Dictionaries können nur Zahlen als Schlüssel verwenden.", correct: false }, 
        { text: "Dictionaries können auf Elemente über ihre Schlüssel zugegriffen werden.", correct: true },
        { text: "Dictionaries können keine doppelten Werte enthalten.", correct: false }
      ] 
    },
    { 
      question: "Was ist der Zweck der `map()` Funktion in Python?", 
      answers: [
        { text: "Sie sortiert die Elemente einer Liste.", correct: false },
        { text: "Sie wendet eine Funktion auf jedes Element eines iterierbaren Objekts an und gibt ein neues iterierbares Objekt mit den Ergebnissen zurück.", correct: true }, 
        { text: "Sie filtert Elemente aus einer Liste basierend auf einer Bedingung.", correct: false },
        { text: "Sie reduziert eine Liste auf einen einzelnen Wert.", correct: false }
      ] 
    },
    { 
      question: "Was ist der Zweck der `filter()` Funktion in Python?", 
      answers: [
        { text: "Sie sortiert die Elemente einer Liste.", correct: false },
        { text: "Sie wendet eine Funktion auf jedes Element eines iterierbaren Objekts an und gibt ein neues iterierbares Objekt mit den Ergebnissen zurück.", correct: false }, 
        { text: "Sie filtert Elemente aus einer Liste basierend auf einer Bedingung.", correct: true },
        { text: "Sie reduziert eine Liste auf einen einzelnen Wert.", correct: false }
      ] 
    },
    { 
      question: "Was ist ein Decorator in Python?", 
      answers: [
        { text: "Eine spezielle Art von Funktion, die eine andere Funktion modifiziert.", correct: true },
        { text: "Eine Anweisung, die eine Schleife beendet.", correct: false }, 
        { text: "Ein Datentyp, der nur Zeichenketten speichern kann.", correct: false },
        { text: "Eine Methode, die beim Erstellen eines Objekts aufgerufen wird.", correct: false }
      ] 
    },
    { 
      question: "Was ist der Unterschied zwischen `is` und `==` in Python?", 
      answers: [
        { text: "`is` prüft, ob zwei Variablen auf dasselbe Objekt verweisen, während `==` prüft, ob die Werte der Variablen gleich sind.", correct: true },
        { text: "`is` prüft, ob die Werte der Variablen gleich sind, während `==` prüft, ob zwei Variablen auf dasselbe Objekt verweisen.", correct: false }, 
        { text: "Es gibt keinen Unterschied zwischen `is` und `==`.", correct: false },
        { text: "`is` wird für Zahlen verwendet, `==` für Zeichenketten.", correct: false }
      ] 
    },
    { 
      question: "Welche Anweisung wird verwendet, um ein neues Set in Python zu erstellen?", 
      answers: [
        { text: "set()", correct: true },
        { text: "list()", correct: false }, 
        { text: "dict()", correct: false },
        { text: "tuple()", correct: false }
      ] 
    },
    {
        question: "Was ist der Unterschied zwischen einer Klasse und einem Objekt in Python?",
        answers: [
        { text: "Eine Klasse ist eine Instanz eines Objekts.", correct: false },
        { text: "Ein Objekt ist eine Instanz einer Klasse.", correct: true },
        { text: "Es gibt keinen Unterschied.", correct: false },
        { text: "Eine Klasse ist eine Sammlung von Objekten.", correct: false }
        ]
    },
    {
        question: "Was ist der Zweck der `__str__` Methode in einer Python-Klasse?",
        answers: [
        { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse erstellt wird.", correct: false },
        { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse gelöscht wird.", correct: false },
        { text: "Sie gibt eine lesbare String-Darstellung des Objekts zurück.", correct: true },
        { text: "Sie definiert die Vererbungsbeziehung zwischen Klassen.", correct: false }
        ]
    },
    {
        question: "Welche Anweisung wird verwendet, um eine neue Liste in Python zu erstellen?",
        answers: [
        { text: "list()", correct: true },
        { text: "array()", correct: false },
        { text: "new_list()", correct: false },
        { text: "create_list()", correct: false }
        ]
    },
    {
        question: "Was ist der Zweck der `split()` Methode eines Strings in Python?",
        answers: [
        { text: "Sie entfernt alle Leerzeichen aus dem String.", correct: false },
        { text: "Sie teilt den String an einem bestimmten Trennzeichen und gibt eine Liste der Teile zurück.", correct: true },
        { text: "Sie konvertiert den String in Kleinbuchstaben.", correct: false },
        { text: "Sie kehrt die Reihenfolge der Zeichen im String um.", correct: false }
        ]
    },
    {
        question: "Was ist der Unterschied zwischen einem Fehler (Error) und einer Ausnahme (Exception) in Python?",
        answers: [
        { text: "Fehler sind schwerwiegender als Ausnahmen.", correct: false },
        { text: "Ausnahmen können abgefangen und behandelt werden, Fehler nicht.", correct: true },
        { text: "Fehler werden durch den Programmierer verursacht, Ausnahmen durch das System.", correct: false },
        { text: "Es gibt keinen Unterschied.", correct: false }
        ]
    },
    {
        question: "Was ist der Zweck der `enumerate()` Funktion in Python?",
        answers: [
        { text: "Sie zählt die Anzahl der Elemente in einem iterierbaren Objekt.", correct: false },
        { text: "Sie gibt ein iterierbares Objekt zurück, das Paare von (Index, Wert) für jedes Element in einem iterierbaren Objekt enthält.", correct: true },
        { text: "Sie sortiert die Elemente eines iterierbaren Objekts.", correct: false },
        { text: "Sie entfernt doppelte Elemente aus einem iterierbaren Objekt.", correct: false }
        ]
    },
    {
        question: "Was ist ein Generator in Python?",
        answers: [
        { text: "Eine spezielle Art von Funktion, die eine Sequenz von Werten erzeugt.", correct: true },
        { text: "Eine Datenstruktur, die Schlüssel-Wert-Paare speichert.", correct: false },
        { text: "Eine Anweisung, die eine Schleife beendet.", correct: false },
        { text: "Ein Modul, das mathematische Funktionen enthält.", correct: false }
        ]
    },
    {
        question: "Was ist der Unterschied zwischen den Methoden `sort()` und `sorted()` in Python?",
        answers: [
        { text: "`sort()` sortiert eine Liste in-place, `sorted()` gibt eine neue sortierte Liste zurück.", correct: true },
        { text: "`sort()` gibt eine neue sortierte Liste zurück, `sorted()` sortiert eine Liste in-place.", correct: false },
        { text: "`sort()` funktioniert nur mit Listen, `sorted()` funktioniert mit allen iterierbaren Objekten.", correct: false },
        { text: "Es gibt keinen Unterschied.", correct: false }
        ]
    },
    {
        question: "Was ist der Zweck der `lambda` Funktionen in Python?",
        answers: [
        { text: "Sie definieren anonyme Funktionen.", correct: true },
        { text: "Sie lösen Ausnahmen aus.", correct: false },
        { text: "Sie importieren Module.", correct: false },
        { text: "Sie definieren Klassen.", correct: false }
        ]
    },
    {
        question: "Was ist der Unterschied zwischen `global` und `nonlocal` Schlüsselwörtern in Python?",
        answers: [
        { text: "`global` wird verwendet, um auf globale Variablen zuzugreifen und sie zu ändern, `nonlocal` wird verwendet, um auf Variablen in umschließenden Funktionen zuzugreifen und sie zu ändern.", correct: true },
        { text: "`global` wird verwendet, um lokale Variablen zu definieren, `nonlocal` wird verwendet, um globale Variablen zu definieren.", correct: false },
        { text: "`global` und `nonlocal` sind synonym.", correct: false },
        { text: "`global` wird in Klassen verwendet, `nonlocal` in Funktionen.", correct: false }
        ]
    },
        {
          question: "Was ist der Zweck der `super()` Funktion in Python?",
          answers: [
            { text: "Sie gibt den Namen der Superklasse zurück.", correct: false },
            { text: "Sie erstellt eine neue Instanz der Superklasse.", correct: false },
            { text: "Sie ruft die Methode der Superklasse auf.", correct: true },
            { text: "Sie verhindert die Vererbung von Methoden.", correct: false }
          ]
        },
        {
          question: "Welche Aussage über Sets in Python ist korrekt?",
          answers: [
            { text: "Sets können doppelte Elemente enthalten.", correct: false },
            { text: "Sets sind geordnete Sammlungen von Elementen.", correct: false },
            { text: "Sets können nur Zahlen enthalten.", correct: false },
            { text: "Sets können verwendet werden, um doppelte Elemente aus einer Liste zu entfernen.", correct: true }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen flacher und tiefer Kopie in Python?",
          answers: [
            { text: "Flache Kopien erstellen eine unabhängige Kopie des Objekts.", correct: false },
            { text: "Tiefe Kopien erstellen eine Kopie, die auf dasselbe Objekt verweist.", correct: false },
            { text: "Flache Kopien erstellen eine Kopie, die auf dasselbe Objekt verweist, während tiefe Kopien eine unabhängige Kopie des Objekts und aller darin enthaltenen Objekte erstellen.", correct: true },
            { text: "Es gibt keinen Unterschied zwischen flacher und tiefer Kopie.", correct: false }
          ]
        },
        {
          question: "Was ist der Zweck der `args` und `kwargs` Parameter in Python-Funktionen?",
          answers: [
            { text: "Sie ermöglichen das Übergeben einer beliebigen Anzahl von Argumenten an eine Funktion.", correct: true },
            { text: "Sie werden verwendet, um optionale Argumente zu definieren.", correct: false },
            { text: "Sie werden verwendet, um globale Variablen zu definieren.", correct: false },
            { text: "Sie dienen zur Fehlerbehandlung.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen den Operatoren `and` und `or` in Python?",
          answers: [
            { text: "`and` gibt True zurück, wenn beide Operanden wahr sind, `or` gibt True zurück, wenn mindestens ein Operand wahr ist.", correct: true },
            { text: "`and` gibt True zurück, wenn mindestens ein Operand wahr ist, `or` gibt True zurück, wenn beide Operanden wahr sind.", correct: false },
            { text: "`and` und `or` sind synonym.", correct: false },
            { text: "`and` wird für Zahlen verwendet, `or` für Zeichenketten.", correct: false }
          ]
        },
        {
          question: "Was ist der Zweck der `zip()` Funktion in Python?",
          answers: [
            { text: "Sie komprimiert Dateien.", correct: false },
            { text: "Sie kombiniert Elemente aus mehreren iterierbaren Objekten zu Tupeln.", correct: true },
            { text: "Sie sortiert Elemente in einer Liste.", correct: false },
            { text: "Sie entfernt doppelte Elemente aus einer Liste.", correct: false }
          ]
        },
        {
          question: "Was ist ein Namensraum (Namespace) in Python?",
          answers: [
            { text: "Ein Bereich, in dem Variablennamen gültig sind.", correct: true },
            { text: "Eine Sammlung von Modulen.", correct: false },
            { text: "Ein Datentyp, der nur Funktionen enthalten kann.", correct: false },
            { text: "Eine Anweisung, die eine Schleife beendet.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen einer Klasse und einem Modul in Python?",
          answers: [
            { text: "Eine Klasse ist eine Vorlage für Objekte, ein Modul ist eine Datei mit Python-Code.", correct: true },
            { text: "Eine Klasse kann nur Funktionen enthalten, ein Modul kann beliebigen Code enthalten.", correct: false },
            { text: "Es gibt keinen Unterschied.", correct: false },
            { text: "Ein Modul ist eine Instanz einer Klasse.", correct: false }
          ]
        },
        {
          question: "Was ist der Zweck der `pass` Anweisung in Python?",
          answers: [
            { text: "Sie beendet die Ausführung eines Programms.", correct: false },
            { text: "Sie dient als Platzhalter für Code, der später hinzugefügt werden soll.", correct: true },
            { text: "Sie definiert eine neue Variable.", correct: false },
            { text: "Sie löst eine Ausnahme aus.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen `raise` und `assert` in Python?",
          answers: [
            { text: "`raise` wird verwendet, um eine Ausnahme auszulösen, `assert` wird verwendet, um eine Bedingung zu überprüfen und eine Ausnahme auszulösen, wenn die Bedingung nicht erfüllt ist.", correct: true },
            { text: "`raise` wird verwendet, um eine Bedingung zu überprüfen, `assert` wird verwendet, um eine Ausnahme auszulösen.", correct: false },
            { text: "Es gibt keinen Unterschied.", correct: false },
            { text: "`raise` wird in `try...except` Blöcken verwendet, `assert` nicht.", correct: false }
          ]
        },
        {
          question: "Was ist der Zweck der `__name__` Variable in einem Python-Modul?",
          answers: [
            { text: "Sie speichert den Namen des Autors des Moduls.", correct: false },
            { text: "Sie speichert den Pfad zur Datei des Moduls.", correct: false },
            { text: "Sie enthält den Namen des Moduls ('__main__', wenn das Modul direkt ausgeführt wird).", correct: true },
            { text: "Sie wird verwendet, um auf globale Variablen zuzugreifen.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen einer flachen und einer tiefen Kopie einer Liste in Python?",
          answers: [
            { text: "Eine flache Kopie erstellt eine neue Liste, die auf dieselben Elemente verweist wie die ursprüngliche Liste.", correct: true },
            { text: "Eine tiefe Kopie erstellt eine neue Liste mit Kopien der Elemente der ursprünglichen Liste.", correct: false },
            { text: "Eine flache Kopie kann nur für Listen verwendet werden, eine tiefe Kopie für beliebige Objekte.", correct: false },
            { text: "Es gibt keinen Unterschied.", correct: false }
          ]
        },
        {
          question: "Was ist der Zweck des `global` Schlüsselworts in Python?",
          answers: [
            { text: "Es definiert eine neue globale Variable.", correct: false },
            { text: "Es ermöglicht den Zugriff auf eine globale Variable innerhalb einer Funktion.", correct: true },
            { text: "Es macht eine lokale Variable global verfügbar.", correct: false },
            { text: "Es wird verwendet, um Ausnahmen zu behandeln.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen den Methoden `remove()` und `pop()` einer Liste in Python?",
          answers: [
            { text: "`remove()` entfernt das erste Vorkommen eines Elements, `pop()` entfernt das Element an einem bestimmten Index.", correct: true },
            { text: "`remove()` entfernt das Element an einem bestimmten Index, `pop()` entfernt das erste Vorkommen eines Elements.", correct: false },
            { text: "`remove()` gibt das entfernte Element zurück, `pop()` nicht.", correct: false },
            { text: "Es gibt keinen Unterschied.", correct: false }
          ]
        },
        {
          question: "Was ist der Zweck der `join()` Methode eines Strings in Python?",
          answers: [
            { text: "Sie verbindet mehrere Strings zu einem neuen String.", correct: true },
            { text: "Sie teilt einen String an einem bestimmten Trennzeichen.", correct: false },
            { text: "Sie entfernt alle Leerzeichen aus einem String.", correct: false },
            { text: "Sie konvertiert einen String in Großbuchstaben.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen einem Generator und einer normalen Funktion in Python?",
          answers: [
            { text: "Ein Generator gibt alle Werte auf einmal zurück, eine normale Funktion gibt einen Wert nach dem anderen zurück.", correct: false },
            { text: "Ein Generator verwendet das Schlüsselwort `yield`, eine normale Funktion verwendet `return`.", correct: true },
            { text: "Ein Generator kann nur Zahlen zurückgeben, eine normale Funktion kann beliebige Werte zurückgeben.", correct: false },
            { text: "Es gibt keinen Unterschied.", correct: false }
          ]
        },
        {
          question: "Was ist der Zweck der `*args` und `**kwargs` Parameter in Python-Funktionen?",
          answers: [
            { text: "Sie ermöglichen das Übergeben einer variablen Anzahl von Argumenten an eine Funktion.", correct: true },
            { text: "Sie werden verwendet, um optionale Argumente zu definieren.", correct: false },
            { text: "Sie werden verwendet, um globale Variablen zu definieren.", correct: false },
            { text: "Sie dienen zur Fehlerbehandlung.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen den Operatoren `is` und `==` in Python?",
          answers: [
            { text: "`is` prüft, ob zwei Variablen auf dasselbe Objekt verweisen, während `==` prüft, ob die Werte der Variablen gleich sind.", correct: true },
            { text: "`is` prüft, ob die Werte der Variablen gleich sind, während `==` prüft, ob zwei Variablen auf dasselbe Objekt verweisen.", correct: false },
            { text: "Es gibt keinen Unterschied.", correct: false },
            { text: "`is` wird für Zahlen verwendet, `==` für Zeichenketten.", correct: false }
          ]
        },
        {
          question: "Was ist ein Decorator in Python?",
          answers: [
            { text: "Eine spezielle Art von Funktion, die eine andere Funktion modifiziert.", correct: true },
            { text: "Eine Anweisung, die eine Schleife beendet.", correct: false },
            { text: "Ein Datentyp, der nur Zeichenketten speichern kann.", correct: false },
            { text: "Eine Methode, die beim Erstellen eines Objekts aufgerufen wird.", correct: false }
          ]
        },
        {
          question: "Was ist der Unterschied zwischen den Methoden `append()` und `extend()` einer Liste in Python?",
          answers: [
            { text: "`append()` fügt ein Element am Ende einer Liste hinzu, `extend()` fügt alle Elemente eines iterierbaren Objekts am Ende einer Liste hinzu.", correct: true },
            { text: "`append()` fügt alle Elemente eines iterierbaren Objekts am Ende einer Liste hinzu, `extend()` fügt ein Element am Ende einer Liste hinzu.", correct: false },
            { text: "`append()` gibt die modifizierte Liste zurück, `extend()` nicht.", correct: false },
            { text: "Es gibt keinen Unterschied.", correct: false }
          ]
        },
            {
              question: "Was ist der Zweck der `__repr__` Methode in einer Python-Klasse?",
              answers: [
                { text: "Sie gibt eine lesbare String-Darstellung des Objekts für den Endbenutzer zurück.", correct: false },
                { text: "Sie gibt eine technische String-Darstellung des Objekts zurück, die zur Debugging-Zwecken verwendet werden kann.", correct: true },
                { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse erstellt wird.", correct: false },
                { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse gelöscht wird.", correct: false }
              ]
            },
            {
              question: "Welche Aussage über das `pickle` Modul in Python ist korrekt?",
              answers: [
                { text: "Es wird verwendet, um Python-Objekte in Dateien zu speichern und daraus zu laden.", correct: true },
                { text: "Es wird verwendet, um Daten in relationalen Datenbanken zu speichern.", correct: false },
                { text: "Es wird verwendet, um Netzwerkverbindungen herzustellen.", correct: false },
                { text: "Es wird verwendet, um Grafiken zu erstellen.", correct: false }
              ]
            },
            {
              question: "Was ist der Unterschied zwischen den Datentypen `bytes` und `str` in Python 3?",
              answers: [
                { text: "`bytes` speichert Textdaten, `str` speichert Binärdaten.", correct: false },
                { text: "`bytes` speichert Binärdaten, `str` speichert Textdaten.", correct: true },
                { text: "Es gibt keinen Unterschied.", correct: false },
                { text: "`bytes` ist in Python 2 verfügbar, `str` in Python 3.", correct: false }
              ]
            },
            {
              question: "Was ist der Zweck des `@property` Decorators in Python?",
              answers: [
                { text: "Er macht eine Methode als statische Methode verfügbar.", correct: false },
                { text: "Er macht eine Methode als Klassenmethode verfügbar.", correct: false },
                { text: "Er ermöglicht den Zugriff auf eine Methode wie auf ein Attribut.", correct: true },
                { text: "Er verhindert den Zugriff auf eine Methode von außerhalb der Klasse.", correct: false }
              ]
            },
            {
              question: "Was ist der Unterschied zwischen einem Iterator und einem Iterierbaren Objekt in Python?",
              answers: [
                { text: "Ein Iterator ist ein Objekt, das die `__iter__` Methode implementiert, ein Iterierbares Objekt ist ein Objekt, das die `__next__` Methode implementiert.", correct: false },
                { text: "Ein Iterierbares Objekt ist ein Objekt, das die `__iter__` Methode implementiert, ein Iterator ist ein Objekt, das die `__next__` Methode implementiert.", correct: true },
                { text: "Es gibt keinen Unterschied.", correct: false },
                { text: "Ein Iterator kann nur einmal durchlaufen werden, ein Iterierbares Objekt kann mehrfach durchlaufen werden.", correct: false }
              ]
            },
            {
              question: "Was ist der Zweck der `__slots__` Variable in einer Python-Klasse?",
              answers: [
                { text: "Sie definiert die Attribute, die von Objekten der Klasse verwendet werden können.", correct: true },
                { text: "Sie definiert die Methoden, die von Objekten der Klasse aufgerufen werden können.", correct: false },
                { text: "Sie speichert den Namen der Klasse.", correct: false },
                { text: "Sie wird verwendet, um Ausnahmen zu behandeln.", correct: false }
              ]
            },
            {
              question: "Welche Anweisung wird verwendet, um ein neues Dictionary in Python zu erstellen?",
              answers: [
                { text: "dict()", correct: true },
                { text: "list()", correct: false },
                { text: "set()", correct: false },
                { text: "tuple()", correct: false }
              ]
            },
            {
              question: "Was ist der Unterschied zwischen den Operatoren `/` und `//` in Python?",
              answers: [
                { text: "`/` führt eine Gleitkommadivision durch, `//` führt eine Ganzzahldivision durch.", correct: true },
                { text: "`/` führt eine Ganzzahldivision durch, `//` führt eine Gleitkommadivision durch.", correct: false },
                { text: "Es gibt keinen Unterschied.", correct: false },
                { text: "`/` wird für Zahlen verwendet, `//` für Zeichenketten.", correct: false }
              ]
            },
            {
              question: "Was ist der Zweck der `enumerate()` Funktion in Python?",
              answers: [
                { text: "Sie zählt die Anzahl der Elemente in einem iterierbaren Objekt.", correct: false },
                { text: "Sie gibt ein iterierbares Objekt zurück, das Paare von (Index, Wert) für jedes Element in einem iterierbaren Objekt enthält.", correct: true },
                { text: "Sie sortiert die Elemente eines iterierbaren Objekts.", correct: false },
                { text: "Sie entfernt doppelte Elemente aus einem iterierbaren Objekt.", correct: false }
              ]
            },
            {
              question: "Was ist der Unterschied zwischen den Methoden `get()` und `[]` beim Zugriff auf Elemente eines Dictionaries in Python?",
              answers: [
                { text: "`get()` gibt den Wert eines Schlüssels zurück, falls er existiert, andernfalls None. `[]` löst einen KeyError aus, wenn der Schlüssel nicht existiert.", correct: true },
                { text: "`get()` löst einen KeyError aus, wenn der Schlüssel nicht existiert, `[]` gibt None zurück.", correct: false },
                { text: "Es gibt keinen Unterschied.", correct: false },
                { text: "`get()` kann nur für Strings verwendet werden, `[]` für beliebige Datentypen.", correct: false }
              ]
            },
                {
                  question: "Was ist der Unterschied zwischen `shallow copy` und `deep copy` in Python?",
                  answers: [
                    { text: "`shallow copy` erstellt eine Kopie des Objekts, aber die verschachtelten Objekte bleiben Referenzen auf die Originale.", correct: true },
                    { text: "`deep copy` erstellt eine vollständige Kopie des Objekts und aller verschachtelten Objekte.", correct: false },
                    { text: "`shallow copy` kann nur für Listen verwendet werden, `deep copy` für alle Datentypen.", correct: false },
                    { text: "Es gibt keinen Unterschied.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Zweck der `__call__` Methode in einer Python-Klasse?",
                  answers: [
                    { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse erstellt wird.", correct: false },
                    { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse wie eine Funktion aufgerufen wird.", correct: true },
                    { text: "Sie gibt eine lesbare String-Darstellung des Objekts zurück.", correct: false },
                    { text: "Sie definiert die Vererbungsbeziehung zwischen Klassen.", correct: false }
                  ]
                },
                {
                  question: "Welche Aussage über das `csv` Modul in Python ist korrekt?",
                  answers: [
                    { text: "Es wird verwendet, um CSV-Dateien zu lesen und zu schreiben.", correct: true },
                    { text: "Es wird verwendet, um JSON-Dateien zu lesen und zu schreiben.", correct: false },
                    { text: "Es wird verwendet, um XML-Dateien zu lesen und zu schreiben.", correct: false },
                    { text: "Es wird verwendet, um Datenbankverbindungen herzustellen.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Zweck der `__doc__` Variable in einem Python-Modul, einer Klasse oder einer Funktion?",
                  answers: [
                    { text: "Sie speichert den Namen des Autors.", correct: false },
                    { text: "Sie speichert das Erstellungsdatum.", correct: false },
                    { text: "Sie enthält die Dokumentation (Docstring) des Moduls, der Klasse oder der Funktion.", correct: true },
                    { text: "Sie wird verwendet, um auf globale Variablen zuzugreifen.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Unterschied zwischen den Methoden `find()` und `index()` eines Strings in Python?",
                  answers: [
                    { text: "`find()` gibt den Index des ersten Vorkommens eines Substrings zurück, oder -1, wenn der Substring nicht gefunden wird. `index()` gibt den Index des ersten Vorkommens eines Substrings zurück und löst einen ValueError aus, wenn der Substring nicht gefunden wird.", correct: true },
                    { text: "`find()` gibt den Index des letzten Vorkommens eines Substrings zurück, `index()` gibt den Index des ersten Vorkommens zurück.", correct: false },
                    { text: "`find()` ist case-sensitive, `index()` ist case-insensitive.", correct: false },
                    { text: "Es gibt keinen Unterschied.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Zweck der `__getitem__` Methode in einer Python-Klasse?",
                  answers: [
                    { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse erstellt wird.", correct: false },
                    { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse gelöscht wird.", correct: false },
                    { text: "Sie ermöglicht den Zugriff auf Elemente des Objekts über den Indexoperator `[]`.", correct: true },
                    { text: "Sie definiert die Vererbungsbeziehung zwischen Klassen.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Unterschied zwischen einer statischen Methode und einer Klassenmethode in Python?",
                  answers: [
                    { text: "Eine statische Methode hat keinen Zugriff auf den `self`-Parameter, eine Klassenmethode hat Zugriff auf den `cls`-Parameter.", correct: true },
                    { text: "Eine Klassenmethode hat keinen Zugriff auf den `self`-Parameter, eine statische Methode hat Zugriff auf den `cls`-Parameter.", correct: false },
                    { text: "Es gibt keinen Unterschied.", correct: false },
                    { text: "Eine statische Methode kann nur innerhalb einer Klasse aufgerufen werden, eine Klassenmethode kann auch von außerhalb aufgerufen werden.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Zweck des `json` Moduls in Python?",
                  answers: [
                    { text: "Es wird verwendet, um JSON-Dateien zu lesen und zu schreiben.", correct: true },
                    { text: "Es wird verwendet, um CSV-Dateien zu lesen und zu schreiben.", correct: false },
                    { text: "Es wird verwendet, um XML-Dateien zu lesen und zu schreiben.", correct: false },
                    { text: "Es wird verwendet, um Datenbankverbindungen herzustellen.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Unterschied zwischen den Operatoren `&` und `|` in Python?",
                  answers: [
                    { text: "`&` ist der bitweise AND-Operator, `|` ist der bitweise OR-Operator.", correct: true },
                    { text: "`&` ist der logische AND-Operator, `|` ist der logische OR-Operator.", correct: false },
                    { text: "Es gibt keinen Unterschied.", correct: false },
                    { text: "`&` wird für Zahlen verwendet, `|` für Zeichenketten.", correct: false }
                  ]
                },
                {
                  question: "Was ist der Zweck der `__iter__` Methode in einer Python-Klasse?",
                  answers: [
                    { text: "Sie gibt einen Iterator zurück, der über die Elemente des Objekts iterieren kann.", correct: true },
                    { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse erstellt wird.", correct: false },
                    { text: "Sie wird aufgerufen, wenn ein Objekt der Klasse gelöscht wird.", correct: false },
                    { text: "Sie gibt eine lesbare String-Darstellung des Objekts zurück.", correct: false }
                  ]
                },
              ];
              