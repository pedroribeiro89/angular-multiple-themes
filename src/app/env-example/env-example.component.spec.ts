import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvExampleComponent } from './env-example.component';

describe('EnvExampleComponent', () => {
  let component: EnvExampleComponent;
  let fixture: ComponentFixture<EnvExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EnvExampleComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
