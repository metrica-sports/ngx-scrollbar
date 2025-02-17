import { Directive } from '@angular/core';
import { SmoothScrollToOptions } from '@metrica-sports/ngx-scrollbar/smooth-scroll';
import { Observable } from 'rxjs';
import { ScrollViewport } from './scroll-viewport';
import { ScrollbarManager } from './utils/scrollbar-manager';
import { NgScrollbarState, ScrollbarPointerEventsMethod } from './ng-scrollbar.model';

@Directive()
export abstract class NgScrollbarBase {
  abstract manager: ScrollbarManager;

  abstract viewport: ScrollViewport;
  abstract state: NgScrollbarState;
  abstract trackClass: string;
  abstract thumbClass: string;
  abstract minThumbSize: number;
  abstract viewportPropagateMouseMove: boolean;
  abstract trackClickScrollDuration: number;
  abstract pointerEventsMethod: ScrollbarPointerEventsMethod;
  abstract pointerEventsDisabled: boolean;

  abstract updated: Observable<void>;
  abstract scrolled: Observable<Event>;

  abstract setHovered(hovered: ScrollbarHovered);

  abstract setDragging(hovered: ScrollbarDragging);

  abstract setClicked(scrollbarClicked: boolean);

  abstract scrollTo(options: SmoothScrollToOptions): Promise<void>;
}

export interface ScrollbarDragging {
  verticalDragging?: boolean;
  horizontalDragging?: boolean;
}

export interface ScrollbarHovered {
  verticalHovered?: boolean;
  horizontalHovered?: boolean;
}
