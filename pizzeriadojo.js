
//se define la clase sandwich
var sandwich = {
    pan:    ["largo oregano parmesano", "largo americano", "cuadrado normal club", "cuadrado integral club"],
    proteína:  ["carne asada", "meat balls", "ham", "chicken"],
    queso:   ["suizo lacey","americano","azul", "provolone"],
    salsas: ["salsa de rábano", "ketchup", "mayonesa", "mostaza", "mostaza miel"],
    vegetales: ["lechuga romana", "tomates reliquia", "cebolla", "aceitunas negras", "pepinillos"]
};

//se define la clase pizza
var pizza = {
    estilo: "personalizado",
    tamano_pie: "grande",
    grosor_pie:"grande",
    salsa: "tomate",
    topping_queso: ['mozarella', 'provolone', 'gorgonzola', 'parmesano', 'fontina', 'feta'],
    topping_vegano: ['aceitunas negras', 'champinones', 'pimientos', 'cebolla', 'rugula', 'pina', 'brocoli', 'maiz', 'jalapeno', 'tomate cherry'],
    topping_carne:  ['pepperoni', 'jamon', 'salchicha italiana', 'carne', 'pollo'],
    topping_especias: ['oregano', 'peperoncino', 'sal', 'pimienta']
    }

    //se contruye el objeto
    function PizzaOven_personalizada(tamanopie , grosorpie, salsa, topping_queso, topping_vegano, topping_carne, topping_especias) {
        var pizza = {};
        pizza.estilo = "personalizada";
        pizza.tamano_pie = tamanopie;
        pizza.grosor_pie = grosorpie;
        pizza.salsa = salsa;
        pizza.topping_queso = topping_queso;
        pizza.topping_vegano = topping_vegano;
        pizza.topping_carne = topping_carne;
        pizza.topping_especias = topping_especias;
        return pizza;
    }

        //se contruye el objeto pizza chicago
        function PizzaOven_estilo(estilo, tamano) {
            var pizza = {};

            pizza.estilo = estilo;
            pizza.tamano_pie = tamano;

            if (estilo == "chicago"){
                pizza.grosor_pie = "grande";
                pizza.salsa = "marinara";
                pizza.topping_queso = ["mozarella","provolone"];
                pizza.topping_vegano = ["champinones","aceitunas negras"];
                pizza.topping_carne = ["pepperoni","jamon"];
                pizza.topping_especias = ["oregano","sal"];    
            }
            if (estilo == "tradicional"){
                pizza.grosor_pie = "normal";
                pizza.salsa = "marinara";
                pizza.topping_queso = ["mozarella"];
                pizza.topping_especias = ["oregano","sal"];    
            }
            if (estilo == "hawaiana"){
                pizza.grosor_pie = "grande";
                pizza.salsa = "marinara";
                pizza.topping_queso = ["mozarella","provolone"];
                pizza.topping_vegano = ["pina"];
                pizza.topping_carne = ["jamon"];
                pizza.topping_especias = ["oregano","sal"];    
            }
            return pizza;
        }
    
        
    //instanciando el objeto
    var pizza_personalizada = PizzaOven_personalizada("grande","normal", "tomate", ["mozarella", "provolone"], ["aceitunas negras", "champinoes", "pimientos", "cebolla"], ["pepperonni", "jamon", "salchicha italiana"],  ["oregano", "sal", "pimienta"]);
    var pizza_chicago = PizzaOven_estilo("chicago","grande");
    var pizza_tradicional = PizzaOven_estilo("tradicional","grande");
    var pizza_hawaiana = PizzaOven_estilo("hawaiana","pequena");
    
    console.log(pizza_personalizada);
    console.log(pizza_chicago);
    console.log(pizza_tradicional);
    console.log(pizza_hawaiana);
