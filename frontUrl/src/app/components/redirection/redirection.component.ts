import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ShortenServiceService } from 'src/app/shorten-service.service';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent implements OnInit{
  constructor(private route:ActivatedRoute,private router:Router,private service:ShortenServiceService,private snack:SnackbarService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      const shortId=params.get('short')

      if(shortId){
        this.service.redirectCall(shortId).pipe(
          catchError((error) => {
            console.error('redirect failed:', error);
            this.snack.showError('Wrong URL')
            this.router.navigate([''])
            return throwError(() => error); 
        })).subscribe((res)=>{
          const orgUrl=res.original
          window.location.href = orgUrl;
        })
      }
    })
  }

}
