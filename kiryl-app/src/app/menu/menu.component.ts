import {
  AfterContentChecked, AfterContentInit, Component, ContentChild, Injector, NgZone,
  OnInit
} from '@angular/core';
import { SuperMenuService } from './menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    {
      provide: SuperMenuService,
      useValue: 'hello world',
    }
  ],
})
export class MenuComponent implements OnInit, AfterContentInit {
  private list: any;
  private showList = false;
  private text: string;

  @ContentChild('sometag')
  tag: any;


  constructor(private zone: NgZone,  private menuService: SuperMenuService, private injector: Injector) {}

  ngAfterContentInit() {
    this.text = this.tag.nativeElement.textContent;
  }

  ngOnInit() {
    this.list = this.menuService;
  };

  moveZone() {
    this.showList = !this.showList;
  };
}
