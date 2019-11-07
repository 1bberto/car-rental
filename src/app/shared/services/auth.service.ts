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
  login(userName: User): void {
    localStorage.setItem("user", userName);
    this.router.navigate(["/"]);
  }

  private get(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<User>("/assets/user.json").subscribe(
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
