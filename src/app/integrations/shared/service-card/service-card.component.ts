import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Integration } from 'src/app/interfaces/service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnChanges {

  @Input()
  service!: Integration;
  stars:number = 0;
  constructor(
    private gitHubService: GithubService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.service = changes.service.currentValue;   // fetch the current value
    this.gitHubService.getNumberRepoStars(this.service.name)
    .then(numStars => this.stars = numStars)
  }

}
