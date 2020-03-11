# Change Log
All notable changes to this project will be documented in this file.

## 2020-02-03
### Added
- Product list
- Buy button
- Cart
- Cart cleanup possibility

## 2020-02-05
### Added
- Module structure
- Possibility to add products to cart
- NgClass and Directive for coloring
- App title

### Changed
- Removed redundant FirstComponent
- Product structure
- Cart list structure
- Product model from interface to class

## 2020-02-07
### Added
- Fields with content, quantity and price to CartService
- Constant, Factory, Config services
- Click directive on cart item

## 2020-02-29
### Changed
- Fixed comments from code review
- Typization fixed
- Unit tests removed (will be added back when necessary)
- Cart bug fixed (two same products could be added separately)

## 2020-03-11
### Changed
- Fixed comments from code review
- Fixed bug with buying products
- Common module registered in Shared module

### Added
- Pipes for currency and product name
- Pipe for async method of ProductService
- Custom pipe sortBy (Insertion Sort)
- Items in product list sorted by default
- Items in cart could be sort using dropdown
