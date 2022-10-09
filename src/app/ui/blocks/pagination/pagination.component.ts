import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PaginationComponent {
  @Input() currentPage: number;
  @Input() totalPages: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  get pagesList(): number[] {    
    return [
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
    ].filter((pageNumber) => pageNumber >= 1 && pageNumber <= this.totalPages);
  }

  handleClickPrev(): void {
    if (this.currentPage === 1) { return; }
    this.currentPage--;
    this.emitPage();
  }

  handleClickNext(): void {
    if (this.currentPage === this.totalPages) { return; }
    this.currentPage++;
    this.emitPage();
  }

  handleClickFirst(): void {
    this.currentPage = 1;
    this.emitPage();
  }

  handleClickLast(): void {
    this.currentPage = this.totalPages;
    this.emitPage();
  }

  handleClickExact(page: number) {
    this.currentPage = page;
    this.emitPage();
  }

  trackPages(index: number): number {
    return index;
  }

  private emitPage(): void {
    this.changePage.emit(this.currentPage);
  }
}
