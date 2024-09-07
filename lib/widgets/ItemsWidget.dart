import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../model/data.dart';
import '../providers/cart_provider.dart';

class ItemsWidget extends StatelessWidget {
  const ItemsWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 0.63,
      ),
      physics: NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      itemCount: DUMMY_PRODUCTS.length,
      itemBuilder: (context, index) {
        final product = DUMMY_PRODUCTS[index];
        return Container(
          padding: EdgeInsets.only(left: 15, right: 15, top: 10),
          margin: EdgeInsets.symmetric(vertical: 8, horizontal: 10),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20)
          ),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    padding: EdgeInsets.all(5),
                    decoration: BoxDecoration(
                      color: Color(0xFF4C53A5),
                      borderRadius: BorderRadius.circular(20)
                    ),
                    child: Text(
                      '-50%',
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.white,
                        fontWeight: FontWeight.bold
                      ),
                    ),
                  ),
                  Icon(
                    product['favorite'] as bool? Icons.favorite : Icons.favorite_border,
                    color: Colors.red,
                  )
                ],
              ),
              InkWell(
                onTap: () {
                  Navigator.pushNamed(context, 'itemPage');
                },
                child: Container(
                  margin: EdgeInsets.all(10),
                  child: Image.asset(product['image'] as String, height: 120, width: 120),
                ),
              ),
              Container(
                padding: EdgeInsets.only(bottom: 8),
                alignment: Alignment.centerLeft,
                child: Text(
                  product['title'] as String,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF4C53A5)
                  )
                ),
              ),
              Container(
                padding: EdgeInsets.only(bottom: 8),
                alignment: Alignment.centerLeft,
                child: Text(
                  (product['description'] as String?) ?? 'No description',
                  style: TextStyle(
                    fontSize: 15,
                    color: Color(0xFF4C53A5)
                  )
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(vertical: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      '\$${product['Price']}',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF4C53A5)
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        final cart = Provider.of<CartProvider>(context, listen: false);
                        cart.addItem(
                          product['id'] as String,
                          product['Price'] as double, // Use 'as double' directly
                          product['title'] as String
                        );
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(content: Text('${product['title']} added to cart')),
                        );
                      },
                      child: Icon(
                        Icons.shopping_cart_checkout,
                        color: Color(0xFF4C53A5)
                      ),
                    )
                  ],
                ),
              )
            ],
          ),
        );
      },
    );
  }
}