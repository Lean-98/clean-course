(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';
  class Person {
    // *Forma larga de definir las propiedades
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;
    // constructor(name: string, gender: Gender, birthdate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthdate = birthdate;
    // }

    // *Forma corta de definir las propiedades
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      public lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, lastAccess, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'example@hosting.com',
    'Admin',
    new Date(),
    'Lean',
    'M',
    new Date('1985-10-21'),
  );

  console.log({
    userSettings,
  });
})();
