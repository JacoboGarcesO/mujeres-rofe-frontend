import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AppState } from '../../core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
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
        user?.rol === 'admin' ? this.approvedVisit(observer) : this.rejectedVisit(observer);
      });
    });
  }
  
  private approvedVisit(observer: Observer<boolean>): void {
    observer.next(true);
    observer.complete();
  }

  private rejectedVisit(observer: Observer<boolean>): void {
    this.route.navigate(['']);
    observer.next(false);
    observer.complete();
  }
}
