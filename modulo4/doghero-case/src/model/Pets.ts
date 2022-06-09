export interface PetInputDTO {
  id: string;
  name: string;
  dogheroid: string;
}

export class Pets {
  constructor(
    private id: string,
    private name: string,
    private dogheroid: string
  ) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getdogheroid() {
    return this.dogheroid;
  }

  static toShowModel(data: any): Pets {
    return new Pets(
      data.id,
      data.name,
      data.dogheroid
    );
  }
}

