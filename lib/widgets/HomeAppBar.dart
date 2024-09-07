import 'package:flutter/material.dart';
import 'package:badges/badges.dart' as badges;
import 'package:provider/provider.dart';
import 'package:shopping/providers/cart_provider.dart';

class HomeAppBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<CartProvider>(builder: (context, cart, child) {
      return Container(
        color: Colors.white,
        padding: EdgeInsets.all(25),
        child: Row(
          children: [
            Icon(
              Icons.sort,
              size: 30,
              color: Color(0xFF4C53A5),
            ),
            Padding(
              padding: EdgeInsets.only(left: 20),
              child: Text(
                'Katuu Bakery & Milk',
                style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF4C53A5)),
              ),
            ),
            Spacer(),
            badges.Badge(
              badgeStyle: badges.BadgeStyle(
                padding: EdgeInsets.all(5),
              ),
              position: badges.BadgePosition.topEnd(top: -14, end: -10),
              badgeContent: Text(
                 '${cart.totalQuantity.toString()}',
                style: TextStyle(color: Colors.white),
              ),
              child: InkWell(
                onTap: () {
                  Navigator.pushNamed(context, "cartPage");
                },
                child: Icon(
                  Icons.shopping_bag_outlined,
                  color: Color(0xFF4C53A5),
                  size: 30,
                ),
              ),
              badgeAnimation: badges.BadgeAnimation.rotation(
                animationDuration: Duration(seconds: 1),
                colorChangeAnimationDuration: Duration(seconds: 1),
                loopAnimation: false,
                curve: Curves.fastOutSlowIn,
                colorChangeAnimationCurve: Curves.easeInCubic,
              ),
            )
          ],
        ),
      );
    });
  }
}
