import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MockEpisodesService } from '../../services/mock-episodes.service';
import { RickandMortyService } from '../../services/rickand-morty.service';

import { SearchComponent } from './search.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;
  let location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent, SearchResultsComponent ],
      imports: [AppRoutingModule],
      providers: [ { provide: RickandMortyService, useClass: MockEpisodesService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search should navigate to /results?name=input', fakeAsync(() => {
    // component.searchForm.controls.search_string.value="test";
    // fixture.nativeElement.querySelector("#searchBox").innerHTML="test";
    // fixture.nativeElement.querySelector("#search-btn").click();
    // router.navigate(['']);
    // tick();
    // fixture.detectChanges();
    // expect(location.path()).toBe('/results?name=test');s
  }));
});
