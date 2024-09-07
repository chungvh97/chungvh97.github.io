import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shopping/providers/cart_provider.dart';
import 'package:shopping/widgets/CartAppBar.dart';
import 'package:shopping/widgets/CartBottomNavBar.dart';
import 'package:shopping/widgets/CartItemSamples.dart';
import 'package:shopping/widgets/CartItemWidget.dart';

class CartPage extends StatelessWidget {
  const CartPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          CartAppBar(),
          Expanded(
            child: Consumer<CartProvider>(
              builder: (context, cart, child) {
                return ListView.builder(
                  itemCount: cart.items.length,
                  itemBuilder: (context, index) {
                    final String productId = cart.items.keys.elementAt(index);
                    final cartItem = cart.items[productId]!;
                    return CartItemSamples(
                      item: {
                        'id': productId,
                        'title': cartItem.title,
                        'price': cartItem.price,
                        'quantity': cartItem.quantity,
                      },
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
      bottomNavigationBar: CartBottomNavBar(),
    );
  }
}