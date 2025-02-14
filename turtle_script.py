import turtle

def draw_flower():
    t = turtle.Turtle()
    s = turtle.Screen()
    s.bgcolor("black")  # Set background color
    t.pencolor("pink")  # Set pen color
    t.speed(0)  # Set turtle speed to fastest
    
    for i in range(150):
        t.circle(190 - i, 90)
        t.left(90)
        t.circle(190 - i, 90)
        t.left(18)

    t.hideturtle()  # Hide turtle after drawing
    turtle.done()

if __name__ == "__main__":
    draw_flower()
