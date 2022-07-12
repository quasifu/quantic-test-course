from api.controllers import Total
from django_mock_queries.query import MockSet, MockModel

def test_SimpleCost():
  order = MockSet()
  order.add(MockModel(quantity=5, item=MockModel(price=1.0)))
  order.add(MockModel(quantity=5, item=MockModel(price=1.0)))
  cost = Total.calculate(order,5)
  assert cost == 16.24


def test_ComplexCost():
  order = MockSet()
  order.add(MockModel(quantity=2, item=MockModel(price=3.5)))
  order.add(MockModel(quantity=1, item=MockModel(price=4.5)))
  cost = Total.calculate(order, 5)
  assert cost == 17.86