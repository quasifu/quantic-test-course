from api.controllers import Subtotal
from django_mock_queries.query import MockSet, MockModel

def test_SimpleCost():
  order = MockSet()
  order.add(MockModel(quantity=5, item=MockModel(price=1.0)))
  order.add(MockModel(quantity=5, item=MockModel(price=1.0)))
  order.add(MockModel(quantity=5, item=MockModel(price=1.0)))
  cost = Subtotal.calculate(order)
  assert cost == 15


def test_ComplexCost():
  order = MockSet()
  order.add(MockModel(quantity=2, item=MockModel(price=3.5)))
  order.add(MockModel(quantity=1, item=MockModel(price=4.5)))
  cost = Subtotal.calculate(order)
  assert cost == 11.5