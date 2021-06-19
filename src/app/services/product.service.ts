import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public result: any;
  constructor() {}

  getProduct(): any {
    return [
      {
        id: 1,
        name: 'Asus',
        Price: 40000,
        discount: '20%',
        image: 'assets/images/laptop1.JPG',
        desc: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        model: 'ASUS VivoBook 14 M409DA-EK147T AMD Quad Core Ryzen',
        details: [
          {
            ram: '8gb',
            memory: 'DDR4',
            hardDisk: '‎Flash Memory Solid State',
            card: 'MicroSD',
            Weight: '‎1 kg 600 g',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.'
          },
        ],
      },
      {
        id: 2,
        name: 'Dell',
        Price: 10000,
        discount: '50%',
        image: 'assets/images/laptop2.JPG',
        desc: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        model: 'Dell 33bbc AMD Quad Core Ryzen',
        details: [
          {
            ram: '6gb',
            memory: 'DDR4',
            hardDisk: '‎Flash Memory Solid State',
            card: 'MicroSD',
            Weight: '‎2kg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.'
          },
        ],
      },
      {
        id: 3,
        name: 'HP',
        Price: 60000,
        discount: '15%',
        image: 'assets/images/laptop3.JPG',
        desc: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        model: 'HP 15 Entry Level 15.6-inch (39.62 cms) HD Laptop',
        details: [
          {
            ram: '8gb',
            memory: 'DDR4',
            hardDisk: '‎Flash Memory Solid State',
            card: 'MicroSD',
            Weight: '‎1 kg 600 g',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.'
          },
        ],
      },
      {
        id: 4,
        name: 'Macbook',
        Price: 100000,
        discount: '9%',
        image: 'assets/images/laptop4.JPG',
        desc: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        model: '2020 Apple MacBook Pro Space Grey',
        details: [
          {
            ram: '20gb',
            memory: 'DDR4',
            hardDisk: '‎Flash Memory Solid State',
            card: 'MicroSD',
            Weight: '500g',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.'
          },
        ],
      },
      {
        id: 5,
        name: 'Asus',
        Price: 6000,
        discount: '20%',
        image: 'assets/images/tab1.JPG',
        desc: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        model: 'ASUS tablet',
        details: [
          {
            ram: '8gb',
            memory: 'DDR4',
            hardDisk: '‎Flash Memory Solid State',
            card: 'MicroSD',
            Weight: '‎1 kg 600 g',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.'
          },
        ],
      },
      {
        id: 6,
        name: 'Samsung',
        Price: 4000,
        discount: '20%',
        image: 'assets/images/tab2.JPG',
        desc: 'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        model: 'Samsung tab AMD Quad Core Ryzen',
        details: [
          {
            ram: '8gb',
            memory: 'DDR4',
            hardDisk: '‎Flash Memory Solid State',
            card: 'MicroSD',
            Weight: '‎1 kg 600 g',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.'
          },
        ],
      },
    ];
  }

  getProductDetails(id: string) {
    return (this.result = this.getProduct().find((o) => o.id == id));
  }
}
