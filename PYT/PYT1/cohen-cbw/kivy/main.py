import kivy
from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import TextInput
from kivy.uix.button import Button
from kivy.uix.spinner import Spinner
from kivy.uix.togglebutton import ToggleButton
from kivy.uix.checkbox import CheckBox
from kivy.uix.scrollview import ScrollView
from kivy.uix.image import Image
from kivy.uix.slider import Slider
from kivy.uix.switch import Switch
from kivy.core.window import Window

class MyApp(App):
    def build(self):
        background_image = Image(source='src/2b-nier-automata-uhdpaper.com-4K-4.3229.jpg')

        Window.size = (388, 684)
        Window.clearcolor = (0, 0, 0, 0)
        

        layout = BoxLayout()
        layout.add_widget(background_image)
        background_image.pos = (0, 0)

        

        return layout

if __name__ == "__main__":
    MyApp().run()