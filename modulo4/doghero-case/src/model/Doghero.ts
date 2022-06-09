export interface DogHeroInputDTO {

  date_schedule: Date;
  latitude: string,
  longitude: string,
  start: Date;
  end: Date;
}

export type DogHerotype = {
  id: string,
  date_schedule: Date,
  price: number,
  duration: string,
  latitude: string,
  longitude: string,
  start: Date,
  end: Date
}
export class DogHero {
  constructor(

    private id: string,
    private status: string,
    private date_schedule: Date,
    private price: number,
    private latitude: string,
    private longitude: string,
    private duration: string,
    private start: Date,
    private end: Date
  ) { }

  getId() {
    return this.id;
  }

  getstatus() {
    return this.status;
  }

  getdate_schedule() {
    return this.date_schedule;
  }
  getprice() {
    return this.price;
  }
  getlatitude() {
    return this.latitude;
  }
  getlongitude() {
    return this.longitude;
  }
  getduration() {
    return this.duration;
  }
  getdate_start() {
    return this.start;
  }
  getdate_end() {
    return this.end;
  }

  static toShowModel(data: any): DogHero {
    return new DogHero(
      data.id,
      data.status,
      data.date_schedule,
      data.price,
      data.latitude,
      data.longitude,
      data.duration,
      data.start,
      data.end
    );
  }
}