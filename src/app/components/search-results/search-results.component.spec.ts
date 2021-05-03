import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockEpisodesService } from '../../services/mock-episodes.service';
import { RickandMortyService } from '../../services/rickand-morty.service';

import { SearchResultsComponent } from './search-results.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;
  let mockService;
  let mockActivatedroute;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj(['name']);
    mockActivatedroute = { snapshot: { paramMap: { get: () => '1' }}};

    await TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: RickandMortyService, useClass: MockEpisodesService },
        { provider: ActivatedRoute, useValue: mockActivatedroute }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockService.name.and.returnValue(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
