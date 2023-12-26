import turtle

# Configurações iniciais
turtle.speed(2)
turtle.bgpic("forest_background.gif")  # Certifique-se de ter uma imagem de uma floresta chamada "forest_background.gif"

# Função para desenhar uma pessoa
def draw_person():
    turtle.penup()
    turtle.goto(-50, -150)
    turtle.pendown()
    turtle.color("blue")
    turtle.circle(50)  # Cabeça

    turtle.penup()
    turtle.goto(-50, -150)
    turtle.pendown()
    turtle.setheading(270)
    turtle.forward(100)  # Corpo

    turtle.penup()
    turtle.goto(-50, -50)
    turtle.pendown()
    turtle.setheading(180)
    turtle.forward(50)  # Braço esquerdo

    turtle.penup()
    turtle.goto(-50, -50)
    turtle.pendown()
    turtle.setheading(0)
    turtle.forward(50)  # Braço direito

    turtle.penup()
    turtle.goto(-50, -50)
    turtle.pendown()
    turtle.setheading(270)
    turtle.forward(70)  # Perna esquerda

    turtle.penup()
    turtle.goto(-50, -50)
    turtle.pendown()
    turtle.setheading(270)
    turtle.forward(70)  # Perna direita

# Função para desenhar uma família
def draw_family():
    draw_person()
    turtle.penup()
    turtle.goto(100, -150)
    turtle.pendown()
    turtle.color("red")
    turtle.circle(50)  # Cabeça

    turtle.penup()
    turtle.goto(100, -150)
    turtle.pendown()
    turtle.setheading(270)
    turtle.forward(100)  # Corpo

    turtle.penup()
    turtle.goto(100, -50)
    turtle.pendown()
    turtle.setheading(180)
    turtle.forward(50)  # Braço esquerdo

    turtle.penup()
    turtle.goto(100, -50)
    turtle.pendown()
    turtle.setheading(0)
    turtle.forward(50)  # Braço direito

    turtle.penup()
    turtle.goto(100, -50)
    turtle.pendown()
    turtle.setheading(270)
    turtle.forward(70)  # Perna esquerda

    turtle.penup()
    turtle.goto(100, -50)
    turtle.pendown()
    turtle.setheading(270)
    turtle.forward(70)  # Perna direita

# Desenhar uma família de quatro componentes e um cachorro
draw_family()
turtle.penup()
turtle.goto(-150, -150)
turtle.pendown()
turtle.color("brown")
turtle.circle(30)  # Cabeça do cachorro

turtle.hideturtle()
turtle.done()
