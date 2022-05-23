import { Component, ChangeDetectionStrategy, ElementRef, HostListener, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mr-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  @Input() totalUsers!: number;
  @Output() changePagePaginated: EventEmitter<number> = new EventEmitter();
  pagination!: HTMLElement;
  totalPages!: number;
  page!: number;

  constructor(private element: ElementRef) {}

  ngOnChanges(): void {
    this.pagination =
      this.element.nativeElement.querySelector('.pagination ul');
    this.totalPages = this.totalUsers;
    this.page = 1;

    this.pagination.innerHTML = this.createPagination(
      this.totalPages,
      this.page,
      true,
    );
  }

  @HostListener('click', ['$event'])
  validatePagination(event: any) {
    const button = event.path.find(
      (element: HTMLElement) => element.tagName === 'LI',
    )?.id;

    if (button === 'prev') {
      this.createPagination(this.totalPages, this.page - 1);
    }
    if (button === 'first') {
      this.createPagination(this.totalPages, 1, true);
    }

    if (
      button !== 'prev' &&
      button !== 'first' &&
      button !== 'last' &&
      button !== 'next'
    ) {
      const page = parseInt(
        event.path.find((element: HTMLElement) => element.tagName === 'LI')?.id,
      );
      this.createPagination(this.totalPages, page);
    }

    if (button === 'last') {
      this.createPagination(this.totalPages, this.totalPages);
    }
    if (button === 'next') {
      this.createPagination(this.totalPages, this.page + 1);
    }
  }

  createPagination(totalPages: number, page: number, isPageOne?: boolean) {
    if(isPageOne) {
      this.changePagePaginated.emit(0);
    } else {
      this.changePagePaginated.emit((page-1)*10);
    }
    this.page = page;

    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
      liTag += '<li class="btn prev" id="prev"><span><i class="fas fa-angle-left"></i> Prev</span></li>';
    }

    if (page > 2) {
      liTag += '<li class="first numb" id="first"><span>1</span></li>';
      if (page > 3) {
        liTag += '<li class="dots"><span>...</span></li>';
      }
    }

    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }
    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength == 0) {
        plength = plength + 1;
      }
      if (page == plength) {
        active = 'active';
      } else {
        active = '';
      }
      liTag += `<li class="numb ${active}" id="${plength}"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        liTag += '<li class="dots"><span>...</span></li>';
      }
      liTag += `<li class="last numb" id="last"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
      liTag += '<li class="btn next" id="next"><span>Next <i class="fas fa-angle-right"></i></span></li>';
    }

    this.pagination.innerHTML = liTag;
    return liTag;
  }
}
