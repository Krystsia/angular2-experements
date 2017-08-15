import {
  AfterContentInit, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef,
  Input,
  OnChanges, OnInit, Type,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { InnerComponent } from '../inner/inner.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  entryComponents: [
    InnerComponent,
  ]
})
export class ModalComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() data: string;
  @ViewChild('innerContainer', { read: ViewContainerRef }) viewContainer;
  private modalData: string;

  constructor(private elementRef: ElementRef, private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.modalData = this.data;
  }

  ngAfterContentInit() {
    const body = document.querySelector('body');
    body.appendChild(this.elementRef.nativeElement);
  }

  createComponent(type) {
    const factory = this.resolver.resolveComponentFactory(InnerComponent);
    this.viewContainer.clear();
    const componentRef = this.viewContainer.createComponent(factory);
    componentRef.instance.type = type;
  }
}
