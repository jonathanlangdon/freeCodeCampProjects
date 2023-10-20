class Rectangle:
    def __init__(self, width, height):
        self.set_width(width)
        self.set_height(height)

    def __str__(self):
        return f"Rectangle(width={self.width}, height={self.height})"

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return 2 * self.width + 2 * self.height

    def get_diagonal(self):
        return (self.width**2 + self.height**2) ** 0.5

    def get_picture(self):
        if self.width > 50 or self.height > 50:
            return "Too big for picture."
        picture_string = ""
        row = ""
        for i in range(self.width):
            row += "*"
        for i in range(self.height):
            picture_string += row + "\n"
        return picture_string

    def get_amount_inside(self, shape):
        num_rows_possible = self.width // shape.width
        num_col_possible = self.height // shape.height
        return num_col_possible * num_rows_possible


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

    def __str__(self):
        return f"Square(side={self.width})"

    def set_side(self, side):
        self.width = side
        self.height = side

    def set_width(self, side):
        self.set_side(side)

    def set_height(self, side):
        self.set_side(side)
