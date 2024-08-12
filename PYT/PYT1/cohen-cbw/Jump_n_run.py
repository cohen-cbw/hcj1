# Wir holen uns die gesamte Pygame-Bibliothek, damit wir Spiele erstellen können.
import pygame

# Damit können wir das Programm sauber beenden, wenn wir es wollen.
from sys import exit

# Das startet Pygame und initialisiert alle seine Module, damit alles bereit ist.
pygame.init()

# Wir erstellen eine Uhr, um die Bildrate (FPS) unseres Spiels zu steuern.
clock = pygame.time.Clock()

# Hier öffnen wir ein Fenster, das 700 Pixel breit und 600 Pixel hoch ist. 
# Das ist unsere Spielfläche.
screen = pygame.display.set_mode((700, 600))

# Wir geben unserem Fenster den Titel "Block lord".
pygame.display.set_caption('Block lord')

# Wir füllen den gesamten Bildschirm mit einer hellblauen Farbe. Das ist unser Hintergrund.
screen.fill((235, 252, 252))

# Wir erstellen eine neue Oberfläche, die 700 Pixel breit und 200 Pixel hoch ist.
# Das wird unser Boden.
# Wir füllen diese Oberfläche mit einer grauen Farbe.
ground_surface = pygame.Surface((700, 200))
ground_surface.fill((121, 133, 133))


# Wir starten unser Spiel-Schleife. Hier passiert die ganze Action.
while True:
    # Wir prüfen, ob irgendwelche Ereignisse passiert sind 
    # (z.B. Mausklicks, Tastendrücke, Fenster schließen).
    for event in pygame.event.get():

        #  Wenn der Spieler das Fenster schließt, beenden wir Pygame und das Programm.
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    # Wir zeichnen unsere Boden-Oberfläche auf den Bildschirm.
    # Die Position (0, 400) bedeutet, dass der Boden 400 Pixel vom oberen Rand entfernt beginnt.
    screen.blit(ground_surface, (0,400))

    # Wir aktualisieren den Bildschirm, damit alle Änderungen sichtbar werden.
    pygame.display.update()

    #Wir begrenzen die Bildrate auf 60 FPS, damit das Spiel nicht zu schnell läuft.
    clock.tick(60)
