import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class CarsService {

  private cars = [
    {
      id: 1,
      brand: 'Totoya',
      model: 'Corolla'
    },
    {
      id: 2,
      brand: 'Mazda',
      model: 'BT50'
    },
    {
      id: 3,
      brand: 'Chevrolet',
      model: 'Civic'
    }
  ]

  findAll(){
    return this.cars;
  }

  findOneById(id: number){
    const car = this.cars.find(value => value.id === id);
    if(!car)
      throw new NotFoundException(`Car with id '${id}' not found!`);
    else
      return car;
  }

}
