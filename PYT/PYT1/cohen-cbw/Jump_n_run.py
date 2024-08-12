
#Pygame wird importiert
import pygame
import pygame.gfxdraw

from sys import exit

pygame.init()
clock = pygame.time.Clock()
screen = pygame.display.set_mode((700, 600))
pygame.display.set_caption('Block lord')
screen.fill((235, 252, 252))

ground_surface = pygame.Surface((700, 200))
ground_surface.fill((121, 133, 133))

# 
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    screen.blit(ground_surface, (0,400))


    pygame.display.update()
    clock.tick(60)
