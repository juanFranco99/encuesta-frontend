import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroMusicaEditComponent } from './genero-musica-edit.component';

describe('GeneroMusicaEditComponent', () => {
  let component: GeneroMusicaEditComponent;
  let fixture: ComponentFixture<GeneroMusicaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneroMusicaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroMusicaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
