export class Character {
  public readonly name: string;
  public side: string;

  public constructor(name: string, side?: string) {
    this.name = name;
    this.side = side ? side : '';
  }

}
