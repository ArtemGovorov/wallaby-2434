import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'wallaby2434'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('wallaby2434');
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    
    fixture.detectChanges();

    await fixture.whenStable();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('wallaby2434 app is running!');
  });
});
