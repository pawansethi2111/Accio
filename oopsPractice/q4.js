//create a shape class with a method area(). Then, create Rectangle and Circle classes that override
// the area() method to calculate the area accordingly

class Shape{
    area(x,y,z)
    {
        console.log(x*y*z)
    }
}

class Rectangle extends Shape{
    area(l,b)
    {
        console.log(l*b)
    }
}

class Circle extends Shape{
    area(r)
    {        
        console.log(3.14*r*r)
    }
}

const rect = new Rectangle();
rect.area(10,20)

const circ = new Circle();
circ.area(10)