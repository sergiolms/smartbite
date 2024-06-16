# 🍏 SmartBite

SmartBite es una herramienta de IA que identifica platos de comida en fotos, proporcionando detalles sobre ingredientes, alérgenos, macronutrientes y calorías. Mejora tu salud y bienestar con una alimentación consciente y equilibrada. 🍽️🌿

<!-- TODO: añadir el artículo de Medium aquí una vez se publique -->

## 🧠 El proyecto

Nace como resultado de un proyecto de fin de curso de [AI Saturdays 🤖 ALICANTE][1], con la idea de realizar una herramienta basada en inteligencia artificial que reconociera un plato de comida en una fotografía e identificara sus ingredientes, alérgenos, macronutrientes y calorías (aproximación en porción/gramos) para ese plato.

### 👥 Impacto social
Podría contribuir a mejorar la salud y el bienestar de las personas. Al ayudarles a ser conscientes de lo que comen, puede ayudar a prevenir enfermedades relacionadas con la obesidad y la diabetes. Además, se busca promover una alimentación equilibrada y sostenible, informando sobre la importancia de una nutrición adecuada.


### 🧑🏻‍🍳 Autores

<div style="display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:center">
    <div style="text-align:center; margin: 0 16px; word-wrap: break-word; width: 150.0; height: 150.0">
        <a href="https://github.com/sergiolms">
            <img src="https://avatars.githubusercontent.com/u/86774052?v=4" width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt="Sergio L. Maciá Sempere"/>
            <br />
            <sub style="font-size:14px"><b>Sergio Maciá</b></sub>
        </a>
    </div>
    <div style="text-align:center; margin: 0 16px; word-wrap: break-word; width: 150.0; height: 150.0">
        <a href="https://github.com/Javier-Macia">
            <img src="https://avatars.githubusercontent.com/u/72144607?v=4" width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt="Javier Maciá Sempere"/>
            <br />
            <sub style="font-size:14px"><b>Javier Maciá</b></sub>
        </a>
    </div>
    <div style="text-align:center; margin: 0 16px; word-wrap: break-word; width: 150.0; height: 150.0">
        <a href="https://github.com/adl23-ua">
            <img src="https://avatars.githubusercontent.com/u/123936715?v=4" width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt="Antonio Díaz-Parreño Lajara"/>
            <br />
            <sub style="font-size:14px"><b>Antonio Díaz-Parreño</b></sub>
        </a>
    </div>
</div>

## 🌿 Cómo empezar

En la carpeta [`gogle-collab`](google-collab) puedes encontrar un par de Notebooks para entrenar y utilizar el modelo para hacer predicciones. En los cuadernos, encontrarás el código dividido en bloques y explicado paso a paso.

Si por el contrario prefieres ejecutarlo en tu máquina

### ⚙️ Requerimientos

Si ejecutas los cuadernos de Google Collab, no es necesario que hagas ninguna instalación en tu máquina. 
Tienes instrucciones sobre las dependencias del proyecto en el propio cuaderno.

Si decides descargarte el proyecto y ejecutarlo en tu máquina, necesitarás:
- Python, para ejecutar los scripts. 
    - Para el desarrollo fue utilizado Python v3.12.3. Puedes instalarlo [aquí][2]
- Tensorflow v2.16.1, para ejecutar el modelo.
- [Gradio][3], para generar una interfaz web desde donde cargar las imágenes.

## 🏋🏻‍♂️ Entrena el modelo

Si deseas entrenar o afinar el modelo utilizando la misma configuración del proyecto, en la carpeta [`scripts`](scripts) tienes los scripts de Python que han sido utilizados tanto para entrenar el modelo como para usarlo para hacer predicciones.

## ☝️🤓 Datasource utilizado

El dataset que se ha utilizado se llama Food101. Tienes más información en [`datasource/images`](datasource/images/README.md)

[1]:https://saturdays.ai/alicante/
[2]:https://www.python.org/downloads/release/python-3123/
[3]:https://github.com/gradio-app/gradio
