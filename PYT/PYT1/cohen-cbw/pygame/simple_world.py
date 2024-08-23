import pygame
from sys import exit

# Initialisierung von Pygame
pygame.init()

clock = pygame.time.Clock()

# Bildschirmgröße
screen_width = 800
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))

background_image = pygame.image.load('./undead_pixel-art/PNG/big_051431ccb4.png')
screen.blit(background_image, (0, 0))

pygame.display.set_caption('Block lord')

while True:
    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            pygame.quit()
            exit()


    pygame.display.update()
    clock.tick(60)