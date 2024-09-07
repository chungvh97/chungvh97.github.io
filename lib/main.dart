import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shopping/providers/cart_provider.dart';
import 'package:shopping/pages/CartPage.dart';
import 'package:shopping/pages/HomePage.dart';
import 'package:shopping/pages/ItemPage.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CartProvider(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Consumer<CartProvider>(
      builder: (context, cartProvider, child) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'Flutter Demo',
          theme: ThemeData(
            scaffoldBackgroundColor: Colors.white,
          ),
          routes: {
            '/': (context) => HomePage(),
            'cartPage': (context) => CartPage(),
            'itemPage': (context) => ItemPage(),
          },
        );
      },
    );
  }
}
