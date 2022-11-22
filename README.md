Kata FooBarQix

Enoncé
Implémenter une fonction compute(String) qui respect les règles suivantes.

Step 1
Si le nombre (paramètre d'entré) est divisible par 3, afficher "Foo".
Si le nombre (paramètre d'entré) est divisible par 5, afficher "Bar".
Si le nombre (paramètre d'entré) est divisible par 7, afficher "Qix".
Pour chaque unité 3, 5, 7, ajouter “Foo”, “Bar”, “Qix” dans l'ordre.
    
Exemples
1  => 1
2  => 2
3  => FooFoo (divisible par 3, contient 3)
4  => 4
5  => BarBar (divisible par 5, contient 5)
6  => Foo (divisible par 3)
7  => QixQix (divisible par 7, contient 7)
8  => 8
9  => Foo
10 => Bar
13 => Foo
15 => FooBarBar (divisible par 3, divisible par 5, contient 5)
21 => FooQix
33 => FooFooFoo (divisible par 3, contient 2 fois 3)
51 => FooBar
53 => BarFoo

Step 2
Nouvelle règle à respecter. Remplacer tous les 0 par le caractère "*".

Exemples
101   => 1*1
303   => FooFoo*Foo
105   => FooBarQix*Bar
10101 => FooQix**