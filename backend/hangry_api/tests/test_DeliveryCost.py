from api.controllers import Delivery
from django_mock_queries.query import MockSet, MockModel

def test_LotsOfItems():
  order = MockSet()
  order.add(MockModel(quantity=5))
  order.add(MockModel(quantity=5))
  order.add(MockModel(quantity=5))
  cost = Delivery.calculate(order,6)
  assert cost == 7.5


def test_LittleItems():
  order = MockSet()
  order.add(MockModel(quantity=2))
  order.add(MockModel(quantity=1))
  cost = Delivery.calculate(order,3)
  assert cost == 2.5

def test_MiddleOfTheRoadItems():
  order = MockSet()
  order.add(MockModel(quantity=2))
  order.add(MockModel(quantity=2))
  order.add(MockModel(quantity=2))
  cost = Delivery.calculate(order,4)
  assert cost == 5