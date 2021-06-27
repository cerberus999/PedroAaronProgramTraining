import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repositories } from '../models/repositories';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-card-repos',
  templateUrl: './card-repos.component.html',
  styleUrls: ['./card-repos.component.css']
})
export class CardReposComponent implements OnInit {
  notFound = false;
  repos: Repositories[];
  owner: string = "";
  pagina: number = 1;

  constructor(private repoService: WebService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      if(params.has("owner")){
        this.repoService.getRepositories(params.get("owner"),this.pagina).subscribe(repos => this.repos = repos);
        this.owner = params.get("owner");
      }
    });
  }

  getRepos(owner: string, page: number){
    this.notFound = false;
    
    this.repoService.getRepositories(owner,page).subscribe(
      (repository: Repositories[]) => {
        this.repos = repository; 
        console.log(this.repos);
      }, (err: any) => {
        console.error(err);
        this.notFound = true;
      }
    );
  }

  nextPage(){
    this.pagina++;
    this.getRepos(this.owner,this.pagina);
  }
}
