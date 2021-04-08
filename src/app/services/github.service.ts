import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  BASE_URL: string = 'https://api.github.com/repos'
  constructor(
    private http: HttpClient
  ) { }

  public async getNumberRepoStars(repoName:string): Promise<number> {
    const stargazersList:any[] = await this.http.get<any>(`${this.BASE_URL}/keptn-contrib/${repoName}/stargazers`).toPromise();
    return stargazersList.length
  }
}
