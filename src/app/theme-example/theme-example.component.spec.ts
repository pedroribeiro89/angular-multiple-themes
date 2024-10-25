import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeExampleComponent } from './theme-example.component';

describe('ThemeExampleComponent', () => {
  let component: ThemeExampleComponent;
  let fixture: ComponentFixture<ThemeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ThemeExampleComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
