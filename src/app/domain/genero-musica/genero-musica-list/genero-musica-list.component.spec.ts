import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroMusicaListComponent } from './genero-musica-list.component';

describe('GeneroMusicaListComponent', () => {
  let component: GeneroMusicaListComponent;
  let fixture: ComponentFixture<GeneroMusicaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneroMusicaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneroMusicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
