export class FishSpecies {
  public name: string;
  public water: string;
  public maxSize: number;
  public aggression: number;
  public care: string;

  constructor(name: string, water: string, size: number, agg: number, care: string) {
    this.name = name;
    this.water = water;
    this.maxSize = size;
    this.aggression = agg;
    this.care = care;
  }
}
