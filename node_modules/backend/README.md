#Model danych

##Produkty
Elementy zwracane i zapisywane do serwera mają następujące pola:

{
    "id": 1,
    "name": "Protox",
    "type": "proteinowa",
    "img": "images/kallos-protox.jpeg",
    "ingredients": ["A", "B", "C"]
}

##Opisy endpointów
/products - GET - pobiera wszystkie produkty
/products/:productId - GET - pobiera product o id :productId
/products?type=emolientowa - filtruje po typie