import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shopping/providers/cart_provider.dart';

class CartItemWidget extends StatelessWidget {
  final Map<String, dynamic> item;

  const CartItemWidget({Key? key, required this.item}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.all(8),
      child: ListTile(
        title: Text(item['title'] as String),
        subtitle: Text('Price: \$${item['price']} x ${item['quantity']}'),
        trailing: IconButton(
          icon: Icon(Icons.delete),
          onPressed: () {
            Provider.of<CartProvider>(context, listen: false)
                .removeItem(item['id'] as String);
          },
        ),
      ),
    );
  }
}