import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../models/user";

@Injectable()
export class AuthService {
  constructor(private router: Router, private httpClient: HttpClient) {}

  /**
   * @description
   * Login the user in the application
   */
  async login(user: User): Promise<boolean> {
    var userData = await this.getUser();

    if(userData.login == user.login &&
       userData.password == user.password)
    {
      localStorage.setItem("user", userData.name);
      return true;
    }
    return false;
  }

  /**
   * @description
   * get the user data
   */
  private getUser(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<User>("https://raw.githubusercontent.com/1bberto/car-rental/master/files/user.json").subscribe(
        response => {
          resolve(response);
        },
        error => {
          console.log("Error:", error);
          reject(error);
        }
      );
    });
  }

  /**
   * @description
   * Logout the user
   */
  logout(): void {
    localStorage.removeItem("user");
    this.router.navigate(["/login"]);
  }

  /**
   * @description
   * Check whether the user is looged or not
   */
  isLogged(): boolean {
    return localStorage.getItem("user") !== null;
  }

  /**
   * @description
   * Get the current logged user name
   */
  getLoggedUser(): string {
    return localStorage.getItem("user");
  }
}
