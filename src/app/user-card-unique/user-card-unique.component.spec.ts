import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardUniqueComponent } from './user-card-unique.component';

describe('UserCardUniqueComponent', () => {
  let component: UserCardUniqueComponent;
  let fixture: ComponentFixture<UserCardUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
