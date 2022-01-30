import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AppState } from '../core/state/app.state';


@Injectable({
  providedIn: 'root',
})
export class PrivateGuard implements CanActivate {
  constructor(
    private appState: AppState,
    private route: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable((observer: Observer<boolean>) => {
      this.appState.users.currentUser.$().subscribe((user) => {
        user ? this.approvedVisit(observer) : this.rejectedVisit(observer);
      });
    });
  }

  private approvedVisit(observer: Observer<boolean>): void {
    observer.next(true);
    observer.complete();
  }

  private rejectedVisit(observer: Observer<boolean>): void {
    this.route.navigate(['/auth/login']);
    observer.next(false);
    observer.complete();
  }
}
