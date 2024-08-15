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
screen = pygame.display.set_mode((800, 600))

# Wir geben unserem Fenster den Titel "Block lord".
pygame.display.set_caption('Block lord')

# Wir füllen den gesamten Bildschirm mit einer hellblauen Farbe. Das ist unser Hintergrund.


# Wir erstellen eine neue Oberfläche, die 800 Pixel breit und 200 Pixel hoch ist.
# Das wird unser Boden.
ground_surface = pygame.Surface((800, 150))

# Wir füllen diese Oberfläche mit einer grauen Farbe.
ground_surface.fill((121, 133, 133))


# Es wird ein Spieler erstellt der mit der klasse pygame.Rect durch einen rechteckigen bereich repräsentiert wird
player = pygame.Rect((100, 420, 30, 30))


is_jumping = False  # Sprungstatus
jump_velocity = -10  # Anfangsgeschwindigkeit des Sprungs nach oben
gravity = 0.5  # Schwerkraft, zieht den Spieler nach unten

# Wir zeichnen unsere Boden-Oberfläche auf den Bildschirm.
# Die Position (0, 400) bedeutet, dass der Boden 400 Pixel vom oberen Rand entfernt beginnt.
screen.blit(ground_surface, (0,450))




# Wir starten unser Spiel-Schleife. Hier passiert die ganze Action.
while True:

    screen.fill((235, 252, 252))
    screen.blit(ground_surface, (0, 450))

    # der spieler wird mit draw auf das display gezeichnet
    pygame.draw.rect(screen, (136, 8, 8), player)

    # Wenn der Spieler a oder d drückt, bewegen wir ihn entsprechend.
    key = pygame.key.get_pressed()
    if key[pygame.K_d] == True:
        player.move_ip(5, 0)
    elif key[pygame.K_a] == True:
        player.move_ip(-5, 0)

    if key[pygame.K_SPACE] == True and not is_jumping:
        is_jumping = True
    
    # Sprung überprüfen
    if is_jumping:
        player.move_ip(0, jump_velocity)
        jump_velocity += gravity # Schwerkraft wirkt auf die Sprunggeschwindigkeit

        # Wenn der Spieler den Boden berührt, wird der Sprung beendet.
        if player.bottom > 450:
            player.bottom = 450
            is_jumping = False
            jump_velocity = -10

    

    # Wir prüfen, ob irgendwelche Ereignisse passiert sind 
    # (z.B. Mausklicks, Tastendrücke, Fenster schließen).
    for event in pygame.event.get():

        #  Wenn der Spieler das Fenster schließt, beenden wir Pygame und das Programm.
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()


    

    # Wir aktualisieren den Bildschirm, damit alle Änderungen sichtbar werden.
    pygame.display.update()

    #Wir begrenzen die Bildrate auf 60 FPS, damit das Spiel nicht zu schnell läuft.
    clock.tick(60)
