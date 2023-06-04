#by anurag
import pyautogui as pg
import time
time.sleep(8)
for i in range(500):
    pg.write("nothing")
    pg.write("is important")
    pg.write("but actually yes")
    pg.press('enter')
