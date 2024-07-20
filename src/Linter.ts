//
class Diagnostic {
  constructor(
  ) {
    //
  }
  toJson() {
    return {}
  }
}

export class Linter {
  public get diagnostics(): Diagnostic[] {
    return [new Diagnostic()]
  }

  private constructor(
    private src: string,
  ) {}

  static fromSrc(src: string) {
    return new Linter(src)
  }
}
